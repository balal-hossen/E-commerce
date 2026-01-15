import React, { useContext, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

import { confirmPasswordReset, updateProfile } from "firebase/auth";
import { auth } from "../Firebase.config";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, resetPassword, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Regular login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      await signIn(email, password);
      navigate("/"); // Redirect to home
    } catch (err) {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  // Google login
  const handleGoogleLogin = async () => {
    setError("");
    setMessage("");
    setLoading(true);
    try {
      const result = await signInWithGoogle();

      // If user has no photoURL, set default
      if (!result.user.photoURL) {
        await updateProfile(result.user, {
          photoURL: "https://i.ibb.co/2kR0YyW/user.png",
        });
      }

      navigate("/"); // redirect after Google login
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  // Reset password
  const handleResetPassword = async () => {
    setError("");
    setMessage("");
    if (!email) {
      setError("Enter email first");
      return;
    }
    try {
      await resetPassword(email);
      setMessage("Reset email sent!");
    } catch (err) {
      setError(err.message);
    }
  };

  // Set new password after reset link
  const handleNewPasswordSubmit = async () => {
    setError("");
    setMessage("");
    if (!newPassword) {
      setError("Enter new password");
      return;
    }
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-2">
          {mode === "resetPassword" ? "Set New Password" : "Welcome Back"}
        </h2>
        <p className="text-center text-gray-500 mb-6">
          {mode === "resetPassword"
            ? "Enter new password"
            : "Login to your account"}
        </p>

        {mode === "resetPassword" && oobCode ? (
          <div className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            {message && (
              <p className="text-green-600 text-sm text-center">{message}</p>
            )}
            <button
              onClick={handleNewPasswordSubmit}
              className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600"
            >
              Set New Password
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            {message && (
              <p className="text-green-600 text-sm text-center">{message}</p>
            )}
            <div className="text-right">
              <button
                type="button"
                onClick={handleResetPassword}
                className="text-sm text-yellow-500 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        )}

        {!(mode === "resetPassword" && oobCode) && (
          <>
           <NavLink to='/'>
             <button
              onClick={handleGoogleLogin}
              className="w-full flex mt-4 items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <FcGoogle className="text-2xl" />
              <span className="font-medium">Continue with Google</span>
            </button>
           </NavLink>
            <p className="text-center text-gray-500 mt-6">
              Don’t have an account?{" "}
              <NavLink to="/signup" className="text-yellow-500 hover:underline">
                Sign up
              </NavLink>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
