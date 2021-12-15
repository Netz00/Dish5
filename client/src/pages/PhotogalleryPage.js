import React from "react";
import PhotoComponent from "../components/PhotoComponent";

const PhotogalleryPage = (props) => {
  const photos = props.photos.map((photo) => {
    return (
      <PhotoComponent
        key={photo.id}
        id={photo.id}
        image={photo.image}
        name={photo.name}
      />
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3>Fotogalerija</h3>
          <hr />
        </div>
      </div>
      <div>{photos}</div>
    </div>
  );
};

export default PhotogalleryPage;
