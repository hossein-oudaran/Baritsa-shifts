import React from "react";
import LoginForm from "../features/login/loginForm";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">ورود به سیستم</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
