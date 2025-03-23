import * as http from 'http';
import { HttpMethods } from './src/utils/http-methods';
import { Routes } from './src/routes/routes';
import { getFilterEpisodes, getListEpisodes } from './src/controllers/iscasts-controllers';

export const app = async (
    req: http.IncomingMessage,
    res: http.ServerResponse) => {

    const baseUrl = req.url?.split('?')[0];


    if (req.method === HttpMethods.GET && baseUrl === Routes.LIST_EPISODES) {
        await getListEpisodes(req, res);
    }

    if (req.method === HttpMethods.GET && baseUrl === Routes.FILTER_EPISODES) {
        {
            await getFilterEpisodes(req, res);
        }
    }
}