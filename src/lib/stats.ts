export function calcPlaycount(items: { playcount: number }[]) {
    let playcount = 0;

    for (let index = 0; index < items.length; index++) {
        const artist = items[index];

        playcount = playcount + artist.playcount;
    }

    return playcount;
}
