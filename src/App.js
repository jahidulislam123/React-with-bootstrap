import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CartGroup2 from './component/CartGroup2/CartGroup2';

function App() {
  return (<div className="App" >

    <Button variant="danger">My BUTTION</Button>
    <h2>using bhoost strap i  react</h2>
    <>
      <Spinner animation="border" variant="primary" />

    </>
    <CartGroup2></CartGroup2>
  </div>

  );
}

export default App;