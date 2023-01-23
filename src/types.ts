export interface IProductDataType  {
    id: string;
    name: string;
    code: string | null;
    price: { old_price: number | null, current_price: number };
    image: { url: string };
    material: number;
}

export interface IProductCard {
    id: string;
    name: string;
    code: string | null;
    imgUrl: string;
    oldPrice: number | null;
    currentPrice: number;
    material: number;
    isInBasket: boolean;
    isInFavourites: boolean;

}
