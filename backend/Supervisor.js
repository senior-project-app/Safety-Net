const Supervised = require("./Supervised.js");
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose"), {Schema, connection} = require("mongoose");
const SALT_FACTOR = 10;

const supervisorSchema = new Schema({
    name: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    inviteCode: { type: String, unique: true, required: true },
    supervised: [Supervised]
});

// hash the password before saving it to the database
supervisorSchema.pre('save', function(done) {
    let supervisor = this;
    // only hash the password if it has been modified (or is new)
    if (!supervisor.isModified("password")) return done();
    
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) return done(err);
        
        bcrypt.hash(supervisor.password, salt, (err, hash) => {
            if (err) return done(err);
            
            supervisor.password = hash;
            done();
        });
    });
});

// compare the password entered by the user with the hashed password stored in the database
supervisorSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

class Supervisor {
    static Model = mongoose.model('Supervisor', supervisorSchema, 'supervisors');
    static uri = "mongodb+srv://dev:dev@cluster0.vrgbx2s.mongodb.net/users";
    static connection = this.connect(); // connect to the database so that queries can be made

    // create a new supervisor (a collection within mongodb)
    static async register(name, email, password) {
        return await this.Model.create({
            name: name,
            email: email,
            password: password,
            inviteCode: this.createUniqueInviteCode(),
            supervised: []
        });
    }

    static async login(email, password) {
        return this.Model.findOne({email: email});
    }
    
    // find a supervisor by their email
    static async findByEmail(email) {
        return this.Model.findOne({email: email});
    }

    // unique invite codes are limited to 36^4 possibilities (1.7 million possibilities)
    static createUniqueInviteCode() {
        return Math.random().toString(36).substring(2, 6);
    }  

    // find a supervisor by their invite code
    static async findByInviteCode(inviteCode) {
        return this.Model.findOne({inviteCode: inviteCode});
    }

    // add a supervised to a supervisor
    static async addSupervised(supervisor, supervised) {
        return this.Model.updateOne({_id: supervisor._id}, {$push: {supervised: supervised}});
    }

    // connect to the database
    static async connect() {
        await mongoose.connect(this.uri);
        connection.on('connected', () => {
            console.log('Mongoose connection open to MongoDB Atlas.');
        });
        
        connection.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
        });
        
        connection.on('disconnected', () => {
        console.log('Mongoose disconnected.');
        });
    }
}

module.exports = Supervisor;
