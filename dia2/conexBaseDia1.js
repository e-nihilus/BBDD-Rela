const mysql = require('mysql2/promise');
const { hostname } = require('os');


async function main()
{
  let connection;
  try
  {
    connection = await mysql.createConnection(
    {
          host         : "localhost",
          user         : "root",
          password     : "criptoria",
          database     : "dia1"
    });
    console.log("Conexion correcta")

    // //---------------------nota media asig1-----------------------
    // let avgMark1 = "SELECT AVG(m.mark) AS average_mark FROM marks m WHERE m.subject_id = 1;"
    // let [avgMark1RE] = await connection.execute(avgMark1);
    // console.log(avgMark1RE[0].average_mark);

    // //---------------------total alumnos-----------------------
    // let totalAlums = "SELECT COUNT(*) FROM students";
    // let [totalAlumsRe] = await connection.query(totalAlums);
    // console.log("Total de alumnos: ", totalAlumsRe[0]["COUNT(*)"]);

    // //---------------------campos de grupos-----------------------
    // let campGrup = "SELECT * FROM grupos";
    // let [campGrupRe] = await connection.query(campGrup);
    // console.log(campGrupRe);

    // //---------------------borrar notas >5-----------------------
    // let deletNot = "DELETE FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) - 1;";
    // let [deletNotRe] = await connection.query(deletNot);
    // console.log("Notas borradas: ", deletNotRe.affectedRows);

    // //---------------------alumnos de este año-----------------------
    // let alumsYear = "SELECT * FROM students WHERE YEAR(año_ingreso) = YEAR(CURDATE());";
    // let [alumsYearRe] = await connection.query(alumsYear);
    // console.log(alumsYearRe);

    // //---------------------profesor-asignatura-----------------------
    // let profAsig = "SELECT COUNT(teacher_id) AS num_teacher FROM subject_teacher GROUP BY subject_id;"
    // let [profAsigRe] = await connection.query(profAsig);
    // console.log(profAsigRe);

    // //---------------------id y nota de alumnos tengan id entre 1 y 20, o nota mayor de 8 y fecha año pasado.-----------------------
    // let idNotaAlum = "SELECT s.student_id, m.mark FROM students s JOIN marks m ON s.student_id = m.student_id WHERE (s.student_id BETWEEN 1 AND 20) OR (m.mark > 8 AND YEAR(m.date) = YEAR(CURDATE()) - 1);"
    // let [idNotaAlumRe] = await connection.query(idNotaAlum);
    // console.log(idNotaAlumRe);

    // //---------------------nota media por asignatura-----------------------
    // let avgAsig = "SELECT sub.title, AVG(m.mark) AS average_mark FROM marks m JOIN subjects sub ON m.subject_id = sub.subject_id WHERE YEAR(date) = YEAR(CURDATE()) GROUP BY m.subject_id , sub.title;"
    // let [avgAsigRe] = await connection.query(avgAsig);
    // console.log(avgAsigRe);

    // //---------------------nombres y apellidos de alumnos y nombres asignaturas apuntados.-----------------------
    // let alumAsig = "SELECT s.first_name, s.last_name, sub.title FROM students s JOIN marks m ON s.student_id = m.student_id JOIN subjects sub ON m.subject_id = sub.subject_id;"
    // let [alumAsigRe] = await connection.query(alumAsig);
    // console.log(alumAsigRe);

    // //---------------------nombres y apellidos de profesores y nombres asignaturas imprtidas.-----------------------
    // let profAsig = "SELECT t.first_name, t.last_name, sub.title FROM teachers t JOIN subject_teacher st ON t.teacher_id = st.teacher_id JOIN subjects sub ON st.subject_id = sub.subject_id;"
    // let [profAsigRe] = await connection.query(profAsig);
    // console.log(profAsigRe);

    // //---------------------total alum/asig, nom/asig, nom ape/prof-----------------------
    // let totalAlumAsigProf = "SELECT sub.title, t.first_name, t.last_name, COUNT(DISTINCT m.student_id) AS total_students FROM subjects sub JOIN subject_teacher st ON sub.subject_id = st.subject_id JOIN teachers t ON st.teacher_id = t.teacher_id JOIN marks m ON sub.subject_id = m.subject_id GROUP BY sub.subject_id, t.teacher_id;"
    // let [totalAlumAsigProfRe] = await connection.query(totalAlumAsigProf)
    // console.log(totalAlumAsigProfRe);



  }
  catch(err)
  {
    console.log(err)
    // connection.end();
  }
}

main();
