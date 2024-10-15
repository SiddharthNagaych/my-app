import React from "react";
import { FaGithub } from "react-icons/fa";
const LoginGitHub=()=> {
  return (
    <div className=" w-full gap-4 hover:cursor-pointer mt-6 h-12 rounded-md p-4 flex justify-center items-center">
      <FaGithub className="text-white" />
      <p className="text-white">Login with GitHub</p>
    </div>
  );
}
export default LoginGitHub;
