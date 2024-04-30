export const Clock = ({ time }: { time: Date }) => {
    const timeString: string = time.toLocaleTimeString(['en-AU'], { timeStyle: 'short' });

    return (
        <h1 className="text-[128px] leading-[1.1]">{timeString}</h1>
    );
};