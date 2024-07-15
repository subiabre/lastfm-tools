export const oneHitWonders = [
    "The Knack",
    "Vanilla Ice",
    "The Proclaimers",
    "Bobby McFerrin",
    "Falco",
    "Spin Doctors",
    "OMC",
    "Charles & Eddie",
    "The Rembrandts",
    "Passenger",
    "Gotye",
    "Bonnie Lou",
    "Duck Sauce",
    "Foster the People",
    "Rebecca Black",
    "Icona Pop",
]

export function getRandomExample(): string {
    var index = Math.floor(Math.random() * oneHitWonders.length);

    return oneHitWonders[index];
}
