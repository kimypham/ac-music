import { FormattedHour, NHVideoId } from '../../common';
import { getHour } from '../../common/service';
import { useTime } from '../../hooks';

export const Video = () => {
    const time: Date = useTime();
    const hour: FormattedHour = getHour(time);
    const videoId: NHVideoId = NHVideoId[hour];

    return (
        <iframe width="515" height="290" className='rounded-xl'
            src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1}`} >
        </iframe>
    )
}