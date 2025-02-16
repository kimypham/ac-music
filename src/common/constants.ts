import { FormattedHour, GameSoundtrackLabel, GameSoundtrackValue, GameTime, SoundEffectLabel, SoundEffectValue, WeatherVariantLabel, WeatherVariantValue } from './enums';
import { ISettings } from './interfaces';
import { WeatherVariantOption } from './types';

export const GameSoundtrackList = [
    GameSoundtrackValue.Original,
    GameSoundtrackValue.WWCF,
    GameSoundtrackValue.NL,
    GameSoundtrackValue.NH,
    GameSoundtrackValue.Random
];

export const WeatherVariantList = [
    WeatherVariantValue.Real,
    WeatherVariantValue.Normal,
    WeatherVariantValue.Rainy,
    WeatherVariantValue.Snowy,
    WeatherVariantValue.Random
];

export const WeatherVariantOptionsList = [
    WeatherVariantValue.Normal,
    WeatherVariantValue.Rainy,
    WeatherVariantValue.Snowy
];

export const soundtrackValueMap: Record<GameSoundtrackValue, GameSoundtrackLabel> = {
    [GameSoundtrackValue.Original]: GameSoundtrackLabel.Original,
    [GameSoundtrackValue.WWCF]: GameSoundtrackLabel.WWCF,
    [GameSoundtrackValue.NL]: GameSoundtrackLabel.NL,
    [GameSoundtrackValue.NH]: GameSoundtrackLabel.NH,
    [GameSoundtrackValue.Random]: GameSoundtrackLabel.Random
};

export const weatherValueMap: Record<WeatherVariantValue, WeatherVariantLabel> = {
    [WeatherVariantValue.Real]: WeatherVariantLabel.Real,
    [WeatherVariantValue.Normal]: WeatherVariantLabel.Normal,
    [WeatherVariantValue.Rainy]: WeatherVariantLabel.Rainy,
    [WeatherVariantValue.Snowy]: WeatherVariantLabel.Snowy,
    [WeatherVariantValue.Random]: WeatherVariantLabel.Random
};

export const soundEffectValueMap: Record<SoundEffectValue, SoundEffectLabel> = {
    [SoundEffectValue.Rain]: SoundEffectLabel.Rain,
    [SoundEffectValue.Thunder]: SoundEffectLabel.Thunder
};

export const initialSettings: ISettings = {
    gameSoundtrack: GameSoundtrackValue.NH,
    weatherVariant: WeatherVariantValue.Real,
    rainSoundEffectOn: false,
    thunderSoundEffectOn: false,
    gameTime: GameTime.Current
};

export const OriginalVideoId: Record<FormattedHour, Record<WeatherVariantOption, string>> = {
    '12AM': {
        normal: '9j9YEuFeDAw',
        rainy: 'YoCKnm6L-8w',
        snowy: 'hHMjYhrrgA0',
    },
    '1AM': {
        normal: 'UMMRXzXs-_k',
        rainy: 'YoCKnm6L-8w',
        snowy: 'P0X-pszXjUs',
    },
    '2AM': {
        normal: '-GS2Uf2koDI',
        rainy: 'YoCKnm6L-8w',
        snowy: 'skFs0iJbS6c',
    },
    '3AM': {
        normal: 'se7iaIfFdoQ',
        rainy: 'YoCKnm6L-8w',
        snowy: '1jeauAJI-EQ',
    },
    '4AM': {
        normal: 'AzHvhnzxeEw',
        rainy: 'YoCKnm6L-8w',
        snowy: 'nVMmazMgHos',
    },
    '5AM': {
        normal: '1auEF6PRm7Q',
        rainy: 'YoCKnm6L-8w',
        snowy: 'vvKuPylDaz4',
    },
    '6AM': {
        normal: 'hhlLbg4CRBc',
        rainy: 'YoCKnm6L-8w',
        snowy: 'oKf0vpa1uXQ',
    },
    '7AM': {
        normal: 'jcPIAICO-DI',
        rainy: 'YoCKnm6L-8w',
        snowy: '1TpOUPRW3G0',
    },
    '8AM': {
        normal: 'J22dco5U-nY',
        rainy: 'YoCKnm6L-8w',
        snowy: 'BmYPxNxpy0k',
    },
    '9AM': {
        normal: 'odevRs61OqY',
        rainy: 'YoCKnm6L-8w',
        snowy: 's-sk1XsFgCM',
    },
    '10AM': {
        normal: 'uFq-VvnEa80',
        rainy: 'YoCKnm6L-8w',
        snowy: 'jBsk7NeIjM4',
    },
    '11AM': {
        normal: '0dzoz1iOvws',
        rainy: 'YoCKnm6L-8w',
        snowy: 'rrBe3oJflBg',
    },
    '12PM': {
        normal: '4pmZrtO8_co',
        rainy: 'YoCKnm6L-8w',
        snowy: 'tnXzu-5jH7Y',
    },
    '1PM': {
        normal: 'dAABrbS8QeA',
        rainy: 'YoCKnm6L-8w',
        snowy: 'JhdIp3eB3z8',
    },
    '2PM': {
        normal: 'hwENcKas4nU',
        rainy: 'YoCKnm6L-8w',
        snowy: 'AnDfkb_JSx4',
    },
    '3PM': {
        normal: 'TMFHHTFEMPQ',
        rainy: 'YoCKnm6L-8w',
        snowy: 'qzwtHNWVzog',
    },
    '4PM': {
        normal: '_m_cI7cssPQ',
        rainy: 'YoCKnm6L-8w',
        snowy: 'DAvOdMaIlko',
    },
    '5PM': {
        normal: 'zcIDJd-ncHI',
        rainy: 'YoCKnm6L-8w',
        snowy: 'RbbWeeCrqqQ',
    },
    '6PM': {
        normal: '7nNsOcPfGxk',
        rainy: 'YoCKnm6L-8w',
        snowy: 'VUjBbFLpIq4',
    },
    '7PM': {
        normal: 'T_454gyj9PE',
        rainy: 'YoCKnm6L-8w',
        snowy: '1zxY6GGRs5o',
    },
    '8PM': {
        normal: 'GlYzXvHQaDw',
        rainy: 'YoCKnm6L-8w',
        snowy: 'eaG5IlfQMjo',
    },
    '9PM': {
        normal: 'Au8cSsWgYUY',
        rainy: 'YoCKnm6L-8w',
        snowy: 'pm6aKr_s-AE',
    },
    '10PM': {
        normal: 'nB1xsg-X3-0',
        rainy: 'YoCKnm6L-8w',
        snowy: 'q_Za8pdGYHk',
    },
    '11PM': {
        normal: 'Ar8sNQNvi90',
        rainy: 'YoCKnm6L-8w',
        snowy: 'X6o6JmlpQmI',
    }
};

export const WWCFVideoId: Record<FormattedHour, Record<WeatherVariantOption, string>> = {
    '12AM': {
        normal: 'V95zbEv-qLs',
        rainy: 'AopO2sF49wM', // og soundtrack (with added rain effects)
        snowy: 'qjoFNYiymek',
    },
    '1AM': {
        normal: 'yje6mLBCGGQ',
        rainy: 'RyDTKCkNl7s', // og soundtrack (with added rain effects)
        snowy: 'RLIr00QOshY', // og soundtrack
    },
    '2AM': {
        normal: 'ER9Y14j9cv8',
        rainy: 'jUJfSTxQ5AY',
        snowy: 'bgh4fmerTjs', // og soundtrack
    },
    '3AM': {
        normal: 'Uiyki6MOXTE',
        rainy: 'HDkO7xIVCQo',
        snowy: 't7d1s8CtnHI',
    },
    '4AM': {
        normal: 'fHkIH_V4BR8',
        rainy: 'fEL_YboH4Ec',
        snowy: 'e89MK-m80Us',
    },
    '5AM': {
        normal: 'jPhVfB7RJ6g',
        rainy: 'aNUomh_MhQQ',
        snowy: '6Gn9xPISBJU',
    },
    '6AM': {
        normal: 'X4PWU-ZXnUo',
        rainy: '6ZIctb4Zams', // og soundtrack (with added rain effects)
        snowy: 'hApOsfURlYk', // og soundtrack
    },
    '7AM': {
        normal: 'yD6xHtzxKoE',
        rainy: 'eQMksc1lbWU', // og soundtrack (with added rain effects)
        snowy: 'XUDK1KopEuE', // og soundtrack
    },
    '8AM': {
        normal: 'ZibbB-Oed6g',
        rainy: 'g0MXhEd1jcQ', // og soundtrack (with added rain effects)
        snowy: 'JEm6ND01QIg', // og soundtrack
    },
    '9AM': {
        normal: 'CUmUCLSr9sM',
        rainy: 'q7sIW04WYaE', // og soundtrack (with added rain effects)
        snowy: 'sCL1GAH9bEw', // og soundtrack
    },
    '10AM': {
        normal: 'BSmsWF1rbmo',
        rainy: 'KuCGTGJLJp0', // og soundtrack (with added rain effects)
        snowy: 'S-rSjhrsX3w', // og soundtrack
    },
    '11AM': {
        normal: 'pzXUzf159RQ',
        rainy: 'UUk6LHjDz3U', // og soundtrack (with added rain effects)
        snowy: 'UKYI6a864ts', // og soundtrack
    },
    '12PM': {
        normal: 'xD-xDmjDmaY',
        rainy: 'rH9i9IwakLg', // og soundtrack (with added rain effects)
        snowy: '1-uc_qzwpg8', // og soundtrack
    },
    '1PM': {
        normal: 'exKeVRw6CbE',
        rainy: 'odBAvVVm-yc', // og soundtrack (with added rain effects)
        snowy: 'R7GFeZpybRk', // og soundtrack
    },
    '2PM': {
        normal: 'RcRsshUJ49g',
        rainy: 'ZlD2LV8vJVw', // og soundtrack (with added rain effects)
        snowy: 'fYEZpWNHFwo', // og soundtrack
    },
    '3PM': {
        normal: 'sHIdhAiQHSE',
        rainy: '_xN1m9Hb2AA', // og soundtrack (with added rain effects)
        snowy: 'Md_WptF4Zqo', // og soundtrack
    },
    '4PM': {
        normal: 'W15e7_mZ6YM',
        rainy: 'vEeWD8BuRcI', // og soundtrack (with added rain effects)
        snowy: 'd04c2dxqW_c', // og soundtrack
    },
    '5PM': {
        normal: 'zTJvNYlwE3g',
        rainy: 'lrbVBK7sVgc', // og soundtrack (with added rain effects)
        snowy: 'NWCoRgFr1xI', // og soundtrack
    },
    '6PM': {
        normal: 'Nom8hyUNs5A',
        rainy: '7oX6hfW-CDc', // og soundtrack (with added rain effects)
        snowy: 'p2IvbNqzDp4', // og soundtrack
    },
    '7PM': {
        normal: '4kzXhssr6k4',
        rainy: 'i3sDEy6mCs0', // og soundtrack (with added rain effects)
        snowy: 'OFYQrbAFPA8', // og soundtrack
    },
    '8PM': {
        normal: 'g7frZDc-PZc',
        rainy: 'LffihPHBcDY', // only 13 mins
        snowy: 'jWWrpcHyd_g', // og soundtrack
    },
    '9PM': {
        normal: 'X0q6GHsk4eo',
        rainy: 'YwlXA-vrvuc', // og soundtrack (with added rain effects)
        snowy: 'J4jErsMsEXA', // og soundtrack
    },
    '10PM': {
        normal: 'hhJzmoOYkTo',
        rainy: 'o9Hbulm4GTE', // og soundtrack (with added rain effects)
        snowy: 'bjd96dpJXyo', // og soundtrack
    },
    '11PM': {
        normal: 'qMeSD23TV9Y',
        rainy: '1UlfunDmWKQ', // og soundtrack (with added rain effects)
        snowy: '6Uk9xP-BusM', // og soundtrack
    }
};

export const NLVideoId: Record<FormattedHour, Record<WeatherVariantOption, string>> = {
    '12AM': {
        normal: '1B4bZ5wcmKk',
        rainy: 'rKzBXDwM8AI',
        snowy: 'ojEw5zJAAYY'
    },
    '1AM': {
        normal: 'ywhmMSsAlH8',
        rainy: '_2YVLtG2R6I',
        snowy: 'ht6VVIe6WN0'
    },
    '2AM': {
        normal: 'BTOrMXO1ojs',
        rainy: 'PMxdlBre9MQ',
        snowy: 'ktSWE5CxfEg'
    },
    '3AM': {
        normal: '8p3AGCeRn9g',
        rainy: 's6jZaqkyjOc',
        snowy: '7imCC1N_4Bo'
    },
    '4AM': {
        normal: 'aJFd1YyfF5c',
        rainy: '-wc2bC0oYJ4',
        snowy: 'XuLR-3Baguw'
    },
    '5AM': {
        normal: 'FQgyiNR9j3I',
        rainy: 'WxDyxkFPCS4',
        snowy: 'fe3bLIfz2wM'
    },
    '6AM': {
        normal: 'tt56iCKys9c',
        rainy: 'JTiO1apse7M',
        snowy: 'kH54NDZu1DA'
    },
    '7AM': {
        normal: 'j9TMZASq3tY',
        rainy: '0DCHxOiFD-Q',
        snowy: 'jhgX5fH2ixA'
    },
    '8AM': {
        normal: '3Ft5Ts-k7nA',
        rainy: 'pXR13DsOfyk',
        snowy: 'evC-n3Xz8mU'
    },
    '9AM': {
        normal: 'cDMPoZAs0PU',
        rainy: 'hDP68znU9CI',
        snowy: 'n8LaHn5JZDc'
    },
    '10AM': {
        normal: '-Q2gaCnAsRs',
        rainy: 'u7sku9i7NLs',
        snowy: 'KT1CYCp-Tco'
    },
    '11AM': {
        normal: 'jutfcjHEkPs',
        rainy: 'hX-cFqFaeHA',
        snowy: 'X5N68Fm24Zc'
    },
    '12PM': {
        normal: 'UzWL1_Dm00s',
        rainy: 'B2wcAIDKy84',
        snowy: 'Mzjd7qq56Sg'
    },
    '1PM': {
        normal: 'Uls_tg6PmC0',
        rainy: '4Hah5cZoAS8',
        snowy: 'FLxVYulsS_4'
    },
    '2PM': {
        normal: '2-I9aWSmIJQ',
        rainy: 'oD5yMPtH4k4',
        snowy: 'u1ooKMqOoKU'
    },
    '3PM': {
        normal: 'xV5c814tFkU',
        rainy: '0R-oR2MsdgQ',
        snowy: '4CryyOn8VgY'
    },
    '4PM': {
        normal: '85X5qvS6vx8',
        rainy: 'uOSyLzT1Y_c',
        snowy: 'Int1HqmeHxE'
    },
    '5PM': {
        normal: '9mujlcP7TOg',
        rainy: '9GwvQBJAaAc',
        snowy: 'sqUGGnqopk4'
    },
    '6PM': {
        normal: 'PiWWuaJaV5s',
        rainy: 'GawD2sF8mus',
        snowy: 'aJKtj5Kwld0'
    },
    '7PM': {
        normal: 'LamNB1zr138',
        rainy: 'kZTjhcG_dp8',
        snowy: 'GrHBd4tq_wg'
    },
    '8PM': {
        normal: 'UYme4iSi85o',
        rainy: 'iD_IO72OmhI',
        snowy: 'MLkp9bdcvAU'
    },
    '9PM': {
        normal: 'IhxVTXsu-WI',
        rainy: 'vRbklDymfOk',
        snowy: 'yYtRp2Bpu24'
    },
    '10PM': {
        normal: 'eLP3OXlVZKE',
        rainy: 'ccssO-_GcbI',
        snowy: 'wYi2Sr0c5MA'
    },
    '11PM': {
        normal: 'xD_6Qu3uOy0',
        rainy: 'T3XPf8MLH1E',
        snowy: 'dkLHpp1qNP8'
    }
};

export const NHVideoId: Record<FormattedHour, Record<WeatherVariantOption, string>> = {
    '12AM': {
        normal: 'bEEKnt_Sr_s',
        rainy: 'kUD_3R2NvnQ', // og soundtrack
        snowy: 'V4cggvbT-z8' // og soundtrack
    },
    '1AM': {
        normal: 'o6P2Qq8L5ME',
        rainy: 'gkidvJVq-aA', // og soundtrack
        snowy: 'TDiQ_sJeWdY' // og soundtrack
    },
    '2AM': {
        normal: 'TqBDqiqlGtQ',
        rainy: '9xwZ_hzlLsM', // og soundtrack
        snowy: 'm1q2kqUkkQQ' // og soundtrack
    },
    '3AM': {
        normal: 'Bg_QdJgL-_U',
        rainy: 'hvkvkPOFBmE', // og soundtrack
        snowy: 'b39Wdzkne_w' // og soundtrack
    },
    '4AM': {
        normal: 'bz9Bn91aqEg',
        rainy: 'LJi2vddFLRg', // og soundtrack
        snowy: 'pKMDvMb11bc' // og soundtrack
    },
    '5AM': {
        normal: 'EM3xKFyODEg',
        rainy: 'IHWTizAtBhI', // og soundtrack
        snowy: '1zx_jpHL6aE' // og soundtrack
    },
    '6AM': {
        normal: 'iMYSofSlnFM',
        rainy: 'tcy3ASA54Yk', // og soundtrack
        snowy: 'y9llw8mqxyQ' // og soundtrack
    },
    '7AM': {
        normal: 'ul_FJHwWB0Q',
        rainy: 'bvr4XSRqXjo', // og soundtrack
        snowy: 'CIZh-J2BJZ0' // og soundtrack
    },
    '8AM': {
        normal: 'O9nEprDGzOs',
        rainy: 'wLilcAcoMPU', // og soundtrack
        snowy: 'L-UDoDdtDWE' // og soundtrack
    },
    '9AM': {
        normal: 'Q2XxY88ieGk',
        rainy: 'doGNjFmuank', // og soundtrack
        snowy: 'UCvAoyxi0Co'
    },
    '10AM': {
        normal: 'iEjH7uD544o',
        rainy: 'JgGpIBJ-cNs', // og soundtrack
        snowy: 'rQwMU7s-m7k' // og soundtrack
    },
    '11AM': {
        normal: 'oL95gHPfBPY',
        rainy: 'g1Zs-k0CAgw', // og soundtrack
        snowy: 'wdzYBH_RwAQ' // og soundtrack
    },
    '12PM': {
        normal: 'B8wJJ4vYMw8',
        rainy: 'aLY2hv2Ms_E', // og soundtrack
        snowy: 'f5kGYjv4YPE' // og soundtrack
    },
    '1PM': {
        normal: '5wDWAM1tnGE',
        rainy: '38kPctOc8qs', // og soundtrack
        snowy: 'Y3HsB7NdP2o' // og soundtrack
    },
    '2PM': {
        normal: 'txwtPJDjDtA',
        rainy: 'dtqusNhNqtM', // og soundtrack
        snowy: 'WogdZMTNsZg' // og soundtrack
    },
    '3PM': {
        normal: 'qrALe3QFSL8',
        rainy: 'R0ETxSpoxio', // og soundtrack
        snowy: 'tO1XJ0ChErY' // og soundtrack
    },
    '4PM': {
        normal: 'TigX21NsbHI',
        rainy: 'Ru8VqdOC1P4', // og soundtrack
        snowy: 'Rzof0ZnIugI' // og soundtrack
    },
    '5PM': {
        normal: '2Y4oqntz1qs',
        rainy: 'M243f6q2zcc',
        snowy: 'UCEcS5IW6Fo'
    },
    '6PM': {
        normal: 'nvTGVTTdyK0',
        rainy: 'SAMCT8l3rQ4', // og soundtrack
        snowy: 'AFiTnEYKtJ4' // og soundtrack
    },
    '7PM': {
        normal: 'TEGy7yDGJBs',
        rainy: 'XoF5C2lJ5Og', // og soundtrack
        snowy: 'li_dc9JGHpI' // og soundtrack
    },
    '8PM': {
        normal: 'gmr01OBDUi8',
        rainy: 'C3Nc6Gjmmk8', // og soundtrack
        snowy: '6XX_7Btc4no' // og soundtrack
    },
    '9PM': {
        normal: 'dT8At1WaVP4',
        rainy: 'aJTCz7936GU', // og soundtrack
        snowy: 'CX0grjFCp34' // og soundtrack
    },
    '10PM': {
        normal: 'Hchf1GMPrZo',
        rainy: 'PvV_P2KAnzs', // og soundtrack
        snowy: 'tOgQSxIOKr' // og soundtrack
    },
    '11PM': {
        normal: 'vjHWLKe-cNA',
        rainy: '5CQOZX1dzIY', // og soundtrack
        snowy: 'nkVFLr250OU' // og soundtrack
    }
};