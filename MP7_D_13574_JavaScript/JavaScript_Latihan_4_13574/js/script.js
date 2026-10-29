function fn_ValForm() {
    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var umur = document.getElementById("umur").value.trim();
    var kategori = document.getElementById("kategori").value;
    var emailPattern = /^[a-z0-9][a-z0-9\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9\.-]{0,}[a-z0-9][\.] [a-z0-9]{2,4}$/;
    var sMsg = "";
    var info = "";
   


    if (nama == "") {
        sMsg += "\n* Nama tidak boleh kosong";
    }

    if (email == "") {
        sMsg += "\n* Email tidak boleh kosong";
    } else if (!emailPattern.test(email)) {
        sMsg += "\n* Format email tidak valid (harus menggunakan huruf kecil dan format email benar)";
    }

    if (umur == "") {
        sMsg += "\n* Umur tidak boleh kosong";
    }else if (isNaN(umur)) {
        sMsg += "\n* Umur harus berupa angka";
    }else {
        var umur1 = parseInt(umur);
        if (umur1 >=15) {
            if (umur1 >= 25) {
                info = "Peserta Umum";
            } else {
                info = "Peserta Mahasiswa";
            }
        } else if (umur1 > 60) {
            sMsg += "\n* Umur tidak boleh lebih dari 60 tahun";
        }else {
            sMsg += "\n* Umur tidak boleh kurang dari 15 tahun";
        }
    }
    

    if (kategori == "") {
        sMsg += "\n* Jenis acara harus dipilih";
    }

    if (sMsg !== "") {
        alert("Peringatan:" + sMsg);
        return false;
    }


    var pilihan = "";
    switch (kategori) {
        case "W":
            pilihan = "Workshop";
            break;
        case "S":
            pilihan = "Seminar";
            break;
        case "L":
            pilihan = "Lomba Coding";
            break;
        default:
            pilihan = "Acara Tidak Diketahui";
    }

    alert("Terima kasih " + nama + "! Anda terdaftar di acara " + pilihan + " (" + info + ").");
    return true;
}