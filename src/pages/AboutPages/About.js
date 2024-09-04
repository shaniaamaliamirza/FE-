import React from "react";
import "./About.css";
import logo from "../../logo.svg";
// import background from "./background.jpg";
import "../../App.css";
import App from "../HomePages/Home.js";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <div>
        <div className="AboutUs-container"></div>
        <div className="hero h-[450px] relative mb-10">
          <img
            src="/bg/kuekue.jpg"
            alt="bg"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center relative z-10">
            <div className="max-w-md mx-auto text-black text-shadow">
              <h1 className="mb-8 text-5xl font-bold">
                Tentang Smoothies Cookies
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-10 bg-base-100">
        <p className="text-lg text-center mb-4">
          Selamat datang di Toko Kue Kering kami, tempat di mana kelezatan
          bertemu dengan tradisi. Kami berdedikasi untuk menghadirkan berbagai
          macam kue kering yang dibuat dengan bahan-bahan pilihan dan resep
          turun-temurun yang telah teruji.
        </p>
        <p className="text-lg text-center mb-4">
          Setiap gigitan kue kami adalah perpaduan sempurna antara rasa manis,
          tekstur yang lembut, dan kenangan indah yang akan membawa Anda kembali
          ke masa lalu. Dari Nastar hingga Kastengel, setiap produk kami dibuat
          dengan penuh cinta dan perhatian terhadap detail.
        </p>
        <p className="text-lg text-center mb-4">
          Di sini, Anda akan menemukan berbagai macam kue kering dari Nastar,
          Kastengel, Putri Salju, dan berbagai kue kering lainnya yang ada di
          menu kami. Kami percaya bahwa setiap gigitan kue harus menghadirkan
          kebahagiaan dan kehangatan, dan itulah yang selalu kami upayakan dalam
          setiap produk kami.
        </p>
        <p className="text-lg text-center mb-4">
          Terima kasih telah memilih toko kami untuk memenuhi kebutuhan kue
          kering Anda. Kami sangat menghargai dukungan Anda dan berkomitmen
          untuk selalu memberikan yang terbaik.
        </p>
      </div>
    </main>
  );
};

export default About;
