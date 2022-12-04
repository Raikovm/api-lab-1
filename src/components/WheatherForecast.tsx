import { useEffect, useState } from 'react';
import { trpc } from '../utils/trpc';
import { WeatherForecastCard } from './WheatherForecastCard';

type WeatherForecastProps = {
    city : string
}

export const WeatherForecast = ({city}: WeatherForecastProps) =>     
{    
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [error, setError] = useState('error');
    const result = trpc.useQuery(['weather.Forecast', { cityName: city}]);

    useEffect(() => {
        setShowErrorMessage(result.isError);
        if (result.isError) {
            setError(result.error.message);
            return;
        }      
    }, [result]);    

    return <>
    {
        showErrorMessage &&           
        <div className='text-center border-y-2 border-solid border-red-800 my-3'>
            {error}
        </div>    
    }  
 
    {
        !showErrorMessage && result.data != undefined && 
        <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
            {
                result.data.map(x => (
                    <WeatherForecastCard key={x.temp} forecast={x} />
                ))
            }
        </div>
        
        
    }    
    </>;
}
