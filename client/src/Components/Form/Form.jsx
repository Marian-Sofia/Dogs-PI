import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import handleError from "../Validations";
import { detailDogs, postDogs, putDogs } from "../../Redux/actions";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const id = useParams().id;
  const location = useLocation().pathname;
  const navigate = useNavigate();

  if (location === `/edit/${id}`) {
    useEffect(() => {
      dispatch(detailDogs(id));
    }, []);
  }

  const temperament = useSelector((state) => state.temperaments);
  const dogsDetail = useSelector((state) => state.detailDogs);

  const [dog, setDog] = useState({
    name: location === `/edit/${id}` ? dogsDetail.name : "",
    height: location === `/edit/${id}` ? dogsDetail.height : "",
    weight: location === `/edit/${id}` ? dogsDetail.weight : "",
    life_span: location === `/edit/${id}` ? dogsDetail.life_span : "",
    image: location === `/edit/${id}` ? dogsDetail.image : "",
    temperament:
      dogsDetail.temperaments
      ? dogsDetail.temperaments.map(tempe => tempe.name) 
      : []
  });

  const [error, setError] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    image: "",
  });

  const handlerTemps = (event) => {
    event.preventDefault();
    const find = dog.temperament?.find(
      (value) => value === event.target.innerText
    );

    if (find) return;

    setDog({
      ...dog,
      temperament: [...dog.temperament, event.target.innerText],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location === `/edit/${id}`) {
      dog.id = id;
      dispatch(putDogs(dog));
      setDog({
        id: "",
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperaments: [],
      });
      navigate(`/detail/${id}`);
      return;
    }

    dispatch(postDogs(dog));
    setDog({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      image: "",
      temperaments: [],
    });
    navigate('/home');
    return;
  };

  const deleteTemp = (event) => {
    const filter = dog.temperament?.filter(
      (value) => value !== event.target.innerText
    );

    setDog({ ...dog, temperament: filter });
  };

  const handleChange = (event) => {
    setDog({
      ...dog,
      [event.target.name]: event.target.value,
    });
    setError(
      handleError({
        ...dog,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div className={style.contain}>
      <form className={style.form} onSubmit={handleSubmit}>
        {location === `/edit/${id}` ? (
          <h1 className={style.title}>edit your doggie</h1>
        ) : (
          <h1 className={style.title}>create your doggie</h1>
        )}

        <label className={style.label}>
          name:
          <input
            className={style.input}
            placeholder="Name"
            onChange={handleChange}
            name="name"
            autoComplete="off"
            value={dog.name}
          />
        </label>
        {error.name && <span className={style.error}>{error.name}</span>}

        <label className={style.label}>
          height:
          <input
            className={style.input}
            placeholder="Height (min - max)"
            onChange={handleChange}
            name="height"
            autoComplete="off"
            value={dog.height}
          />
        </label>
        {error.height && <span className={style.error}>{error.height}</span>}

        <label className={style.label}>
          weight:
          <input
            className={style.input}
            placeholder="Weight (min - max)"
            onChange={handleChange}
            name="weight"
            autoComplete="off"
            value={dog.weight}
          />
        </label>
        {error.weight && <span className={style.error}>{error.weight}</span>}

        <label className={style.label}>
          life span:
          <input
            className={style.input}
            placeholder="Life span (min - max)"
            onChange={handleChange}
            name="life_span"
            autoComplete="off"
            value={dog.life_span}
          />
        </label>
        {error.life_span && (
          <span className={style.error}>{error.life_span}</span>
        )}

        <label className={style.label}>
          image:
          <input
            className={style.input}
            placeholder="Url"
            onChange={handleChange}
            name="image"
            autoComplete="off"
            value={dog.image}
          />
        </label>
        {error.image && <span className={style.error}>{error.image}</span>}

        <div className={style.temps}>
          <h1 className={style.titleTemps}>temperaments</h1>
          {temperament?.map((temp, i) => (
            <div className={style.divTemps} key={i} onClick={handlerTemps}>
              {temp.name}
            </div>
          ))}
        </div>

        <div className={style.temps}>
          <h1 className={style.titleTemps}>selected temperaments</h1>
          {dog.temperament?.length < 1 ? (
            <span className={style.errortemps}>
              you should choose at least one temperament
            </span>
          ) : (
            dog.temperament?.map((temp, i) => (
              <div className={style.divTemps} onClick={deleteTemp} key={i}>
                {temp}
              </div>
            ))
          )}
        </div>

          <button 
          disabled={
            error.name ||
            error.height ||
            error.weight ||
            error.life_span ||
            error.image ||
            dog.name === '' ||
            dog.height === '' ||
            dog.weight === '' ||
            dog.life_span === '' ||
            dog.image === '' ||
            dog.temperament.length === 0
          }
          className={style.btn}>
            {location === `/edit/${id}` ? 'edit' : 'create'}
        </button>

      </form>
    </div>
  );
};

export default Form;
