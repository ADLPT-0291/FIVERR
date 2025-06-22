export const manageLocalStorage = {
    set(key,value){
        localStorage.setItem(key, JSON.stringify(value));
        // console.log("set", key, value);
    },
    get(key){
        const result = localStorage.getItem(key);
        // console.log("get", key, result);
        try{
            // try catch vì json.parse có thị bị lỗi do người dùng truyền string bị sai
            return result ? JSON.parse(result) : null;
        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
            return null;
        }
    },
    clear(){
        localStorage.clear();
        // console.log("clear");
    },
}