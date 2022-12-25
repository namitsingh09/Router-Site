import { useState } from "react";
import "./reg.css"
import s from "./s.gif"


const Register = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
        <div className="op">
            <img src={s} id="x"></img>
            
            <h1 id="lp">Register For More...</h1>
      <form onSubmit={handleSubmit} id="dsa">
          <h1>Hi, We Would Love To Here From You</h1>
        <div className="sq">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="sq">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="sq">
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">{status}</button>
      </form>
      </div>
    );
  };
  
  export default Register;