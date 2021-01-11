import {Link} from 'react-router-dom';
import './cards.css';

function Cards({content, imgURL, URL}){
  return (
    <Link to="#">
      <div className="card">
        <div className="card-body"> 
            <img src={imgURL} alt=""/>
            <div className="card-info">
              <p className="card-content">{content}</p>
            </div>
        </div>
      </div>
    </Link>
  );
}

export default Cards;