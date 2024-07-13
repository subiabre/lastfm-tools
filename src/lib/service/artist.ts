import type { Artist, LastfmService, Track } from "$lib/lastfm";

export class ArtistService {
    private lastfm: LastfmService;

    constructor(lastfm: LastfmService) {
        this.lastfm = lastfm;
    }

    public async getCorrection(artist: string) {
        const data = await this.lastfm.fetch(new URLSearchParams({ 
            method: "artist.getCorrection",
            artist: artist
        }));

        if (typeof data.corrections.correction === "undefined") {
            throw new Error("The artist you supplied could not be found");
        }

        return data.corrections.correction.artist.name;
    }

    public async getInfo(artist: string): Promise<Artist> {
        const data = await this.lastfm.fetch(new URLSearchParams({
            method: "artist.getInfo",
            artist: artist
        }));

        return {
            name: data.artist.name,
            playcount: parseInt(data.artist.stats.playcount),
            listeners: parseInt(data.artist.stats.listeners)
        };
    }

    public async getTopTracks(artist: string, limit: string = "10"): Promise<Track[]> {
        const data = await this.lastfm.fetch(new URLSearchParams({
            method: "artist.getTopTracks",
            artist: artist,
            limit: limit
        }));

        return data.toptracks.track.map((data: any) => {
            return {
                title: data.name,
                playcount: parseInt(data.playcount),
                listeners: parseInt(data.listeners)
            };
        });
    }
}
