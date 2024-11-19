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
    
    // //---------------------añadir columna-----------------------
    // let addColumn = "ALTER TABLE direccion ADD COLUMN ciudad VARCHAR(100)";
    // let [addColumnRe] = await connection.query(addColumn);
    // console.log("Columna ciudad añadida");
    // console.log(addColumnRe);

    // //---------------------eliminar columna-----------------------
    // let dropColumn = "ALTER TABLE direccion DROP COLUMN nombre";
    // let [dropColumnRe] = await connection.query(dropColumn);
    // console.log("Columna nombre eliminada");
    // console.log(dropColumnRe);

    // //---------------------Eliminar tabla-----------------------
    // let dropTable = "DROP TABLE direccion";
    // let [dropTableRe] = await connection.query(dropTable);
    // console.log("Tabla direccion eliminada permanentemente");
    // console.log(dropTableRe);

    // // //---------------------Notas a 0-----------------------
    // let updateMarks = "UPDATE marks SET mark = 0";
    // let [updateRe] = await connection.query(updateMarks);
    // console.log("Todas las notas se han actualizado a 0");
    // console.log(updateRe);

    // //---------------------Nombre y apellido-----------------------
    // let selectStudentsSql = "SELECT first_name, last_name FROM students";
    // let [studentsRe] = await connection.query(selectStudentsSql);
    // console.log("Nombres y apellidos de los estudiantes");
    // console.log(studentsRe);

    // //---------------------Profesores-----------------------
    // let selectTeachers = "SELECT * FROM teachers";
    // let [teachersRe] = await connection.query(selectTeachers);
    // console.log("Datos de todos los profesores:");
    // console.log(teachersRe);

    // //---------------------Eliminar notas-----------------------
    // let deleteOldMarks = "DELETE FROM marks WHERE date < DATE_SUB(NOW(), INTERVAL 10 YEAR)";
    // let [deleteRe] = await connection.query(deleteOldMarks);
    // console.log(deleteRe.affectedRows);

    // //---------------------Notas a 5-----------------------
    // let updateMark2 = "UPDATE marks SET mark = 5 WHERE mark < 5 ";
    // let [updateMarkRe] = await connection.query(updateMark2);
    // console.log(updateMarkRe.affectedRows);

  }
  catch(err)
  {
    console.log(err)
    // connection.end();
  }
}

main();