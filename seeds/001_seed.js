exports.seed = function(knex) {
    return knex('products').del()
      .then(function() {
        return knex('products').insert([
          {
            id: 1,
            category: 'Sobremesas',
            name: 'Bolo de pote',
            descriptions: 'dedfeawfa',
            price: '12.22',
            img: '34526beb324278c70079-bolo.png',
            created_at: '2023-12-22 21:57:47'
          },
          {
            id: 2,
            category: 'Sobremesas',
            name: 'Peachy Pastries',
            descriptions: 'Delicados folhados recheados com pêssegos frescos, creme de baunilha e uma pitada de canela. Uma sobremesa celestial.',
            price: '32.97',
            img: 'c8f0b6db7d1eeed09cac-Dish.png',
            created_at: '2023-12-23 04:09:12'
          },
          {
            id: 3,
            category: 'Sobremesas',
            name: 'Provolone Pie',
            descriptions: 'Uma torta irresistível com camadas de queijo provolone derretido, tomates maduros e manjericão fresco. Uma explosão de sabores mediterrâneos.',
            price: '79.97',
            img: '078ca7c6d1a70479bfdc-name=prune, size=400.png',
            created_at: '2023-12-23 04:09:30'
          },
          {
            id: 4,
            category: 'Sobremesas',
            name: 'Macarons',
            descriptions: 'Macarons coloridos e leves, recheados com ganache de chocolate, creme de framboesa e caramelo salgado. Uma explosão de texturas e sabores.',
            price: '79',
            img: '2f2703dceb28fdf72ef7-Dish (1).png',
            created_at: '2023-12-26 15:25:02'
          },
          {
            id: 5,
            category: 'Refeições',
            name: 'Spaghetti Gambe',
            descriptions: 'Delicioso espaguete ao molho de tomate fresco, manjericão e almôndegas suculentas. Uma explosão de sabores italianos.',
            price: '79.97',
            img: '54ef0ac4bae9d3d0fb63-name=gambe, size=400.png',
            created_at: '2023-12-26 15:27:17'
          },
          {
            id: 6,
            category: 'Refeições',
            name: 'Salada Ravanello',
            descriptions: 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
            price: '22.00',
            img: 'aea4ecd5e1de74617a29-image 2.png',
            created_at: '2023-12-26 15:34:47'
          },
          {
            id: 7,
            category: 'Bebidas',
            name: 'Suco de maracujá',
            descriptions: 'Suco de maracujá gelado, cremoso, docinho.',
            price: '13.97',
            img: 'bb75481fb9bde81c63b8-Dish (2).png',
            created_at: '2023-12-26 15:37:38'
          },
          {
            id: 8,
            category: 'Bebidas',
            name: 'Espresso',
            descriptions: 'Café cremoso feito na temperatura e pressões perfeitas.',
            price: '15.97',
            img: '50f469d42306fad57391-Dish (3).png',
            created_at: '2023-12-26 15:42:00'
          },
          {
            id: 9,
            category: 'Bebidas',
            name: "Tè d'autunno",
            descriptions: 'Chá de anis, canela e limão. Sinta o outono italiano.',
            price: '19.97',
            img: '382605433908ca392997-image 11.png',
            created_at: '2023-12-26 15:47:34'
          },
        ]);
      });
  };
  