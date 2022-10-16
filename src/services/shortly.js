import axios from "axios";

function postSignUp(body) {
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/signup`,
    body
  );
  return promise;
}

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

export { postSignUp, postSignIn, getRanking };
