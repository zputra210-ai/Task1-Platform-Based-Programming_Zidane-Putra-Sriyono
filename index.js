const express = require('express');

const hitung = require('./calculator');

const app = express();


app.get('/', (request, response) => {

    response.sendFile(__dirname + '/index.html');

});


app.get('/hitung', (request, response) => {

    const angka1 = Number(request.query.angka1);
    const angka2 = Number(request.query.angka2);
    const operator = request.query.operator;


    const hasil = hitung(angka1, operator, angka2);


    response.json(hasil);

});


app.listen(3000, () => {

    console.log('Server berjalan di http://localhost:3000');

});