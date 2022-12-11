import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Setting() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Mettre à jour son compte</span>
          <span className="settingsDeleteTitle">Supprimer son compte</span>
        </div>
      </div>
        <Sidebar />
    </div>
  )
}