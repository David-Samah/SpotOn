import React from 'react';

function CarCard({ car }) {
    return (
        <div className="car-card">
            <h4>Our previous customer purchases(</h4>
            <h3>{car.model}</h3> {/* Use curly braces to dynamically display the model */}
            <p><strong>Color:</strong> {car.color}</p>
            <p><strong>Year of Production:</strong> {car.year}</p> 
        </div>
    );
}

export default CarCard;
