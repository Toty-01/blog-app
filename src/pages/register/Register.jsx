import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Inscription</span>
        <form className="registerForm">
          <label>Nom d'utilisateur</label>
          <input className="registerInput" type="text" placeholder="nom utilisateur" />
          <label>Email</label>
            <input className="registerInput" type="text" placeholder="Email" />
          <label>Mot de passe</label>
            <input className="registerInput" type="password" placeholder="Mot de passe" />
          <button className="registerButton">S'inscrire</button>
        </form>
        <button className="registerLoginButton">
          <Link className='link' to="/login">Se connecter</Link>
        </button>
    </div>
  )
}