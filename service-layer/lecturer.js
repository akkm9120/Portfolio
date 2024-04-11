const { retrieveLecturers,addLecturer } = require("../data-access-layer/lecturer");

const getAllLecturers = async () => {
    try {
        const lecturers = await retrieveLecturers();
        return lecturers;
    } catch (error) {
        console.error("Error in service layer while retrieving lecturers:", error);
        throw error; // Re-throw the error to handle it in the controller layer
    }
};

const handleRequest = async (full_name, gender, email, phone_number, department, specialization, years_of_experience) => {
    try {
     await addLecturer(full_name, gender, email, phone_number, department, specialization, years_of_experience);
   
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllLecturers,handleRequest };
