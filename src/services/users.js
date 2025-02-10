import http from "./httpService";

export async function createUser(data) {
  return http.post("/baristas", data).then((response) => {
    return response.data;
  });
}

export async function fetchBaristas() {
  return http.get("/baristas").then((response) => response.data.data);
}
