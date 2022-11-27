import React from "react";
import { Modal, Button, TextInput, Label } from "flowbite-react";
import { useState } from "react";

function ModalNambah({ show, handleClose, addMoney }) {
  const [penghasilan, setPenghasilan] = useState({
    label: "nambah",
    uang: "",
    penjelasan: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addMoney(penghasilan);
    // console.log(penghasilan);
    setPenghasilan({ label: "nambah", uang: "", penjelasan: "" });
    handleClose();
  };

  const changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === "penghasilan") {
      setPenghasilan({ ...penghasilan, uang: value });
    } else if (name === "penjelasan") {
      setPenghasilan({ ...penghasilan, penjelasan: value });
    }
  };

  return (
    <>
      <Modal show={show} size="md" popup={true} onClose={handleClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Masukan Uang Kamu
            </h3>
            {/* Uang */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="uang" value="Jumlah Uang" />
              </div>
              <TextInput
                id="uang"
                required={true}
                type="number"
                name="penghasilan"
                value={penghasilan.uang}
                onChange={changeHandler}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="deskripsi" value="Deskripsi" />
              </div>
              <TextInput
                id="deskripsi"
                type="text"
                required={true}
                name="penjelasan"
                value={penghasilan.penjelasan}
                onChange={changeHandler}
              />
            </div>
            <div className="w-full flex justify-center">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalNambah;
