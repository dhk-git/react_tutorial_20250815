import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  // type FormModel = {
  //     username : string;
  //     password : string;
  // }
  type ErrorModel = {
    message : string;
    remainingAttempts: string;
  }

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState<ErrorModel>();
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(formData);
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );
      if (response.data.user) {
        navigate("/admin/posts");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data) {
          const errorMessage =
            error.response.data.message || "로그인에 실패했습니다.";
          const remainingAttempts = error.response.data.remainingAttempts;
          setError({
            message: errorMessage,
            remainingAttempts: remainingAttempts,
          });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-semibold text-gray-900">
            관리자 로그인
          </h2>
          <p className="mt-2 text-center text-lg text-gray-600">
            관리자 전용 페이지 입니다.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label
              htmlFor="username"
              className="block text-xm font-medium text-gray-700"
            >
              관리자 아이디
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="관리자 아이디"
            />
          </div>

          <div className="space-y-4">
            <label
              htmlFor="password"
              className="block text-xm font-medium text-gray-700"
            >
              관리자 비밀번호
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
              placeholder="관리자 비밀번호"
            />
          </div>
          {error && (
            <div className="bg-red-50 text-red-500 p-4 rounded-lg text-base font-bold text-center">
              {typeof error === "string" ? error : error.message}
              {error.remainingAttempts !== undefined && (
                <div className="mt-1">
                  남은 시도 횟수 : {error.remainingAttempts}회
                </div>
              )}
            </div>
          )}
          <button
            type="submit"
            className="w-full items-center px-4 py-3 border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition-colors duration-300"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
