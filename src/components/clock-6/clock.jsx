import React, { useEffect, useState } from 'react';
import './clock.css';

function Clock() {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock-wrapper">
            <div className="clock-card">
                <h1 className="clock-title">🕒 Digital Clock</h1>
                <p className="clock-display">{date}</p>
            </div>
        </div>
    );
}

export default Clock;
