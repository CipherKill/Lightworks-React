import BulbOn from '../../../../assets/bulbon.png'
import BulbOff from '../../../../assets/bulboff.png'
import {useContext} from 'react'
import MasterContext from '../../../../context/MasterContext'
import './styles/Rightbar.css'

function Rightbar() {

  const {
    state,
    switchBulb
  }= useContext(MasterContext);

  return (
    <div className='bulb-mode ms-5 ps-5'>
        <img src={state?BulbOn:BulbOff} alt='Bulb is ON' onClick={switchBulb} className='border-gradient pointer-cursor'/>
    </div>
  )
}

export default Rightbar