# cloudcompiler

Welcome to **cloudcompiler**, an application for accurate and up to date weather information. You can search for any city and get comprehensive weather updates including current conditions, hourly forecasts and more.

## Prerequisites

- [Node.js](https://nodejs.org/)

- [npm](https://www.npmjs.com/)

- [OpenWeatherMap Api Key](https://openweathermap.org/api) (free signup required)

### Installation

1. Unzip and move the repository into a folder of your choosing

2. Navigate to the project directory

3. Install dependencies

   ```shell
   npm install
   ```

4. Obtain an OpenWeatherMap API Key

   - Go to OpenWeatherMap API and sign up for a free account

   - Generate a new API key form your account dashboard

5. Set up your environment variables

   - Create a `.env` file in the root of the project and add your OpenWeatherMap API key:

     ```shell
     VITE_API_KEY=your_api_key_here
     ```

### Running the App

1. Start the dev server

   ```shell
   npm run dev
   ```

2. Open your browser and navigate to the address you see in your console

   ```shell
   http://localhost:3000 #example address, your machine may be using a different port
   ```

### Running the tests
1. Start the dev server

   ```shell
   npm run test
   ```