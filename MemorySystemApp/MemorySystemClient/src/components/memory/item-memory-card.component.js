import Reat, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import memoryService from '../../services/memory.service';

function ItemMemoryCard({ memoryId, ownerProfilePicture, pictureUrl, title, owner, isLikeFromCurrentUser, likes }) {
  const [isLike, setIsLike] = useState(false);
  const [countLikes, setCountLikes] = useState(0);

  const onClickSetLikes = useCallback(() => {
    memoryService.likeMemory(memoryId)
      .then(response => {
        setCountLikes(response.data.data)
        setIsLike(prev => !prev);
      })
      .catch(err => {
        toast.error(err.response?.data?.errorMessage || err.message);
      })
  })

  useEffect(() => {
    setCountLikes(likes);
    setIsLike(isLikeFromCurrentUser);
  }, [])

  return (
    <div className="col-md-3 shadow-lg bg-white rounded">
      <div className="card profile-card-2 wrimagecard wrimagecard-topimage h-100">
        <div className="card-img-block">
          <img className="img-fluid" src={pictureUrl} alt="Card image cap" />
        </div>
        <div className="card-body pt-5">
          <img src={ownerProfilePicture} alt="profile-image" className="profile" />
          <h5 className="profile-card-title font-weight-700">Title: <span>{title}</span></h5>
          <h5 className="card-title font-weight-700">Published By: <span>{owner}</span></h5>
          <div className="icon-block">
            <Link to="#" onClick={onClickSetLikes}>
              <i className={`fa fa-thumbs-up ${isLike && 'tumb'}`}></i>
              <span id="likes"></span>{countLikes}
            </Link>
            <Link to="#"> <i className="fa fa-heart"></i><span id="favorites"></span></Link>
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
