import { ArtistService } from "./service/artist";

const API_ADDR = "http://ws.audioscrobbler.com/2.0/";

export interface Artist {
    name: string,
    playcount: number,
    listeners: number,
    image: string,
    url: string
}

export interface Track {
    title: string,
    playcount: number,
    listeners: number
}

export class LastfmService {
    public async fetch(params: URLSearchParams) {
        const baseParams = new URLSearchParams({
            api_key: import.meta.env.VITE_LASTFM_API_KEY,
            format: "json",
        });

        const res = await fetch(API_ADDR + "?" + baseParams + "&" + params);

        if (res.status !== 200) {
            throw new Error("Bad Request");
        }

        return await res.json();
    }
}

export const lastfm = {
    artist: new ArtistService(new LastfmService)
};
