import React from "react";
import '../App.css'

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 14000
    },
    {
        nama: 'Nasi Goreng',
        harga: 10000
    },
    {
        nama: 'Mi Goreng',
        harga: 15000
    },
    {
        nama: 'Mi Ayam',
        harga: 11000
    }
]

const total_bayar = makanans.reduce((total_harga,makanans) => {return total_harga + makanans.harga;}, 0)
// const total2 = makanans.reduce((total_2, makanans) => {return total_2 + makanans.harga > 11000;}, 0)
const total2 = makanans.reduce((total_2, makanans) => {
    if (makanans.harga > 11000) {
      return total_2 + makanans.harga;
    }
    return total_2;
  }, 0);
  

const Map = () => {
    return (
        <div className="harga">
            <h2>Mapping</h2>
            <ul>
                {makanans.map((makanans, index) => (
                <li>
                    {index + 1}. {makanans.nama} - Harga: {makanans.harga}
                </li>))}
            </ul>
            
            <h3>Total Bayar: {total_bayar}</h3><br></br><br></br>


            <h2>Map untuk harga lebih dari 11000</h2>
            <ul>
                {makanans.filter((makanans) => makanans.harga > 11000).map((makanans, index) => (
                <li>
                    {index + 1}. {makanans.nama} - Harga: {makanans.harga}
                </li>))}
            </ul>

            <h3>Total Bayar: {total2}</h3>
        </div>
    )
}

export default Map;