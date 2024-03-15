import { useState, useEffect } from 'react';
import List from './List';
import Card from './Card';
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";
const _URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Container = () => {
    const [data, setData] = useState([]);
    const [isLoading , setLoading] = useState(true);
    const [user, setUser] = useState();

    async function asyncFunction() {
        setLoading(true);
        try {
            const response = await axios.get(_URL);
            await delay(3000);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        asyncFunction();
    }, []);

    const handlerClick = (user) => {
        setUser(user);
    }

    return (
        <div className="container">
        <div className="container_list">
          {
            isLoading && <GridLoader
              color="#8636d6"
              margin={6}
              size={17}
              speedMultiplier={1}
              width={140}/>
          }
          {!isLoading && <List data={data} selectedId={user?.id} handlerClick={handlerClick}/>}
        </div>
        <div className="container_card">
          {user && <Card user={user} />}
       </div>
       </div>
  )
}

export default Container