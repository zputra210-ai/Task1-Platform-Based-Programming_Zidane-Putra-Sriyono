function hitung(angka1, operator, angka2) {

    if (Number.isNaN(angka1) || Number.isNaN(angka2)) {
        return {
            berhasil: false,
            pesan: 'Angka harus diisi dengan benar'
        };
    }


    if (operator === '+') {

        return {
            berhasil: true,
            hasil: angka1 + angka2
        };

    }


    else if (operator === '-') {

        return {
            berhasil: true,
            hasil: angka1 - angka2
        };

    }


    else if (operator === '*') {

        return {
            berhasil: true,
            hasil: angka1 * angka2
        };

    }


    else if (operator === '/') {

        if (angka2 === 0) {

            return {
                berhasil: false,
                pesan: 'Tidak dapat membagi dengan nol'
            };

        }


        return {
            berhasil: true,
            hasil: angka1 / angka2
        };

    }


    else {

        return {
            berhasil: false,
            pesan: 'Operator tidak valid'
        };

    }

}


module.exports = hitung;