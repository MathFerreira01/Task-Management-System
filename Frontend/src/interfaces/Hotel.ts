export interface FormHotelProps {
  id: number;
  name: string;
  setName: (value: string) => void
  pais: string;
  setPais: (value: string) => void
  estado: string;
  setEstado: (value: string) => void
  cidade: string;
  setCidade: (value: string) => void
} 

export interface HotelProps {
  id: number;
  name: string;
  pais: string;
  estado: string;
  cidade: string;
  deleteCard: (id: number) => void;
}