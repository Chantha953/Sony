import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { Navigate } from "react-router-dom";

const ProtectRoute = ({children})=>{
    const {isToken} = useContext(ProductContext);
    if(!isToken){
        return <Navigate to={"/signin"} replace/>
    }
    return children;
}
export default ProtectRoute;