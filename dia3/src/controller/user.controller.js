const {pool} = require('../database');

const getAlumno = async (request, response) => {
    try {
        let sql;
        const params = [];
        if(request.query.student_id == null)
            sql = "SELECT * FROM students";
        else {
            
            sql = "SELECT * FROM students WHERE student_id = ?";
            params.push(request.query.student_id); 
        }
        let [result] = await pool.query(sql, params); 
        let respuesta = { error: false, codigo: 200, data: result };

        response.send(respuesta);
    }
    catch (err){
        console.log(err);
    }
}

const postAlumno = async (request, response) => {
    try {
        let sql = "INSERT INTO students (first_name, last_name, group_id, año_ingreso) " +
        "VALUES ('" + request.body.first_name + "', '" +
                      request.body.last_name + "', '" +
                      request.body.group_id + "', '" +
                      request.body.año_ingreso + "')";
        
        let [result] = await pool.query(sql);
        let respuesta = { error: false, codigo: 200, mesaje: "Alumno agregado correctamente" };
        response.send(respuesta);
        }
        catch (err){
            console.log(err);
    }
}

const putAlumno = async (request, response) => {
    try {
        let params = [request.body.first_name, 
            request.body.last_name, 
            request.body.group_id, 
            request.body.año_ingreso,
            request.body.student_id];

        let sql = "UPDATE students SET first_name = COALESCE(?, first_name) , " + 
                "last_name = COALESCE(?, last_name) , " + 
                "group_id = COALESCE(?, group_id) , " +
                "año_ingreso = COALESCE(?, año_ingreso)  WHERE student_id = ?";

        let [result] = await pool.query(sql, params); 
        let respuesta = { error: false, codigo: 200, mesaje: "Alumno actualizado correctamente", data: result };

        response.send(respuesta);
    }
    catch (err){
        console.log(err);
    }
}

const deleteAlumno = async (request, response) => {
    try {
        let sql = "DELETE FROM students WHERE student_id = ?";
        let [result] = await pool.query(sql, [request.body.student_id]); 
        let respuesta = { error: false, codigo: 200, mesaje: "Alumno actualizado correctamente", data: result };

        response.send(respuesta);
    }
    catch (err){
        console.log(err);
    }
}


const getMedia = async (request, response) => {
    try {
        const params = [];
        sql = "SELECT AVG(m.mark) AS average_mark FROM marks m WHERE m.student_id = ?";
        params.push(request.query.student_id);

        let [result] = await pool.query(sql, params); 
        let respuesta = { error: false, codigo: 200, data: result };

        response.send(respuesta);
    }
    catch (err){
        console.log(err);
    }
}

const getAsigAlum = async (request, response) => {
    try {
        let sql;
        const params = [];
        if(request.query.student_id == null)
            sql = "SELECT s.first_name AS Nombre, s.last_name AS Apellido, sub.title AS Asignatura FROM students s JOIN marks m ON s.student_id = m.student_id JOIN subjects sub ON m.subject_id = sub.subject_id";
        else {
            
            sql = "SELECT sub.title AS Asignatura FROM students s JOIN marks m ON s.student_id = m.student_id JOIN subjects sub ON m.subject_id = sub.subject_id WHERE s.student_id = ?";
            params.push(request.query.student_id); 
        }
        let [result] = await pool.query(sql, params); 
        let respuesta = { error: false, codigo: 200, data: result };

        response.send(respuesta);
    }
    catch (err){
        console.log(err);
    }
}

const getAsigProf = async (request, response) => {
    try {
        let sql;
        const params = [];
        if(request.query.teacher_id == null)
            sql = "SELECT t.first_name AS Nombre, t.last_name AS Apellido, sub.title AS Asignatura FROM teachers t JOIN subject_teacher st ON t.teacher_id = st.teacher_id JOIN subjects sub ON st.subject_id = sub.subject_id";
        else {
            
            sql = "SELECT sub.title AS Asignatura FROM teachers t JOIN subject_teacher st ON t.teacher_id = st.teacher_id JOIN subjects sub ON st.subject_id = sub.subject_id WHERE t.teacher_id = ?";
            params.push(request.query.teacher_id); 
        }
        let [result] = await pool.query(sql, params); 
        let respuesta = { error: false, codigo: 200, data: result };

        response.send(respuesta);
    }
    catch (err){
        console.log(err);
    }
}



module.exports = {getAlumno, postAlumno, putAlumno, deleteAlumno, getMedia, getAsigAlum, getAsigProf}; 