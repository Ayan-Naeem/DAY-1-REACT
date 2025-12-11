import { useState } from "react";
import Header from "./components/header"
import Routes from "./routes"

export default function App() {
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === signupData.email);

    if (exists) {
      alert("User already exists!");
      return;
    }

    const updatedUsers = [...users, signupData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Signup successful! Now login.");
    setSignupData({ name: "", email: "", password: "" });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    setCurrentUser(user);
    alert("Login successful!");
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
      <Routes />
      {currentUser ? (
            <><Header /><h2>Welcome, {currentUser.name}! 🎉</h2><button onClick={logout}>Logout</button></>
      ) : (
        <>
        <div>
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={signupData.name}
            onChange={handleSignupChange}
          /><br/><br/>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={signupData.email}
            onChange={handleSignupChange}
          /><br/><br/>

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signupData.password}
            onChange={handleSignupChange}
          /><br/><br/>

          <button onClick={handleSignup}>Signup</button>
          <hr />
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={handleLoginChange}
          /><br/><br/>

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleLoginChange}
          /><br/><br/>

          <button onClick={handleLogin}>Login</button>
        </div>
        </>
      )}
    </div>
  );
}
