import React, { useState, useEffect } from 'react';

const CategoryList = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,   // Set initial days
        hours: 0,  // Set initial hours
        minutes: 1, // Set initial minutes
        seconds: 0, // Set initial seconds
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                // Decrement seconds
                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;

                    // Decrement minutes
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;

                        // Decrement hours
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;

                            // Decrement days
                            if (days > 0) {
                                days--;
                            } else {
                                clearInterval(interval); // Stop timer when it reaches 0
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <h2 className="text-5xl text-center">Job Category List</h2>
            <p className="text-center">
                Explore thousands of job opportunities with all the information you need. It's your future.
            </p>
            <div>
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.days }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.hours }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.minutes }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.seconds }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
