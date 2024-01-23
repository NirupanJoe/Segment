import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import services from '../../service';

const schemaOptions = [
	{ label: 'First Name', value: 'first_name' },
	{ label: 'Last Name', value: 'last_name' },
	{ label: 'Gender', value: 'gender' },
	{ label: 'Age', value: 'age' },
	{ label: 'Account Name', value: 'account_name' },
	{ label: 'City', value: 'city' },
	{ label: 'State', value: 'state' },
];

const SegmentModal = ({ show, handleClose }) => {
	const [segmentName, setSegmentName] = useState('');
	const [selectedSchema, setSelectedSchema] = useState([]);
	const [newSchema, setNewSchema] = useState(null);
	const [filteredOptions, setFilterOptions] = useState(schemaOptions)

	const handleAddNewSchema = () => {
		if (newSchema.value) {
			const schemas = [...selectedSchema, newSchema]
			setSelectedSchema(schemas);
			setFilterOptions(filteredOptions.filter(({ value }) => newSchema.value !== value))
			setNewSchema(null)
		}
	};

	const handleSaveSegment = () => {
		const data = {
			segment_name: segmentName,
			schema: selectedSchema.map((item) => ({ [item.value]: item.label })),
		};
		services.postApi(data)

		handleClose();
		setSelectedSchema([])
	};

	const onChangeNewSchema = (value) => {
		setNewSchema(value)
	}

	const onChangeAddedSchema = (selectedValue, preValue) => {
		setFilterOptions(services.getFilterOptions({filteredOptions, selectedValue, preValue}))
		setSelectedSchema(services.getSchemaOptions({selectedSchema, selectedValue, preValue}))
	}

	return (
		<Modal className='model-right' show={show} onHide={handleClose}>
			<Header />
			<Body {...{
				segmentName, setSegmentName, selectedSchema, 
				filteredOptions, onChangeAddedSchema, newSchema, 
				onChangeNewSchema, handleAddNewSchema
			}} />
			<Footer handleClose={handleClose} handleSaveSegment={handleSaveSegment} />
		</Modal>
	);
};

export default SegmentModal;
