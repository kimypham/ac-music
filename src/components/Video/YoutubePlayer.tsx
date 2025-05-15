import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

export const YoutubePlayer = ({videoId}: { videoId: string }) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    };
  
    const onPlayerStateChange = (event: YouTubeEvent<number>) => {
        if(event.data === 0) {
            event.target.seekTo(0);
            event.target.playVideo();
        }
    };
  
    const options: YouTubeProps['opts'] = {
        height: "100%",
        width: "100%",
    };
  
    return (
        <YouTube
            key={videoId}
            videoId={videoId}
            opts={options}
            onReady={onPlayerReady}
            onStateChange={onPlayerStateChange}
            className="rounded-xl w-full h-full absolute top-0 bottom-0 left-0 right-0"
        />
    );
  }