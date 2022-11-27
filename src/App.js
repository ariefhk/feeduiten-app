import React from "react";
import "./App.css";
import { useState } from "react";
import { ModalNambah, ModalKurang } from "./component";
import { numberWithDot } from "./utils/formatMoney";

function App() {
  const [totalharga, setTotalHarga] = useState(0);
  const [uangNambah, setUangNambah] = useState(0);
  const [uangKeluar, setUangKeluar] = useState(0);
  const [jumlahNambah, setJumlahNambah] = useState(0);
  const [jumlahKeluar, setJumlahKeluar] = useState(0);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [data, setData] = useState([]);

  const addMoney = (money) => {
    setUangNambah(uangNambah + parseInt(money.uang));
    setJumlahNambah(jumlahNambah + 1);
    setTotalHarga(totalharga + parseInt(money.uang));
    setData([...data, money]);
  };

  const minMoney = (money) => {
    setUangKeluar(uangKeluar + parseInt(money.uang));
    setJumlahKeluar(jumlahKeluar + 1);
    setTotalHarga(totalharga - parseInt(money.uang));
    setData([...data, money]);
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleShow1 = () => {
    setShow1(true);
  };
  const handleClose1 = () => {
    setShow1(false);
  };

  return (
    <div className="container mx-auto">
      {/* Awal Judul*/}
      <div className="pt-5">
        <h1 className="text-center linear-gradient text-4xl lg:text-5xl font-semibold">
          Feeduiten Apps
        </h1>
        <hr className="w-[70%] my-3 h-px bg-[#EBEBFF] border-0 mx-auto lg:w-[40%]" />
      </div>
      {/* Akhir Judul*/}

      {/* Awal Total Bayar */}
      <div className="text-center">
        <h3>Total Uang kamu</h3>
        <h1 className="text-3xl font-bold my-3 text-[#454545] lg:text-4xl">
          Rp. {numberWithDot(totalharga)},-
        </h1>
        <div className="mx-4 lg:w-1/3 lg:mx-auto lg:my-3">
          {data.length !== 0 && (
            <div
              className="text-xs p-[2px] lg:text-sm "
              style={
                data[data.length - 1].label === "kurang"
                  ? {
                      backgroundColor: "#FF3666",
                      color: "#ffff",
                      borderRadius: "10px",
                    }
                  : {
                      backgroundColor: "#3C3DBF",
                      color: "#ffff",
                      borderRadius: "10px",
                    }
              }
            >
              {data[data.length - 1].label === "kurang" ? (
                <p>
                  Terakhir, Kamu ngeluarin uang sebesar Rp.{" "}
                  {numberWithDot(data[data.length - 1].uang)},-
                </p>
              ) : (
                <p>
                  Terakhir, Kamu nambahin uang sebesar Rp.{" "}
                  {numberWithDot(data[data.length - 1].uang)},-
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Akhir Total Bayar */}

      {/* Awal Card */}
      {/* Left Card */}
      <div className="flex gap-3 mx-1 justify-center mt-5 lg:gap-5 lg:my-5">
        <div className="bg-white p-4 rounded-lg lg:w-[360px]">
          <div className="w-[30px] p-1 bg-[#E4E5FF] flex justify-center items-center rounded-md text-[#3C3DBF]">
            <i className="bi bi-wallet2"></i>
          </div>
          <p className="text-xs mt-2 lg:text-lg">Total Pemasukan</p>
          <h1 className="text-lg font-bold my-3 text-[#454545] lg:text-3xl">
            Rp. {numberWithDot(uangNambah)},-
          </h1>
          <p className="text-xs lg:text-lg">
            <span className="text-[#3C3DBF]">{jumlahNambah}</span> Transaksi
          </p>
        </div>
        {/* Rigth Card */}
        <div className="bg-white  p-4 rounded-lg lg:w-[360px]">
          <div className="w-[30px] p-1 bg-[#E4E5FF] flex justify-center items-center rounded-md text-[#FF3666]">
            <i className="bi bi-cash-stack"></i>
          </div>
          <p className="text-xs mt-2 lg:text-lg">Total Pengeluaran</p>
          <h1 className="text-lg font-bold my-3 text-[#454545] lg:text-3xl">
            Rp. {numberWithDot(uangKeluar)},-
          </h1>
          <p className="text-xs lg:text-lg">
            <span className="text-[#FF3666]">{jumlahKeluar}</span> Transaksi
          </p>
        </div>
      </div>
      {/* Akhir Card */}

      {/* Awal Button */}
      <div className="flex flex-col my-3 items-center lg:flex-row lg:justify-around lg:w-[75%] lg:mx-auto lg:my-3">
        <div className="lg:text-xl my-3">
          <p className="text-[#3C3DBF]">Ringkasan Transaksi</p>
        </div>
        <div className="order-first md:order-last flex gap-3 my-3">
          <button
            onClick={handleShow}
            className="bg-[#3C3DBF] text-white p-2 rounded-md"
          >
            Pemasukan <i className="bi bi-plus-circle"></i>
          </button>
          <button
            onClick={handleShow1}
            className="bg-[#FF3666] text-white p-2 rounded-md"
          >
            Pengeluaran <i className="bi bi-dash-circle"></i>
          </button>
        </div>
      </div>
      {/* Akhir Button */}

      {/* Awal List Ringkasan */}
      <div className="h-[160px] overflow-scroll mt-2 overflow-custom overflow-x-hidden rounded-md bg-white mx-3 lg:w-[58%] lg:mx-auto lg:h-[120px]">
        {data &&
          data.map((ringkasan, index) => {
            return (
              <div key={index}>
                {ringkasan.label === "nambah" ? (
                  <div className="flex items-center justify-between mx-5  p-1 ">
                    <div className="w-[30px] p-1 bg-[#E4E5FF] flex justify-center items-center rounded-md text-[#3C3DBF]">
                      <i className="bi bi-wallet2"></i>
                    </div>
                    <p className="text-sm">{ringkasan.penjelasan}</p>
                    <h1 className="text-md font-bold my-3 text-[#3C3DBF]">
                      Rp. {numberWithDot(ringkasan.uang)},-
                    </h1>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mx-5 bg-white p-1 rounded-sm">
                    <div className="w-[30px] p-1 bg-[#E4E5FF] flex justify-center items-center rounded-md text-[#FF3666]">
                      <i className="bi bi-cash-stack"></i>
                    </div>
                    <p className="text-sm">{ringkasan.penjelasan}</p>
                    <h1 className="text-md font-bold my-3 text-[#FF3666]">
                      Rp. {numberWithDot(ringkasan.uang)},-
                    </h1>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      {/* Akhir List Ringkasan */}
      <ModalNambah show={show} handleClose={handleClose} addMoney={addMoney} />
      <ModalKurang
        show1={show1}
        handleClose1={handleClose1}
        minMoney={minMoney}
      />
    </div>
  );
}

export default App;
