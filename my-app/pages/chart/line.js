import {useEffect,useState} from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function Chartline(){
    const [data, setData] = useState([]);
    const [isLoading,setLoading] = useState(true);
    
    useEffect(() => {
      fetch("/chartline")
        .then((res) => res.json())
        .then((data) => {
          setData(data.ocean_data)
          setLoading(false)
        })
    }, [])

    


    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div>
        <div style={{height:'400px',width:'850px'}}>
        <Line options={options} data={linedata} />
         </div>
      </div>
    );

}