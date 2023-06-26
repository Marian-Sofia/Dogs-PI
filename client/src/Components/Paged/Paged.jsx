import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
} from "react-icons/hi";
import style from "./Paged.module.css";

const Paged = ({ page, setPage, max }) => {
  if (page > Math.ceil(max)) setPage(1);

  const prevPage = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    if (page === Math.ceil(max)) return;
    setPage(page + 1);
  };

  const doubleNextPage = () => {
    if (page + 5 > Math.ceil(max)) return setPage(22);
    setPage(page + 5);
  };

  const doublePrevPage = () => {
    if(page - 5 < 2) return setPage(1)
    setPage(page - 5);
  };

  return (
    <div className={style.contain}>
      <HiChevronDoubleLeft
        onClick={() => doublePrevPage()}
        className={style.icon}
      />

      <HiChevronLeft onClick={() => prevPage()} className={style.icon} />

      <div className={style.page}>
        {page < 2 ? <div className={style.emoji}>💫</div> : page - 1}
      </div>

      <div className={style.pageAct}>{page}</div>

      <div className={style.page}>
        {page > Math.ceil(max-1) ? <div className={style.emoji}>💫</div> : page + 1}
      </div>

      <HiChevronRight onClick={() => nextPage()} className={style.icon} />

      <HiChevronDoubleRight
        onClick={() => doubleNextPage()}
        className={style.icon}
      />
    </div>
  );
};

export default Paged;
