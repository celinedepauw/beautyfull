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
    ContourDesYeux = "Contour des yeux",
    Huile = "Huile",
    Gommage = "Gommage",
    Masque = "Masque Visage",
    BaumeALèvres = "Baume à lèvres"
};

export enum Corps {
    Lait = "Lait corps",
    Mains = "Crème mains",
    Pieds = "Crème pieds",
    Gommage = "Gommage corps",
    CrèmeSolaire = "Crème Solaire",
    CrèmeAprèsSoleil = "Crème après soleil",
    HuileCorps = "Huile corps",
    Déodorant = "Déodorant",
    Savon = "Savon"
};

export enum Cheveux {
    HuileCheveux = "Huile cheveux",
    Shampoing = "Shampoing",
    AprèsShampoing = "Après Shampoing",
    Masque = "Masque cheveux",
    CrèmeDeSoins = "Crème de soins",
    Autre = "Autre"
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
        when: 'used',
        category: Category.Visage,
        subCategory: Visage.Gommage
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
        when: 'used',
        category: Category.Cheveux,
        subCategory: Cheveux.AprèsShampoing
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
        subCategory: Cheveux.Masque
    },
    {
        id: 10,
        name: 'Baume nourrissant',
        brand: 'Les Petits Prodiges',
        size: '30ml',
        picture: '../../assets/images/baume_levres_les_petits_prodiges.JPG',
        price: 15,
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.BaumeALèvres
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
        subCategory: Visage.Masque
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
        when: 'used',
        category: Category.Visage,
        subCategory: Visage.Nettoyant
    },
    {
        id: 15,
        name: 'Après-shampoing',
        brand: 'Chogan',
        size: '250ml',
        picture: '../../assets/images/apres_shampoing_chogan.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.AprèsShampoing
    },
    {
        id: 16,
        name: 'Masque nourrissant cheveux',
        brand: 'Chogan',
        size: '150ml',
        picture: '../../assets/images/masque_cheveux_chogan.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.Masque
    },
    {
        id: 17,
        name: 'Crème de nuit réconfortante',
        brand: 'Imparfaite',
        size: '30ml',
        picture: '../../assets/images/creme_nuit_imparfaite.JPG',
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 18,
        name: 'Crème fraîcheur hydratante',
        brand: 'Clarins',
        size: '15ml',
        picture: '../../assets/images/creme_hydratante_clarins.JPG',
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 19,
        name: 'Gel crème hydratant au concombre BIO',
        brand: 'La Rosée',
        size: '60ml',
        picture: '../../assets/images/gel_creme_visage_la_rosee.JPG',
        when: 'used',
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 20,
        name: 'Crème hydratante aux sources des glaciers',
        brand: 'Polaar',
        size: '15ml',
        picture: '../../assets/images/creme_hydratante_polaar.JPG',
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 21,
        name: 'Crème lissante à l\'olivier de Sibérie',
        brand: 'Polaar',
        size: '15ml',
        picture: '../../assets/images/creme_lissante_polaar.JPG',
        when: 'used',
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 22,
        name: 'Crème de jour anti-âge global',
        brand: 'Garancia',
        size: '30ml',
        picture: '../../assets/images/creme_jour_garancia.JPG',
        when: 'stock',
        price: 45,
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 23,
        name: 'Crème neutre jeunesse',
        brand: 'Aromazone',
        size: '50ml',
        picture: '../../assets/images/creme_jeune_aromazone.JPG',
        when: 'stock',
        price: 4,
        category: Category.Visage,
        subCategory: Visage.Crème
    },
    {
        id: 24,
        name: 'Baume lèvres réparateur',
        brand: 'Les Terriennes',
        size: '15ml',
        picture: '../../assets/images/baume_levres_terriennes.JPG',
        when: 'stock',
        price: 11,
        category: Category.Visage,
        subCategory: Visage.BaumeALèvres
    },
    {
        id: 25,
        name: 'Huile sèche multi-usages',
        brand: 'Belle Oemine',
        size: '30ml',
        picture: '../../assets/images/huile_seche_belle_oemine.JPG',
        when: 'stock',
        price: 11,
        category: Category.Corps,
        subCategory: Corps.HuileCorps
    },
    {
        id: 26,
        name: 'Déodorant',
        brand: 'Pur Eden',
        size: '50ml',
        picture: '../../assets/images/deo_pur_eden.JPG',
        when: 'used',
        price: 5,
        category: Category.Corps,
        subCategory: Corps.Déodorant
    },
    {
        id: 27,
        name: 'Baume démélant',
        brand: 'Gravier',
        size: '500ml',
        picture: '../../assets/images/baume_demelant_gravier.JPG',
        when: 'stock',
        price: 7,
        category: Category.Cheveux,
        subCategory: Cheveux.AprèsShampoing
    },
    {
        id: 28,
        name: 'Roll-on multi-actions',
        brand: 'Garancia',
        size: '3ml',
        picture: '../../assets/images/roll_on_yeux_garancia.JPG',
        when: 'stock',
        category: Category.Visage,
        subCategory: Visage.ContourDesYeux
    },
    {
        id: 29,
        name: 'Lotion visage éclat du teint',
        brand: 'Natura Siberica',
        size: '200ml',
        picture: '../../assets/images/lotion_eclat_natura_siberica.JPG',
        when: 'used',
        price: 11,
        category: Category.Visage,
        subCategory: Visage.Lotion
    },
    {
        id: 30,
        name: 'Crème moussante nettoyante',
        brand: 'Natura Siberica',
        size: '100ml',
        picture: '../../assets/images/nettoyant_visage_natura_siberica.JPG',
        when: 'used',
        price: 8,
        category: Category.Visage,
        subCategory: Visage.Nettoyant
    },
    {
        id: 31,
        name: 'Sauna facial',
        brand: 'Cocktail de beauté',
        size: '50g',
        picture: '../../assets/images/sauna_facial.JPG',
        when: 'stock',
        description: 'Poudre efferfescente',
        category: Category.Visage,
        subCategory: Visage.Gommage
    },
    {
        id: 32,
        name: 'Masque tonifiant',
        brand: 'Compagnie des Indes',
        size: '50ml',
        picture: '../../assets/images/masque_tonifiant_compagnie_indes.JPG',
        when: 'stock',
        price: 15,
        category: Category.Visage,
        subCategory: Visage.Masque
    },
    {
        id: 33,
        name: 'Crème corps cédrat passion',
        brand: 'Baija',
        size: '75ml',
        picture: '../../assets/images/creme_corps_baija.JPG',
        when: 'used',
        price: 14,
        category: Category.Corps,
        subCategory: Corps.Lait
    },
    {
        id: 34,
        name: 'Crème corps Rituals',
        brand: 'Rituals',
        size: '70ml',
        picture: '../../assets/images/creme_corps_rituals.JPG',
        when: 'stock',
        category: Category.Corps,
        subCategory: Corps.Lait
    },
    {
        id: 35,
        name: 'Savon à froid mangue',
        brand: 'Rythm and Bio',
        size: '80g',
        picture: '../../assets/images/savon_mangoloco.JPG',
        when: 'stock',
        price: 5,
        category: Category.Corps,
        subCategory: Corps.Savon
    },
    {
        id: 36,
        name: 'Baume multi-usages',
        brand: 'Les Petits Prodiges',
        size: '30ml',
        picture: '../../assets/images/baume_multiusages_petits_prodiges.JPG',
        when: 'stock',
        price: 15,
        category: Category.Corps,
        subCategory: Corps.Lait 
    },
    {
        id: 37,
        name: 'Crème mains hydratante',
        brand: 'Voilà',
        size: '40ml',
        picture: '../../assets/images/creme_mains_voila.JPG',
        when: 'stock',
        category: Category.Corps,
        subCategory: Corps.Mains
    },
    {
        id: 38,
        name: 'Gommage mains',
        brand: 'Vitae Cosmetics',
        size: '50ml',
        picture: '../../assets/images/gommage_mains_vitae.JPG',
        when: 'stock',
        price: 18,
        category: Category.Corps,
        subCategory: Corps.Mains
    },
    {
        id: 39,
        name: 'Shampoing Morning Street',
        brand: 'Morning Street',
        size: '50ml',
        picture: '../../assets/images/shampoing_morning_street.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.Shampoing
    },
    {
        id: 40,
        name: 'Shampoing extra-doux',
        brand: 'Naturé Moi',
        size: '250ml',
        picture: '../../assets/images/shampoing_naturemoi.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.Shampoing
    },
    {
        id: 41,
        name: 'Après-Shampoing extra-doux',
        brand: 'Naturé Moi',
        size: '200ml',
        picture: '../../assets/images/apres_shampoing_naturemoi.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.AprèsShampoing
    },
    {
        id: 42,
        name: 'Après-Shampoing sublimateur',
        brand: 'Speciology',
        size: '33ml',
        picture: '../../assets/images/apres_shampoing_speciology.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.AprèsShampoing
    },
    {
        id: 43,
        name: 'Masque nourrissant',
        brand: 'Amika',
        size: '20ml',
        picture: '../../assets/images/masque_amika.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.Masque
    },
    {
        id: 44,
        name: 'Masque extentioniste',
        brand: 'Kerastase',
        size: '75ml',
        picture: '../../assets/images/masque_kerastase.JPG',
        when: 'stock',
        category: Category.Cheveux,
        subCategory: Cheveux.Masque
    },
    {
        id: 45,
        name: 'Spray beach wave',
        brand: 'Massato',
        size: '100ml',
        picture: '../../assets/images/spray_massato.JPG',
        when: 'used',
        category: Category.Cheveux,
        subCategory: Cheveux.Autre
    },
    {
        id: 46,
        name: 'Lait après soleil',
        brand: 'Nuxe',
        size: '50ml',
        picture: '../../assets/images/apres_soleil_nuxe.JPG',
        when: 'used',
        category: Category.Corps,
        subCategory: Corps.CrèmeAprèsSoleil
    },
    {
        id: 47,
        name: 'Brume solaire SPF30',
        brand: 'Garnier',
        size: '200ml',
        picture: '../../assets/images/solaire_garnier_30.JPG',
        when: 'stock',
        category: Category.Corps,
        subCategory: Corps.CrèmeSolaire
    },
    {
        id: 48,
        name: 'Crème solaire SPF30',
        brand: 'Saint Geron',
        size: '50ml',
        picture: '../../assets/images/solaire_saint_geron_30.JPG',
        when: 'stock',
        category: Category.Corps,
        subCategory: Corps.CrèmeSolaire
    },
    {
        id: 49,
        name: 'Crème solaire visage SPF50',
        brand: 'Nivea',
        size: '50ml',
        picture: '../../assets/images/solaire_visage_nivea_50.JPG',
        when: 'used',
        category: Category.Corps,
        subCategory: Corps.CrèmeSolaire
    },
    {
        id: 50,
        name: 'Brume solaire SPF30',
        brand: 'L\'Oréal',
        size: '200ml',
        picture: '../../assets/images/solaire_loreal_30.JPG',
        when: 'stock',
        category: Category.Corps,
        subCategory: Corps.CrèmeSolaire
    },
    {
        id: 51,
        name: 'Crème solaire SPF50+',
        brand: 'Seventy One',
        size: '50ml',
        picture: '../../assets/images/solaire_seventy_one_50.JPG',
        when: 'stock',
        category: Category.Corps,
        subCategory: Corps.CrèmeSolaire
    },
];


