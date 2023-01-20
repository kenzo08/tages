export interface ProductDataType  {
    id: string;
    name: string;
    code: string | null;
    price: { old_price: number | null, current_price: number };
    image: { url: string };
    material: number;
}

export type SelectOption = {
    id?: number | string;
    label: string | number;
    value: string | number;
    [x: string]: any;
};
