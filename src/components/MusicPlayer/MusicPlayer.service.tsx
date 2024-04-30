import { FormattedHour, NHVideoId } from "../../types";

export const getVideoId = (hour: FormattedHour): NHVideoId => {
    switch (hour) {
        case FormattedHour["12AM"]:
            return NHVideoId["12AM"];
        case FormattedHour["1AM"]:
            return NHVideoId["1AM"];
        case FormattedHour["2AM"]:
            return NHVideoId["2AM"];
        case FormattedHour["3AM"]:
            return NHVideoId["3AM"];
        case FormattedHour["4AM"]:
            return NHVideoId["4AM"];
        case FormattedHour["5AM"]:
            return NHVideoId["5AM"];
        case FormattedHour["6AM"]:
            return NHVideoId["6AM"];
        case FormattedHour["7AM"]:
            return NHVideoId["7AM"];
        case FormattedHour["8AM"]:
            return NHVideoId["8AM"];
        case FormattedHour["9AM"]:
            return NHVideoId["9AM"];
        case FormattedHour["10AM"]:
            return NHVideoId["10AM"];
        case FormattedHour["11AM"]:
            return NHVideoId["11AM"];
        case FormattedHour["12PM"]:
            return NHVideoId["12PM"];
        case FormattedHour["1PM"]:
            return NHVideoId["1PM"];
        case FormattedHour["2PM"]:
            return NHVideoId["2PM"];
        case FormattedHour["3PM"]:
            return NHVideoId["3PM"];
        case FormattedHour["4PM"]:
            return NHVideoId["4PM"];
        case FormattedHour["5PM"]:
            return NHVideoId["5PM"];
        case FormattedHour["6PM"]:
            return NHVideoId["6PM"];
        case FormattedHour["7PM"]:
            return NHVideoId["7PM"];
        case FormattedHour["8PM"]:
            return NHVideoId["8PM"];
        case FormattedHour["9PM"]:
            return NHVideoId["9PM"];
        case FormattedHour["10PM"]:
            return NHVideoId["10PM"];
        case FormattedHour["11PM"]:
            return NHVideoId["11PM"];
    }
};