import axios  from "axios";
import { manageLocalStorage } from "../common/utils";
import { KEY_ACCESS_TOKEN } from "../common/constants/index";

const BASE_URL =  "https://fiverrnew.cybersoft.edu.vn"; // Thay thế bằng URL API thực tế
const tokenCybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE1LzEwLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MDQ4NjQwMDAwMCIsIm5iZiI6MTczMDMzMjgwMCwiZXhwIjoxNzYwNjU5MjAwfQ.P0-adChuwGt_dA8kRO_sxBjpC2NVGZr7B0F_3jou79s";
export const axiosWithAuth = axios.create({
    baseURL: BASE_URL,
    // thời gian đợi Apo trả về, nếu quá thời gian này thì sẽ xem là appi trả về kết quả thất bại
    timeout: 60 * 30 *1000, // 30 phút
});
// thêm thông tin vào cho header trước khi gửi request
axiosWithAuth.interceptors.request.use(
    (config) => {
        // Lấy token từ localStorage
            // const token = manageLocalStorage.get(KEY_ACCESS_TOKEN);
            // if (token) {
            //     config.headers["Authorization"] = `Bearer ${token}`;
            // }
            config.headers["TokenCybersoft"] = tokenCybersoft;
            config.headers["Content-Type"] = "application/json";
            return config;
    });

export const aixosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    // thời gian đợi Apo trả về, nếu quá thời gian này thì sẽ xem là appi trả về kết quả thất bại
    timeout: 60 * 30 *1000, // 30 phút
});


