import {
    AutoAwesome,
    StarPurple500,
    Bloodtype,
    MenuBook,
    FamilyRestroom,
    VolunteerActivism,
    MoodBad,
    Pool,
    LiveTv,
    LocalMovies,
    Reorder,
    Fort,
} from '@mui/icons-material'


type IconComponentsType = {
    [key: string]: React.ComponentType;
};

interface ListItem {
    title: string,
    icon: string,
    url: string
}

export const iconComponents: IconComponentsType = {
    AutoAwesome,
    StarPurple500,
    Bloodtype,
    MenuBook,
    FamilyRestroom,
    VolunteerActivism,
    MoodBad,
    Pool,
    LiveTv,
    LocalMovies,
    Reorder,
    Fort,
};

export const TOP_LISTS:ListItem[] = [
    {
        title: 'ТОП 100 популярных фильмов',
        icon: 'AutoAwesome',
        url: '/popular'
    },
    {
        title: 'ТОП 250 лучших фильмов',
        icon: 'StarPurple500',
        url: '/best'
    },
    {
        title: 'Вампиры',
        icon: 'Bloodtype',
        url: '/vampire'
    },
    {
        title: 'Комиксы',
        icon: 'MenuBook',
        url: '/comics'
    },
    {
        title: 'Семейный',
        icon: 'FamilyRestroom',
        url: '/family'
    },
    {
        title: 'Романтика',
        icon: 'VolunteerActivism',
        url: '/romantic'
    },
    {
        title: 'Зомби',
        icon: 'MoodBad',
        url: '/zombie'
    },
    {
        title: 'Катастрофы',
        icon: 'Pool',
        url: '/catastrophe'
    },
    {
        title: 'Популярные сериалы',
        icon: 'LiveTv',
        url: '/popular-serials'
    },
];

export const MOVIE_LISTS: ListItem[] = [
    {
        title: 'Фильмы',
        icon: 'LocalMovies',
        url: '/films'
    },
    {
        title: 'Сериалы',
        icon: 'Reorder',
        url: '/serials'
    },
    {
        title: 'Мультфильмы',
        icon: 'Fort',
        url: '/cartoons'
    },
];