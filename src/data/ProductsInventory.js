// Datos de ejemplo

const featuredProducts = [
    {
        id: 1,
        name: 'CubeX Pro 3x3',
        category: 'Cubo de velocidad',
        price: 29.99,
        image: '/images/cubo3x3.png'
    },
    {
        id: 2,
        name: 'PyraX Speed',
        category: 'Pirámide',
        price: 24.99,
        image: '/images/pyra.png'
    },
    {
        id: 3,
        name: 'MegaX Ultimate',
        category: 'Megaminx',
        price: 39.99,
        image: '/images/mega.png'
    },
    {
        id: 4,
        name: 'CubeX 4x4',
        category: 'Cubo de velocidad',
        price: 34.99,
        image: '/images/cubo4x4.png'
    }
];

const newProducts = [
    {
        id: 5,
        name: 'CubeX Air',
        category: 'Edición limitada',
        price: 49.99,
        image: '/images/cuboair3x3.png'
    },
    {
        id: 6,
        name: 'CubeX Mini 2x2',
        category: 'Cubo de bolsillo',
        price: 19.99,
        image: '/images/cubo2x2.png'
    },
    {
        id: 7,
        name: 'SquareX Pro',
        category: 'Square',
        price: 27.99,
        image: '/images/skewb.png'
    },
    {
        id: 8,
        name: 'CubeX 5x5 Master',
        category: 'Avanzado',
        price: 44.99,
        image: '/images/cubo5x5.png'
    }
];

// Exportar los arrays para usar en otros componentes
export { featuredProducts, newProducts };