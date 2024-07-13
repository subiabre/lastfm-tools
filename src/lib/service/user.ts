import type { LastfmService, User, Artist } from "$lib/lastfm";
import { ArtistService } from "./artist";

export class UserService {
    private lastfm: LastfmService;

    constructor(lastfm: LastfmService) {
        this.lastfm = lastfm;
    }

    public async getInfo(user: string): Promise<User> {
        const data = await this.lastfm.fetch(new URLSearchParams({
            method: "user.getInfo",
            user: user
        }));

        return {
            name: data.user.name,
            playcount: parseInt(data.user.playcount),
            artistcount: parseInt(data.user.artist_count),
            trackcount: parseInt(data.user.track_count),
            albumcount: parseInt(data.user.album_count),
            url: data.user.url,
            image: data.user.image[2]["#text"]
        };
    }

    public async getTopArtists(user: string, limit: string = "10"): Promise<Artist[]> {
        const data = await this.lastfm.fetch(new URLSearchParams({
            method: "user.getTopArtists",
            user: user,
            limit: limit
        }));

        const artist = new ArtistService(this.lastfm);

        return Promise.all(data.topartists.artist.map(async (data: any) => {
            const info = await artist.getInfoImproved(data.name);

            return { ...info, playcount: parseInt(data.playcount) }
        }));
    }
}