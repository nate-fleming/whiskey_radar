import { format } from "date-fns";

export type Post = {
  id: number;
  username: string;
  date: string;
  location: string;
  bottle: string;
  price: number;
};

export const mockPosts: Post[] = [
  {
    id: 1,
    username: "Jeff S",
    date: format(new Date(2020, 4, 24), "MMM d yyyy"),
    location: `Red's`,
    bottle: "Wild Turkey 101 Rye",
    price: 45,
  },
  {
    id: 2,
    username: "Brad",
    date: format(new Date(2020, 4, 29), "MMM d yyyy"),
    location: "Frontier",
    bottle: "Blood Oath",
    price: 200,
  },
  {
    id: 3,
    username: "Justin",
    date: format(new Date(2020, 4, 4), "MMM d yyyy"),
    location: "Liquor Locker",
    bottle: `Michter's Rye`,
    price: 42,
  },
  {
    id: 4,
    username: "Dean",
    date: format(new Date(2020, 3, 4), "MMM d yyyy"),
    location: "Liquer Locker",
    bottle: "Evan Williams B.I.B.",
    price: 14,
  },
  {
    id: 5,
    username: "Jesse",
    date: format(new Date(2020, 3, 20), "MMM d yyyy"),
    location: "Beverage Barn",
    bottle: "Old Forester 1910",
    price: 52,
  },
  {
    id: 6,
    username: "Joe",
    date: format(new Date(2020, 3, 4), "MMM d yyyy"),
    location: "Rite Aid",
    bottle: "W.L. Weller Special Reserve",
    price: 40,
  },
  {
    id: 7,
    username: "Jeff D",
    date: format(new Date(2020, 3, 4), "MMM d yyyy"),
    location: "Mr. Whiskers",
    bottle: "Eagle Rare",
    price: 60,
  },
];
