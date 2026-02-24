"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {

  const router = useRouter();

  const handleLogin = async (e) => {

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/");
    } else {
      alert(res.error);
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Login to your account
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin}>

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="input input-bordered w-full mb-4"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="input input-bordered w-full mb-4"
          />

          <button
            type="submit"
            className="btn bg-purple-500 hover:bg-purple-600 text-white w-full"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-6">

          Not have an account?{" "}

          <Link
            href="/register"
            className="text-purple-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}