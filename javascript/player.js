// A player has name and a token
export function Player(name, token) {
  const getName = () => name;
  const setName = (newName) => {
    name = newName;
  };
  const getToken = () => token;
  const setToken = (newToken) => {
    token = newToken;
  };
  return { getName, setName, getToken, setToken };
}
