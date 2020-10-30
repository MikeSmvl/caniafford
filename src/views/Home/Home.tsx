import React from 'react';
import './Home.scss';
import 'tailwind.css';
import FormControl from 'components/FromControl/FormControl';
import Stats from 'components/Stats/Stats';
import { ProvinceMapper } from 'utils/provinceTool';
import { getMortgagePayment } from 'utils/mortgageTool';
import * as constants from 'utils/constants.json';
import Intro from '../../components/Intro/Introduction';

const Home = () => {
	const [salary, setSalary] = React.useState(constants.home.salary);
	// eslint-disable-next-line
	const [province, setProvince] = React.useState('AB');
	const [netIncome, setNetIncome] = React.useState({
		yearly: 0,
		monthly: 0,
		biweekly: 0,
		weekly: 0,
		day: 0,
		hourly: 0,
	});
	// eslint-disable-next-line
	const [downpayment, setDownPayment] = React.useState(
		constants.home.downpayment
	);
	// eslint-disable-next-line
	const [houseBudget, setHouseBudget] = React.useState(
		constants.home.houseBudget
	);
	const [monthlyExpenses, setMonthlyExpenses] = React.useState(
		constants.home.expenses
	);
	const [amortization, setAmortization] = React.useState(
		constants.home.amortization
	);
	const [interest, setInterest] = React.useState(constants.home.interest);

	const principal = houseBudget - downpayment;

	const mortgage = getMortgagePayment(principal, amortization, interest);

	const calculateDownpaymentTime = (
		currentDownpayment: number,
		housePrice: number,
		percentage: number,
		netIncome: number,
		monthlyExpenses: number
	) => {
		const amountNeeded = (percentage / 100) * housePrice;

		if (currentDownpayment >= amountNeeded) {
			return 0;
		}

		const amountLeftToSave = amountNeeded - currentDownpayment;

		const timeInMonths = amountLeftToSave / (netIncome - monthlyExpenses);

		return Math.round(timeInMonths);
	};

	React.useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				'https://us-central1-housingstrategy.cloudfunctions.net/netIncome',
				{
					method: 'POST',
					body: JSON.stringify({
						province: province,
						salary: salary,
					}),
				}
			);
			return response.json();
		};
		getData().then((data) => {
			setNetIncome(data);
		});
	}, [salary, province]);

	const numberWithCommas = (x: number) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	};

	return (
		<>
		<Intro />
		<div className="Home space-y-8">
			<div className="pb-5 border-b border-black-200 py-12">
				<h3 className="text-3xl leading-6 font-medium text-gray-900">
					Home Calculator
				</h3>
			</div>
			<header className="Home-header">
				<div className="left-side">
					<FormControl
						id="income"
						label="Gross Yearly Household Income"
						placeholder={numberWithCommas(constants.home.salary)}
						type="fincancial"
						onBlur={(e) =>
							setSalary(
								e.target.value ? Number(e.target.value) : constants.home.salary
							)
						}
					/>
					<br />
					<FormControl
						id="province"
						label="Province"
						type="select"
						selectedItem="British Columbia"
						selectMenu={[
							'Alberta',
							'British Columbia',
							'Manitoba',
							'New Brunswick',
							'Newfoundland and Labrador',
							'Nova Scotia',
							'Nunavut',
							'Ontario',
							'Prince Edward Island',
							'Quebec',
							'Saskatchewan',
							'Yukon Territories',
						]}
						onChange={(selectedItem) =>
							setProvince(ProvinceMapper(selectedItem))
						}
					/>
					<br />
					<FormControl
						id="down-payment"
						label="Down Payment"
						type="fincancial"
						placeholder={numberWithCommas(constants.home.downpayment)}
						onBlur={(e) =>
							setDownPayment(
								e.target.value
									? Number(e.target.value)
									: constants.home.downpayment
							)
						}
					/>
					<br />
					<FormControl
						id="home-cost"
						label="Home Price"
						type="fincancial"
						placeholder={numberWithCommas(constants.home.houseBudget)}
						onBlur={(e) =>
							setHouseBudget(
								e.target.value
									? Number(e.target.value)
									: constants.home.houseBudget
							)
						}
					/>
					<br />
					<FormControl
						id="expenses"
						label="Monthly Expenses"
						type="fincancial"
						placeholder={numberWithCommas(constants.home.expenses)}
						onBlur={(e) =>
							setMonthlyExpenses(
								e.target.value
									? Number(e.target.value)
									: constants.home.expenses
							)
						}
					/>
					<br />
					<FormControl
						id="amortization"
						label="Amortization Period"
						placeholder={
							numberWithCommas(constants.home.amortization) + ' years'
						}
						onBlur={(e) =>
							setAmortization(
								e.target.value
									? Number(e.target.value)
									: constants.home.amortization
							)
						}
					/>
					<br />
					<FormControl
						id="interest"
						label="Interest Rate"
						placeholder={numberWithCommas(constants.home.interest) + '%'}
						onBlur={(e) =>
							setInterest(
								e.target.value
									? Number(e.target.value)
									: constants.home.interest
							)
						}
					/>
				</div>
				{netIncome.monthly > 0 && (
					<div className="right-side">
						<Stats
							label="Monthly Net Income"
							data={numberWithCommas(netIncome.monthly) + '$'}
						></Stats>
						<Stats
							label="Monthly Mortgage Payments"
							data={numberWithCommas(mortgage) + '$'}
						></Stats>
						<Stats
							label="Monthly Savings"
							data={
								numberWithCommas(
									netIncome.monthly - monthlyExpenses - mortgage
								) + '$'
							}
						></Stats>
						<Stats
							label="Time needed for 20%"
							data={
								calculateDownpaymentTime(
									downpayment,
									houseBudget,
									20,
									netIncome.monthly,
									monthlyExpenses
								).toString() + ' months'
							}
						></Stats>
					</div>
				)}
			</header>
		</div>
		</>
	);
};

export default Home;
