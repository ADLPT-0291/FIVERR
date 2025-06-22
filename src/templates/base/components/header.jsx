import { useSelector } from "react-redux";
import { KEY_ACCESS_TOKEN } from "../../../common/constants/index";
import { manageLocalStorage } from "../../../common/utils/local-storage";
import Logo from "../../../components/icon/cart/fiverrlogo.svg";
import { USER_FETCH_STATUS } from "../../../store/user.slice.js";
import { Authen } from "./authen.jsx";
import { Profile } from "./profile.jsx";
import { ProfileSkeleton } from "./profile.skeleton.jsx";
// remove unused imports alt + shift + 0


export function Header(){
    // Lấy thông tin người dùng từ store
    // Sử dụng useSelector để lấy state từ Redux store
    // const user = useSelector((store) => {
    //     return store.userReducer.user;
    // });
    const userFetchStatus = useSelector((store) => {
        return store.userReducer.userFetchStatus;
    });
    const user = useSelector((store) => {
        console.log("user", store.userReducer.user);
        return store.userReducer.user;
    });
    const token = manageLocalStorage.get(KEY_ACCESS_TOKEN);
    // 1. token trong localStorage có và user trong redux = null
    // thì đang call api nên hiển thị skeleton
    // 2. token trong localStorage không có và user trong redux = null
    // người dùng chưa từng login
    // 3. token trong localStorage  có và user trong redux != null
    // thì đã login thành công
    // 4. token trong localStorage hết hạn
    return<>
    <div class="w-full h-[500px] bg-[radial-gradient(circle_at_center,_#912A09_30%,_#7B1A05_80%)]">
        <header className="flex p-2 justify-between items-center font-bold">
            <div className='flex justify-between items-center pl-10 '>
                <img src={Logo} alt="" className="w-[80px] h-[80px] cl-green-600"/>
                {/* <h1 className="text-white hover:text-blue-300">Movie Website</h1> */}
            </div>
            <div className="flex gap-4 pr-4 justify-between items-center">
                <div className=" flex gap-4 pr-4 text-white">
                    <a href="/home" className="hover:text-purple-800">Become a Seller</a>
                </div >
                {/* có user hiện profile */}
                {user && <Profile /> }
                {!user && token && (
                    <>
                            {userFetchStatus === USER_FETCH_STATUS.fetching &&(
                                <ProfileSkeleton />
                            )}
                            {
                                userFetchStatus === USER_FETCH_STATUS.success && (
                                    <Profile />
                                )
                            }
                            {
                                userFetchStatus === USER_FETCH_STATUS.exprired && (
                                    <Authen/>
                                )
                            }
                        </>
                    )
                }
                {!user && !token && (<Authen/>)
                }
            </div>
        </header>
    </div>
    </>
}