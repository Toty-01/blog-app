import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import img from '../../components/img/img (8).jpg'

export default function Setting() {
  
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate"><i class="fa-regular fa-pen-to-square"></i> Mettre à jour</span>
          <span className="settingsTitleDelete"><i class="fa-solid fa-trash-can"></i> Supprimer compte</span>
        </div>
        <form className="settingsForm">
          <label>Photo de profil</label>
          <div className="settingsPP">
            <img
              src={img}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Utilisateur</label>
          <input type="text" placeholder="John" name="name" />
          <label>Email</label>
          <input type="email" placeholder="exemple@gmail.com" name="email" />
          <label>Mot de passe</label>
          <input type="password" placeholder="Mot de passe" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Mettre à jour
          </button>
        </form>
      </div>
        <Sidebar />
    </div>
  )
}