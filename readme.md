# PodClassify

## Descrição
PodClassify é um aplicativo no estilo Netflix para podcasts em vídeo, permitindo centralizar diferentes episódios de podcasts organizados por categorias.

## Domínio
O foco do PodClassify são podcasts feitos em vídeo, proporcionando uma experiência visual integrada com organização por categorias.

## Features
- Listar episódios de podcasts organizados por categorias (saúde, fitness, mentalidade, humor, etc.).
- Filtrar episódios pelo nome do podcast.
- Criar playlists personalizadas com episódios selecionados pelo usuário.

## Como funciona

### Listagem de Episódios
**GET** `/episodes` - Retorna uma lista de episódios de podcasts no formato JSON.

**Exemplo de resposta:**
```json
[
  {
    "podcastName": "Mano Deyvin",
    "episode": "BANHEIRÃO DO QUARTO ANDAR // EP5",
    "videoId": "ngMcY9Dw3fo",
    "cover": "https://i.ytimg.com/vi/ngMcY9Dw3fo/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=ngMcY9Dw3fo",
    "categories": ["Humor", "Tecnologia"]
  },
  {
    "podcastName": "Mano Deyvin",
    "episode": "The Evil Aliance pela fome (feat Akita, Montano)",
    "videoId": "w40zLImdZqM",
    "cover": "https://i.ytimg.com/vi/ngMcY9Dw3fo/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=w40zLImdZqM",
    "categories": ["Humor", "Tecnologia", "Conhecimento"]
  }
]
```

### Filtragem de Episódios
**GET** `/episodes?query={nome_podcast}` - Retorna episódios filtrados pelo nome do podcast.

### Criação de Playlists
**POST** `/playlists`

**Parâmetros:**
```json
{
  "title": "Minha Playlist Favorita",
  "videos": ["ngMcY9Dw3fo", "w40zLImdZqM"]
}
```

**Resposta:**
```json
{
  "playlistId": "123456",
  "title": "Minha Playlist Favorita",
  "videos": ["ngMcY9Dw3fo", "w40zLImdZqM"]
}
```

## Arquitetura
O PodClassify segue a seguinte arquitetura:

- **Servidor:** Construído em Node.js.
- **Podcast Controller:** Responsável por gerenciar as requisições e respostas.
- **Serviços:** Inclui as funcionalidades de listar episódios e filtrar episódios.
- **Repositório de Dados:** Contém os episódios cadastrados.

## Tecnologias Utilizadas
- **Node.js** - Plataforma de desenvolvimento do servidor
- **TypeScript** - Linguagem utilizada para tipagem segura
- **TSX** - Execução otimizada do TypeScript
- **Tsup** - Empacotamento e build do código

## Scripts Disponíveis
No arquivo `package.json`, os seguintes scripts estão disponíveis:

- **`npm run start:dev`** - Inicia o servidor em ambiente de desenvolvimento
- **`npm run start:watch`** - Inicia o servidor com hot-reload
- **`npm run dist`** - Gera a versão de produção do código
- **`npm run start:dist`** - Executa a versão empacotada do servidor

## Porta de Serviço
O servidor está configurado para rodar na porta **3131**.

## Como Rodar o Projeto
1. Clone o repositório
```sh
git clone https://github.com/seu-usuario/podclassify.git
```
2. Instale as dependências
```sh
npm install
```
3. Inicie o servidor em ambiente de desenvolvimento
```sh
npm run start:dev
```
4. A API estará disponível em `http://localhost:3131`

---

Este README pode ser atualizado conforme novas funcionalidades forem adicionadas. Se precisar de ajustes, me avise! 🚀

