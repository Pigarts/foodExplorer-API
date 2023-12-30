exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ingredients')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('ingredients').insert([
          {
            id: 1,
            name: 'torradas',
            product_id: 10,
            created_at: '2023-12-27 15:33:33',
          },
          {
            id: 2,
            name: 'presunto de Parma',
            product_id: 10,
            created_at: '2023-12-27 15:33:33',
          },
          {
            id: 3,
            name: 'queijo parmesão',
            product_id: 10,
            created_at: '2023-12-27 15:33:33',
          },
          {
            id: 4,
            name: 'rúcula',
            product_id: 10,
            created_at: '2023-12-27 15:33:33',
          },
          {
            id: 5,
            name: 'alface',
            product_id: 6,
            created_at: '2023-12-27 15:33:44',
          },
          {
            id: 6,
            name: 'cebola',
            product_id: 6,
            created_at: '2023-12-27 15:33:44',
          },
          {
            id: 7,
            name: 'pão naan',
            product_id: 6,
            created_at: '2023-12-27 15:33:44',
          },
          {
            id: 8,
            name: 'pepino',
            product_id: 6,
            created_at: '2023-12-27 15:33:44',
          },
          {
            id: 9,
            name: 'rabanete',
            product_id: 6,
            created_at: '2023-12-27 15:33:44',
          },
          {
            id: 10,
            name: 'tomate',
            product_id: 6,
            created_at: '2023-12-27 15:33:44',
          },
          {
            id: 11,
            name: 'espaguete',
            product_id: 5,
            created_at: '2023-12-27 15:34:31',
          },
          {
            id: 12,
            name: 'molho de tomate',
            product_id: 5,
            created_at: '2023-12-27 15:34:31',
          },
          {
            id: 13,
            name: 'manjericão',
            product_id: 5,
            created_at: '2023-12-27 15:34:31',
          },
          {
            id: 14,
            name: 'almôndegas',
            product_id: 5,
            created_at: '2023-12-27 15:34:31',
          },
          {
            id: 15,
            name: 'camarão',
            product_id: 5,
            created_at: '2023-12-27 15:34:31',
          },
          {
            id: 16,
            name: 'queijo provolone',
            product_id: 3,
            created_at: '2023-12-27 15:35:01',
          },
          {
            id: 17,
            name: 'tomates',
            product_id: 3,
            created_at: '2023-12-27 15:35:01',
          },
          {
            id: 18,
            name: 'manjericão',
            product_id: 3,
            created_at: '2023-12-27 15:35:01',
          },
          {
            id: 19,
            name: 'massa de tort',
            product_id: 3,
            created_at: '2023-12-27 15:35:01',
          },
          {
            id: 20,
            name: 'folhado',
            product_id: 2,
            created_at: '2023-12-27 15:35:21',
          },
          {
            id: 21,
            name: 'pêssegos',
            product_id: 2,
            created_at: '2023-12-27 15:35:21',
          },
          {
            id: 22,
            name: 'creme de baunilha',
            product_id: 2,
            created_at: '2023-12-27 15:35:21',
          },
          {
            id: 23,
            name: 'canela',
            product_id: 2,
            created_at: '2023-12-27 15:35:21',
          },
          {
            id: 24,
            name: 'amêndoas',
            product_id: 4,
            created_at: '2023-12-27 15:35:43',
          },
          {
            id: 25,
            name: 'açúcar de confeiteiro',
            product_id: 4,
            created_at: '2023-12-27 15:35:43',
          },
          {
            id: 26,
            name: 'clara de ovo',
            product_id: 4,
            created_at: '2023-12-27 15:35:43',
          },
          {
            id: 27,
            name: 'ganache de chocolate',
            product_id: 4,
            created_at: '2023-12-27 15:35:43',
          },
          {
            id: 28,
            name: 'creme de framboesa',
            product_id: 4,
            created_at: '2023-12-27 15:35:43',
          },
          {
            id: 29,
            name: 'caramelo salgado',
            product_id: 4,
            created_at: '2023-12-27 15:35:43',
          },
          {
            id: 30,
            name: 'bolo de chocolate',
            product_id: 1,
            created_at: '2023-12-27 15:35:58',
          },
          {
            id: 31,
            name: 'brigadeiro',
            product_id: 1,
            created_at: '2023-12-27 15:35:58',
          },
          {
            id: 32,
            name: 'chocolate granulado',
            product_id: 1,
            created_at: '2023-12-27 15:35:58',
          },
          {
            id: 33,
            name: 'casca de laranja',
            product_id: 9,
            created_at: '2023-12-27 15:36:16',
          },
          {
            id: 34,
            name: 'noz-moscada',
            product_id: 9,
            created_at: '2023-12-27 15:36:16',
          },
          {
            id: 35,
            name: 'canela',
            product_id: 9,
            created_at: '2023-12-27 15:36:16',
          },
          {
            id: 36,
            name: 'chá preto',
            product_id: 9,
            created_at: '2023-12-27 15:36:16',
          },
          {
            id: 37,
            name: 'café premium',
            product_id: 8,
            created_at: '2023-12-27 15:36:31',
          },
          {
            id: 38,
            name: 'maracujás frescos',
            product_id: 7,
            created_at: '2023-12-27 15:37:07',
          },
          {
            id: 39,
            name: 'açúcar',
            product_id: 7,
            created_at: '2023-12-27 15:37:07',
          },
        ]);
      });
  };