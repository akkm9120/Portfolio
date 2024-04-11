const getConnection = require('./connection');

const retrieveLecturers = async () => {
    try {
        const connection = await getConnection();
        console.log("Fetching lecturers...");
        const [lecturerRows] = await connection.execute('SELECT * FROM lecturer');
        console.log("Lecturers fetched:", lecturerRows);
        return lecturerRows;

    } catch (error) {
        console.error("Error retrieving lecturers:", error);
        throw error;
    }
};

const addLecturer = async (full_name, gender, email, phone_number, department, specialization, years_of_experience) => { 
    const connection = await getConnection();
    try {
        const query = `INSERT INTO lecturer (full_name, gender, email, phone_number, department, specialization, years_of_experience)
                       VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const [response] = await connection.execute(query, [full_name, gender, email, phone_number, department, specialization, years_of_experience]);
        console.log(response, "Query executed successfully");
        return response;
    } catch (error) {
        console.error("Error adding lecturer:", error);
        throw error; // Re-throw the error to handle it in the service layer
    }
};

const updateLecturer = 

module.exports = { retrieveLecturers, addLecturer };
