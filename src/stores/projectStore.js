import { defineStore } from "pinia";

const projectStore = defineStore({
  id: "project",
  state: () => ({
    project: [
      {
        slug: "filmi",
        title: "FIL.MI",
        category: "Website Platform Streaming",
        date: "18 Jan. 2019",
        img: "Project1",
        desc: "FIL.MI merupakan website  untuk menonton film online secara gratis untuk melepas penat sekaligus menjalankan hobi yang dimana user akan mendaftar kan akun terlebih dahulu dan login untuk menonton.  Bukan hanya menonton pengguna juga bisa membaca sypnosis film untuk melihat alur film nya seperti apa.",
      },
      {
        slug: "travnur",
        title: "Travnur",
        category: "Webiste Travel",
        date: "18 Des. 2019",
        img: "Project2",
        desc: "TRAVNUR merupakan website travel online dimana pengguna nantinya bisa memilih paket travel online yang tersedia dan menambahkan teman atau keluarga untuk liburan bersama. Pengguna setelah meilih akan melakukan pembayaran ke rekening yang disedikaan nantinya akan di inbox di email jika sudah melakukan pembayarannn",
      },
      {
        slug: "emon",
        title: "E-Mon",
        category: "Website Monitoring",
        date: "18 Sep. 2020",
        img: "Project3",
        desc: "E-MON merupakan website untuk memonitoring produk dan karya prodi D4 Manajemen Informatika dimana mahasiswa nantinya bisa mengupload sebuah produk dan karya dalam bentuk foto dan di jelaskan bagaimana produk dan karya itu bekerja, mahasiswa juga bisa menambahkan nama anggota kelompok yang berpartisipasi dalam pembuatan produk dan karya.  Mahasiswa yang mengupload produk dan karya nantinya diuji dan diberi score oleh penguji atau tester.",
      },
    ],
  }),
  getters: {
    project$list: ({ project }) => project,
  },
});

export default projectStore;
