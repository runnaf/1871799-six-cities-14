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
    id: 1,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/3.jpg'
    },
    rating: 4,
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2023-09-13T09:23:20.316Z'
  },
  {
    id: 2,
    user: {
      id: 12,
      isPro: false,
      name: 'Jack',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/2.jpg'
    },
    rating: 5,
    comment: 'What an amazing view! The house is stunning and in an amazing location. The large glass wall had an amazing view of the river!',
    date: '2023-10-30T09:23:20.316Z'
  }
];
