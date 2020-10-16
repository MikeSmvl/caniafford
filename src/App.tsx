import React from 'react';
import './App.scss';
import './tailwind.css';
import Navbar from './components/Navbar/Navbar';
import FormControl from './components/FromControl/FormControl';
import { ProvinceMapper } from './utils/provinceTool';
import { getMortgagePayment } from './utils/mortgageTool';

function App() {
    const [salary, setSalary] = React.useState(70000);
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
    const [downpayment, setDownPayment] = React.useState(0);
    // eslint-disable-next-line
    const [houseBudget, setHouseBudget] = React.useState(500000);
    const [monthlyExpenses, setMonthlyExpenses] = React.useState(0);
    const [amortization, setAmortization] = React.useState(25);
    const [interest, setInterest] = React.useState(2);

    const principal = houseBudget - downpayment;

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

    return (
        <div className="App">
            <Navbar></Navbar>
            <header className="App-header">
                <div className="left-side">
                    <br />
                    <FormControl
                        id="income"
                        label="Gross Yearly Income"
                        placeholder={salary.toString()}
                        type="fincancial"
                        onBlur={(e) => setSalary(Number(e.target.value))}
                    />
                    <br />
                    <FormControl
                        id="province"
                        label="Province"
                        type="select"
                        selectedItem="Quebec"
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
                        placeholder="0.0"
                        onBlur={(e) => setDownPayment(Number(e.target.value))}
                    />
                    <br />
                    <FormControl
                        id="home-cost"
                        label="Home Price"
                        type="fincancial"
                        placeholder={houseBudget.toString()}
                        onBlur={(e) => setHouseBudget(Number(e.target.value))}
                    />
                    <br />
                    <FormControl
                        id="expenses"
                        label="Monthly Expenses"
                        type="fincancial"
                        placeholder="0.0"
                        onBlur={(e) =>
                            setMonthlyExpenses(Number(e.target.value))
                        }
                    />
                    <br />
                    <FormControl
                        id="amortization"
                        label="Amortization Period"
                        placeholder={amortization.toString() + ' years'}
                        onBlur={(e) => setAmortization(Number(e.target.value))}
                    />
                    <br />
                    <FormControl
                        id="interest"
                        label="Interest Rate"
                        placeholder={interest.toString() + '%'}
                        onBlur={(e) => setInterest(Number(e.target.value))}
                    />
                </div>
                <div className="right-side">
                    {netIncome.monthly > 0 && (
                        <label>
                            Your monthly net income is: {netIncome.monthly}$
                        </label>
                    )}
                    <br />
                    {netIncome.monthly > 0 && (
                        <label>
                            Your monthly savings are:{' '}
                            {netIncome.monthly - monthlyExpenses}$
                        </label>
                    )}
                    <br />
                    {netIncome.monthly > 0 && (
                        <label>
                            {'Time to save 20% down payment: '}
                            {calculateDownpaymentTime(
                                downpayment,
                                houseBudget,
                                20,
                                netIncome.monthly,
                                monthlyExpenses
                            )}
                            {' months'}
                        </label>
                    )}
                    <br />
                    {netIncome.monthly > 0 && (
                        <label>
                            Your monthly mortgage payments are:{' '}
                            {getMortgagePayment(
                                principal,
                                amortization,
                                interest
                            )}
                            $
                        </label>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
