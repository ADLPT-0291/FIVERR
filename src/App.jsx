// đảm bảo app luôn luôn được gọi khi người dùng vào bất kỳ một page nào trong website của chúng ta
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { KEY_ACCESS_TOKEN } from "../src/common/constants/index";
import { manageLocalStorage } from "../src/common/utils/local-storage";
import { getProfileAPI } from "../src/service/user.service";
import { setUser, setUserFetchStatus, USER_FETCH_STATUS } from "../src/store/user.slice";

export default function App({children}) {
  console.log("INIT APP");
  const dispatch = useDispatch();
  useEffect(() => { 
       // Lấy token từ localStorage
       const token = manageLocalStorage.get(KEY_ACCESS_TOKEN);
       if (token){
        // nếu có token thì show ra 
        console.log("token is exist");
        dispatch(setUserFetchStatus(USER_FETCH_STATUS.fetching));

        getProfileAPI().then((res) => {
          dispatch(setUser(res.data.content));
          setTimeout(() => {
            dispatch(setUserFetchStatus(USER_FETCH_STATUS.success));
          }, 300); // Giả lập thời gian fetch dữ liệu
        }
        ).catch((err) => {
          dispatch(setUserFetchStatus(USER_FETCH_STATUS.exprired));
          console.error("get profile error", err);
        });
       }
  },[]);
  return <>{children}</>;
}