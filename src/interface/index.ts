// export interface IUser {
//   email: string;
// }

import { User } from "firebase/auth";

export interface IProductProps {
  id: string;
  title: string;
  price: number;
  image: string;
  rating: number;
}

export interface IActionProps {
  type: string;
  payload: User | IProductProps | number | null;
}

export interface IInitialStateProps {
  user: User | null;
  cart: IProductProps[];
  dispatch?: React.Dispatch<IActionProps>;
}
