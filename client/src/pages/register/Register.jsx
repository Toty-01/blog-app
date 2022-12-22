import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from "axios"

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
  }};

  return (
    <div className='register'>
      <span className="registerTitle">Inscription</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Nom d'utilisateur</label>
            <input 
              className="registerInput" 
              type="text" 
              placeholder="nom utilisateur" 
              onChange={e=>setUsername(e.target.value)}
            />
          <label>Email</label>
            <input 
              className="registerInput" 
              type="text" 
              placeholder="Email" 
              onChange={e=>setEmail(e.target.value)}
            />
          <label>Mot de passe</label>
            <input 
              className="registerInput" 
              type="password" 
              placeholder="Mot de passe" 
              onChange={e=>setPassword(e.target.value)}
            />
          <button className="registerButton" type='submit'>S'inscrire</button>
        </form>
        <button className="registerLoginButton">
          <Link className='link' to="/login">Se connecter</Link>
        </button>
        {error && <span style={{color: "red", marginTop: "10px"}}>Un probleme est survenu !</span>}
    </div>
  )
}