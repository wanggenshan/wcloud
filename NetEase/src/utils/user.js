import cookie from "js-cookie";
export function getToken() {
  return cookie.get("auth_token");
}
export function setToken(val) {
  return cookie.set("auth_token", val);
}
