import React from 'react';
import './App.scss';
import './tailwind.css';
import FormControl from '../src/components/FromControl/FormControl';

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
    const [houseBudget, setHouseBudget] = React.useState(450000);
    const [monthlyExpenses, setMonthlyExpenses] = React.useState(0);
    // eslint-disable-next-line
    const frontRatio = 0.29;
    // eslint-disable-next-line
    const backRatio = 0.36;

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
            <h1 className="title">Housing Strategy</h1>
            <header className="App-header">
                <div className="left-side">
                    <br />
                    <FormControl
                        label="Gross Yearly Income"
                        placeholder="0.0"
                        type="fincancial"
                        onBlur={(e) => setSalary(Number(e.target.value))}
                    />
                    {/* <input
                        placeholder="70000"
                        type="number"
                        onBlur={(e) => setSalary(Number(e.target.value))}
                    ></input> */}
                    <br />
                    <FormControl
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
                    />
                    {/* <select
                        name="provinces"
                        onChange={(e) => setProvince(e.target.value)}
                    >
                        <option value="AB">Alberta</option>
                        <option value="BC">British Columbia</option>
                        <option value="MB">Manitoba</option>
                        <option value="NB">New Brunswick</option>
                        <option value="NL">Newfoundland and Labrador</option>
                        <option value="NT">Northwest Territories</option>
                        <option value="NS">Nova Scotia</option>
                        <option value="NU">Nunavut</option>
                        <option value="ON">Ontario</option>
                        <option value="PE">Audi</option>
                        <option value="QC">Quebec</option>
                        <option value="SK">Saskatchewan</option>
                        <option value="YT">Yukon Territories</option>
                    </select> */}
                    <br />
                    <FormControl
                        label="Down Payment"
                        type="fincancial"
                        placeholder="0.0"
                        onBlur={(e) => setDownPayment(Number(e.target.value))}
                    />
                    {/* <input
                        placeholder="0"
                        type="number"
                        onBlur={(e) => setDownPayment(Number(e.target.value))}
                    ></input> */}
                    <br />
                    <FormControl
                        label="Home Price"
                        type="fincancial"
                        placeholder="450000"
                        onBlur={(e) => setHouseBudget(Number(e.target.value))}
                    />
                    {/* <input
                        placeholder="450000"
                        type="number"
                        onBlur={(e) => setHouseBudget(Number(e.target.value))}
                    ></input> */}
                    <br />
                    <FormControl
                        label="Monthly Expenses"
                        type="fincancial"
                        placeholder="0.0"
                        onBlur={(e) =>
                            setMonthlyExpenses(Number(e.target.value))
                        }
                    />
                    {/* <input
                        placeholder="0"
                        type="number"
                        onBlur={(e) =>
                            setMonthlyExpenses(Number(e.target.value))
                        }
                    ></input> */}
                </div>
                <div className="right-side">
                    {netIncome.monthly > 0 && (
                        <label>
                            Your monthly net income is: {netIncome.monthly}
                        </label>
                    )}
                    <br />
                    {netIncome.monthly > 0 && (
                        <label>
                            Your monthly savings are:{' '}
                            {netIncome.monthly - monthlyExpenses}
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
                            Your monthly mortgage payments are: {'TBD'}
                        </label>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
