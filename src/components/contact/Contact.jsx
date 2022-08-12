import { useState } from "react";
import "./contact.scss";

// email used nepax13351@safe-cart.com


export default function Contact() {
  const [message, setMessage] = useState(false);
  const [sender, setSender] = useState('')
  const [msg, setMsg] = useState('')

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setInterval(function () {
      setMessage(true);
      setMsg('')
      setSender('')
    }, 2000);
    setMessage(false)
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Mail Me :)</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Subject" value={sender} onChange={(e)=> setSender(e.target.value)} />
          <textarea placeholder="Message..."  onChange={(e)=>setMsg(e.target.value)} value={msg}></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
