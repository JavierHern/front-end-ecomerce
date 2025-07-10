// Datos de ejemplo
export const allProducts = [
    {
        id: "1",
        name: 'CubeX Pro 3x3',
        category: 'Cubo de velocidad',
        price: 29.99,
        image: '/images/cubo3x3.png',
        description: "Cubo 3x3,alsñdfjañlksdjfñlakjsdfñlkj alksdfjñlakjsdf ñalksdjfñlakjsdfñlajsd añlskdjfñlaksdjf alñskdjfñalksdjfñlj",
        isFeatured: true,
        isNew: false,
    },
    {
        id: "2",
        name: 'PyraX Speed',
        category: 'Pirámide',
        price: 24.99,
        image: '/images/pyra.png',
        description: "añlsdfjñalksdjf añsldfjañldskjf ñalskdjfñlaksdjf asdfasdfñlkjañlsdfjkñalskdjfñlj añlsdkjfñlakdjsfl",
        isFeatured: true,
        isNew: false,
    },
    {
        id: "3",
        name: 'MegaX Ultimate',
        category: 'Megaminx',
        price: 39.99,
        image: '/images/mega.png',
        isFeatured: true,
        isNew: false,
    },
    {
        id: "4",
        name: 'CubeX 4x4',
        category: 'Cubo de velocidad',
        price: 34.99,
        image: '/images/cubo4x4.png',
        isFeatured: true,
        isNew: false,
    },
    {
        id: "5",
        name: 'CubeX Air',
        category: 'Edición limitada',
        price: 49.99,
        image: '/images/cuboair3x3.png',
        isFeatured: false,
        isNew: true,
    },
    {
        id: "6",
        name: 'CubeX Mini 2x2',
        category: 'Cubo de bolsillo',
        price: 19.99,
        image: '/images/cubo2x2.png',
        isFeatured: false,
        isNew: true,
    },
    {
        id: "7",
        name: 'SkewbX Pro',
        category: 'Skewb',
        price: 27.99,
        image: '/images/skewb.png',
        isFeatured: false,
        isNew: true,
    },
    {
        id: "8",
        name: 'CubeX 5x5 Master',
        category: 'Avanzado',
        price: 44.99,
        image: '/images/cubo5x5.png',
        isFeatured: false,
        isNew: true,
    }
]

// Creamos listas especializadas filtrando el array principal.
export const featuredProducts = allProducts.filter(p => p.isFeatured);
export const newProducts = allProducts.filter(p => p.isNew);