import { useState } from 'react';
import { Container } from './Container';
import { usePhotos } from '../hooks/usePhotos';
export const AddPhoto = () => {
  const [URL, setURL] = useState('');
  const { handleAddNewPhoto } = usePhotos();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleAddNewPhoto(URL);
    setURL('');
  };

  return (
    <Container direction={'column'}>
      <input
        type="text"
        placeholder="Type the URL here: "
        value={URL}
        onChange={(e) => setURL(e.target.value)}
      />
      <button onClick={handleSubmit}>Add a new image</button>
    </Container>
  );
};
