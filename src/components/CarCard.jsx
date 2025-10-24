import React from 'react';

function CarCard({car}){
    return (
        <div className="car-card">
            <h3>car.model</h3>
            <p><strong>Color:</strong> {car.color}</p>
            <p><strong>Year of Production</strong>{car.year}</p>
            
        </div>
    );
}
export default CarCard;