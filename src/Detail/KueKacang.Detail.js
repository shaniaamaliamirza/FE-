import React, { useState } from "react";
import './style.css';
function KueKacang() {
  const [selectedVarian, setSelectedVarian] = useState("Caramel | Size S | Stok: 3");

  const handleVarianChange = (event) => {
    setSelectedVarian(event.target.value);
  };

  const [quantity, setQuantity] = useState(1); // Initial state untuk jumlah

  // Fungsi untuk menangani penambahan jumlah
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Fungsi untuk menangani pengurangan jumlah
  const decrementQuantity = () => {
    if (quantity > 1) { // Agar jumlah tidak kurang dari 1
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="hero py-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:items-start lg:justify">
          <div className="flex flex-col items-start">
            <img
              src="/logo/KueKacang.jpg"
              alt="logo"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div className="flex mt-4 items-center">
              <div className="rating mr-4">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                />
              </div>
            </div>
          </div>
          <div className="ml-8">
            <h1 className="text-5xl font-bold">Kue Kacang</h1>
            <p className="py-2">Rp. 70.000,00</p>
            <p className="py-1">Stok : 30</p>
            <p className="py-1">Varian:</p>

            {/* Dropdown Varian */}
            <div className="mt-2">
              <select
                value={selectedVarian}
                onChange={handleVarianChange}
                className="p-2 rounded bg-white text-black" // Ubah background menjadi putih dan teks menjadi hitam
              >
                <option value="Kue Kacang | variant Coklat | Stok: 10">Kue Kacang | variant Coklat | Stok: 10</option>
                <option value="Kue Kacang | variant | Stok: 10">Kue Kacang | variant | Stok: 10</option>
                <option value="Kue Kacang | variant | Stok: 10">Kue Kacang | variant | Stok: 10</option> 
              </select>
            </div>

            {/* Bagian jumlah pembelian kurang tambah */}
            <div className="flex items-center mt-6">
              <button 
                className="btn btn-outline btn-secondary border-black text-black" // Tambahkan border hitam dan teks hitam
                onClick={decrementQuantity} // Event handler untuk tombol minus
              >
                -
              </button>
              <span className="mx-4">{quantity}</span> {/* Menampilkan jumlah */}
              <button 
                className="btn btn-outline btn-secondary border-black text-black" // Tambahkan border hitam dan teks hitam
                onClick={incrementQuantity} // Event handler untuk tombol plus
              >
                +
              </button>
            </div>

            {/* Tombol Tambah ke Keranjang dan Beli Sekarang */}
            <div className="flex mt-6 space-x-4">
              <button className="btn bg-white text-black border-black">Tambah ke Keranjang</button> {/* Ubah menjadi putih */}
              <button className="btn bg-white text-black border-black">Beli Sekarang</button> {/* Ubah menjadi putih */}
            </div>
          </div>
        </div>
      </div>

      
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <div className="py-10 bg-base-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Review Pelanggan :</h1>
        <div className="card bg-base-100 shadow-lg mx-auto max-w-4xl">
          <div className="card-body">
            <div className="flex items-center mb-1">
              <img
                src="/logo/profil.png"
                alt="logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Sriwati</h3>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Ulasan :</h2>
            <p>
              "Kue kering nastar ini benar-benar enak! Selai nanasnya manis dan
              lembut, sementara kulitnya renyah namun meleleh di mulut. Sangat
              cocok untuk camilan saat santai atau acara keluarga. Pasti akan
              beli lagi!"
            </p>
            <div className="card-actions justify-end mt-4"></div>
          </div>
        </div>
      </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <div className="py-10 bg-base-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Review Pelanggan :</h1>
        <div className="card bg-base-100 shadow-lg mx-auto max-w-4xl">
          <div className="card-body">
            <div className="flex items-center mb-1">
              <img
                src="/logo/profil.png"
                alt="logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Budi Setiawan</h3>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Ulasan :</h2>
            <p>
              "Kue kering nastar ini benar-benar enak! Selai nanasnya manis dan
              lembut, sementara kulitnya renyah namun meleleh di mulut. Sangat
              cocok untuk camilan saat santai atau acara keluarga. Pasti akan
              beli lagi!"
            </p>
            <div className="card-actions justify-end mt-4"></div>
          </div>
        </div>
      </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <div className="py-10 bg-base-200">
        <h1 className="text-3xl font-bold mb-6 text-center">Review Pelanggan :</h1>
        <div className="card bg-base-100 shadow-lg mx-auto max-w-4xl">
          <div className="card-body">
            <div className="flex items-center mb-1">
              <img
                src="/logo/profil.png"
                alt="logo"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">Boruto</h3>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">Ulasan :</h2>
            <p>
              "Kue kering nastar ini benar-benar enak! Selai nanasnya manis dan
              lembut, sementara kulitnya renyah namun meleleh di mulut. Sangat
              cocok untuk camilan saat santai atau acara keluarga. Pasti akan
              beli lagi!"
            </p>
            <div className="card-actions justify-end mt-4"></div>
          </div>
        </div>
      </div>
  </div>
</div>
    </>
  );
}

export default KueKacang;
