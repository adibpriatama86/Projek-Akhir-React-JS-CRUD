import React from "react";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./tabel";
import Formulir from "./formulir";

export default class Crud extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bukus: [],
      id: "",
      namaPeminjam: "",
      nama: "",
      author: "",
      deskripsi: "",
      tanggalKeluar: "",
      tanggalMasuk: "",
      harga: "0",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      id,
      bukus,
      namaPeminjam,
      nama,
      author,
      deskripsi,
      tanggalKeluar,
      tanggalMasuk,
      harga,
    } = this.state;

    if (id === "") {
      this.setState({
        bukus: [
          ...bukus,
          {
            id: bukus.length + 1,
            namaPeminjam,
            nama,
            author,
            deskripsi,
            tanggalKeluar,
            tanggalMasuk,
            harga,
          },
        ],
      });
    } else {
      const bukuYangSelainDiPilih = bukus
        .filter((buku) => buku.id !== id)
        .map((filterBuku) => filterBuku);

      this.setState({
        bukus: [
          ...bukuYangSelainDiPilih,
          {
            id: bukus.length + 1,
            namaPeminjam,
            nama,
            author,
            deskripsi,
            tanggalKeluar,
            tanggalMasuk,
            harga,
          },
        ],
      });
    }

    this.setState({
      id: "",
      namaPeminjam: "",
      nama: "",
      author: "",
      deskripsi: "",
      tanggalKeluar: "",
      tanggalMasuk: "",
      harga: "0",
    });
  };

  editData = (id) => {
    const bukuYangDiPilih = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterBuku) => filterBuku);

    this.setState({
      id: bukuYangDiPilih[0].id,
      namaPeminjam: bukuYangDiPilih[0].namaPeminjam,
      nama: bukuYangDiPilih[0].nama,
      author: bukuYangDiPilih[0].author,
      deskripsi: bukuYangDiPilih[0].deskripsi,
      tanggalKeluar: bukuYangDiPilih[0].tanggalKeluar,
      tanggalMasuk: bukuYangDiPilih[0].tanggalMasuk,
      harga: bukuYangDiPilih[0].harga,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
      .filter((buku) => buku.id !== id)
      .map((filterBuku) => filterBuku);

    this.setState({
      bukus: bukuBaru,
    });
  };

  render() {
    console.log(this.state.bukus);
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel
            bukus={this.state.bukus}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
