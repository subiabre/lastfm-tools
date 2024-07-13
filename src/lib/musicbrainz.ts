const API_ADDR = "http://musicbrainz.org/ws/2/artist/";

export class MusicbrainzService {
    public async getArtist(artist: string) {
        const params = new URLSearchParams({
            fmt: "json",
            query: `artist=${artist}`
        });

        const res = await fetch(API_ADDR + "?" + params);

        if (res.status !== 200) {
            throw new Error("Bad Request");
        }

        const data = await res.json();
        
        return data.artists[0];
    }
}

export const musicbrainz = new MusicbrainzService();
