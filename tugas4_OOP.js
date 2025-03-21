// Definisi kelas Kendaraan
class Kendaraan {
    constructor(merk, tahun) {
        this.merk = merk;
        this.tahun = tahun;
        this.tersedia = true;
    }

    sewa() {
        if (this.tersedia) {
            this.tersedia = false;
            return true;
        } else {
            return false;
        }
    }

    kembalikan() {
        this.tersedia = true;
    }
}

// Definisi kelas Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        if (kendaraan.sewa()) {
            this.kendaraanDisewa = kendaraan;
            console.log(`${this.nama} berhasil menyewa ${kendaraan.merk} (${kendaraan.tahun}).`);
        } else {
            console.log(`${kendaraan.merk} (${kendaraan.tahun}) sudah disewa oleh pelanggan lain.`);
        }
    }

    kembalikanKendaraan() {
        if (this.kendaraanDisewa) {
            this.kendaraanDisewa.kembalikan();
            console.log(`${this.nama} telah mengembalikan ${this.kendaraanDisewa.merk}.`);
            this.kendaraanDisewa = null;
        } else {
            console.log(`${this.nama} tidak memiliki kendaraan yang disewa.`);
        }
    }
}

// Definisi kelas SistemPenyewaan
class SistemPenyewaan {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanPelanggan() {
        console.log("Daftar Pelanggan yang Menyewa Kendaraan:");
        this.daftarPelanggan.forEach(p => {
            if (p.kendaraanDisewa) {
                console.log(`${p.nama} menyewa ${p.kendaraanDisewa.merk} (${p.kendaraanDisewa.tahun}).`);
            }
        });
    }
}

// Simulasi penggunaan sistem
const sistem = new SistemPenyewaan();

const mobil1 = new Kendaraan("Daihatsu", 2022);
const motor1 = new Kendaraan("Toyota", 2020);

const pelanggan1 = new Pelanggan("Andri", "081299047792");
const pelanggan2 = new Pelanggan("Faiz", "089876543221");

pelanggan1.sewaKendaraan(mobil1);
sistem.tambahPelanggan(pelanggan1);

pelanggan2.sewaKendaraan(motor1);
sistem.tambahPelanggan(pelanggan2);

sistem.tampilkanPelanggan();
