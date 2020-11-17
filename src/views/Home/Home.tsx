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
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<div className="text-lg leading-tight text-gray-900">
						Can I Afford ➢ A Home? ➢ Calculator
					</div>
				</div>
			</header>
			<div className="Home space-y-4">
				<div className="pb-5 border-b border-black-200 py-12">
					<h3 className="text-3xl leading-6 font-medium text-gray-900">
						Home Calculator
					</h3>
				</div>
				<header className="Home-header grid grid-cols-1 md:grid-cols-2 md:gap-x-16 xl:gap-x-64 gap-y-8">
					<div className="left-side col-span-1">
						<FormControl
							id="income"
							label="Gross Yearly Household Income"
							placeholder={numberWithCommas(constants.home.salary)}
							type="fincancial"
							onBlur={(e) =>
								setSalary(
									e.target.value
										? Number(e.target.value)
										: constants.home.salary
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
						<div className="right-side col-span-1">
							<Stats
								label="Monthly Net Income"
								data={numberWithCommas(netIncome.monthly) + '$'}
								color="blue"
							></Stats>
							<Stats
								label="Monthly Mortgage Payments"
								data={numberWithCommas(mortgage) + '$'}
								color="red"
							></Stats>
							<Stats
								label="Monthly Savings"
								data={
									numberWithCommas(
										netIncome.monthly - monthlyExpenses - mortgage
									) + '$'
								}
								color="green"
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
				<div className="Fundamentals max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold leading-tight text-gray-900">
						Set Your Budget
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						How much can I afford?
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						How much will the bank approve me for?
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						A good mortgage broker can help you with this. Alternatively,
						there's our steps and calculator below.
					</p>
					<h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
						Find Your Home
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						This seems like the easy part, but depending on the market it can be
						a challenge to find one that checks all your boxes without too many
						competitors.
					</p>
					<h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
						Make An Offer
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Discuss with your realtor an appropriate offer strategy, but don't
						always go on their advice alone.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Do your best to understand the market you'd like to buy in as well,
						so you can make an appropriate offer.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						If it is a buyers market (your advantage) you may go in low and
						leave room for negotiation.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						If it is more of a sellers market, you might be wise to make your
						initial offer close to your best.
					</p>
					<h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
						Negotiation Process
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Seller will either accept your price and terms, reject them or come
						back with a different price and/or terms.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						This is the negotiation process. In a buyers market it is nice to
						have the ability to go back and forth a few times with this
						agreement.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						You can negotiate not just the price, but the closing date, the
						deposit amount, the inclusion of furniture, the property repairs to
						be completed in advance of closing and various other conditions
						including financing and home inspection.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						It gives you and the seller the option to void the agreement if the
						conditions are not met within the established time frame.
					</p>
					<h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
						Deposit
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Once you have an accepted offer on both sides, you have the property
						under contract.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Congratulations, you're getting close!
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						You'll usually have 24hrs after acceptance to bring your deposit (in
						the form of a certified cheque or bank draft) to the selling
						brokerage.
					</p>
					<h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
						Mortgage Financing
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						You should have already been working on your financing. If you can
						get a mortgage pre-approval before the offer stage, great! If not,
						time to buckle down and get a letter of commitment from a bank to
						fund your mortgage.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						They will require proof of income: two years of T4s and NOAs, pay
						stubs, two pieces of ID, proof of down payment and they will need to
						know the source.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Different lenders may have additional requirements. You will also
						need to find a real estate lawyer. If you have a good realtor, they
						should be able to connect you to one.
					</p>
					<h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
						Conditions
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Fulfill or waive any other conditions. If you had an inspection
						condition, get it done and either wave the condition meaning you're
						happy with the inspection or sign something back to the seller.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						For example, if there is water damage, you can sign that it needs to
						be fixed before closing or negotiate for a price reduction
						accordingly.
					</p>
					<h1 className="mt-12 text-3xl font-bold leading-tight text-gray-900">
						Closing Day
					</h1>
					<p
						className="mt-10 max-w-3xl text-lg  text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						At this stage you should have already signed a mortgage commitment
						and be fully prepared. Your lawyer will guide you through the
						transaction.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						You will need to bring your down payment plus the closing costs
						(land transfer taxes, lawyer fees, etc.) as a certified cheque or
						bank draft to your lawyer.
					</p>
					<p
						className="mt-4 max-w-3xl text-lg text-gray-800 lg:mx-auto leading-loose tracking-wide"
						style={{ textAlign: 'left' }}
					>
						Your lawyer will either have the keys, or have made arrangements for
						you to receive them.
					</p>
				</div>
			</div>
		</>
	);
};

export default Home;
