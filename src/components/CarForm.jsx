import React, { useState } from 'react';

function CarForm() {
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");
    const [year, setYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!year) {
            alert("Please enter a valid year");
            return;
        }

        const newCar = { model, color, year: Number(year) }; 

        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCar),
        })
        .then(response => response.json())
        .then(data => {
            console.log('New car added:', data);
            setModel('');
            setColor('');
            setYear('');
        })
        .catch(error => {
            console.error('Error adding car:', error);
            alert('There was an issue adding the car. Please try again later.');
        });
    };

    return (
        <form className="car-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Car Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Car Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Year of Production"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                required
            />
            <button type="submit">Add Car</button>
        </form>
    );
}

export default CarForm;
