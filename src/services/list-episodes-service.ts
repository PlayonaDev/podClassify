import { repoPodcast } from "../repositories/podcasts-repository"

export const serviceListEpisodes = async () => {
    const data = repoPodcast()

    return data
}