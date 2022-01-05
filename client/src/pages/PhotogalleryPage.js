import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PhotoComponent from '../components/PhotoComponent';
import { Loading } from '../components/LoadingComponent';

import { fetchPhotos } from '../actions/photos';

const PhotogalleryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const { photos } = useSelector((state) => state);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Fotogalerija</h3>
          <hr />
        </div>
      </div>
      <div>
        {(photos.isLoading && <Loading />) ||
          (photos.errMess && <h4>{photos.errMess}</h4>) ||
          photos.photos.map((photo) => {
            return (
              <PhotoComponent
                key={photo.id}
                id={photo.id}
                image={photo.image}
                name={photo.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PhotogalleryPage;
