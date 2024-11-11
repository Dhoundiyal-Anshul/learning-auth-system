import React, { useState } from "react";

export function Signupandlogin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handleActionOfLogin = async () => {
    // Handle any action, like form submission or API call

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Check if there is a link in the response
      if (data.link) {
        window.location.href = data.link; // Redirect to link
      } else {
        alert(data.msg); // Show message (e.g., "Wrong username or password")
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleActionOfCreation = async () => {
    // Handle any action, like form submission or API call
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      // Check if there is a link in the response
      if (data.link) {
        window.location.href = data.link; // Redirect to link
      } else {
        alert(data.msg); // Show message (e.g., "Wrong username or password")
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1>Test Website for User Authentication</h1>
      <h2>Create an account and sign in, or log in directly to test.</h2>
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleActionOfCreation}>Create Account</button> <br />
      <button onClick={handleActionOfLogin}>Login</button> <br />
      <h3>More features will be added as I continue learning and improving.</h3>
      <h4>Upcoming features: (by 17/11/24)</h4>
      <ul>
        <li>JWT authorization</li>
        <li>Tailwind CSS</li>
        <li>More refined React </li>
      </ul>
    </div>
  );
}

// import React, { useState } from "react";

// export function Signup() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   // Handle login button click
//   const next = async () => {
//     // Fetch the signup or login request here
//     const response = await fetch("/login");
//     const data = await response.json();
//     if (data.link) {
//       // Redirect to the link if it exists
//       window.location.href = data.link;
//     } else {
//       console.log(data.msg); // Show message if no link
//     }
//   };

//   return (
//     <div>
//       <input type="text" placeholder="Username" />
//       <br />
//       <input type="text" placeholder="Password" />
//       <br />
//       <button onClick={next}>login</button>
//       <button>sign-up</button>
//     </div>
//   );
// }
// import React, { useState } from "react";

// export function Signup() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const next = async () => {
//     const response = await fetch("http://localhost:3000/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json();
//     if (data.link) {
//       window.location.href = data.link;
//     } else {
//       console.log(data.msg);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br />
//       <button onClick={next}>Login</button>
//     </div>
//   );
// }
