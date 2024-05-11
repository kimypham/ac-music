import { FormattedHour } from '../../common';

export const getHour = (time: Date): FormattedHour => {
    const currentHour: number = time.getHours();

    const isAm: boolean = currentHour <= 12;
    const hourString: string = isAm ? currentHour == 0 ? '12AM' : `${currentHour.toString()}AM` : `${(currentHour - 12).toString()}PM`;

    return FormattedHour[hourString as keyof typeof FormattedHour];
};