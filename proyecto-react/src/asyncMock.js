const products = [
    {
        id: '1',
        name: 'Kimono negro',
        price: 1000,
        category: 'Gi',
        img: './img/kimononegrolion1.jpg',
        stock: 25,
        description: 'Chaqueta tramada PEARL WEAVE 480 gms. ​Pantalón Bull canvas 12 onzas reforzado. Corte moderno y limpio. Detalles y diseño innovador.'
    },

    {
        id: '2', 
        name: 'Kimono blanco',
        price: 800, 
        category: 'Gi',
        img: './img/kimonoblancolion1.jpg',
        stock: 16,
        description: 'Chaqueta tramada PEARL WEAVE 480 gms. ​Pantalón Bull canvas 12 onzas reforzado. Corte moderno y limpio. Detalles y diseño innovador.'
    },

    {
        id: '3',
        name: 'Faixa blanca', 
        price: 1200, 
        category: 'Gi', 
        img: './img/faixa1.png', 
        stock: 0, 
        description: 'FAIXA DE JIU JITSU BLANCA A2'
    },

    {
        id: '4',
        name: 'GRAPPLING SHORT', 
        price: 1200, 
        category: 'Grappling', 
        img: './img/short1.png', 
        stock: 0, 
        description: 'Bermuda para NOGI modelo VJJ.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}