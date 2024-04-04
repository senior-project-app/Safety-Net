const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

// for now we are going to support one range of dates for each supervised
supervisedSchema = new Schema({
    name: { type: String, unique: false, required: true },
    schedule: {
        start: Date,
        end: Date,
    }
});

class Supervised {
    Model = model("Supervised", supervisedSchema);

    // create a new supervisor (a collection within mongodb)
    static async create(name, email, password) {
        return await this.Model.create({
            name: name,
            email: email,
            password: password,
            inviteCode: this.createUniqueInviteCode(),
            supervised: []
        });
    }
}

module.exports = supervisedSchema;