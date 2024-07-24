import { Container, Navbar } from 'react-bootstrap'
import headerWeatherImg from '../../image/gradient-storm-logo-template.jpg'
import "./Header.css"

export const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={headerWeatherImg}
          width="70"
          height="70"
          className="d-inline-block align-top"
        />{' '}
        Weather Condition
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
