import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import SegmentModal from './components/SegmentModal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className='App'>
      <Button variant="primary" onClick={handleShow}>
        Save Segment
      </Button>

      <SegmentModal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default App;
