import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <span className="loginTitle">Connexion</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Email" />
        <label>Mot de passe</label>
        <input className="loginInput" type="password" placeholder="Mot de passe" />
        <button className="loginButton">Se connecter</button>
      </form>
        <button className="loginRegisterButton">S'inscrire</button>
    </div>
  )
}