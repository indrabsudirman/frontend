import React from "react";
import LoginForm from "../components/auth/LoginForm";

export default function login() {
  return (
    <div className="min-h-screen dark:bg-dark_bg_1 flex items-center justify-center py-[19px] overflow-hidden">
      {/* container */}
      <div className="flex w-[1600px] mx-auto h-full">
        {/* Register form */}
        <LoginForm />
      </div>
    </div>
  );
}
