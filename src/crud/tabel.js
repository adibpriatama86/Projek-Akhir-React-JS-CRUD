import React from 'react';
import { Table, Button } from 'react-bootstrap';
import '../css/crudd.css'

const Tabel = ({ bukus, editData, hapusData }) => {
  return (
    <div className="table-responsive">
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Peminjam</th>
            <th>Nama Buku</th>
            <th>Author</th>
            <th>Deskripsi</th>
            <th>Tanggal Keluar</th>
            <th>Tanggal Masuk</th>
            <th>Harga Buku</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bukus.map((buku, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{buku.namaPeminjam}</td>
              <td>{buku.nama}</td>
              <td>{buku.author}</td>
              <td>{buku.deskripsi}</td>
              <td>{buku.tanggalKeluar}</td>
              <td>{buku.tanggalMasuk}</td>
              <td>{buku.harga}</td>
              <td>
                <Button id='editBut' variant='warning' className='mr-1' onClick={() => editData(buku.id)}>Edit</Button>
                <Button id='hapusBut' variant='danger' className='mr-1' onClick={() => hapusData(buku.id)}>Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tabel;
