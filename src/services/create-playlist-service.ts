
interface Playlist {
    id: string, 
    name: string,
    totalVideos: string,
    videos: [],
    createdAt: Date,
    deletedAt: Date,
}

//TODO -> Como poderia criar um playlist

export const createPlaylistService = async (playlist: Playlist[]): Promise<Playlist[]> => {

    return playlist
}
