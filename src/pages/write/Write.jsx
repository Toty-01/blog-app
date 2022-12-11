import './write.css'
import img from './img (9).jpg'

export default function Write() {
  return (
    <div className='write'>
      <img src={img} alt="" className="writeImg" />
      <form className='writeForm'>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className='fas fa-plus plus-logo'></i>
          </label>
          <input type="file" id='fileInput' style={{display: "none"}}/>
          <input type="text" placeholder='Titre' className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea 
            placeholder='Tout commençe par un mot ...'
            type='text'
            className='writeInput writeText'
            >
          </textarea>
        </div>
        <button className='writeSubmit'>Publier</button>
      </form>
    </div>
  )
}
