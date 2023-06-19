import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'
import style from './Paged.module.css'

const Paged = ({page, setPage, max}) => {
    const prevPage = () => {
        if(page === 1) return
        setPage(page - 1)
    }

    const nextPage = () => {
        if(page === Math.ceil(max)) return
        setPage(page + 1)
    }


    return (
        <div className={style.contain}>
            <GrFormPreviousLink onClick={() => prevPage()} className={style.icon}/>
            <p className={style.page}>{page} OF {Math.ceil(max)}</p>
            <GrFormNextLink onClick={() => nextPage()} className={style.icon}/>
        </div>
    )
}

export default Paged;