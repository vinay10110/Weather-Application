# Weather Application

A React-based weather app that lets you search for cities and view current conditions and a 7-period daily forecast. City search is powered by GeoDB Cities (via RapidAPI), and weather data comes from OpenWeather.

## Live Demo
https://weather-app-yo51.onrender.com/

## Features
- **City search with autocomplete** using `react-select-async-paginate` and GeoDB Cities API
- **Current weather**: temperature, description, icon, visibility, wind speed, humidity, pressure
- **7-item forecast** displayed in an accessible accordion with daily details
- **Clean UI** with weather icons from `public/icons/`

## Tech Stack
- **React 18** (Create React App)
- **react-select-async-paginate**, **react-select**
- **react-accessible-accordion**

## Getting Started

### Prerequisites
- Node.js 18+
- npm 8+
- API keys for RapidAPI (GeoDB Cities) and OpenWeather

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment
Create a `.env` file in the project root (you can copy `.env.example`). Example values:
```bash
# RapidAPI (GeoDB Cities)
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
REACT_APP_RAPIDAPI_HOST=wft-geo-db.p.rapidapi.com
REACT_APP_GEO_API_URL=https://wft-geo-db.p.rapidapi.com/v1/geo

# OpenWeather
REACT_APP_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
REACT_APP_WEATHER_API_KEY=your_openweather_api_key
```
Notes:
- CRA only exposes env vars prefixed with `REACT_APP_`.
- These values are read in `src/api.js`.

### 3) Run the dev server
```bash
npm start
```
App will be available at http://localhost:3000

### 4) Build for production
```bash
npm run build
```

## Available Scripts
- `npm start` – start dev server
- `npm run build` – production build
- `npm test` – run tests
- `npm run eject` – eject CRA config

## Docker
Run with a prebuilt image from Docker Hub.

Pull the image:
```bash
docker pull vinay10110/weather-app:latest
```
Run the image locally (serves via Nginx on port 80):
```bash
docker run -d -p 8080:80 vinay10110/weather-app:latest
```
App: http://localhost:8080

## How It Works
- `src/App.js`
  - Renders `Search`, `Currentweather`, and `Forecast` components.
  - On selection, fetches current weather (`/weather`) and forecast (`/forecast`) from `REACT_APP_WEATHER_API_URL` using `REACT_APP_WEATHER_API_KEY`.
- `src/components/search/search.js`
  - Calls `REACT_APP_GEO_API_URL` with RapidAPI headers for city suggestions; returns `{ value: "lat lon", label: "City CC" }`.
- `src/components/current-weather/current-weather.js`
  - Shows city, description, icon, temp, visibility, wind, humidity, pressure.
- `src/components/forecast/forecast.js`
  - Displays 7 items in an accordion with icon, description, min/max temp, and details (pressure, humidity, clouds, wind).

## Project Structure
- `src/components/search/` – city search input
- `src/components/current-weather/` – current weather card
- `src/components/forecast/` – forecast list and details
- `public/icons/` – weather icons matching OpenWeather icon codes (e.g., `01d.png`)

## APIs
- **GeoDB Cities** (RapidAPI): https://rapidapi.com/wirefreethought/api/geodb-cities
- **OpenWeather**: https://openweathermap.org/api

