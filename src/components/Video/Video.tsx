export const Video = () => {
    const videoId: string = "V_9Nfwk9yWo";

    return (
        <iframe width="515" height="295" className='rounded-xl'
            src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1}`} >
        </iframe>
    )
}