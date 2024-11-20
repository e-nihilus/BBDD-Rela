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
          database     : "Museo"
    });
    console.log("Conexion correcta")


    //---------------------obj en prest/loc/date-exp/info-----------------------
    let datos = "SELECT P.id_pieza, P.nombre, U.nombre, PR.fecha_devolucion, D.nombre, D.apellido, D.email FROM pieza P JOIN ubicacion U ON P.id_ubicacion = U.id_ubicacion JOIN prestamo PR ON P.id_prestamo = PR.id_prestamo JOIN dueño D ON P.id_dueño = D.id_dueño WHERE PR.fecha_devolucion IS NOT NULL;"
    let [datosRe] = await connection.query(datos);
    console.log(datosRe);

    //---------------------orden agrup/situcion-----------------------
    let agrupacion = "SELECT C.tipo, COUNT(P.id_pieza) FROM pieza P JOIN coleccion C ON P.id_coleccion = C.id_coleccion GROUP BY C.tipo ORDER BY COUNT(P.id_pieza) DESC;"
    let[agrupacionRe] = await connection.query(agrupacion);
    console.log(agrupacionRe);

  }
  catch(err)
  {
    console.log(err)
    // connection.end();
  }
}

main();
