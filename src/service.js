import axios from 'axios';

const webhookURL = 'https://webhook.site/4411812d-6060-4c4b-baf3-48141004c34c';

const services = {
	getFilterOptions: ({filteredOptions, selectedValue, preValue}) => 
		[...filteredOptions, preValue].filter((option) => option.value !== selectedValue.value),

	getSchemaOptions: ({selectedSchema, selectedValue, preValue}) =>
		selectedSchema.map((option) => option.value === preValue.value ? selectedValue : option),

	postApi: (data) => {
		axios.post(webhookURL, data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}

export default services