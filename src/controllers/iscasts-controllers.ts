import { IncomingMessage, ServerResponse } from 'http';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(
        [
            {
                podcastName: "mano deyvin",
                episode: "BANHEIRÃO DO QUARTO ANDAR // EP5",
                videoId: "ngMcY9Dw3fo",
                categories: ["Humor", "Tecnologia"],
            },
            {
                podcastName: "mano deyvin",
                episode: "The Evil Aliance pela fome (feat Akita, Montano)",
                videoId: "w40zLImdZqM",
                categories: ["Humor", "Tecnologia", "Conhecimento"],
            },
        ]
    ));
}