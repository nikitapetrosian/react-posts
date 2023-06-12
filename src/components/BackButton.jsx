import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import ROUTES from 'utils/routes';

export default function BackButton() {

  return (
    <Nav.Link as={Link} to={ROUTES.HOME} >
      Назад
    </Nav.Link>
  );
}
