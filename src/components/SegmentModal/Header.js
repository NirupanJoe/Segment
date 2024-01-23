import React from 'react'
import { Modal } from 'react-bootstrap'

const Header = () => {
	return (
		<Modal.Header style={{background: 'rgb(57 174 188)', color: 'white'}} closeButton>
			<Modal.Title>Saving Segment</Modal.Title>
		</Modal.Header>
	)
}

export default Header