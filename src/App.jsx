import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sample from './table';
import { Container } from 'react-bootstrap';
import Popup from './popup';

function App() {
  const [count, setCount] = useState(0);
  const [editdata, seteditData] = useState({})
  const [show, setShow] = useState(false);

  const [ref, setRef] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    // console.log(rowData)
    if (rowData) {
      seteditData(rowData)
    } else {
      seteditData({
        Name: null,
        Email: null,
        Phone: null,
        Location: null
      })
    }
    setShow(true)
  }

  return (
    <Container fluid className='p-4'>
      <Popup editShow={show} editClose={handleClose} cngdata={editdata} setfieldData={seteditData} vva={ref} vav={setRef} />
      <Sample editClick={handleShow} value={ref} avalue={setRef} />
    </Container>
  )
}

export default App;
