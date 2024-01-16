import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Formulir = ({ id, namaPeminjam, nama, author, deskripsi, tanggalKeluar, tanggalMasuk, harga, handleChange, handleSubmit }) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>

            {/* Bagian 1: Informasi Buku */}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="namaPeminjam">
                  <Form.Label>Nama Peminjam</Form.Label>
                  <Form.Control type="text" name='namaPeminjam' value={namaPeminjam} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="nama">
                  <Form.Label>Nama Buku</Form.Label>
                  <Form.Control type="text" name='nama' value={nama} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="author">
                  <Form.Label>Author</Form.Label>
                  <Form.Control type="text" name='author' value={author} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as='textarea' rows='3' type="text" name='deskripsi' value={deskripsi} onChange={(event) => handleChange(event)} />
            </Form.Group>

            {/* Bagian 2: Tanggal dan Harga */}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="tanggalKeluar">
                  <Form.Label>Tanggal Keluar</Form.Label>
                  <Form.Control type="date" name='tanggalKeluar' value={tanggalKeluar} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="tanggalMasuk">
                  <Form.Label>Tanggal Masuk</Form.Label>
                  <Form.Control type="date" name='tanggalMasuk' value={tanggalMasuk} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="harga">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control type="number" name='harga' value={harga} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Formulir;
