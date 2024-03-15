import { useState, useEffect } from 'react';
import axios from "axios";
import GridLoader from "react-spinners/GridLoader";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const Card = (props) => {
    const [data, setData] = useState()
    const [isLoading , setLoading] = useState(true);

    async function asyncFunctionCard() {
        setLoading(true);
        try {
            const response = await axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.user.id}.json`);
            await delay(2000);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        asyncFunctionCard();
    }, [props]);


    return (
       <>
        {
         isLoading && <GridLoader
           color="#8636d6"
           margin={6}
           size={17}
           speedMultiplier={1}
           width={140}/>
       }
       {!isLoading && <ul className="card">
         <li><img src={data?.avatar} alt="image"/></li>
         <li className="card_name">{data?.name}</li>
         <li className="card_city">City: {data?.details.city}</li>
         <li className="card_company">Company: {data?.details.company}</li>
         <li className="card_position">Position: {data?.details.position}</li>
       </ul>}
    </>
  )
}

export default Card