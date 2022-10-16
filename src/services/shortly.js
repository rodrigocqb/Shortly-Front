import axios from "axios";

function getRanking() {
  const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/ranking`);
  return promise;
}

export { getRanking };
