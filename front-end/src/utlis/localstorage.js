export function isAuth() {
  if (localStorage.getItem("auth_token")) {
    return true;
  }
  return false;
}

export function setAuth(token) {
  localStorage.setItem("auth_token", token);
  return localStorage.getItem("auth_token") !== null;
}

export function getAuth() {
  return localStorage.getItem("auth_token");
}

export function clearAuth() {
  localStorage.removeItem("auth_token");
  return localStorage.getItem("auth_token") !== null;
}

export function clearStorage() {
  localStorage.clear();
}
