import React, { useState } from "react";

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple frontend-only login validation
    if (username === "marqwon" && password === "marqwon@0310") {
      setIsLoggedIn(true);
      setStatus("✅ Logged in successfully!");
    } else {
      setStatus("❌ Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setStatus("Logged out");
  };

  const handleDownload = async (type) => {
    try {
      setStatus("⏳ Downloading...");
      const response = await fetch(`http://localhost:5000/api/download/${type}`);

      if (!response.ok) {
        setStatus("⚠️ No " + type + " applications found");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type}_applications.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      setStatus(`✅ ${type} applications downloaded`);
    } catch (err) {
      console.error(err);
      setStatus("❌ Error downloading file");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-black">
      <h1 className="text-3xl font-bold mb-6 text-black">Admin Dashboard</h1>

      {!isLoggedIn ? (
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md p-6 rounded-lg w-full max-w-md space-y-4 text-black"
        >
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border p-2 rounded text-black"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded text-black"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
          <div className="text-sm text-black mt-2">{status}</div>
        </form>
      ) : (
        <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md space-y-4 text-center text-black">
          <div className="font-semibold text-black">✅ Logged in as admin</div>

          <button
            onClick={() => handleDownload("jobs")}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            📥 Download Job Applications
          </button>

          <button
            onClick={() => handleDownload("internships")}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-2"
          >
            🎓 Download Internship Applications
          </button>

          <button
            onClick={handleLogout}
            className="w-full bg-gray-200 text-black py-2 rounded mt-2 hover:bg-gray-300"
          >
            Logout
          </button>

          <div className="text-sm text-black mt-2">{status}</div>
        </div>
      )}
    </div>
  );
};

export default Admin;
