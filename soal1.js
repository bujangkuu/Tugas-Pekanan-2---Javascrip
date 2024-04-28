//Tugas-2 (soal 1)aplikasi akar pangkat dua bilangan genap sanbercode
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan bilangan genap: ", function(input) {
    const x = parseInt(input);

    if (x < 0) {
        //masukkan bilangan genap
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        //jika memasukkan bilangan selain genap maka tidak bisa
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        const result = Math.sqrt(x);
        console.log("Akar pangkat 2 dari", x, "adalah", result);
    }

    rl.close();
});
