import axios from "axios";

function postSignIn(body) {
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/signin`,
    body
  );
  return promise;
}

function getRanking() {
  const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/ranking`);
  return promise;
}

export { postSignIn, getRanking };
