# PodClassify

### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes episódio podcasts separados por categorias

### Domínio

Podcasts feito em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:

- Listar os episódios podcasts em sessões de categorias

## Como vou implementar:

GET: retorna lista de episódios

Vou retorna em uma API REST (json) o nome do podcast, nome do podcast,
nome do episódio, imagem de capa, link e categoria.

```js
[
  {
    podcastName: "mano deyvin",
    episode: "BANHEIRÃO DO QUARTO ANDAR // EP5",
    videoId: "ngMcY9Dw3fo"
    cover:
      "https://i.ytimg.com/vi/ngMcY9Dw3fo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_I2X2Xn5w3yEoFl2p26MiTcKR-Q",
    link: "https://www.youtube.com/watch?v=ngMcY9Dw3fo&list=PLz4TzGQ0MmlKB2-8q2LT2xND3potFmuy5",
    categories: ["Humor", "Tecnologia"],
  },
  {
    podcastName: "mano deyvin",
    episode: "The Evil Aliance pela fome (feat Akita, Montano)",
    videoId: "w40zLImdZqM",
    cover:
      "https://i.ytimg.com/vi/ngMcY9Dw3fo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_I2X2Xn5w3yEoFl2p26MiTcKR-Q",
    link: "https://www.youtube.com/watch?v=w40zLImdZqM",
    categories: ["Humor", "Tecnologia", "Conhecimento"],
  },
];
```

GET: retorna lista de episódios por parametro enviado pelo usuário