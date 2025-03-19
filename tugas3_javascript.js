//membuat array dengan nama AndriKomputer
let produkAndriKomputer = [
    {id: 1, nama: "Laptop", harga: 6000000, stock: 5},
    {id: 2, nama: "Mouse", harga: 200000, stock: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stock: 7}
];

// fungsi untuk tambah produk
function tambahProduk(nama, harga, stock){
    let idbaru = produkAndriKomputer.length > 0 ? Math.max(...produkAndriKomputer.map(p => p.id)) + 1 : 1;
    let produkBaru = {id: idbaru, nama, harga, stock};
    produkAndriKomputer.push(produkBaru);
}
// fungsi untuk hapus produk berdasarkan id
function hapusProduk(id){
    produkAndriKomputer = produkAndriKomputer.filter(p => p.id !== id);
}
// fungsi untuk menampilkan daftar produk 
function tampilProduk(){
    console.log("Daftar Produk Toko:");
    produkAndriKomputer.forEach(p => {
        console.log(`ID: ${p.id} | Nama: ${p.nama} | Harga: ${p.harga} | Stok: ${p.stock}`);
    });
}

tampilProduk();
// penggunaan fungsi tambah produk yang sudah dibuat
tambahProduk("Monitor", 1200000, 3);
console.log("Setelah menambahkan Monitor:");
tampilProduk();
// penggunaan fungsi hapus produk yang sudah dibuat
hapusProduk(4);
console.log("Setelah menghapus produk Monitor:");
tampilProduk();