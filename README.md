# backend FoodExplorer  

 
### últimos updates:

#### commit: "User Role Management, Authorization Verification, and Password Omission"

- User role:
A atribuição de cargo (role) de cada usuário foi modificada na migration createUser de forma que os cargos agora são "adm" ou "customer", sendo essas as únicas opções possíveis. O cargo (role) do usuário agora é passado nas requisições junto com o token de autenticação.

- Verificação de cargo de usuário:
Foi adicionado o middleware verifyUserAuthorization, responsável por fazer a verificação do cargo (role) do usuário que realizou a requisição. Caso o cargo (role) do usuário seja diferente do esperado, é disparado um AppError informando a mensagem "Unauthorized" com o statusCode 401.

- Omissão da senha em sessions:
A senha do usuário não é mais retornada nas requisições a "/sessions".
 
#### commit: "Remove Unused getCategories Functions"

- Remoção das funções de getCategories:
As rotas, a função do controlador, o serviço e a função do repositório para recuperação de todas as categorias de produtos registrados na tabela "products" foram removidos, pois não tinham mais utilidade.

 

### Introdução:  

 

#### projeto FoodExplorer #### 

 

 

- a ideia do projeto é testar e concretizar os conhecimentos passados durante o curso.  

 

- o projeto consiste em desenvolver um cardápio digital para um restaurante fictício chamado FoodExplorer. 

 

- a aplicação tem o proposito de apresentar os pratos, montar um carrinho e efetuar o pagamento(ficticil) dos itens selecionados  

 

- a aplicação tem como base dois perfis de usuário: o usuário adm(que no momento se aplica apenas ao primeiro cadastro de usuário realizado na plataforma, usuário de id 1) e o usuário comum que seria o "comprador"  

 

este repositório especifico se trata do backend, uma api restfull que é consumida pelo frontend e se faz necessária para o funcionamento do projeto.  

   

 

### Requisitos:   

 

#### softwares  

 

 - nodejs instalado na maquina 

 

#### bibliotecas/dependências 

 

  -  bcrypt: ^5.1.1  

 

  -  bcryptjs: ^2.4.3  

 

  -  cors: ^2.8.5  

 

  -  dotenv: ^16.3.1  

 

  -  express: ^4.18.2  

 

  -  express-async-errors: ^3.1.1  

 

  -  jsonwebtoken: ^9.0.2  

 

  -  knex: ^2.5.1  

 

  -  multer: ^1.4.5-lts.1  

 

  -  nodemon: ^3.0.1  

 

  -  pm2: ^5.3.0  

 

  -  sqlite: ^5.0.1  

 

  -  sqlite3: ^5.1.6  

 

nessas versões ou superiores  

 

 

### Instruções de uso:  

 

#### instalação das bibliotecas: 

lançar no console o comando 

 

    npm i  

 

 

#### realizar migrações do banco de dados(criação de tabelas): 

lançar no console o comando 

 

    npx knex migrate:latest 

   

 

#### iniciar seeds do banco de dados(cadastro de produtos sugeridos): 

lançar no console o comando 

 

    npx knex seed:run 

 

este etapa não é necessária, mas é recomendada para testar a aplicação sem a necessidade do cadastro manual de vários produtos 

 

recomendações: 

 

o uso das seeds é indicado quando ainda não ha nenhum produto cadastrado; 

as seeds de produtos levam como padrão a nomenclatura de algumas imagens que já estão na pasta "tmp\uploads" do projeto. para um bom funcionamento é importante mantê-las. 

 

 

#### inicialização de app no ambiente de desenvolvimento  

lançar no console o comando para iniciar o servidor local  

 

    npm run dev  

 

 

#### inicialização de app no ambiente de prodoção 

lançar no console o comando para iniciar o servidor  

 

    npm run start  

   

 

### Configurações:  

 

 

- .env.example 

 

    é o arquivo de configuração das variáveis de ambiente. é importante renomear o arquivo para .env e por nos valores de: 

    AUTH_SECRET: o texto que o JsonWebToken usara para gerar os tokens para usuário. 

    PORT: a porta em que o express inicializará o servidor. 

 

 

- src\configs\auth.js:  

 

    auth.js é o arquivo de configuração do token de autentificarão que será exigido pelo middleware em algumas rotas da aplicação, contém e exporta um objeto contendo as propriedades secret e expiresIn. sendo secret a propriedade que armazena a string que sera usada pela biblioteca para gerar o token e expiresIn a propriedade que define por quanto tempo os tokens gerados seram validos  

   

 

- src\configs\upload.js:  

 

     upload.js é o arquivo de configuração da localização das pastas onde as imagens recebidas pelas requisições serão armazenadas, alem disso é feita nesse arquivo, através do multer, o renomeamento dos arquivos de imagens que quando passados por essa função recebem um hash aleatório de de dez dígitos antes do seu nome original para tornar praticamente impossível a ocorrência do cadastro de dois arquivos com o mesmo nome, mesmo quando efetuado o upload de arquivos com o nome original igual ou até o upload duplo de um único arquivo.   

 

   

- src\providers\diskstorage.js  

 

    diskstorage.js é a classe responsável por mover os arquivos de imagem pela aplicação através da função saveFile que recebe o arquivo como parametro, esta configurado nessa função um setTimeout repetindo a tentativa de realocação do arquivo para quando ocorrer erro, pois quando o projeto online, ocorria da aplicação tentar mover o arquivo de pasta antes do arquivo estar totalmente pronto na pasta temporária   

 

 

- ecosystem.config.js   

 

    é o arquivo de configuração do pm2 onde é basicamente feita a identificação de onde esta o arquivo principal para inicialização da aplicação  

 

   

- knexfile.js     

 

    é a configuração do knex que é o responsável ela criação e interação com o banco de dados. neste arquivo é identificada a localização do arquivo database.db, da pasta de migrações e também habilitar as foreign_keys que são fundamentais para o funcionamento da aplicação.   

 

   

### Utils 

 

   

 

- src\utils\App.error.js  

 

    cria um padrão para disparada de erros de que não causam a interrupção do funcionamento da aplicação. utilização dentro da aplicação: throw new AppError("mensagem a ser enviada com o erro")  

 

   

 

### Middlewares:  

 

- src\middlewares\ensureAuth.js:  

 

    cria e exporta a função responsável por verificar o token de usuário recebido dos headers das requisições, caso o token de usuário siga os padrões esperados e previamente configurados em src\configs\auth.js, a função next() que dá seguimento ao fluxo da aplicação. caso a verificação falhe, é disparado um erro informando que o token é invalido e interrompe esse fluxo  

    Exemplo de implementação:

        ordersRoutes.use(ensureAuth)

    Esta é uma aplicação geral para todoas as rotas deste Router.


- Verificação de cargo de usuário:



    Responsável por fazer a verificação do cargo (role) do usuário que realizou a requisição. 
    Na sua utilização é necessario passar como parâmetro uma string com a role esperada, o middleware comparará a role do usuário com a informada no parâmetro.Caso o cargo(role) do usuário seja diferente do esperado, é disparado um AppError informando a mensagem "Unauthorized" com o statusCode 401.

    Exemplo de implementação:

        ordersRoutes.post("/", verifyUserAuthorization("adm"), verifyUserAuthorization("adm"), ordersController.order);



### Estrutura do Projeto 

 

a arquitetura do projeto flui da seguinte forma 

 

Server.js > routes > controllers > services > repositories  

 

essa arquitetura utiliza o esquema de inversão de dependência para facilitar possíveis manutenções e/ou troca de banco de dados  

 

o arquivo server.js é o arquivo principal da aplicação, responsável pela inicialização da aplicação, inicialização do express, cors e direcionamento para as rotas, além de servir as imagens através da rota "/files" criada no próprio arquivo.  

 

### rotas:  

 

com exceção da rota "/files", server.js direciona as requisições para src\routes\index.js que faz o direcionamento para os routers e controllers específicos, sendo:  

 

"/users" -> src\routes\user.routes.js -> src\controllers\userController.js.  

 

 

"/sessions" -> src\routes\session.routes.js -> src\controllers\sessionController.js  

 

 

"/foods" -> src\routes\foods.routes.js tem como possibilidades de direcionamento src\controllers\foodsController.js ou src\controllers\getController.js   

 

 

"/orders" -> src\routes\orders.routes.js -> src\controllers\ordersController.js  

 

   

 

#### post em "/user"  

 

  exemplo de requisição valida:  

 

        http://localhost:3333/user 

 

JSON  

 

        {  

            "name": "allan",  

            "email": "allan@email.com",  

            "password": "ALLANallan123"  

        }  

 

 - Controller userController.js 

 

    a função create disparada pela rota "/orders" espera receber da requisição um objeto contendo as propriedades: name, email e password.  

 

    em seguida aciona, com os parâmetros recebidos do objeto, a função execute de src\services\user\createUser.js   

 

- Serviço CreateUser 

 

    verifica a existência dos dados de name, email, password; verifica através das variáveis checkUserExists = verificação da existência de um usuário com este email, passwordRegex = se a senha possui no mínimo 6 caracteres e entre eles letras maiúsculas, letras minúsculas e no mínimo 1 número e emailRegex = verifica o formato do email, um exempro de email valido seria: xxx@xxx.xxx  

 

    a variável hashedPassword, através da função hash da biblioteca bcryptjs, realiza a encriptografia da senha do usuário  

 

    caso qualquer uma das verificações apontar uma falha um erro será disparado informando o motivo do erro  

 

     

 

- UserRepository.create 

 

    com todas as verificações bem-sucedidas, os dados são passados para a função create de src\repositories\user.js que tem, através do knex, a responsabilidade de realizar o cadastro direto do usuário com os dados fornecidos   

 

   

 

#### post "/sessions"  

 

a rota /sessions é responsável pelo login de usuário  

 

        http://localhost:3333//sessions 

 

exemplo de requisição válida:  

 

JSON:  

 

        {  

            "email": "allan@email.com",  

            "password": "ALLANallan123"  

        }  

 

- Controller sessionController.js  

 

sessionController é responsável por extrair e-mail e senha do corpo da requisição e repassar esses dados para o serviço src\services\user\sessions.js  

 

- Serviço Sessions:  

 

através do método findByEmail a função execute realiza uma busca no banco de dados procurando um usuário com o e-mail fornecido e usa a variável usar para armazenar o resultado da busca. a função compare da biblioteca bcryptjs compara a senha fornecida com a senha do usuário encontrado pelo findByEmail. caso alguma das verificações falhe um erro é disparado com a mensagem "e-mail ou senha invalido", a disparada de um único erro para qualquer falha de verificação é importante para dificultar a descoberta de credenciais alheias por usuários mal-intencionados. caso as verificações sejam bem-sucedidos, um tokem é gerado e o serviço retorna este tokem que é único para cada sessão e o id de usuário. este tokem será usado como parâmetro de um middleware necessário para acesso das demais rotas da aplicação   

 

   

 

### rotas foods   

 

a rota "/foods" é responsavel por várias ações da aplicação  

 

#### post em "/foods/create":  

 

exemplo de requisição valida  

 

        http://localhost:3333/foods/create 

 

Multpart, a rota "/foods/create" espera receber um arquivo de imagem e um objeto JSON contendo as informações do prato a ser cadastrado  

 

JSON:   

 

        {  

         

            "name":"Suco de laranja",  

            "category":"babidas",  

            "descriptions":"copo de suco de laranja com açocar",  

            "ingredients":"["açocar", "5 laranjas"]",  

            "price":"12.00"  

        }  

 

usa o multer através da variável upload para lidar com as imagens e dispara a função create de src\controllers\foodsController.js com os dados recebidos  

 

- Controller foodsController.create  

 

utiliza o provider diskstorage para armazenar a imagem na pasta configurada. na variável food, atravez do metodo JSON.parse armazena e transforma o JSON recebido num objeto que posteriormente recebera a propriedade img que armazena o nome da imagem retornado pelo diskStorage. ao fim do tratamento e adição da imagem, o objeto food é lançado como parâmetro para o serviço src\services\food\createFood.js  

 

- Serviço CreateFood:  

 

o cerviço createFood apenas verifica a existência dos dados do objeto recebido, caso falte alguma informação um erro é disparado pedindo para que todos os campos sejam preenchidos. caso as verificações forem bem-sucedidas a função create de src\repositories\foods.js é disparada com as propriedades do objeto como parâmetro.  

 

- FoodRepository.create:  

 

a função create de FoodRepository.js realiza, através do knex, o cadastro do produto na tabela products e posteriormente usa o id do produto cadastrado para realizar o cadastro de cada ingrediente(tag) como um item único na tabela ingredients  

 

#### put em "/foods/update":  

 

exemplo de requisição valida  

 

        http://localhost:3333/foods/update 

 

Multpart, a rota "/foods/update" espera receber um arquivo de imagem e um objeto JSON contendo as informações do prato a ser atualizado  

 

JSON:  

 

        {  

         

            "id":"1",  

 

            "name":"Suco de laranja",  

 

            "category":"babidas",  

 

            "descriptions":"copo de suco de laranja com açocar",  

 

            "ingredients":"["açocar", "5 laranjas"]",  

 

            "price":"12.00",  

 

            "img": "55d458f3dcaf404a6373-imagem.jpg",  

 

            "created_at": "2023-10-28 20:43:59"  

 

        }  

 

usa o multer através da variável upload para lidar com as imagens e dispara a função update de src\controllers\userController.js com os dados recebidos   

 

- Controller foodsController.update:  

 

utiliza o provider diskstorage para armazenar a imagem na pasta configurada. na variável food, através do método JSON.parse armazena e transforma o JSON recebido num objeto que posteriormente recebera a propriedade img que armazena o nome da imagem retornado pelo diskStorage. ao fim do tratamento e adição da imagem, o objeto food é lançado como parâmetro para o serviço src\services\food\updateFood.js, a principal diferença do método create é que como a imagem do produto pode não ser atualizada, há uma verificação da existência de um arquivo na requisição, caso não haja um arquivo o serviço de atualização updateFood é acionado antes da adição da imagem;  

 

- Serviço UpdateFood.js  

 

o cerviço createFood apenas verifica a existência dos dados do objeto recebido, caso falte alguma informação um erro é disparado informando há dados faltando. caso as verificações forem bem-sucedidas a função update de src\repositories\foods.js é disparada com as propriedades do objeto como parâmetro.  

 

- FoodRepository.update:   

 

a função update de FoodRepository.js realiza, através do knex, a atualização do produto na tabela products, deleta todos os ingredientes da tabela "ingredients" onde o product_id seja igual ao id do produto atualizado e posteriormente usa o id do produto para realizar o cadastro da nova lista de ingredientes na tabela ingredients  

 

   

 

#### delete em "/foods/delete/:id":  

 

exemplo de requisição válida:   

 

        http://localhost:3333/foods/delete/11  

 

recebe no parâmetro de rota o id do produto a ser deletado e direciona para src\controllers\foodsController.js  

 

- Controller foodsController.delete:  

 

estrai o id da dos parâmetros da rota e encaminha-o para a função execute em src\services\food\deleteFood.js  

 

- Serviço DeleteFood.js:  

 

realiza a verificação do dado extraído da requisição, se não encontrado dispara um erro com a mensagem Prato não identificado, caso a verificação seja bem-sucedida o id do produto é usado como parâmetro da função delete em src\repositories\foods.js  

 

- FoodRepository.delete:   

 

deleta da tabela "products" o produto cujo id seja o mesmo do fornecido como parâmetro da função   

 

#### post em "/foods/like":  

 

a rota like é usada para adicionar produtos a tabela "likedFoods" sendo eles relacionados a cada usuário especifico   

 

exemplo de requisição válida:  

 

        http://localhost:3333/foods/like 

 

JSON:  

 

        {  

            "food": "3"  

        }  

 

- Controller foodsController.like:  

 

estrai do corpo da requisição o id do produto a ser cadastrado na tabela "likedFoods" e extrai também dos headers da requisição o id do usuário. direciona o id do usuário e o id do produto para a função execute de src\services\food\likeFood.js  

 

- Serviço LikeFood.js:  

 

apenas direciona as informações dos ids para likeFood em src\repositories\foods.js  

 

- FoodRepository.likeFood:  

 

através do knex adiciona na tabela "likedFoods" o produto como product_id fazendo relação com o campo id da tabela "products" e user_id como referencia ao campo id da tabela "users"  

 

#### delete em "/foods/unlike":  

 

a rota unlike é usada para remover produtos da tabela "likedFoods" sendo eles relacionados a cada usuário específico   

 

exemplo de requisição válida:  

 

        http://localhost:3333/foods/unlike 

   

JSON:  

 

        {  

            "food": "3"  

        }  

 

- Controller foodsController.unlike:  

 

estrai do corpo da requisição o id do produto a ser cadastrado na tabela "likedFoods" e extrai também dos headers da requisição o id do usuário. direciona o id do usuário e o id do produto para a função execute de src\services\food\unLikeFood.js  

 

- Serviço UnLikeFood.js:  

 

apenas direciona as informações dos ids para unLikeFood em src\repositories\foods.js  

 

- FoodRepository.unLikeFood:  

 

através do knex remove da tabela "likedFoods" o produto onde o id do produto for igual a product_id e onde o user_id for igual ao id do usuário fornecido.  

 

### getFoodsController - src\controllers\getFoodsController.js   

 

é o controle responsável por todas as rotas do tipo get de "/foods/". achei que se fez necessário para facilitar a manutenção pois acumular todas essas rotas em foodsController.js tornaria o arquivo muito grande, dificultando o acesso a certas partes do código  

 

#### get em "/foods/":  

 

usada como metodo de pesquisa de produtos e ingredientes nas tabelas "products" e "ingredients"  

 

tem como retorno uma lista de produtos cujo nome corresponda com pelo menos parte da pesquisa ou uma lista dde produtos que renha como relação um ingrediente cujo nome ou parte dele seja igual a pesquisa   

 

exemplo de requisição válida:   

 

        http://localhost:3333/foods?search=laranja  

 

- Controller getFoodsController.getBySearch:  

 

estrai a pesquisa da query da requisição e direciona essa pesquisa ao servisse searchFood em src\services\get\search\searchFood.js   

 

- Serviço SearchFood:   

 

verifica a existência de um dado de pesquisa, caso não encontrado dispara um erro com a mensagem pesquisa perdida, caso a verificação seja bem-sucedida passa a variável com o dado a ser pesquisado para a função index em src\repositories\foods.js  

 

- FoodRepository.index:  

 

com o parâmetro recebido, realiza uma pesquisa na tabela "products" onde o nome ou parte do nome do produto seja igual ao parâmetro. após realiza um innerjoy entre a tabela "products" e "ingredients" para retornar uma lista de produtos onde tenha ingredientes relacionados a eles com o nome do ingrediente ou parte deo nome seja igual ao parâmetro de pesquisa. com essas duas listas é montado um unico objeto que as armazena dentro de um só array  

 

- exemplo de retorno onde o resultado é relacionado ao ingrediente:  

 

        [  

            {  

                "name": "Peachy Pastries",  

                "img": "fe830debd168e0d61a6e-Dish.png",  

                "id": 2,  

                "ingredient": "canela"  

            },  

            {  

                "name": "Tè d'autunno",  

                "img": "d17650b4480d33829978-image 11.png",  

                "id": 9,  

                "ingredient": "canela"  

            }  

        ]  

 

   

- exemplo de retorno onde o resultado é relacionado ao nome do produto:  

 

        [  

            {  

                "name": "Salada Ravanello",  

                "img": "c656433c04258629c606-image 2.png",  

                "id": 6  

            }  

        ]  

 
#### get em "/foods/id/:id":  

 

esta rota é utilizada para buscar produtos específicos com base no id do produto  

 

exemplo de requisição válida:  

 

        http://localhost:3333/foods/id/5  

 

- Controller getFoodsController.getFoodById:  

 

a função getFoodById extrai o id do produto do parâmetro da rota e utiliza o valor como parâmetro para a função execute do cerviço getFoodById em src\services\get\food\getFoodById.js  

 

- Serviço GetFoodById.js:  

 

o serviço apenas dispara a função getById em src\repositories\foods.js usando o id recebido como parâmetro.  

 

-FoodRepository.getById:  

 

realiza uma busca na tabela "products" buscando um produto onde o id seja igual ao id recebido como parâmetro.  

 

exemplo de retorno da função:  

 

        {  

            "id": 9,  

            "category": "Bebidas",  

            "name": "Tè d'autunno",  

            "descriptions": "Uma mistura reconfortante de chá preto, canela e noz-moscada, com um toque sutil de   casca de laranja. Perfeito para as tardes de outono.",  

            "price": "19.97",  

            "img": "d17650b4480d33829978-image 11.png",  

            "created_at": "2023-12-26 15:47:34",  

            "foodIngredients": [  

                {  

                    "id": 115,  

                    "name": "casca de laranja",  

                    "product_id": "9",  

                    "created_at": "2023-12-27 15:36:16"  

                },  

                {  

                    "id": 116,  

                    "name": "noz-moscada",  

                    "product_id": "9",  

                    "created_at": "2023-12-27 15:36:16"  

                },  

                {  

                    "id": 117,  

                    "name": "canela",  

                    "product_id": "9",  

                    "created_at": "2023-12-27 15:36:16"  

                },  

                {  

                    "id": 118,  

                    "name": "chá preto",  

                    "product_id": "9",  

                    "created_at": "2023-12-27 15:36:16"  

                }  

            ]  

        }  

 

   

 

#### get em "/foods/allFoods":  

 

rota utilizada para buscar no banco de dados uma lista com todos os produtos cadastrados.  

 

exemplo de requisição válida:  

 

        http://localhost:3333/foods/allFoods  

 

- Controller getFoodsController.getAllFoods:  

 

apenas dispara a função execute do serviço getAllFoods em src\services\get\food\findAllFoods.js  

 

   

 

- Serviço findAllFoods.js:  

 

dispara a função getAllFoods de src\repositories\foods.js  

 

- FoodRepository.getAllFoods:  

 

realiza uma busca na tabela "products" retornando uma lista com todos os produtos cadastrados na tabela  

 

exemplo de retorno da função:  

 

        [  

            {  

                "id": 1,  

                "category": "Sobremesas",  

                "name": "Bolo de pote",  

                "descriptions": "Camadas decadentes de bolo de chocolate fofinho intercaladas com brigadeiro cremoso. Uma sobremesa irresistível servida em potinhos individuais.",  

                "price": "12.22",  

                "img": "22b6d88e1c594807abe6-bolo.png",  

                "created_at": "2023-12-22 21:57:47"  

            },  

            {  

                "id": 2,  

                "category": "Sobremesas",  

                "name": "Peachy Pastries",  

                "descriptions": "Delicados folhados recheados com pêssegos frescos, creme de baunilha e uma pitada de canela. Uma sobremesa celestial.",  

                "price": "32.97",  

                "img": "fe830debd168e0d61a6e-Dish.png",  

                "created_at": "2023-12-23 04:09:12"  

            },  

            {  

                "id": 3,  

                "category": "Sobremesas",  

                "name": "Provolone Pie",  

                "descriptions": "Uma torta irresistível com camadas de queijo provolone derretido, tomates maduros e manjericão fresco. Uma explosão de sabores mediterrâneos.",  

                "price": "79.97",  

                "img": "8e5f72aae3ebe42ee795-name=prune, size=400.png",  

                "created_at": "2023-12-23 04:09:30"  

            }  

        ]  

 

#### get em "/foods/likeds":  

 

esta rota é utilizada para buscar no cbaco de dados todos os produtos marcados como "gostei" de um usuário especifico.  

 

exemplo de requisição valida:  

 

        http://localhost:3333/foods/likeds  

 

- Controller getFoodsController.getLikeds:  

 

extrai o id do usuário dos headers da requisição e dispara a função execute do serviço getLikedFoods em src\services\get\liked\getLikedFoods.js  

 

- Serviço GetLikedFoods:  

 

usando o id recebido como parâmetro, dispara a função getLikedFoods de src\repositories\foods.js  

 

- FoodRepository.getLikedFoods:  

 

realiza um innerjoin pra buscar na tabela "prodcts" os produtos que, na tabela "likedFoods" tenham o campo "product_id" igual ao id fornecido a função.  

 

exemplo de retorno da função:  

 

        [  

            {  

                "name": "Torradas de Parma",  

                "img": "02b5fe7489ae27aebbb4-name=parma, size=400.png",  

                "id": 10  

            },  

            {  

                "name": "Espresso",  

                "img": "fd0aacc7775a31ca4ce2-Dish (3).png",  

                "id": 8  

            }  

        ]  

 

### ordersController.js - src\controllers\ordersController.js  

 

é o controller responsável pelos cadastros, atualização e busca de pedidos  

 

#### post em "/orders/":  

 

esta rota é usada para o cadastro de um novo pedido no banco de dados.  

 

exemplo de requisição válida:  

 

        http://localhost:3333/orders/  

 

JSON:  

        {  

            "data": {  

                "paymentMethod": "pix",  

                "order": [  

                    {  

                        "name": "Torradas de Parma",  

                        "quantity": 1,  

                        "price": "R$ 27.42",  

 

                "total_price": 27.42,  

                        "img": "02b5fe7489ae27aebbb4-name=parma, size=400.png",  

                        "id": 10  

                    }  

                ],  

 

                "cartValue": "27.42"  

            }  

        }  

 

ou  

 

JSON:  

 

        {  

            "data": {  

                "paymentMethod": {  

                    "cardNumber": "1234-1234-1234-1234",  

                    "expiry": "12/34",  

                    "cvc": "123"  

                },  

                "order": [  

                    {  

                        "name": "Torradas de Parma",  

                        "quantity": 1,  

                        "price": "R$ 27.42",  

                        "total_price": 27.42,  

                        "img": "02b5fe7489ae27aebbb4-name=parma, size=400.png",  

                        "id": 10  

                    }  

                ],  

                "cartValue": "27.42"  

            }  

        }  

 

- Controller ordersController.order:  

 

extrai o objeto "data" do corpo da requisição e o id do usuário dos headers da requisição e passa esses dados como parâmetro para a função execute do serviço newOrder em src\services\order\newOrder.js  

 

- Serviço NewOrder:   

 

o serviço New order antes de realizar a a chamada para o repositório faz varias verificações importantes como a existência de todos os dados necessários, caso todos os dados existirem, é iniciado a verificação do método de pagamento que consiste em:  

 

verificar se o método de pagamento é "pix", se sim, a verificação é concluída, se não, é iniciada a verificação dos dados do cartão.   

 

verificação dos dados do cartão:  

 

se o objeto possui as seguintes propriedades: cardNumber, expiry e cvc;  

 

se a propriedade cardNumber contém: apenas números e um total de 16 caracteres;  

 

se a propriedade expiry contém: apenas números e um total de 4 caracteres;  

 

se a propriedade cvc contém: apenas números e um total de 3 caracteres.  

 

após as verificações bem-sucedidas, a variável orderString atravez da função transforma a descrição do pedido que chega a função como:  

 

        [  

            {  

                "name": "protutoA",  

                "quantity": 1,  

                "price": "R$ 79.97",  

                "total_price": 79.97,  

                "img": "7d5a9707e4051dd55098-name=gambe, size=400.png",  

                "id": 5  

            },  

            {  

                "name": "protutoB",  

                "quantity": 2,  

                "price": "R$ 12.22",  

                "total_price": 24.44,  

                "img": "22b6d88e1c594807abe6-bolo.png",  

                "id": 1  

            },  

            {  

                "name": "protutoC",  

                "quantity": 3,  

                "price": "R$ 13.97",  

                "total_price": 41.910000000000004,  

                "img": "936fc86ef960dd3ccb37-Dish (4).png",  

                "id": 7  

            }  

        ]  

 

em algo como:  

 

        1 x protutoA, 2 x protutoB, 3 x protutoC  

 

e com os dados verificados e formatados é montado o objeto que sera cadastrado no banco de dados através da função newOrder de src\repositories\orders.js, contendo ele: o id do usuário, o status do pedido definido como "pendente" e a variável orderString  

 

   

- OrdersRepository.newOrder:  

 

realiza o cadastro direto do objeto recebido atravez do knex na tabela "orders"  

 

#### patch em"/orders/changeorderstatus"  

 

rota utilizada para atualizar o status de um pedido com base no id do pedido.  

 

exemplo de requisição válida:  

 

        http://localhost:3333/orders/changeorderstatus  

 

    JSOM  

 

        {  

            "newStatus": "Entregue",  

            "id": "00000003"  

        }  

 

- Controller ordersController.attOrderStatus:  

 

extrai o id do pedido e o status para qual o pedido deve ser atualizado do corpo da requisição e passa-os como parâmetros para a função execute de src\services\order\changeOrderStatus.js  

 

- Serviço ChangeOrderStatus:  

 

verifica a existência dos dados recebidos e caso haja algum dado faltando dispara um erro, caso as verificações a função changeOrderStatus de src\repositories\orders.js é disparada recebendo o id e o status a ser atualizado como parâmetro  

 

- OrdersRepository.changeOrderStatus:  

 

utiliza o knex para atualizar na tabela "orders" o status para o status recebido como parâmetro e a coluna updated_at para a data atual onde o id for igual recebido no parâmetro da função.  

 

#### get em "orders/orderstatus"  

 

esta rota é usada para buscar o status do último pedido de um usuário especifico   

 

exemplo de requisição val  

 

        http://localhost:3333/orders/orderstatus  

 

- Controller ordersController.orderStatus:  

 

extrai o id do usuário dos headers da requisição e usa-o como parâmetro na função execute de src\services\get\order\getLatsOrderStatus.js  

 

- Serviço GetLatsOrderStatus:  

 

apenas usa o id do usuário fornecido como parametro para a função getLastOrderStatus de src\repositories\orders.js  

 

- OrdersRepository.getLastOrderStatus:  

 

realiza uma busca na tabela "orders" pelo último pedido onde o user_id seja igual ao id fornecido como parâmetro da função e retorna o último com base na data de cadastro  

 

exemplo de retorno da função: 

         

         "Pendente"  

 

#### get em "/orders/alluserorders"   

 

esta rota é utilizada para pesquisar no banco de dados todos os pedidos ja feitos pelo usuário.  

 

exemplo de requisição válida:   

 

        http://localhost:3333/orders/alluserorders  

 

- Controller ordersController.userOrders:  

 

apenas extrai o id do usuário dos heades da requisição e usa-o como parâmetro na função execute de src\services\get\order\getAllUserOrders.js  

 

- Serviço GetAllUserOrders:  

 

apenas dispara a função getAllUserOrders de src\repositories\orders.js usando o id recebido como parâmetro  

 

- OrdersRepository.getAllUserOrders:  

 

atravez do knex, realiza uma busca na tabela "orders" por todos os itens onde a coluna user_id foi igual ao id fornecido como parâmetro da função e ordena os resultados do mais recente para mais antigo  

 

exemplo de retorno da função:  

 

        [  

            {  

                "id": 2,  

                "user_id": 2,  

                "details": "1 x Salada Ravanello, 2 x Tè d'autunno",  

                "status": "Preparando",  

                "created_at": "2023-12-29 18:02:36",  

                "updated_at": "2023-12-29 18:03:52"  

            },  

            {  

                "id": 1,  

                "user_id": 2,  

                "details": "1 x Salada Ravanello",  

                "status": "Entregue",  

                "created_at": "2023-12-28 22:19:04",  

                "updated_at": "2023-12-28 22:19:25"  

            }  

        ]  

 

#### get em "/allorders"  

 

rota utilizada para pesquisar no banco de dados por todos os itens da tabela orders.  

 

- Controller ordersController.allOrders:  

 

apenas dispara a função execute de src\services\get\order\getAllOrders.js  

 

- Serviço GetAllOrders:  

 

apenas dispara a função getAllOrders de src\repositories\orders.js  

 

- OrdersRepository.getAllOrders:  

 

através do knex, realiza uma busca no banco de dados po todos os itens da tabela "orders" e as ordena da mais recente para a mais antiga.  

 

exemplo de retorno da função:  

 

        [  

            {  

                "id": 2,  

                "user_id": 2,  

                "details": "1 x Salada Ravanello, 2 x Tè d'autunno",  

 

                "created_at": "2023-12-29 18:02:36",  

                "updated_at": "2023-12-29 18:02:36"  

            },  

            {  

                "id": 1,  

                "user_id": 3,  

                "details": "1 x Salada Ravanello",  

                "status": "Entregue",  

                "created_at": "2023-12-28 22:19:04",  

                "updated_at": "2023-12-28 22:19:25"  

            }  

        ]  

.  
