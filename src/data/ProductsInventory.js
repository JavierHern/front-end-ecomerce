// Datos de ejemplo

const featuredProducts = [
    {
        id: 1,
        name: 'CubeX Pro 3x3',
        category: 'Cubo de velocidad',
        price: 29.99,
        colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'
        ],
        image: '/public/images/cubo3x3.png'
    },
    {
        id: 2,
        name: 'PyraX Speed',
        category: 'Pirámide',
        price: 24.99,
        colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f'
        ],
        image: '/public/images/pyra.png'
    },
    {
        id: 3,
        name: 'MegaX Ultimate',
        category: 'Megaminx',
        price: 39.99,
        colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'
        ],
        image: '/public/images/mega.png'
    },
    {
        id: 4,
        name: 'CubeX 4x4',
        category: 'Cubo de velocidad',
        price: 34.99,
        colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'
        ],
        image: '/public/images/cubo4x4.png'
    }
];

const newProducts = [
    {
        id: 5,
        name: 'CubeX Air',
        category: 'Edición limitada',
        price: 49.99,
        colors: ['#34495e', '#ecf0f1', '#95a5a6'],
        image: '/public/images/cuboair3x3.png'
    },
    {
        id: 6,
        name: 'CubeX Mini 2x2',
        category: 'Cubo de bolsillo',
        price: 19.99,
        colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'],
        image: '/public/images/cubo2x2.png'
    },
    {
        id: 7,
        name: 'SquareX Pro',
        category: 'Square',
        price: 27.99,
        colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f'],
        image: '/public/images/skewb.png'
    },
    {
        id: 8,
        name: 'CubeX 5x5 Master',
        category: 'Avanzado',
        price: 44.99,
        colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6', '#ecf0f1'],
        image: '/public/images/cubo5x5.png'
    }
];

// Exportar los arrays para usar en otros componentes
export { featuredProducts, newProducts };