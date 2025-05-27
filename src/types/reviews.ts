type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};
export type ReviewType = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type ReviewsType = ReviewType[];
