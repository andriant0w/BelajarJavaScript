import { index, store, destroy } from './controller.js';

const main = () => {
    index(); //menambah 2 user baru
    store(); // menampilkan semua user
    destroy(); // menghapus user terakhir
    index(); // menampilkan kembali setelah penghapusan
};

main();
