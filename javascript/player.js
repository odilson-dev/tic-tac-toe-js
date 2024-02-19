// A player has name and a token
export function Player(name, token) {
  let score = 0;
  const getScore = () => score;
  const increaseScore = () => score++;
  const getName = () => name;
  const setName = (newName) => {
    name = newName;
  };
  const getToken = () => token;
  const setToken = (newToken) => {
    token = newToken;
  };
  return { getName, setName, getToken, setToken, getScore, increaseScore };
}
