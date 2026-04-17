export interface Game {
  id: number;
  title: string;
  engine: string;
  genre: string;
  thumbnail_url: string;
  game_link: string;
  description: string;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Momon Adventure",
    engine: "Unity",
    genre: "Platformer",
    thumbnail_url: "/images/momon-thumb.jpg",
    game_link: "https://itch.io/your-game",
    description: "Petualangan seru mencari koin emas."
  },
  
  {
    id: 2,
    title: "Grand Theft Auto",
    engine: "Unreal Engine",
    genre: "Open World",
    thumbnail_url: "/images/momon-thumb.jpg",
    game_link: "https://itch.io/your-game",
    description: "Game open world seru dengan tema modern."
  },

];