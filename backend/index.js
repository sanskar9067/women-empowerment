import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connectDB } from './db/db.js';
import multer from 'multer';
import userModel from './models/userModel.js';
import JWT from 'jsonwebtoken';
import womenModel from './models/womenModel.js';

const app = express();
const PORT = 3001;

app.use(morgan(`dev`));
app.use(express.json());
app.use(cors());
app.use(express.static('uploads'));

connectDB();

app.get("/", (req, res) => {
    res.send("Hello");
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
})

const upload = multer({ storage });

app.post("/postuser", upload.single('file'), async (req, res) => {
    try {
        const { name, email, password, isOrganization, organisation } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            res.status(500).send({
                success: false,
                message: "User already existed"
            })
        }
        else {
            const location = `${req.file.filename}`;
            const uploadUser = await userModel({ name, email, password, isOrganization, organisation, location }).save();
            console.log(uploadUser);
            if (uploadUser) {
                res.status(200).send({
                    success: true,
                    message: "User Registered"
                })
            }
        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({
            success: false,
            message: "Something went wrong"
        })
    }

})

app.post("/userlogin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const loggedUser = await userModel.findOne({ email });

        if (loggedUser) {
            console.log(loggedUser);
            if (password === loggedUser.password) {
                const token = JWT.sign({ _id: loggedUser._id }, 'HSKAMNVLNSLNLKCNSL', { expiresIn: '7d' });
                res.status(200).send({
                    success: true,
                    message: "Login Successfull",
                    user: loggedUser,
                    token
                })
            }
            else {
                res.status(500).send({
                    success: false,
                    message: "Wrong Password;"
                })
            }
        }
        else {
            res.status(400).send({
                success: false,
                message: "User Not Found"
            })
        }
    }
    catch (err) {
        res.status(400).send({
            success: false,
            message: "Something went wrong"
        })
    }
})

app.post("/postwomenemployees", upload.single('file'), async (req, res) => {
    try {
        const { name, address, skills, phoneno, userid, idcardno, payment } = req.body;
        if (!name || !address || !skills || !phoneno || !idcardno || !payment) {
            res.status(400).send({
                success: false,
                message: "Fill all the details"
            })
        }
        else {
            const employeelocation = `${req.file.filename}`;
            console.log(employeelocation);
            const employeeData = await womenModel({ name, address, skills, phoneno, userid, idcardno, payment, employeelocation }).save();
            if (employeeData) {
                res.status(200).send({
                    success: true,
                    message: "Candidate posted for hiring"
                })
            }
        }
    }
    catch (err) {
        console.log(err);
    }
})

app.get("/hiring", (req, res) => {
    womenModel.find()
        .then(employees => res.json(employees))
        .catch(err => console.log(err));
})

app.get("/details/:id", async (req, res) => {
    const { id } = req.params;
    const detail = await womenModel.findOne({ _id: id });
    if (detail) {
        res.json(detail);
    }
})

app.post("/deleteemployee", async (req, res) => {
    try {
        const { id } = req.body;
        const del = await womenModel.deleteOne({ _id: id });
        if (del) {
            res.status(200).send({
                success: true,
                message: "Candidate Hired!"
            })
        }
        else {
            res.status(200).send({
                success: false,
                message: "Candidate not hired!"
            })
        }
    }
    catch (err) {
        console.log(err);
    }
})

app.post("/updatepassword", async (req, res) => {
    try {
        const { email, newpassword } = req.body;
        const exist = await userModel.findOne({ email });
        if (exist) {
            const changepass = await userModel.updateOne({ email: email }, { $set: { password: newpassword } }, { new: false });
            if (changepass) {
                res.status(200).send({
                    success: true,
                    message: "Password Updated"
                })
            }
            else {
                res.status(400).send({
                    success: false,
                    message: "Password not updated"
                })
            }
        }
        else {
            res.status(400).send({
                success: false,
                message: "User does not exist"
            })
        }
    }
    catch (err) {
        console.log(err);
    }
})

app.get("/getyourjob", (req, res) => {
    try {
        const { userid } = req.query;
        womenModel.find({ userid: userid })
            .then(job => res.json(job))
            .catch(err => console.log(err));
    }
    catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})