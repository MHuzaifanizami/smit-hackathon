import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import './Db/dbConnect.js'
import "./helper/sendMail.js";
import * as cookie from 'cookie';
import User from "./Models/signup.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const app = express();
const PORT = 3000;
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World');
});


///////////////// Register user to the app /////////////   
app.post(`/api/v1/signup`, async (req, res) => {


    if (!req.body.name || !req.body.email || !req.body.password) {
       return  res.send({ message: "Missing some parameters" })
    }

    const user = await User.findOne({ email: req.body.email })

    if (user) {
        res.status(400).send({ message: "user is already exist" })
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    // //generate otp for verification
    // let otp = "";
    // for (let i = 0; i < 4; i++) {
    //   otp += Math.floor(Math.random() * 10); // Generates each digit
    // }


    const result = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        // otp: otp
    })
    console.log("user data", result);

    // otpMail(req.body.email, otp)

    res.status(200).send({ data: result, message: "user added successfully" })
})


///////////////////// OTP CODE VERIFY /////////////////////////

// const otpVerify = async (req, res) => {

//     const { email, otp } = req.body;
//     if (!email || !otp) {
//         res.status(400).send({ message: "Missing some parameters" })

//     }
//     const user = await user.findOne({ email: email })
//     if (!user) {
//         res.status(400).send({ message: "user not found" })
//         return;

//     }

//     if (user.otp === otp) {
//         await user.updateOne({ isVerified: true })
//         res.status(200).send({ message: "OTP verified successfully" })
//         return
//     }
// }


//////////////// Login user to the app ///////////////////////
app.post('/api/v1/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send({ message: "Missing some parameters" })
    }
    const user = await User.findOne({ email: email })
    if (!user) {
        alert("user not found")
        res.status(400).send({ message: "user not found" })
        return;
    }

    const isPasswordMatch = bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        alert("password is incorrect")
        res.status(400).send({ message: "password is incorrect" })
        return;
    }

    const token = jwt.sign({
        id: user._id
    },
        process.env.SECRET_KEY,
        { expiresIn: "1d" })
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
    })


    return res.status(200).send({ message: "login successfully" })
})


///////////////////////// logout user from app ////////////////////

app.get('/api/v1/logout', async (req, res) => {
    res.clearCookie("token")
    res.status(200).send({ message: "logout successfully" })
})

///////////////////////


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


