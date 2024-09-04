import React, { useState } from "react";
import styled from "styled-components";

// Define your styled components
const Container = styled.div`
  padding: 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #ff6680;
  color: white;
  border: 2px solid #ff6680;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  display: block;
  box-sizing: border-box;

  &:hover {
    background-color: #ff4f60;
    border-color: #ff4f60;
  }
`;

const PaymentMethodContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const TransferInfo = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const UploadContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const BankTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const BankTableRow = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const BankTableCell = styled.td`
  padding: 25px;
  border: 1px solid #ddd;
  text-align: left;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: auto;
    margin-right: 10px;
  }
`;

const InfoTableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

const AddressDetails = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: left;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const AddressForm = styled.form`
  margin-top: 20px;
  text-align: left;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
`;

const EditableField = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const AddressConfirmation = () => {
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [bank, setBank] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [showAddressDetails, setShowAddressDetails] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // State variables for address details
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [fullAddress, setFullAddress] = useState("");

  const handleUseMyAddress = () => {
    setShowPaymentMethods(true);
    setShowAddressDetails(true);
    setShowAddressForm(false);
  };

  const handleNewAddress = () => {
    setShowAddressForm(true);
    setShowPaymentMethods(false);
    setShowAddressDetails(false);
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === "Transfer") {
      alert("Silakan kirim bukti pembayaran!");
    } else {
      alert("Pesanan Ditempatkan!");
    }
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === "Transfer") {
      setShowUpload(true);
    } else {
      setShowUpload(false);
    }
  };

  const handleBankChange = (selectedBank) => {
    setBank(selectedBank);
    if (selectedBank === "BRI") {
      setAccountName("Nama Pemilik Rekening BRI");
      setAccountNumber("1234567890");
    } else if (selectedBank === "BCA") {
      setAccountName("Nama Pemilik Rekening BCA");
      setAccountNumber("9876543210");
    } else if (selectedBank === "BNI") {
      setAccountName("Nama Pemilik Rekening BNI");
      setAccountNumber("5555555555");
    } else if (selectedBank === "mandiri") {
      setAccountName("Nama Pemilik Rekening Mandiri");
      setAccountNumber("4444444444");
    }
  };

  return (
    <Container>
      <h3>
        <strong>Konfirmasi Alamat Pengiriman</strong>
      </h3>
      {!showPaymentMethods && !showAddressForm ? (
        <>
          <Button onClick={handleUseMyAddress}>Gunakan Alamat Saya</Button>
          <Button onClick={handleNewAddress}>Alamat Baru</Button>
        </>
      ) : null}

      {/* {showAddressForm && (
        <AddressForm>
          <h4>Formulir Alamat Pengiriman</h4>
          <label>
            Nama:
            <input type="text" placeholder="Masukkan Nama" />
          </label>
          <label>
            Nomor HP:
            <input type="text" placeholder="Masukkan Nomor HP" />
          </label>
          <label>
            Provinsi:
            <select>
              <option value="">Pilih Provinsi</option>
              <option value="DKI Jakarta">DKI Jakarta</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
              <option value="Jawa Timur">Jawa Timur</option>
              <option value="Banten">Banten</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
          <label>
            Kabupaten:
            <select>
              <option value="">Pilih Kabupaten</option>
              <option value="Bogor">Bogor</option>
              <option value="Bekasi">Bekasi</option>
              <option value="Sukabumi">Sukabumi</option>
              <option value="Karawang">Karawang</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
          <label>
            Kecamatan:
            <select>
              <option value="">Pilih Kecamatan</option>
              <option value="Cibinong">Cibinong</option>
              <option value="Cikarang">Cikarang</option>
              <option value="Ciawi">Ciawi</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
          <label>
            Kode Pos:
            <input type="text" placeholder="Masukkan Kode Pos" />
          </label>
          <label>
            Alamat Lengkap:
            <input type="text" placeholder="Masukkan Alamat Lengkap" />
          </label>
          <Button
            onClick={() => {
              setShowPaymentMethods(true);
              setShowAddressForm(false);
            }}
          >
            <strong>Metode Pembayaran</strong>
          </Button>
        </AddressForm>
      )} */}

      {showAddressForm && (
        <AddressForm>
          <h4>Formulir Alamat Pengiriman</h4>
          <label>
            Nama:
            <input
              type="text"
              placeholder="Masukkan Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Nomor HP:
            <input
              type="text"
              placeholder="Masukkan Nomor HP"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label>
            Provinsi:
            <select
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option value="">Pilih Provinsi</option>
              <option value="DKI Jakarta">DKI Jakarta</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="Jawa Tengah">Jawa Tengah</option>
              <option value="Jawa Timur">Jawa Timur</option>
              <option value="Banten">Banten</option>
              <option value="Yogyakarta">Yogyakarta</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
          <label>
            Kabupaten:
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Pilih Kabupaten</option>
              <option value="Bogor">Bogor</option>
              <option value="Bekasi">Bekasi</option>
              <option value="Sukabumi">Sukabumi</option>
              <option value="Karawang">Karawang</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
          <label>
            Kecamatan:
            <select
              value={subdistrict}
              onChange={(e) => setSubdistrict(e.target.value)}
            >
              <option value="">Pilih Kecamatan</option>
              <option value="Cibinong">Cibinong</option>
              <option value="Cikarang">Cikarang</option>
              <option value="Ciawi">Ciawi</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </label>
          <label>
            Kode Pos:
            <input
              type="text"
              placeholder="Masukkan Kode Pos"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </label>
          <label>
            Alamat Lengkap:
            <input
              type="text"
              placeholder="Masukkan Alamat Lengkap"
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
            />
          </label>
          <Button
            onClick={() => {
              setShowPaymentMethods(true);
              setShowAddressDetails(true);
              setShowAddressForm(false);
            }}
          >
            <strong>Metode Pembayaran</strong>
          </Button>
        </AddressForm>
      )}

      {showPaymentMethods && !showAddressForm && (
        <>
          {showAddressDetails && (
            <AddressDetails>
              <h4>Detail Alamat</h4>
              <p>
                <strong>Nama:</strong> Nuryadi Shania
              </p>
              <p>
                <strong>Telepon:</strong> (+62) 882-0077-83322
              </p>
              <p>
                <strong>Alamat:</strong> Jalan Pegadaian, RT.4/RW.3, Tlangu
                Barat, Sukorejo
              </p>
            </AddressDetails>
          )}
          <h4>
            <strong>Pilih Metode Pembayaran</strong>
          </h4>
          <PaymentMethodContainer>
            <select value={paymentMethod} onChange={handlePaymentChange}>
              <option value="">Pilih Metode Pembayaran</option>
              <option value="COD">COD - Cek Dulu</option>
              <option value="Transfer">Transfer Bank</option>
            </select>
          </PaymentMethodContainer>

          {paymentMethod === "Transfer" && (
            <>
              <h4>
                <strong>Pilih Bank</strong>
              </h4>
              <BankTable>
                <tbody>
                  <BankTableRow onClick={() => handleBankChange("BRI")}>
                    <BankTableCell>
                      <img src="/logo/bank BRI.jpg" alt="BRI" />
                      BRI
                    </BankTableCell>
                    <InfoTableCell>
                      <strong>Atas Nama:</strong>{" "}
                      {bank === "BRI" ? (
                        <EditableField
                          type="text"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                        />
                      ) : (
                        accountName
                      )}
                      <br />
                      <strong>Nomor Rekening:</strong>{" "}
                      {bank === "BRI" ? (
                        <EditableField
                          type="text"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                      ) : (
                        accountNumber
                      )}
                    </InfoTableCell>
                  </BankTableRow>
                  <BankTableRow onClick={() => handleBankChange("BCA")}>
                    <BankTableCell>
                      <img src="/logo/bank BCA.jpg" alt="BCA" />
                      BCA
                    </BankTableCell>
                    <InfoTableCell>
                      <strong>Atas Nama:</strong>{" "}
                      {bank === "BCA" ? (
                        <EditableField
                          type="text"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                        />
                      ) : (
                        accountName
                      )}
                      <br />
                      <strong>Nomor Rekening:</strong>{" "}
                      {bank === "BCA" ? (
                        <EditableField
                          type="text"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                      ) : (
                        accountNumber
                      )}
                    </InfoTableCell>
                  </BankTableRow>
                  <BankTableRow onClick={() => handleBankChange("BNI")}>
                    <BankTableCell>
                      <img src="/logo/bank BNI.jpg" alt="BNI" />
                      BNI
                    </BankTableCell>
                    <InfoTableCell>
                      <strong>Atas Nama:</strong>{" "}
                      {bank === "BNI" ? (
                        <EditableField
                          type="text"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                        />
                      ) : (
                        accountName
                      )}
                      <br />
                      <strong>Nomor Rekening:</strong>{" "}
                      {bank === "BNI" ? (
                        <EditableField
                          type="text"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                      ) : (
                        accountNumber
                      )}
                    </InfoTableCell>
                  </BankTableRow>
                  <BankTableRow onClick={() => handleBankChange("mandiri")}>
                    <BankTableCell>
                      <img src="/logo/bank mandiri.jpg" alt="mandiri" />
                      Mandiri
                    </BankTableCell>
                    <InfoTableCell>
                      <strong>Atas Nama:</strong>{" "}
                      {bank === "mandiri" ? (
                        <EditableField
                          type="text"
                          value={accountName}
                          onChange={(e) => setAccountName(e.target.value)}
                        />
                      ) : (
                        accountName
                      )}
                      <br />
                      <strong>Nomor Rekening:</strong>{" "}
                      {bank === "mandiri" ? (
                        <EditableField
                          type="text"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                      ) : (
                        accountNumber
                      )}
                    </InfoTableCell>
                  </BankTableRow>
                </tbody>
              </BankTable>
            </>
          )}
        </>
      )}

      {showUpload && (
        <UploadContainer>
          <h4>Upload Bukti Pembayaran</h4>
          <input type="file" />
        </UploadContainer>
      )}

      {showPaymentMethods && (
        <Button onClick={handlePlaceOrder}>
          <strong>Buat Pesanan</strong>
        </Button>
      )}
    </Container>
  );
};

export default AddressConfirmation;
