import http from "./httpService";

export async function login(identifier, password) {
  return http.post("/auth/local", {
    identifier,
    password,
  }).then((response) => {
    return response.data;
  }).catch((error) => {
    throw new Error('نام کاربری یا رمز عبور اشتباه است');
  });
}
