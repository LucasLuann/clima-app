import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Essa função recebe o nome da cidade e faz a requisição
// para a API do clima, retornando os dados obtidos.
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
