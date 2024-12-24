const AppRoute = {
  Game: 'game',
  Results: 'results',
  Initial: 'initial'
};

const TIMEOUT = 900;
const RANDOMIZED = true;

const GAME_TYPES = [
  { type: 'cats', text: 'Котики' },
  { type: 'flowers', text: 'Цветочки' },
  { type: 'cars', text: 'Машины' },
];

export { AppRoute, TIMEOUT, RANDOMIZED, GAME_TYPES};