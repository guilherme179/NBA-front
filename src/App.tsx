import { Table } from "./pages/Table";
import { Login } from './pages/Login'
import jwt_decode from "jwt-decode";

export default function App() {
    
    const token = localStorage.getItem("token");

    if(token){
        const agora = Math.floor(Date.now() / 1000);
        var decode = jwt_decode(token);
        if(decode.exp > agora){
            return <Table />
        } else {
            localStorage.clear();
            return <Login />
        }
    } else if(!token) {
        return <Login />
    }
    
}