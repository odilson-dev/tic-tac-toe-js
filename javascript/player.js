// A player has name and a token
export function Player(name, token) {
  const playRound = () => {
    const playerCase = prompt(`${name}, it's your turn, choose a case:`);
    return playerCase;
  };
  return { name, token, playRound };
}
