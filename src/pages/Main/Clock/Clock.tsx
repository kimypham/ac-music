import { useEffect, useState } from 'react';

export const Clock = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' })

    return (
        <h1 className="text-[128px]">{timeString}</h1>
    );
};