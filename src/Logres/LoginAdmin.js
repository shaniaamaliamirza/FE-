// components/Login.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 20px auto;
  width: 100px; /* Mengatur ukuran gambar menjadi 100px lebar */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    border-color: #e91e63;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #d81b60;
  }
`;

const RegisterLink = styled.div`
  margin-top: 20px;
  text-align: center;
  a {
    color: #1e88e5;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <Logo src="logo/ashoplogo.jpg" alt="Logo" /> {/* Ganti dengan path logo yang benar */}
        <form>
          <Input type="text" placeholder="Email/Username" />
          <Input type="password" placeholder="Password" />
          <Button>Masuk</Button>
        </form>
        <RegisterLink>
          Belum punya akun? <Link to="/register">Daftar disini!</Link>
        </RegisterLink>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;
