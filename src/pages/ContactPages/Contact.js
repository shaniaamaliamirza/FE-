import React from "react";
import "./Contact.css";
import logo from "../../logo.svg";
// import background from "./background.jpg";
import "../../App.css";
import App from "../AboutPages/About.js";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main>
      <div className="px-4 py-10 bg-base-200">
        <h2 className="text-4xl font-bold text-center mb-8">Hubungi Kami</h2>
        <p className="text-lg text-center mb-6">
          Kami senang mendengar dari Anda! Jangan ragu untuk menghubungi kami
          melalui salah satu cara berikut.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
          {/* Informasi Kontak */}
          <div className="mb-8 lg:mb-0 lg:mr-16">
            <h3 className="text-2xl font-bold mb-4">Informasi Kontak</h3>
            <p className="text-lg mb-2">
              <strong>Alamat:</strong> Jl. Tlangu, Sukorejo, Kendal, Indonesia
            </p>
            <p className="text-lg mb-2">
              <strong>Telepon:</strong> +62 812-3456-7890
            </p>
            <p className="text-lg mb-2">
              <strong>Email:</strong> info@tokokuekering.com
            </p>
            <p className="text-lg mb-2">
              <strong>Jam Operasional:</strong> Senin - Minggu, 06:00 - 20:00
            </p>
          </div>

          {/* Formulir Kontak */}
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold mb-4">Kirim Pesan</h3>
            <form>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="name">
                  Nama:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Nama Anda"
                  style={{ backgroundColor: "#ffebef" }} // warna pink untuk isi kolom
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Email Anda"
                  style={{ backgroundColor: "#ffebef" }} // warna pink untuk isi kolom
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2" htmlFor="message">
                  Pesan:
                </label>
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  rows="5"
                  placeholder="Pesan Anda"
                  style={{ backgroundColor: "#ffebef" }} // warna pink untuk isi kolom
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
