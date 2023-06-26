import style from './Loading.module.css'

const Loading = () => {
    return (
        <div className={style.contain}>
          <h1 className={style.loading}>Loading</h1>
          <div className={style.div1}></div>
          <div className={style.div2}></div>
          <div className={style.div3}></div>
        </div>
    )
}

export default Loading;