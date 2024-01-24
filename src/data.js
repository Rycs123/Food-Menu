const foodMenu = [
    {
        name: "Nasi Goreng",
        description: "Nasi yang digoreng dengan bumbu rempah khas Indonesia",
        fare: 25000,
        source: "food/nasi-goreng.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Sate Ayam",
        description:
            "Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang",
        fare: 15000,
        source: "food/sate-ayam.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Gado-Gado",
        description: "Sayuran segar dengan bumbu kacang khas Indonesia",
        fare: 20000,
        source: "food/gado-gado.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Rendang",
        description:
            "Daging yang dimasak dengan santan dan rempah-rempah khas Padang",
        fare: 30000,
        source: "food/rendang.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Soto Ayam",
        description: "Sup ayam dengan kuah kuning dan berbagai rempah",
        fare: 18000,
        source: "food/soto-ayam.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Martabak",
        description:
            "Makanan dadakan yang terbuat dari adonan tepung dengan berbagai isian",
        fare: 20000,
        source: "food/martabak.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Bakso",
        description:
            "Bola daging yang direbus disajikan dengan mie dan kuah kaldu",
        fare: 12000,
        source: "food/bakso.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Soto Betawi",
        description: "Sup daging dengan kuah santan kental khas Betawi",
        fare: 22000,
        source: "food/soto-betawi.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
    {
        name: "Ayam Penyet",
        description:
            "Ayam yang digeprek dengan bumbu rempah dan disajikan dengan sambal",
        fare: 18000,
        source: "food/ayam-penyet.jpg",
        stock: Math.random() >= 0.5 ? true : false,
    },
];

export default foodMenu;
