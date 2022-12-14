import axios from "axios";
import { Container, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import PhotoThumb from "./PhotoThumb";

function Photo({ photo, albumId }) {
  return (
    <>
      <Container>
        <Breadcrumbs crumbs={photo.breadcrumbs} current={photo.name} />
        {photo.prev && <PhotoThumb photo={photo.prev} albumId={albumId} />}
        {photo.next && <PhotoThumb photo={photo.next} albumId={albumId} />}
      </Container>
      <Image
        src={`${process.env.REACT_APP_API_BASE_URL}/api/v1/photo/${photo.id}/file`}
        alt={photo.filename}
        fluid
      />
    </>
  );
}

export default Photo;
