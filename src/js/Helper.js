export const faction = {
    JEDI: "jedi",
    SITH: "sith",
    BOUNTY_HUNTER: "bountyHunter"
};

export const paths = {
    HOME: "Home",
    FILMS: "Films",
    PEOPLE: "People",
    PLANETS: "Planets",
    SPECIES: "Species",
    STARSHIPS: "Starships",
    VEHICLES: "Vehicles"
};


export let defaultUsers =
    [
        {
            "email": 'yoda@ioasys.com.br',
            "username": 'yoda',
            "password": 'sw123456',
            "faction": faction.JEDI
        },
        {
            "email": 'darthvader@ioasys.com.br',
            "username": 'darthvader',
            "password": 'sw123456',
            "faction": faction.SITH
        },
        {
            "email": 'hansolo@ioasys.com.br',
            "username": 'hansolo',
            "password": 'sw123456',
            "faction": faction.BOUNTY_HUNTER
        }
    ];

export default faction;