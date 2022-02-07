export enum Category {
    Visage = "Visage",
    Corps = "Corps",
    Cheveux = "Cheveux"
};

export enum Visage {
    Crème = "Crème",
    Nettoyant = "Nettoyant",
    EauMicellaire = "Eau micellaire",
    Sérum = "Sérum",
    Lotion = "Lotion",
    Brume = "Brume",
    ContourYeux = "Contour des yeux",
    Huile = "Huile",
    Gommage = "Gommage",
    Masque = "Masque"
};

export enum Corps {
    Crème = "Crème",
    Mains = "Crème mains",
    Pieds = "Crème pieds",
    Gommage = "Gommage",
    CrèmeSolaire = "Crème Solaire",
    CrèmeAprèsSoleil = "Crème après soleil",
    Huile = "Huile",
    Déodorant = "Déodorant",
    BaumeLèvres = "Baume à lèvres"
};

export enum Cheveux {
    Huile = "Huile",
    Shampoing = "Shampoing",
    AprèsShampoing = "Après-Shampoing",
    Masque = "Masque",
    CrèmeSoin = "Crème de soins"
}

export interface Product{
    id: number,
    name: string,
    brand: string,
    size: string,
    picture?: string,
    price?: number,
    when: string,
    comments?: string,
    category: Category,
    subCategory: Visage | Corps | Cheveux
};

export const products: Product[] = [
    {
        id: 0,
        name: 'Crème cell-energy',
        brand: 'Dior',
        size: '50ml',
        picture: '',
        price: 90,
        when: 'janvier 2022',
        comments: '',
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 1,
        name: 'Sérum cell-energy',
        brand: 'Dior',
        size: '50ml',
        picture: '',
        price: 50,
        when: 'janvier 2022',
        comments: 'lorem ipsum',
        category: Category.Visage,
        subCategory: Visage.Sérum
    },
    {
        id: 2,
        name: 'Shampoing purifiant',
        brand: 'Massato',
        size: '100ml',
        picture: '',
        price: 50,
        when: 'stock',
        comments: 'lorem ipsum',
        category: Category.Cheveux,
        subCategory: Cheveux.Shampoing
    }
];


