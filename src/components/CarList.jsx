import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

function CarList() {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cars');
                }
                return response.json();
            })
            .then((data) => {
                setCars(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);  
            });
    }, []);

    return (
        <div className="car-list">
            {error ? (
                <p>Error: {error}</p>  
            ) : cars.length === 0 ? (
                <p>No cars registered yet</p>
            ) : (
                cars.map((car) => <CarCard key={car.id} car={car} />) 
            )}
        </div>
    );
}

export default CarList;
