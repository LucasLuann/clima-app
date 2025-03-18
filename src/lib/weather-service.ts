import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Essa função recebe o nome da cidade e faz a requisição do clima atual
export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&lang=pt`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API : ", error);
    throw new Error("Erro ao buscar dados da API");
  }
};

// Essa função recebe o nome da cidade e faz a requisição das previsões
export const getForecast = async (city: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=pt`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API : ", error);
    throw new Error("Erro ao buscar dados da API");
  }
};

