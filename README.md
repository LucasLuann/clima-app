# 🌦️ ClimaApp – Previsão do Tempo  

Um aplicativo de clima construído com **Next.js** e integrado à [WeatherAPI](https://www.weatherapi.com/), proporcionando informações precisas sobre a previsão do tempo.  

## 🚀 Tecnologias  

- [Next.js](https://nextjs.org/) – Framework React moderno e otimizado.  
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática para maior segurança no código.  
- [Tailwind CSS](https://tailwindcss.com/) – Estilização rápida e responsiva.  
- [WeatherAPI](https://www.weatherapi.com/) – Fonte de dados meteorológicos.  

## 🔧 Instalação e Uso  

Clone o repositório:  

```bash
git clone https://github.com/LucasLuann/clima-app.git
cd clima-app
```

Instale as dependências:  

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

Crie um arquivo **.env.local** na raiz do projeto e adicione sua chave da WeatherAPI:  

```bash
NEXT_PUBLIC_WEATHER_API_KEY=SUA_CHAVE_AQUI
```

Inicie o servidor de desenvolvimento:  

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o app.  

## 🌍 Funcionalidades  

✅ Buscar clima por cidade  
✅ Exibir temperatura, umidade, vento e condição atual  
✅ Atualização em tempo real  
✅ Interface responsiva e moderna  

## 📦 Deploy  

Este projeto pode ser facilmente implantado na [Vercel](https://vercel.com/).  

1. Faça login na Vercel e importe o repositório.  
2. Configure a variável de ambiente `NEXT_PUBLIC_WEATHER_API_KEY`.  
3. Clique em **Deploy** e pronto! 🚀  

## 🤝 Contribuição  

Contribuições são bem-vindas! Para contribuir:  

1. Faça um fork do repositório.  
2. Crie uma nova branch:  

   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

3. Faça suas alterações e commit:  

   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```

4. Envie um pull request.  

---

📌 **Autor**: [Lucas Luann](https://github.com/LucasLuann)  
🔗 **Live Demo**: [clima-app](https://clima-app-ll.vercel.app/)
