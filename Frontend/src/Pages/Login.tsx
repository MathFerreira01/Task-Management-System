import { FormEvent, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { auth } from "../services/firebaseConfig";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if(error) {
    return <p>Erro: {error.message}</p>
  }

  if(user) {
    window.location.href = "/home"
  }

  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign in
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <Label children="Email Address" />
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <Label children="Password" />
                  <a
                    href="#!"
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <Button children="Sign in" />
              </div>
              <p className="text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <Link
                  to="/sign-up"
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800"
                >
                  Sign up
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
