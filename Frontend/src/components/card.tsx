import { useState } from "react";
import { HotelProps } from "../interfaces/Hotel";
import { Form } from "./Form";

export function Card({name, pais, estado, cidade, id, deleteCard}: HotelProps) {

  const [modal, setModal] = useState(false)

  function showModal () {
    setModal(!modal)
  }

  return (
    <>
      <div key={id} className="flex flex-wrap flex-row">
        <div className="w-full p-4 lg:w-80">
          <div className="p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600">{pais}</p>
            <p className="text-gray-600">{estado}</p>
            <p className="text-gray-600">{cidade}</p>
            <div className="flex justify-between">
            <button
              onClick={showModal}
              className="relative top-3 inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Edit
            </button>
            <button
              onClick={() => deleteCard(id)}
              className="relative top-3 inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Delete
            </button>
            </div>
            
          </div>
        </div>
      </div>
      {modal ? <Form/> : null}
    </>
  );
}

