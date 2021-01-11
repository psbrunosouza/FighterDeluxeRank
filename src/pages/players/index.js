import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import Flag from 'react-world-flags';
import SyncLoader from "react-spinners/SyncLoader";
import './players.css';

function Players(){
  
  const id = '/8e1dc736-5d4c-4be3-a198-66274edbb3a4';
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {

    async function loadData(){
      setIsLoading(true);
      const res = await api.get(`${id}/tabs/sa_rank`);
      setPlayers(res.data);
      setIsLoading(false);
    }

    loadData();
  }, []);

  return(
    <div className="players">
      <h1> PLAYERS RANKING </h1>
      
      <SyncLoader color="#fff" loading={isLoading} size={10} />
      
      <table>
          
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>clan</th>
            <th>matches</th>
            <th className="elo">elo</th>
          </tr>
          
        {

          players.map((player) => (  
       
            <tr key={player.id}>
              <td width="5%" className="rank-item">{player.rank}</td>
              <td width="59%">{player.name}</td>
              <td width="7%"><Flag className="flag" code={`${player.land}`} height="16" /></td>
              <td width="7%">{player.clan}</td>
              <td width="10%">{player.g}</td>
              <td width="12%" className="elo-item">{player.elo}</td>
            </tr> 
                                   
          ))
        }
      </table>
    </div>
  );
}

export default Players;