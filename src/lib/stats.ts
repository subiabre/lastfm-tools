export function calcPlaycount(items: { playcount: number }[]) {
    let playcount = 0;

    for (let index = 0; index < items.length; index++) {
        const item = items[index];

        playcount = playcount + item.playcount;
    }

    return playcount;
}
