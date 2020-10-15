import React from 'react';
import './FormControl.scss';

interface IFromControlProps {
	disabled?: boolean;
	type?: 'fincancial' | 'select';
	selectMenu?: any;
	placeholder?: string;
	lebel?: string;
	id?: string;
	selectedItem?: string;
	label?: string;
	onBlur?: (event: any) => void;
	onChange?: (event: any) => void;
}

const FormControl = (props: IFromControlProps) => {
	const {
		disabled = false,
		type,
		selectMenu = [],
		placeholder = '',
		id = '',
		label = '',
		selectedItem = selectMenu[0],
		...rest
	} = props;

	const [selectedVal, setSelectedVal] = React.useState(selectedItem);
	const [openDropdown, setOpenDropdown] = React.useState(false);

	React.useEffect(() => {
		selectedVal && setSelectedVal(selectedVal);
	}, [selectedVal]);

	React.useEffect(() => {
		console.log(openDropdown);
	}, [openDropdown]);

	return (
		<div style={{width: '320px'}} className='w-full max-w-xs mx-auto'>
			<label className='block text-sm font-medium leading-5 text-gray-700'>
				{label}
			</label>
			<div className='mt-1 relative rounded-md shadow-sm'>
				{type === 'fincancial' ? (
					<>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<span className='text-gray-500 sm:text-sm sm:leading-5'>$</span>
						</div>
						<input
							id={id}
							disabled={disabled}
							className='form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5'
							placeholder={placeholder}
							aria-describedby='price-currency'
							{...rest}
						/>
						<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
							<span
								className='text-gray-500 sm:text-sm sm:leading-5'
								id='price-currency'>
								CAD
							</span>
						</div>
					</>
				) : type === 'select' ? (
					<>
						<span
							className='inline-block w-full rounded-md shadow-sm'
							onBlur={() => setOpenDropdown(false)}
							tabIndex={0}>
							<button
								type='button'
								aria-haspopup='listbox'
								aria-expanded='true'
								aria-labelledby='listbox-label'
								className='cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5'
								onClick={() => setOpenDropdown(true)}>
								<span className='block truncate'>{selectedVal}</span>
								<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
									<svg
										className='h-5 w-5 text-gray-400'
										viewBox='0 0 20 20'
										fill='none'
										stroke='currentColor'>
										<path
											d='M7 7l3-3 3 3m0 6l-3 3-3-3'
											stroke-width='1.5'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>
								</span>
							</button>
						</span>
						<div
							className='absolute mt-1 w-full rounded-md bg-white shadow-lg dropdown-menu'
							style={openDropdown ? {display: 'block'} : {display: 'none'}}>
							<ul
								tabIndex={-1}
								role='listbox'
								aria-labelledby='listbox-label'
								aria-activedescendant='listbox-item-3'
								className='max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5'>
								{selectMenu.map((item: string, idx: number) => (
									<SelectMenu
										menuItem={item}
										isSelected={false}
										key={idx}
										{...rest}
									/>
								))}
							</ul>
						</div>
					</>
				) : (
					<input
						id={id}
						disabled={disabled}
						className='form-input block w-full sm:text-sm sm:leading-5'
						placeholder={placeholder}
						{...rest}
					/>
				)}
			</div>
		</div>
	);
};

const SelectMenu = (props: any) => {
	return (
		<li
			tabIndex={-1}
			id='listbox-option-0'
			role='option'
			className='text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
			{...props}>
			<span className='font-normal block truncate'>{props.menuItem}</span>
			{props.isSelected && (
				<span className='text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4'>
					<svg
						className='h-5 w-5'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path
							fill-rule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clip-rule='evenodd'
						/>
					</svg>
				</span>
			)}
		</li>
	);
};
export default FormControl;
