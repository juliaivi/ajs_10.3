import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    return await GameSavingLoader.load();
  } catch (error) {
    throw new Error(error);
  }
})();
