import mongooose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerId:{type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    photo:{type:String, required: true,},
    firstName: {type:String},
    lastName: { type: String},
})