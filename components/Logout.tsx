"use client";
import {logout} from "@/actions/auth";
const Logout=()=>{
    return(
        <div
        onClick={()=>logout()}
        className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm hover:bg-black to-yellow-950"
        >
            Logout
        </div>
    )
}   
export default Logout;