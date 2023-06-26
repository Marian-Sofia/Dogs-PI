import { useNavigate } from 'react-router-dom';
import style from './NotFound.module.css'

const NotFound = () => {
  const navigate = useNavigate()

    return (
      <div className={style.container}>
      <div>
        <div className={style.contain}>
          <h1 className={style.error}>Error 404</h1>
          <div className={style.div1}></div>
          <div className={style.div2}></div>
          <div className={style.div3}></div>
        </div>

        <div className={style.btn} onClick={() => navigate('/home')}>
          <div className={style.text}>go back!</div>
        </div>

      </div>
      </div>
    )
}

export default NotFound;