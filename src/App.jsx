import { Container } from './components/Container';
import { Photo } from './components/Photo';
import { AddPhoto } from './components/AddPhoto';
import { usePhotos } from './hooks/usePhotos';

function App() {
  const { photos } = usePhotos();
  return (
    <Container direction={'column'}>
      <Container direction={'row'}>
        {photos?.map((url) => (
          <Photo url={url} />
        ))}
      </Container>

      <AddPhoto />
    </Container>
  );
}

export default App;
