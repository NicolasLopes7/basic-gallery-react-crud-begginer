import { useEffect, useState } from 'react';

const LOCAL_STORAGE_PHOTOS_KEY = '@gallery:photos';

export const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  const handleAddNewPhoto = (url) => {
    const newPhotos = [...photos, url];
    setPhotos(newPhotos);
    localStorage.setItem(LOCAL_STORAGE_PHOTOS_KEY, JSON.stringify(newPhotos));
  };

  useEffect(() => {
    setPhotos(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_PHOTOS_KEY) || '[]')
    );
  }, [handleAddNewPhoto]);

  return { photos, handleAddNewPhoto };
};
