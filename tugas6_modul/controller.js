import users from './data.js';

// Menampilkan semua user
const index = () => {
    console.log("Daftar User:");
    users.map((user, index) => {
        console.log(`${index + 1}. ${user.nama} - ${user.umur} tahun - ${user.alamat} - ${user.email}`);
    });
};

// Menambahkan data baru
const store = () => {
    users.push(
        { nama: "Hannah Baker", umur: 29, alamat: "Jl. Lily No. 9", email: "hannah@example.com" },
        { nama: "Isaac Newton", umur: 60, alamat: "Jl. Astronomi No. 1", email: "isaac@example.com" }
    );
    console.log("Data baru telah ditambahkan!");
};

// Menghapus user terakhir
const destroy = () => {
    if (users.length > 0) {
        let deletedUser = users.pop();
        console.log(`User ${deletedUser.nama} telah dihapus!`);
    } else {
        console.log("Tidak ada user untuk dihapus.");
    }
};

export { index, store, destroy };
