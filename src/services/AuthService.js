import http from "./HttpService";
//const apiEndpoint = "http://localhost:3000";

export async function login(username, password) {
   const { data: jwt } = await http.post("/Login", {username, password});
   localStorage.setItem("token", jwt);
   return;
}

export function getJwt() {
   return localStorage.getItem("token");
}

export function logout() {
   localStorage.removeItem("token");
}

export default {
   login,
   logout,
   getJwt
}

