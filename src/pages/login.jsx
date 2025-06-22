

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/input/input";
import { KEY_ACCESS_TOKEN } from "../common/constants/index";
import { manageLocalStorage } from "../common/utils/local-storage";

const tokenCybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxNCIsIkhldEhhblN0cmluZyI6IjE1LzEwLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MDQ4NjQwMDAwMCIsIm5iZiI6MTczMDMzMjgwMCwiZXhwIjoxNzYwNjU5MjAwfQ.P0-adChuwGt_dA8kRO_sxBjpC2NVGZr7B0F_3jou79s";

const LoginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email cannot be blank"),
  password: z.string().nonempty("Password cannot be blank").min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://fiverrnew.cybersoft.edu.vn/api/auth/signin", data, {
        headers: {
          "Content-Type": "application/json",
          "TokenCybersoft": tokenCybersoft
        }
      });

      manageLocalStorage.set(KEY_ACCESS_TOKEN, res.data.content.token);
      console.log("Token saved:", res.data.content.token);

      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
      alert("Login failed: " + err.response?.data?.message || "Unknown error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#161623] to-[#23243a]">
      <div className="max-w-4xl p-8 rounded-xl shadow-xl bg-[#1F1F2D]">
        <div className="flex flex-row gap-4">
          <img src="https://www.naijatechguide.com/wp-content/uploads/2018/10/fiverr-overview.jpeg" className="w-120 h-100" />
          <div>
            <h1 className="text-4xl font-bold text-center text-white">Welcome back</h1>
            <h3 className="text-shadow-white font-bold text-center text-white mb-8">Sign in to your account</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <label className="text-white">
                Email
                <Input
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-lg bg-[#23243a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2 mb-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </label>

              <label className="text-white">
                Password
                <Input
                  {...register("password")}
                  type="password"
                  className="w-full px-4 py-3 rounded-lg bg-[#23243a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2 mb-4"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-50"
              >
                {isSubmitting ? "Loading..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-center text-gray-400">
              Don't have an account?{" "}
              <a href="/register" className="text-indigo-400 hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
