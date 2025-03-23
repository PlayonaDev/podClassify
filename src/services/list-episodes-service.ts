import { PodCastDTO } from "../models/filter-podcast-model"
import { repoPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"

export const serviceListEpisodes = async ():Promise<PodCastDTO> => {
    let responseFormat:PodCastDTO = {
        statusCode: 0,
        body: []
    } 

    const data = await repoPodcast()

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    responseFormat.body = data

    return responseFormat
}