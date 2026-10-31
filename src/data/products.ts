
export type Product = {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    image: string;
    images?: string[];
    label: string;
    sku?: string;
    description?: string;
    fabric?: string;
    blousePiece?: boolean;
    blousePiecePrice?: number;
    colors?: {
        name: string;
        hex: string;
        images: string[];
    }[];
    stock: number;

    rating: number;
    reviewCount: number;
};

export const products: Product[] = [

    {
        id: "1",
        name: "Elegant Saree",

        // Pricing
        price: 1500,
        originalPrice: 1800,
        blousePiece: true,
        blousePiecePrice: 300,

        // Product Images
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
        ],

        // Product Information
        label: "Bestseller",
        sku: "SC-001",
        description: "An elegant saree designed for special occasions, combining timeless style with beautiful details.",
        fabric: "Silk",

        // Available Colors
        colors: [
            {
                name: "Maroon",
                hex: "#722F3E",
                images: [
                    "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
                    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
                ],
            },
            {
                name: "Red",
                hex: "#B91C1C",
                images: [
                    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
                ],
            },
            {
                name: "Black",
                hex: "#222222",
                images: [
                    "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
                ],
            },
            {
                name: "Navy Blue",
                hex: "#1E3A5F",
                images: [
                    "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
                ],
            },
        ],

        // Stock
        stock: 12,

        // Rating & Reviews
        rating: 4.8,
        reviewCount: 24,
    },

];
