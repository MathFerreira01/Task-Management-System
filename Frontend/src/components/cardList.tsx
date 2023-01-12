import axios from "axios";
import  { useEffect, useState } from "react";
import { FormHotelProps } from "../interfaces/Hotel";
import { api } from "../services/api";
import { Card } from "./card";

export function CardList() {
  const [hotel, setHotel] = useState<FormHotelProps[]>([]);

  async function getCards () {
    api.get("/hoteis").then((res) => setHotel(res.data));
  }

  async function deleteCard (id: number) {
    const response = await axios.delete(
      `http://localhost:3000/hoteis/${id}`
    )
    getCards()
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="flex flex-row flex-wrap p-8">
      {hotel.map((hotel) => (
        <Card
          id={hotel.id}
          name={hotel.name}
          pais={hotel.pais}
          estado={hotel.estado}
          cidade={hotel.cidade}
          deleteCard={deleteCard}
        />
      ))}
    </div>
  );
}
