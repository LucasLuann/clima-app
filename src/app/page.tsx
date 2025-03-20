"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getWeather, getForecast } from "@/lib/weather-service";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import WeatherCard from "@/components/weather-card";
import { Card, CardContent } from "@/components/ui/card";
import { Weather } from "@/types/weather";
import ForecastCard from "@/components/forecast-card";
import { Forecast } from "@/types/forecast";
import ChartLine from "@/components/chart-line";
// import ChartLine from "@/components/chart-line";

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Forecast>({} as Forecast);
  const [searchInput, setSearchInput] = useState("");
  const [location, setLocation] = useState("Cuiaba");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (query: string) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeather(query);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(
        "Não foi possível obter a previsão do tempo. Tente novamente mais tarde."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (query: string) => {
    try {
      const data = await getForecast(query);
      setForecast(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeather(location);
    fetchForecast(location);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchInput.trim()) {
      setLocation(searchInput);
    }
  };

  return (
    <main className="container mx-auto py-6 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Previsão do Tempo</h1>
        <ThemeToggle />
      </div>

      <form
        onSubmit={handleSearch}
        className="flex gap-2 w-full md:w-1/2 mx-auto mt-10 mb-4"
      >
        <Input
          placeholder="Digite o nome da cidade..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <Button type="submit" disabled={loading} className="cursor-pointer">
          {loading ? "Buscando..." : "Buscar"}
        </Button>
      </form>

      {error && (
        <Card className="my-4 bg-destructive/10 text-destructive">
          <CardContent>
            <p className="text-center">{error}</p>
          </CardContent>
        </Card>
      )}

      {weather && (
        <div>
          <WeatherCard weather={weather} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <ChartLine forecast={forecast} />
            <ChartLine forecast={forecast} />
            <ChartLine forecast={forecast} />
          </div>
          <ForecastCard forecast={forecast} />
        </div>
      )}
    </main>
  );
}
