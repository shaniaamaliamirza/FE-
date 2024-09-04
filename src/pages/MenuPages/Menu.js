import React from "react";
import "./Menu.css";
import logo from "../../logo.svg";
// import background from "./background.jpg";
import "../../App.css";
import App from "../AboutPages/About.js";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    //halaman home
    <div className=" flex flex-col ">
      <div className="hero bg-base-200 w-full ">
        <div className="hero bg-base-200 w-full">
          <img src="/bg/background.jpg" alt="bg" />
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold">Menu Kue Kering</h1>
              <p className="py-6">SC smoothies cookies Shopp :</p>
            </div>
          </div>
        </div>
      </div>
      {/* flex absolute relative */}
      {/* <div className="flex justify-center"> */}
      <div className="flex md:flex-row flex-col px-5 justify-between card bg-base-100">
        <div className="flex card bg-base-100 w-80 shadow-x2">
          <figure className="px-10 pt-10">
            <img
              src="/logo/kuekastengelll.jpg"
              alt="logo"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kue Kastengel</h2>
            <h1 className="card-title">Rp. 70.000</h1>
            <div className="card-actions">
              <button className="btn btn-neutral-content">
                <ul>
                  <li>
                    <Link to="/Menu/Kastangel">Order Sekarang</Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        <div className="flex card bg-base-100 w-80 shadow-x2">
          <figure className="px-10 pt-10">
            <img src="/logo/kuenastar.jpg" alt="logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kue Nastar</h2>
            <h1 className="card-title">Rp. 70.000</h1>
            <div className="card-actions">
              <ul>
                <button className="btn btn-neutral-content">
                  <li>
                    <Link to="/Menu/nastar">Order Sekarang</Link>
                  </li>
                </button>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex card bg-base-100 w-80 shadow-x2">
          <figure className="px-10 pt-10">
            <img src="/logo/kuesemprit.jpg" alt="logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kue Semprit</h2>
            <h1 className="card-title">Rp. 70.000</h1>
            <div className="card-actions">
              <button className="btn btn-neutral-content">
                <ul>
                  <li>
                    <Link to="/Menu/Semprit">Order Sekarang</Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* flex absolute relative */}
      {/* <div className="flex justify-center"> */}
      <div className="flex md:flex-row flex-col px-5 justify-between card bg-base-100 ">
        <div className="flex card bg-base-100 w-80 shadow-x2">
          <figure className="px-10 pt-10">
            <img src="/logo/kuekacang.jpg" alt="logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kue Kacang</h2>
            <h1 className="card-title">Rp. 70.000</h1>
            <div className="card-actions">
              <button className="btn btn-neutral-content">
                <ul>
                  <li>
                    <Link to="/Menu/KueKacang">Order Sekarang</Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        <div className="flex card bg-base-100 w-80 shadow-x2">
          <figure className="px-10 pt-10">
            <img
              src="/logo/kueputrisalju.jpg"
              alt="logo"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kue Putri Salju</h2>
            <h1 className="card-title">Rp. 70.000</h1>
            <div className="card-actions">
              <button className="btn btn-neutral-content">
                <ul>
                  <li>
                    <Link to="/Menu/PutriSalju">Order Sekarang</Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
        <div className="flex card bg-base-100 w-80 shadow-x2">
          <figure className="px-10 pt-10">
            <img
              src="/logo/kuelidahkucing.jpg"
              alt="logo"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Kue Lidah Kucing</h2>
            <h1 className="card-title">Rp. 70.000</h1>
            <div className="card-actions">
              <button className="btn btn-neutral-content">
                <ul>
                  <li>
                    <Link to="/Menu/LidahKucing">Order Sekarang</Link>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Menu;
