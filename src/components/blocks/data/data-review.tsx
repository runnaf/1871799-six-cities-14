type TComment = {
    comment: string;
    date: string;
    rating: number;
    id: number;
    user: TUser;
  }
  
  type TUser = {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  }


export const DataReviews: TComment[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Tue Oct 31 2023 12:28:06 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
    avatarUrl: 'https://14.react.pages.academy/static/avatar/7.jpg',
    id: 1,
    isPro: false,
    name: 'Oliver.conner'
  }}
]