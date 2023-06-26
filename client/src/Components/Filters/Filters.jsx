import { useDispatch, useSelector } from "react-redux";
import {
  ascentdant,
  descending,
  weightMin,
  weightMax,
  filterTemps,
  api,
  db,
  reset
} from "../../Redux/actions";
import { getDogs } from "../../Redux/actions";
import { TiRefresh } from 'react-icons/ti'
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dogs);
  const dogsCopy = useSelector((state) => state.dogsCopy);
  const stateTemp = useSelector((state) => state.temperaments)

  const refresh = () => {
      dispatch(reset())
      dispatch(getDogs())
  }

  const handleSort = (event) => {
    console.log(event.target.value);
    event.target.value === "a"
      ? dispatch(ascentdant(state))
      : dispatch(descending(state));
  };

  const handleWeight = (event) => {
    event.target.value === "min"
      ? dispatch(weightMin(state))
      : dispatch(weightMax(state));
  };

  const handleTemps = (event) => {
    dispatch(filterTemps(dogsCopy, event.target.value));
  };

  const handleSource = (event) => {
    event.target.value === 'api'
    ? dispatch(api(dogsCopy))
    : dispatch(db(dogsCopy));
  }

  return (
    <div className={style.contain}>
      <select
        defaultValue={"DEFAULT"}
        onChange={handleSort}
        className={style.select}
      >
        <option value="DEFAULT" disabled>
          order
        </option>
        <option value="a">ascentdant</option>
        <option value="d">descending</option>
      </select>

      <select
        defaultValue={"DEFAULT"}
        onChange={handleWeight}
        className={style.select}
      >
        <option value={"DEFAULT"} disabled>
          weight
        </option>
        <option value="min">weight min</option>
        <option value="max">weight max</option>
      </select>

      <select
        defaultValue={"DEFAULT"}
        onChange={handleTemps}
        className={style.select}
      >
        <option value="DEFAULT" disabled>Temps</option>
        {stateTemp.map((temp, i) => (
          <option key={i} value={temp.name}>{temp.name}</option>
        ))}
      </select>

      <select value={'DEFAULT'} onChange={handleSource} className={style.select}>
        <option value='DEFAULT' disabled>source</option>
        <option value='api'>api</option>
        <option value='db'>db</option>
      </select>

      <TiRefresh className={style.select} onClick={refresh}/>

    </div>
  );
};

export default Filters;
