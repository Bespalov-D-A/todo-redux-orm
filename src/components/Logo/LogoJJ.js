import s from './Logo.module.css'
import img from './../../img/ico.png'

const LogoJJ = () => {
  return <div className={s.logo}>
    <img src={img} alt="" />
    <h2><span>TODO</span>BASE</h2>
    </div>
}

export default LogoJJ