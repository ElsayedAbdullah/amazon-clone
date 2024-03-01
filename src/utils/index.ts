import { IProductProps } from "../interface";

export const getCartTotalPrice = (cart: IProductProps[]) => {
  return cart.reduce((total: number, item: { price: number }) => {
    return total + item.price;
  }, 0);
};
