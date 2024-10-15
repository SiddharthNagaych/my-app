import React from "react";

import LoginGitHub from "@/components/LoginGitHub";
const SignIn = () => {
  return (
    
    <div className="w-full flex mt-20 justify-center">

     <section className="flex flex-col w-[400px]">
        <h1 className="text-center text-3xl font-bold w-full mb-6">Sign In</h1>
        {/* todo login form */}
        <LoginGitHub/>
     </section>

    </div>
  );
};
export default SignIn