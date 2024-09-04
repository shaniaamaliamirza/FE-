import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./checkout.css";

const CheckoutContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AddressColumn = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
  z-index: 1000;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center; /* Mengatur header "Produk" dan "Harga" di tengah */
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center; /* Mengatur data "Produk" dan "Harga" di tengah */
`;

const TotalRow = styled.tr`
  text-align: left; /* Mengatur "Total Pembayaran" di sebelah kiri */
  & ${TableHeader} {
    text-align: left;
  }
`;

const ConfirmShippingButton = styled.button`
  background-color: #ff6680;
  color: white;
  border: none;
  padding: 8px 16px; /* Ukuran tombol lebih kecil */
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto; /* Agar tombol tetap berada di tengah */
  
  &:hover {
    background-color: #ff4f60;
  }
`;

const Checkout = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate("/confirmation");
  };

  const handleConfirmShipping = () => {
    navigate("/address-confirmation"); // Navigasi ke halaman baru
  };

  return (
    <CheckoutContainer>
      <Title>Rincian Pesanan</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Produk</TableHeader>
            <TableHeader>Harga</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>Kue Nastar</TableData>
            <TableData>Rp70.000</TableData>
          </tr>
          <tr>
            <TableData>Ongkos Kirim</TableData>
            <TableData>Rp10.000</TableData>
          </tr>
          <TotalRow>
            <TableHeader>Total Pembayaran</TableHeader>
            <TableData>Rp80.000</TableData>
          </TotalRow>
        </tbody>
      </Table>
      
      {/* Tombol Konfirmasi Alamat Pengiriman */}
      <ConfirmShippingButton onClick={handleConfirmShipping}>
        Konfirmasi Alamat Pengiriman
      </ConfirmShippingButton>
    </CheckoutContainer>
  );
};

export default Checkout;
