import { createContext } from 'react'
import { FormHotelProps } from '../interfaces/Hotel';

const initialValue = {
    id: 0,
    name: "",
    pais: "",
    estado:"",
    cidade: "",
    
    setName: () => "", 
    setPais: () => "", 
    setEstado: () => "", 
    setCidade: () => "",
} 

export const hotelContext = createContext<FormHotelProps>(initialValue);