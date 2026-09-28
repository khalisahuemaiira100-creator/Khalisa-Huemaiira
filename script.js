// Mengambil data yang tersimpan
let dataAbsensi = JSON.parse(
    localStorage.getItem("dataAbsensi")
) || [];


// FORM ABSENSI

const form = document.getElementById("absensiForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const npm = document.getElementById("npm").value;
    const status = document.getElementById("status").value;

    const waktu = new Date().toLocaleString("id-ID");


    // Data baru

    const dataBaru = {
        nama: nama,
        npm: npm,
        status: status,
        waktu: waktu
    };


    dataAbsensi.push(dataBaru);


    // Simpan ke browser

    localStorage.setItem(
        "dataAbsensi",
        JSON.stringify(dataAbsensi)
    );


    // Buat QR Code

    buatQRCode(dataBaru);


    // Tampilkan data

    tampilkanData();


    // Kosongkan form

    form.reset();


    alert("Absensi berhasil disimpan!");

});


// FUNGSI QR CODE

function buatQRCode(data) {

    const qrContainer = document.getElementById("qrcode");

    qrContainer.innerHTML = "";


    const informasi =

        "ABSENSI MAHASISWA\n" +

        "Nama: " + data.nama + "\n" +

        "NPM: " + data.npm + "\n" +

        "Status: " + data.status + "\n" +

        "Waktu: " + data.waktu;


    new QRCode(qrContainer, {

        text: informasi,

        width: 180,

        height: 180

    });

}


// MENAMPILKAN DATA

function tampilkanData() {

    const tabel = document.getElementById("tabelAbsensi");

    tabel.innerHTML = "";


    dataAbsensi.forEach(function(data, index) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${index + 1}</td>

            <td>${data.nama}</td>

            <td>${data.npm}</td>

            <td>${data.status}</td>

            <td>${data.waktu}</td>

        `;


        tabel.appendChild(row);

    });

}


// HAPUS DATA

function hapusData() {

    if (dataAbsensi.length === 0) {

        alert("Belum ada data absensi.");

        return;

    }


    const yakin = confirm(
        "Apakah kamu yakin ingin menghapus semua data?"
    );


    if (yakin) {

        localStorage.removeItem("dataAbsensi");

        dataAbsensi = [];

        tampilkanData();

        document.getElementById("qrcode").innerHTML = "";

        alert("Semua data berhasil dihapus.");

    }

}


// Tampilkan data ketika halaman dibuka

tampilkanData();