export type Review = {
    id: number;
    customerName: string;
    rating: number;
    comment: string;
    date: string;
};

export const reviews: Review[] = [
    {
        id: 1,
        customerName: "Ayesha Rahman",
        rating: 5,
        comment: "Beautiful saree! The fabric quality and color are amazing. I really loved it.",
        date: "October 20, 2026",
    },
    {
        id: 2,
        customerName: "Nusrat Jahan",
        rating: 4,
        comment: "Very elegant design and comfortable fabric. Looks exactly as shown.",
        date: "October 18, 2026",
    },
    {
        id: 3,
        customerName: "Sadia Islam",
        rating: 5,
        comment: "Excellent product. The packaging was also very nice.",
        date: "October 15, 2026",
    },
];