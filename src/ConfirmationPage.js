// src/pages/ConfirmationPage.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const ConfirmationMessage = styled.h3`
  margin-bottom: 10px;
`;

const SubMessage = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled(Link)`
  background-color: pink;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: 10px;

  &:hover {
    background-color: #ff69b4;
  }
`;

const ConfirmationPage = () => {
  return (
    <ConfirmationContainer>
      <ConfirmationMessage>
        Pesanan Anda berhasil Dibuat
      </ConfirmationMessage>
      <SubMessage>
        Cek pesanan Anda
      </SubMessage>
      <ButtonContainer>
        <Button to="/my-order">Pesanan Saya</Button>
      </ButtonContainer>
    </ConfirmationContainer>
  );
};

export default ConfirmationPage;
