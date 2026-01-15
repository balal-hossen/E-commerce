import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authcontext";


const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 📸 Image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // 🟡 Register submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      // 🔥 Create user in Firebase
      const result = await createUser(email, password);

      // 🔥 Update name & photo in Firebase profile
      await updateUserProfile({
        displayName: name,
        photoURL: preview, // real project এ এখানে image hosting URL দিবে
      });

      console.log("User created:", result.user);

      navigate("/"); // register এর পর home এ যাবে
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register with Firebase
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Image Upload */}
          <div className="flex justify-center">
            <label className="cursor-pointer">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-yellow-400 flex items-center justify-center overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">Upload Image</span>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <NavLink to="/login" className="text-yellow-500 hover:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
