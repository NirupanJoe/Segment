import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Footer = ({ handleClose, handleSaveSegment }) => {
	return (
		<Modal.Footer style={{ justifyContent: 'flex-start' }}>
			<Button style={{background: 'rgb(65 180 148)', borderColor:'rgb(65 180 148)'}} onClick={handleSaveSegment} >
				Save the Segment
			</Button>
			<Button  variant="outline-danger" onClick={handleClose}>
				Cancel
			</Button>
		</Modal.Footer>
	)
}

export default Footer