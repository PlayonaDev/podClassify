import { PodcastModel } from "../models/podcast-model"
import { repoPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: string): Promise<PodcastModel[]> => {
    const data = await repoPodcast(podcastName);

    return data;
}