import { PodcastModel } from "./podcast-model";

export interface PodCastDTO {
    statusCode: number;
    body: PodcastModel[];
}