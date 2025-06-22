import { Outlet } from "react-router";
import {Header} from "./components/header";
import {Footer} from "./components/footer";


export function BaseTemplate(){
    return<>
        <Header />
            <Outlet />
        <Footer />
    </>
}