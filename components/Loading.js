import { useState, useEffect } from 'react';

export default function Loading() {
    const [dots, setDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prevDots => (prevDots % 3) + 1);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="gradient h-screen flex justify-center items-center">
            <h1 className='text-white text-6xl font-bold'>Loading{".".repeat(dots)}</h1>
        </main>
    );
}
