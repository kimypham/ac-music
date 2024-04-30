import { FormattedHour, NHVideoId } from "../../types";
import { getVideoId } from "./MusicPlayer.service";

export const MusicPlayer = ({ hour }: { hour: FormattedHour }) => {
    const videoId: NHVideoId = getVideoId(hour);
    const videoSource: string = `https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1`;

    return (
        <iframe width="400" height="100"
            src={videoSource} >
        </iframe>
    )
};