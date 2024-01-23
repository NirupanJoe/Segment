import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import SchemaDropDown from '../SchemaDropDown'

const Body = ({ segmentName, setSegmentName, selectedSchema, 
	filteredOptions, onChangeAddedSchema, newSchema, onChangeNewSchema, handleAddNewSchema }) => {
		
	return (
		<Modal.Body>
			<Form>
				<Form.Group className='m-3'>
					<Form.Label>Enter the Name of the Segment</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter segment name"
						value={segmentName}
						onChange={(e) => setSegmentName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId="addSchema">
					<Form.Label className='m-3'>To Save your segment, you need to add the schemas to build the query</Form.Label>
				</Form.Group>
				{!!selectedSchema.length && <div style={{ border: '1px solid lightblue' }} className='m-3'>
					{selectedSchema.map((option) =>
						<SchemaDropDown key={option.value} options={[option, ...filteredOptions]} onChange={(value) => {
							onChangeAddedSchema(value, option)
						}} value={option} />
					)}
				</div>}
				<SchemaDropDown options={filteredOptions} value={newSchema} onChange={onChangeNewSchema} />
				<Button variant='link' style={{ color: 'rgb(65, 180, 148)' }} className='btn-color fs-6' onClick={handleAddNewSchema}>+ Add new schema</Button>
			</Form>
		</Modal.Body>
	)
}

export default Body