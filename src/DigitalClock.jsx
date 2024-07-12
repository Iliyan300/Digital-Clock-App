import React, { useState, useEffect } from 'react'

function DigitalClock() {

    const[time,setTime] = useState(new Date());
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();

    
    useEffect(() => {

        const intervalId = setInterval(() => {

        setTime(new Date());

        }, 1000);

        return () => {

            clearInterval(intervalId);
        }

    }, []);

    function formatTime() {

        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${setZero(hours)}:${setZero(minutes)}:${setZero(seconds)} ${meridiem}`
    }

    function setZero(number) {

        return (number < 10 ? "0" : "") + number;

    }

   
    return(
        <>
        
        <div className="clock-container">
            <div className="clock">
                <span className='time'>{formatTime()}</span><br />
                <span className='month'>{setZero(month + 1)} / {setZero(day)}</span> <br />
                <span className='year'>{year}</span> 
            </div>
            
        </div>
        
        </>
    );
}

export default DigitalClock