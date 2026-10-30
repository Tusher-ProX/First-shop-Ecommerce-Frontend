export interface FeaturedProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    productId: string;
}

export const featuredProducts: FeaturedProduct[] = [
    {
        id: 1,
        name: "Premium Collection",
        description: "Elegance made for your special moments.",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
        productId: "premium-collection",
    },
    {
        id: 2,
        name: "New Arrivals",
        description: "Discover your next favourite style.",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
        productId: "new-arrivals",
    },
    {
        id: 3,
        name: "Featured Collection",
        description: "Find something beautiful for yourself.",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb",
        productId: "featured-collection",
    },
];