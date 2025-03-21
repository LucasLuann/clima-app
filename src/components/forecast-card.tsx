import React from "react";
import { Forecast } from "@/types/forecast";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Thermometer, Droplets, Wind } from "lucide-react";
import { motion } from "framer-motion";

const ForecastCard = ({ forecast }: { forecast: Forecast }) => {
  const formatLocalTime = (timeString: string) => {
    const date = new Date(timeString);

    return new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
      {Array.isArray(forecast?.forecast?.forecastday) &&
        forecast.forecast.forecastday.map((item, index, array) => (
          <motion.div
            key={item.date}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className={`rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-slate-800 ${
              index === array.length - 1
                ? "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2"
                : ""
            }`}
          >
            <Card>
              <div className="bg-gradient-to-br p-4 md:p-6 transition-all duration-500">
                <div className="flex flex-col sm:flex-row md:flex-row flex-wrap justify-between items-center mb-4 md:mb-6">
                  <div className="text-center sm:text-left md:text-left">
                    <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100">
                      {forecast.location.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                      {forecast.location.region}, {forecast.location.country}
                    </p>
                    <p className="text-xs mt-1 text-slate-400 dark:text-slate-400">
                      {formatLocalTime(item.date)}
                    </p>
                  </div>

                  <div className="flex flex-col items-center mt-4">
                    <Image
                      src={`https:${item.day.condition.icon}`}
                      alt={item.day.condition.text}
                      width={20}
                      height={20}
                      className="w-8 sm:w-10 md:w-12 lg:w-14 drop-shadow-lg transition-all duration-300 hover:scale-110"
                    />

                    <p className=" sm:text-sm font-medium text-center text-slate-700 dark:text-slate-200">
                      {item.day.condition.text}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 transition-transform hover:translate-y-[-2px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Thermometer className="w-4 h-4 text-rose-500" />
                      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                        Temperatura
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Min
                        </p>
                        <p className="text-sm sm:text-md font-bold text-slate-700 dark:text-slate-200">
                          {item.day.mintemp_c}°C
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Max
                        </p>
                        <p className="text-sm sm:text-md font-bold text-slate-700 dark:text-slate-200">
                          {item.day.maxtemp_c}°C
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 transition-transform hover:translate-y-[-2px]">
                    <div className="flex items-center gap-2 mb-1">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                        Umidade
                      </p>
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
                      {item.day.avghumidity}%
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Precipitação: {item.day.totalprecip_mm}mm
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-3 transition-transform hover:translate-y-[-2px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Wind className="w-4 h-4 text-teal-500" />
                    <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
                      Vento
                    </p>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-slate-700 dark:text-slate-200">
                    {item.day.maxwind_kph} km/h
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
    </div>
  );
};

export default ForecastCard;
