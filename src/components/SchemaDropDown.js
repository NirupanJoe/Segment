import React from 'react'
import Select from 'react-select';

const SchemaDropDown = ({ onChange, options, value = null }) => {
	return (
		<Select
			className='m-3'
			placeholder='Add schema to segment'
			value={value}
			onChange={onChange}
			options={options}
		/>
	)
}

export default SchemaDropDown