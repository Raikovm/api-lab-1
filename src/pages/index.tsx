import { Button, TextField } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useState } from 'react';
import { WeatherForecast } from '../components/WheatherForecast';

const Home: NextPage = () => {

  const [cityName, setCityName] = useState('Tomsk');
  const [componentCityName, setComponentCityName] = useState('Tomsk');

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const setCity = () =>{
    setComponentCityName(cityName);
  }

  return (
    <>
      <Head>
        <title>Weather forecast</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto flex flex-col items-center justify-top min-h-screen p-4'>
        <h1 className='text-5xl md:text-[4rem] leading-normal font-extrabold text-gray-700'>
          Weather forecast
        </h1>           
        
        <TextField 
          className='my-5'
          id='standard-basic' 
          label='City' 
          variant='standard' 
          value={cityName} 
          onChange={handleCityChange}
        />   

        <Button variant='outlined' color='inherit' onClick={setCity}>Get weather forecast</Button>

        <WeatherForecast city={componentCityName}/>

      </main>  
    </>
  );
};

export default Home;
