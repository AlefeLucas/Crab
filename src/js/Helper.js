export const faction = {
    JEDI: "jedi",
    SITH: "sith",
    BOUNTY_HUNTER: "bountyHunter"
};

export const paths = {
    HOME: "home",
    FILMS: "film",
    PEOPLE: "people",
    PLANETS: "planets",
    SPECIES: "species",
    STARSHIPS: "starships",
    VEHICLES: "vehicles"
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