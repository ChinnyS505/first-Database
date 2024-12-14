
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/students', (req, res) => {
 const connection = mysql.createConnection({  //ทำการติดต่อกับฐานข้อมูล
   host: 'localhost', //ถ้าไม่ได้ต่อกับ 80 อาจต้องใช้ 8080
   user: 'root',
   password: '',
   database: 'student_database', //เชื่อต่อไปฐานข้อมูล student_database
 });

 // เปิด connection ไปที่ database
 connection.connect();

 connection.query('SELECT * from students WHERE id =3', (err, rows, fields) => {
   if (err) throw err;

   // return response กลับไปหา client โดยแปลง record เป็น json array
   res.json(rows);
 });

 // ปิด connection
 connection.end();
});

app.listen(3000, () => {
 console.log('server started on port 3000!');
});

