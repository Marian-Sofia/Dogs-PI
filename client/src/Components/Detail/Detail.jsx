import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deleteDogs, detailDogs, resetMsg, refresh } from "../../Redux/actions";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import style from "./Detail.module.css";
import { Loading, Message } from '../index';

const Detail = () => {
  const dogs = useSelector((state) => state.detailDogs);
  const editMsg = useSelector((state) => state.putMsg);
  const navigate = useNavigate();
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailDogs(id));
    return () => {
      dispatch(resetMsg());
      dispatch(refresh());
    };
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteDogs(id));
    navigate("/home");
  };

  return (
    <div>
      {!dogs.name ? (
        <Loading/>
      ) : (
        <div className={style.contain}>
          
          {editMsg.message ? (
            <Message message={editMsg.message} type='edit'/>
          ) : (
            ""
          )}

          <div className={style.containTitle}>
            <h1 className={style.title}>⭐ Details of {dogs.name}</h1>

            <h2 className={style.id}>ID: {dogs.id}</h2>
          </div>

          {typeof dogs.id === "string" ? (
            <div className={style.containBtn}>
              <button
                className={style.btnEdit}
                onClick={() => navigate(`/edit/${dogs.id}`)}
              >
                <AiFillEdit />
              </button>

              <button className={style.btnDelete} onClick={handleDelete}>
                <RiDeleteBin2Fill />
              </button>
            </div>
          ) : (
            ""
          )}

          <img className={style.img} src={dogs.image} />

          <div className={style.containExtra}>
            <h2 className={style.height}>
              <FaHeart className={style.icon} /> Height: {dogs.height}
            </h2>
            <h2 className={style.weight}>
              <FaHeart className={style.icon} /> Weight: {dogs.weight}
            </h2>
            <h2 className={style.life}>
              <FaHeart className={style.icon} /> Life Span: {dogs.life_span}
            </h2>
          </div>

          <div className={style.containTemps}>
            <h2 className={style.temperaments}>
              <FaHeart className={style.icon} /> Temperaments:{" "}
            </h2>
            {dogs.temperaments?.map((temp, i) => (
              <h3 className={style.temps} key={i}>
                {temp.name}
              </h3>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
