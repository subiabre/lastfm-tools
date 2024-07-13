import { fanarttv } from "$lib/fanarttv";
import { musicbrainz } from "$lib/musicbrainz";
import type { Artist, LastfmService, Track } from "$lib/lastfm";

export class ArtistService {
    private lastfm: LastfmService;

    constructor(lastfm: LastfmService) {
        this.lastfm = lastfm;
    }

    public async getImage(artist: any) {
        let mbid = artist.mbid;
        if (typeof mbid === "undefined") {
            const mbdata = await musicbrainz.getArtist(artist.name);

            mbid = mbdata.id;
        }

        try {
            return await fanarttv.getRandomArtistThumb(mbid)
        } catch (error) {
            return artist.image[2]["#text"];
        }
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
            listeners: parseInt(data.artist.stats.listeners),
            image: await this.getImage(data.artist),
            url: data.artist.url
        };
    }

    public async getInfoImproved(artist: string): Promise<Artist> {
        const correction = await this.getCorrection(artist);
        const mbdata = await musicbrainz.getArtist(correction);

        const data = await this.lastfm.fetch(new URLSearchParams({
            method: "artist.getInfo",
            artist: mbdata.name
        }));

        return {
            name: data.artist.name,
            playcount: parseInt(data.artist.stats.playcount),
            listeners: parseInt(data.artist.stats.listeners),
            image: await this.getImage({ ...data.artist, mbid: mbdata.id }),
            url: data.artist.url
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
