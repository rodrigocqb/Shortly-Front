import axios from "axios";

function createHeaders() {
  const token = JSON.parse(localStorage.getItem("user"));
  const headers = { headers: { Authorization: `Bearer ${token}` } };
  return headers;
}

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

function getUserData() {
  const headers = createHeaders();
  const promise = axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/users/me`,
    headers
  );
  return promise;
}

function shortenUrl(body) {
  const headers = createHeaders();
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/urls/shorten`,
    body,
    headers
  );
  return promise;
}

function deleteUrl(id) {
  const headers = createHeaders();
  const promise = axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/urls/${id}`,
    headers
  );
  return promise;
}

export {
  postSignUp,
  postSignIn,
  getRanking,
  getUserData,
  shortenUrl,
  deleteUrl,
};
