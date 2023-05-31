import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    throw new Error(error);
  }
})();
