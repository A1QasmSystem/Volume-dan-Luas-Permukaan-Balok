var panjang = parseInt(prompt('Masukkan Nilai Panjang :'));
var lebar = parseInt(prompt('Masukkan Nilai Lebar :'));
var tinggi = parseInt(prompt('Masukkan Nilai Tinggi :'));

function jumlahLuas(p , l , t){
    // var volumeA;
    // var total;

    // volumeA = p * l;

    // total = volumeA;

    // return total;
    return p * l * t;
}

alert("volume " + jumlahLuas(panjang,lebar,tinggi));

function jumlahLuas(p , l , t){
    // var volumeA;
    // var total;

    // volumeA = p * l;

    // total = volumeA;

    // return total;
    return 2 * (p * l + p * t + l * t);
}

alert("luas " + jumlahLuas(panjang,lebar,tinggi));