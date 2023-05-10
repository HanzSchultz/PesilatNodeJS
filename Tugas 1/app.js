const http = require('http');

const port = 1234;
const name = 'Farhan Ardiansyah';
const tmptLahir = "Kota Bandung";
const tglLahir = "27 November 2023";
const alamat = "Jl. Caringin Gg. Karyabakti";

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<p>Nama : ${name}</p>`);
    res.write(`<p>Tempat Lahir : ${tmptLahir}</p>`);
    res.write(`<p>Tanggal Lahir : ${tglLahir}</p>`);
    res.write(`<p>Alamat : ${alamat}</p>`);
    res.end;
}).listen(1234, () => {
    console.log(`Nama : ${name}`);
    console.log(`Tempat Lahir : ${tmptLahir}`);
    console.log(`Tanggal Lahir : ${tglLahir}`);
    console.log(`Alamat : ${alamat}`);
})