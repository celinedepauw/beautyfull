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
    HuileV = "Huile",
    GommageV = "Gommage",
    MasqueV = "Masque"
};

export enum Corps {
    Lait = "Lait corps",
    Mains = "Crème mains",
    Pieds = "Crème pieds",
    GommageC = "Gommage",
    CrèmeSolaire = "Crème Solaire",
    CrèmeAprèsSoleil = "Crème après soleil",
    HuileC = "Huile",
    Déodorant = "Déodorant",
    BaumeLèvres = "Baume à lèvres"
};

export enum Cheveux {
    HuileCh = "Huile",
    Shampoing = "Shampoing",
    AprèsShampoing = "Après-Shampoing",
    MasqueCh = "Masque",
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
    description?: string,
    comments?: string,
    category: Category,
    subCategory: Visage | Corps | Cheveux
};

export const products: Product[] = [
    {
        id: 0,
        name: 'Gel nettoyant visage',
        brand: 'La Cassidaine en Provence',
        size: '100ml',
        picture: '../../assets/images/nettoyant_visage_cassidaine.JPG',
        price: 25,
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.Nettoyant
    },
    {
        id: 1,
        name: 'Brume revitalisante et matifiante',
        brand: 'Nidé.Co',
        size: '50ml',
        picture: '../../assets/images/brume_visage_nideco.JPG',
        price: 21,
        when: 'stock',
        description: 'A utiliser après le sport pour éviter la peau rouge et pour matifier',
        category: Category.Visage,
        subCategory: Visage.Brume
    },
    {
        id: 2,
        name: 'Shampoing détoxifiant et gommant',
        brand: 'Massato',
        size: '100ml',
        picture: '../../assets/images/shampoing_massato.JPG',
        price: 22,
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.Shampoing
    },
    {
        id: 3,
        name: 'Exfoliant enzymatique',
        brand: 'Exertier',
        size: '50ml',
        picture: '../../assets/images/gommage_visage_exertier.JPG',
        price: 29,
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.GommageV
    },
    {
        id: 4,
        name: 'Sérum visage solide nuit',
        brand: 'Balade en Provence',
        size: '28g',
        picture: '../../assets/images/serum_visage_balade_en_provence.JPG',
        price: 25,
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.Sérum
    },
    {
        id: 5,
        name: 'Soin bouclier buste et décolleté',
        brand: 'Kadalys',
        size: '50ml',
        picture: '../../assets/images/soin_buste_kadalys.JPG',
        price: 32,
        when: 'stock',
        description: 'Protection contre la pollution lumineuse des écrans',
        category: Category.Corps,
        subCategory: Corps.Lait
    },
    {
        id: 6,
        name: 'Après-shampoing nourrissant',
        brand: 'Lynaya',
        size: '150ml',
        picture: '../../assets/images/apres_shampoing_lynaya.JPG',
        price: 15,
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.Shampoing
    },
    {
        id: 7,
        name: 'Gel relaxant de récupération Effet Cryo',
        brand: 'SeventyOne Percent',
        size: '60ml',
        picture: '../../assets/images/creme_corps_seventyOne_percent.JPG',
        price: 22,
        when: 'stock',
        description: 'Masser sur la zone du corps à apaiser après le sport',
        category: Category.Corps,
        subCategory: Corps.Lait
    },
    {
        id: 8,
        name: 'Baume de soin zones sèches',
        brand: 'Peace and Skin',
        size: '30ml',
        picture: '../../assets/images/creme_corps_peace_and_skin.JPG',
        price: 15,
        when: 'stock',
        description: 'Pour zones sèches : coudes, mains, pieds...',
        category: Category.Corps,
        subCategory: Corps.Lait
    },
    {
        id: 9,
        name: 'Masque cheveux',
        brand: 'Biothalys',
        size: '60ml',
        picture: '../../assets/images/masque_cheveux_biothalys.JPG',
        price: 18,
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.MasqueCh
    },
    {
        id: 10,
        name: 'Baume nourrissant',
        brand: 'Les Petits Prodiges',
        size: '30ml',
        picture: '../../assets/images/baume_levres_les_petits_prodiges.JPG',
        price: 15,
        when: 'stock',
        category: Category.Corps,
        subCategory: Corps.BaumeLèvres
    },
    {
        id: 11,
        name: 'Crème nourrissante visage',
        brand: 'Les secrets d\'Emily',
        size: '50ml',
        picture: '../../assets/images/creme_visage_secrets_emilie.JPG',
        price: 20,
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 12,
        name: 'Masque visage nourrissant',
        brand: 'Défi Forme',
        size: '50ml',
        picture: '../../assets/images/masque_visage_defiforme.JPG',
        price: 35,
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.MasqueV
    },
    {
        id: 13,
        name: 'Brume Anti-pollution 3 en 1',
        brand: 'Jeune et Belle',
        size: '100ml',
        picture: '../../assets/images/brume_visage_jeune_et_belle.JPG',
        price: 30,
        when: 'stock',
        description:'Peut être utilisée sur le corps et les cheveux',
        category: Category.Visage,
        subCategory: Visage.Brume
    },
    {
        id: 14,
        name: 'Gel nettoyant purifiant',
        brand: 'Huygens',
        size: '75ml',
        picture: '../../assets/images/nettoyant_visage_huygens.JPG',
        price: 13,
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.Nettoyant
    },
];


