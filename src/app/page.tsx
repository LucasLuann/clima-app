"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { getWeather } from "@/lib/weather-service";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Weather {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
}

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null);
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

  useEffect(() => {
    fetchWeather(location);
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

      <form onSubmit={handleSearch} className="my-4 flex gap-2">
        <Input
          placeholder="Digite o nome da cidade..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <Button type="submit" disabled={loading} className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
          {loading ? "Buscando..." : "Buscar"}
        </Button>
      </form>

      {error && (
        <Card className="my-4 bg-destructive/10 text-destructive">
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      )}

      {weather && (
        <Card>
          <CardHeader>
            <CardTitle>{weather.location.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              src={`https:${weather.current.condition.icon}`}
              alt={weather.current.condition.text}
              width={100}
              height={100}
            />
            <p>{weather.current.condition.text}</p>
            <p>{weather.current.temp_c}°C</p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
