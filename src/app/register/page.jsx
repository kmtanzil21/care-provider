"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await fetch("/api/register", {

      method: "POST",

      body: JSON.stringify(form),

    });

    const data = await res.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    // auto login
    await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    router.push("/");

  };

  return (

    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">

      <input placeholder="NID"
        onChange={e => setForm({...form, nid: e.target.value})}
        className="input input-bordered w-full mb-3"
      />

      <input placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})}
        className="input input-bordered w-full mb-3"
      />

      <input placeholder="Email"
        onChange={e => setForm({...form, email: e.target.value})}
        className="input input-bordered w-full mb-3"
      />

      <input placeholder="Contact"
        onChange={e => setForm({...form, contact: e.target.value})}
        className="input input-bordered w-full mb-3"
      />

      <input type="password" placeholder="Password"
        onChange={e => setForm({...form, password: e.target.value})}
        className="input input-bordered w-full mb-3"
      />

      <button className="btn btn-primary w-full">
        Register
      </button>

    </form>

  );

}