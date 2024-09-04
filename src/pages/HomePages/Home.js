import React from "react";
import "./Home.css";
import logo from "../../logo.svg";
import "../../App.css";

const Home = () => {
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero bg-base-200 min-h-screen">
          <img src="/bg/background.jpg" alt="bg" />
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold">Welcome!</h1>
              <p className="py-4">
                Selamat Datang Di Toko kami, Kami disini menjual berbagai macam
                jenis kue kering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
