exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('products')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          {
            id: 1,
            category: 'Sobremesas',
            name: 'Bolo de pote',
            descriptions:
              'Camadas decadentes de bolo de chocolate fofinho intercaladas com brigadeiro cremoso. Uma sobremesa irresistível servida em potinhos individuais.',
            price: '12.22',
            img: '22b6d88e1c594807abe6-bolo.png',
            created_at: '2023-12-22 21:57:47',
          },
          {
            id: 2,
            category: 'Sobremesas',
            name: 'Peachy Pastries',
            descriptions:
              'Delicados folhados recheados com pêssegos frescos, creme de baunilha e uma pitada de canela. Uma sobremesa celestial.',
            price: '32.97',
            img: 'fe830debd168e0d61a6e-Dish.png',
            created_at: '2023-12-23 04:09:12',
          },
          {
            id: 3,
            category: 'Sobremesas',
            name: 'Provolone Pie',
            descriptions:
              'Uma torta irresistível com camadas de queijo provolone derretido, tomates maduros e manjericão fresco. Uma explosão de sabores mediterrâneos.',
            price: '79.97',
            img: '8e5f72aae3ebe42ee795-name=prune, size=400.png',
            created_at: '2023-12-23 04:09:30',
          },
          {
            id: 4,
            category: 'Sobremesas',
            name: 'Macarons',
            descriptions:
              'Macarons coloridos e leves, recheados com ganache de chocolate, creme de framboesa e caramelo salgado. Uma explosão de texturas e sabores.',
            price: '79',
            img: 'e98c29ddaf0bd7125f4b-Dish (1).png',
            created_at: '2023-12-26 15:25:02',
          },
          {
            id: 5,
            category: 'Refeições',
            name: 'Spaghetti Gambe',
            descriptions:
              'Delicioso espaguete ao molho de tomate fresco, manjericão e almôndegas suculentas. Uma explosão de sabores italianos.',
            price: '79.97',
            img: '7d5a9707e4051dd55098-name=gambe, size=400.png',
            created_at: '2023-12-26 15:27:17',
          },
          {
            id: 6,
            category: 'Refeições',
            name: 'Salada Ravanello',
            descriptions:
              'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
            price: '22.00',
            img: 'c656433c04258629c606-image 2.png',
            created_at: '2023-12-26 15:34:47',
          },
          {
            id: 7,
            category: 'Bebidas',
            name: 'Suco de maracujá',
            descriptions:
              'Refrescante suco feito com maracujás frescos, água gelada e um toque de açúcar. Uma explosão cítrica e tropical em cada gole.',
            price: '13.97',
            img: '936fc86ef960dd3ccb37-Dish (4).png',
            created_at: '2023-12-26 15:37:38',
          },
          {
            id: 8,
            category: 'Bebidas',
            name: 'Espresso',
            descriptions:
              'Uma dose intensa de café, preparada com grãos de alta qualidade, moídos finamente e extraídos sob pressão. Aroma intenso e sabor encorpado.',
            price: '15.97',
            img: 'fd0aacc7775a31ca4ce2-Dish (3).png',
            created_at: '2023-12-26 15:42:00',
          },
          {
            id: 9,
            category: 'Bebidas',
            name: 'Tè d\'autunno',
            descriptions:
              'Uma mistura reconfortante de chá preto, canela e noz-moscada, com um toque sutil de casca de laranja. Perfeito para as tardes de outono.',
            price: '19.97',
            img: 'd17650b4480d33829978-image 11.png',
            created_at: '2023-12-26 15:47:34',
          },
          {
            id: 10,
            category: 'Refeições',
            name: 'Torradas de Parma',
            descriptions:
              'Torradas crocantes cobertas com presunto de Parma fatiado, queijo parmesão derretido e rúcula fresca. Uma entrada refinada e saborosa.',
            price: '27.42',
            img: '02b5fe7489ae27aebbb4-name=parma, size=400.png',
            created_at: '2023-12-27 13:17:11',
          },
        ]);
      });
  };
  