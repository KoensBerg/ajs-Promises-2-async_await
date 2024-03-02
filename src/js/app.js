import GameSavingLoader from './GameSavingLoader';

const parsed = (async () => {
  const saving = await GameSavingLoader.load();
  const result = JSON.parse(saving);
  return result;
})();

export default parsed;
