import mongoose from 'mongoose';


const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
     
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // otp: { type: Number, default: "" },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  
} , {timestamps: true});

 const User = mongoose.model('user', signupSchema);
 export default User;