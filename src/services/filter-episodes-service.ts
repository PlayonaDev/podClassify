import { PodcastModel } from "../models/podcast-model"
import { repoPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastModel[]> => {
    const queryString = podcastName?.split("?p=")[1] ?? "";

    const data = await repoPodcast(queryString);

    return data;
}