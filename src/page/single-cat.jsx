import React, { useEffect, useState } from 'react';
import { getImageCat } from 'api/cat-breeds';
import { useParams } from 'react-router-dom';
const SingleCat = () => {
  const { id } = useParams();
  const [img, setImg] = useState('');

  useEffect(() => {
    getImageCat(id)
      .then((img) => {
      setImg(img);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      {
        img ? <img src={img} alt="" /> : null
      }
    </div>
  );
};

export default SingleCat;
