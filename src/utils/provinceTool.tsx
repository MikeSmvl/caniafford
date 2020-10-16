export const ProvinceMapper = (provinceName: string) => {
	switch (provinceName) {
		case 'Alberta':
			return 'AB';
		case 'British Columbia':
			return 'BC';
		case 'Manitoba':
			return 'MB';
		case 'New Brunswick':
			return 'NB';
		case 'Newfoundland and Labrador':
			return 'NL';
		case 'Northwest Territories':
			return 'NT';
		case 'Nova Scotia':
			return 'NS';
		case 'Nunavut':
			return 'NU';
		case 'Ontario':
			return 'ON';
		case 'Prince Edward Island':
			return 'PE';
		case 'Quebec':
			return 'QC';
		case 'Saskatchewan':
			return 'SK';
		case 'Yukon Territories':
			return 'YT';
		default:
			return 'QC';
	}
};
