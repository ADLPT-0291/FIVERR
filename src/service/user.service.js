import { axiosWithAuth } from "./config";

export function getProfileAPI() {
  return axiosWithAuth("/api/users/{}", {
    method: "GET",
  });
}
