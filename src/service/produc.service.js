import { axiosWithAuth } from "./config";

export function getAllProductAPI(){
    return axiosWithAuth("/api/QuanLyPhim/LayDanhSachPhim")
}
// export function getAllBannerAPI(){
//     return axiosWithAuth("/api/QuanLyPhim/LayDanhSachBanner")
// }