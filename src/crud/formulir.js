import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import '../css/crudd.css'

const Formulir = ({ id, namaPeminjam, nama, author, deskripsi, tanggalKeluar, tanggalMasuk, harga, handleChange, handleSubmit }) => {
  return (
    <div className="mt-3">
      <Row>
        <Col>
          <h4 id='judulForm'>{id ? "Edit Data" : "Tambah Data"}</h4>
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
                  <Form.Label id='labelForm'>Nama Peminjam</Form.Label>
                  <Form.Control id='inputForm' type="text" name='namaPeminjam' value={namaPeminjam} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="nama">
                  <Form.Label id='labelForm'>Nama Buku</Form.Label>
                  <Form.Control id='inputForm' type="text" name='nama' value={nama} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="author">
                  <Form.Label id='labelForm'>Author</Form.Label>
                  <Form.Control id='inputForm' type="text" name='author' value={author} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label id='labelForm'>Deskripsi</Form.Label>
              <Form.Control id='inputForm' as='textarea' rows='3' type="text" name='deskripsi' value={deskripsi} onChange={(event) => handleChange(event)} />
            </Form.Group>

            {/* Bagian 2: Tanggal dan Harga */}
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="tanggalKeluar">
                  <Form.Label id='labelForm'>Tanggal Keluar</Form.Label>
                  <Form.Control id='inputForm' type="date" name='tanggalKeluar' value={tanggalKeluar} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="tanggalMasuk">
                  <Form.Label id='labelForm'>Tanggal Masuk</Form.Label>
                  <Form.Control id='inputForm' type="date" name='tanggalMasuk' value={tanggalMasuk} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="harga">
                  <Form.Label id='labelForm'>Harga</Form.Label>
                  <Form.Control id='inputForm' type="number" name='harga' value={harga} onChange={(event) => handleChange(event)} />
                </Form.Group>
              </Col>
            </Row>

            <Container className="d-flex justify-content-center">
              <Button id='tombolSub' variant="primary" type="submit">
                Submit
              </Button>
            </Container>
            
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Formulir;
