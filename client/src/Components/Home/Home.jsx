import { useEffect, useState } from "react";
import { CardContainer, Filters, Loading, Paged } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { getDogs, getTemperaments, resetMsg } from "../../Redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const filter = useSelector((state) => state.filter)
  const createMsg = useSelector((state) => state.postMsg)
  
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments())
    return () => {
      dispatch(resetMsg())
    }
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const [items, setItems] = useState(9);
  const max = filter.length > 1 ? filter.length / items : dogs.length / items;

  return (
    <div>
        
          {createMsg.message ?
                <Message message={createMsg.message} type='create'/>
            : ''
          }
      
      {dogs.length ? 
        <div>
          <Filters/>
          <CardContainer page={page} items={items} state={filter.length > 1 ? filter : dogs} />
          <Paged page={page} setPage={setPage} max={max} />
        </div>
         :
         <Loading/>
      }
    </div>
  );
};

export default Home;
