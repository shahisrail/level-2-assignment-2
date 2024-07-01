export type Product = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: [
        {
            type: string;
            value: string;
        },
    ];
    Inventory: {
        quantity: number;
        inStock: boolean;
      }
};
