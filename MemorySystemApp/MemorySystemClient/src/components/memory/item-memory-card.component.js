import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import memoryService from '../../services/memory.service';

function ItemMemoryCard({
  memoryId,
  ownerProfilePicture,
  pictureUrl,
  title,
  owner,
  isLikeFromCurrentUser,
  likes,
  isFavoriteForCurrentUser,
  favorites }) {

  const [isLike, setIsLike] = useState(false);
  const [countLikes, setCountLikes] = useState(0);

  const [isFavorite, setIsFavorite] = useState(false);
  const [countFavorites, setCountFavorites] = useState(0);

  const onClickSetLikes = useCallback(() => {
    memoryService.likeMemory(memoryId)
      .then(response => {
        setCountLikes(response.data.data)
        setIsLike(prev => !prev);
      })
      .catch(err => {
        toast.error(err.response?.data?.errorMessage || err.message);
      })
  }, [memoryId]);

  const onClickSetFavorites = useCallback(() => {
    memoryService.favoriteMemory(memoryId)
      .then(response => {
        setCountFavorites(response.data.data)
        setIsFavorite(prev => !prev);
      })
      .catch(err => {
        toast.error(err.response?.data?.errorMessage || err.message);
      })
  }, [memoryId]);

  useEffect(() => {
    setCountLikes(likes);
    setIsLike(isLikeFromCurrentUser);

    setCountFavorites(favorites);
    setIsFavorite(isFavoriteForCurrentUser);
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
            <Link to="#" onClick={onClickSetFavorites}>
              <i className={`fa fa-heart ${isFavorite && 'heart'}`}></i>
              <span id="favorites"></span>{countFavorites}
            </Link>
          </div>
          <div className="row">
            <div className="col-md-6 p-3">
              <button className="btn btn-primary mt-2 p-1">
                <Link to={`/memories?id=${memoryId}`}>
                  <span className='color-white'>View Details</span>
                </Link>
              </button>
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
