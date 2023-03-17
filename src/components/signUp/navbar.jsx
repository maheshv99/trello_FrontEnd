import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../../App.css"

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPwDMARdSNxTVyCIlTShQxkD1wGVxz7q0aRz5wb99wEkpuuyGXgY0Fb5ezw2faiaXOLM&usqp=CAU'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <span className='head'>Trello</span>
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;