import './login.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
      <span className="loginTitle">Connexion</span>
        <form className="loginForm">
          <label>Nom d'utilisateur</label>
            <input className="loginInput" type="text" placeholder="Nom d'utilisateur" />
          <label>Mot de passe</label>
            <input className="loginInput" type="password" placeholder="Mot de passe" />
          <button className="loginButton">Se connecter</button>
        </form>
        <button className="loginRegisterButton">
          <Link className='link' to="/register">S'inscrire</Link>
        </button>
    </div>
  )
}