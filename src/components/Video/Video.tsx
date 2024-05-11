import { FormattedHour, NHVideoId } from '../../common';

interface IVideo {
    hour: FormattedHour
}

export const Video = ({ hour }: IVideo) => {
    const videoId: NHVideoId = NHVideoId[hour];

    return (
        <iframe width="515" height="290" className='rounded-xl'
            src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1}`} >
        </iframe>
    )
}