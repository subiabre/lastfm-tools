const API_ADDR = "http://webservice.fanart.tv/v3/music/";

export class FanartTvService {
    public async getRandomArtistThumb(mbid: string) {
        const params = new URLSearchParams({
            api_key: import.meta.env.VITE_FANARTTV_API_KEY,
        });

        const res = await fetch(API_ADDR + mbid + "?" + params);

        if (res.status !== 200) {
            throw new Error("Bad Request");

            return undefined;
        }

        const data = await res.json();
        const random = Math.floor(Math.random() * data.artistthumb.length);

        return data.artistthumb[random].url;
    }
}

export const fanarttv = new FanartTvService();
