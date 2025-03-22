//Data Produk
let produkList = [
    {id: 1, nama: "Laptop", harga: 12000000},
    {id: 2, nama: "Smartphone", harga: 5000000},
    {id: 3, nama: "Smartwatch", harga: 3000000},
    {id: 4, nama: "Speaker", harga: 1500000},
    {id: 5, nama: "Printer", harga: 2000000}
];

const eventHandler = {
    tambahProduk: (id, nama, harga) => tambahProduk(id, nama, harga),
    hapusProduk: (id) => hapusProduk(id),
    tampilkanProduk: () => tampilkanProduk()
};

//menambahkan produk dengan spread operator
function tambahProduk(id, nama, harga) {
    let produkBaru = {id, nama, harga};
    produkList = [...produkList, produkBaru];//spread operator untuk menambahkan produk baru
    console.log(`Produk ${nama} berhasil ditambahkan.`);
}

//menghapus produk dengan rest parameter
function hapusProduk(id) { 
    produkList = produkList.filter(produk => produk.id !== id);
    console.log(`Produk dengan id ${id} berhasil dihapus.`); 
}

//menampilkan produk dengan destruction
function tampilkanProduk() {
    console.log("Daftar Produk:");
    produkList.forEach(({id, nama, harga}) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
}


tampilkanProduk();
tambahProduk(6, "Mouse", 500000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();
