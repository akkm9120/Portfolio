const express = require('express');
const router = express.Router();

const { getAllLecturers,handleRequest } = require('../service-layer/lecturer'); 

router.get('/', async (req, res) => {
    try {
        const lecturers = await getAllLecturers();
        console.log("Lecturers retrieved:", lecturers);
        res.status(200).json({ lecturers });
        
    } catch (error) {
        console.error("Error in controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/create", async (req, res) => {
    try {
        let {full_name, gender, email, phone_number, department, specialization, years_of_experience } = req.body;
     await handleRequest(full_name, gender, email, phone_number, department, specialization, years_of_experience);
        console.log("Lecturers added:");
        res.status(200);
    } catch (error) {
        console.error("Error in controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = router;
