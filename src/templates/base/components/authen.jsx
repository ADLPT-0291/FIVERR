import { Link } from "react-router"

export function Authen(){
    return (
        <>
            <div className="mr-8">
                <Link className="p-2 mr-1 border rounded-md hover:text-indigo-500 mt-2 mb-2" to="/login">Join</Link>
                <Link className="p-2 border rounded-md hover:text-indigo-500 mt-2 mb-2" to="/register">Sign In</Link>
            </div>
        </>
    )
}