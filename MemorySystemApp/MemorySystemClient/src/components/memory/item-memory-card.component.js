import Reat from 'react';
import { Link } from 'react-router-dom';

function ItemMemoryCard({ownerProfilePicture, pictureUrl, owner, isLikeFromCurrentUser, likes, setLike}) {
    return (
        <div className="col-md-3 shadow-lg bg-white rounded">
            <div className="card profile-card-2 wrimagecard wrimagecard-topimage h-100">
              <div className="card-img-block">
                <img className="img-fluid" src={pictureUrl} alt="Card image cap" />
              </div>
              <div className="card-body pt-5">
                <img src={ownerProfilePicture} alt="profile-image" className="profile" />
                <h5 className="card-title">Published By: {owner}</h5>
                <div className="icon-block">
                  <Link to="#" onClick={setLike}>
                    <i className={`fa fa-thumbs-up ${isLikeFromCurrentUser && 'tumb'}`}></i>
                    <span id="likes"></span>{likes}
                  </Link>
                  <a href="#"> <i className="fa fa-heart"></i><span id="favorites"></span></a>
                </div>
                <div className="row">
                  <div className="col-md-6 p-3">
                    <button className="btn btn-primary mt-2 p-1">View Details</button>
                  </div>
                  <div className="col-md-6 p-3">
                    <button className="btn btn-primary mt-2 p-1">View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ItemMemoryCard
