const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisedSchema = require("./supervised.js");

const supervisorSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: String,
    inviteCode: { type: String, unique: true, required: true },
    supervised: [supervisedSchema]
});

class Supervisor {
    static Collection = mongoose.model('Supervisor', supervisorSchema, 'supervisors');
    static uri = "mongodb+srv://dev:dev@cluster0.vrgbx2s.mongodb.net/users";
    static connection = this.connect(); // connect to the database so that queries can be made

    // create a new supervisor (a collection within mongodb)
    static async create(name, email, password) {
        return await this.Collection.create({
            name: name,
            email: email,
            password: password,
            inviteCode: this.createUniqueInviteCode(),
            supervised: []
        });
    }

    // unique invite codes are limited to 36^4 possibilities (1.7 million possibilities)
    static createUniqueInviteCode() {
        return Math.random().toString(36).substring(2, 6);
    }  

    // connect to the database
    static async connect() { 
        await mongoose.connect(this.uri); 
        mongoose.connection.on('connected', () => {
            console.log('Mongoose connection open to MongoDB Atlas.');
        });
        
        mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error: ' + err);
        });
        
        mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected.');
        });
    }
}

// const Supervisor = mongoose.model('Supervisor', supervisorSchema, 'supervisors');
module.exports = Supervisor;
