import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
    const [salary, setSalary] = React.useState(70000);
    const [province, setProvince] = React.useState('AB');
    const [netIncome, setNetIncome] = React.useState({
        yearly: 0,
        monthly: 0,
        biweekly: 0,
        weekly: 0,
        day: 0,
        hourly: 0,
    });
    const [savedUp, setSavedUp] = React.useState(0);
    const [downPaymentPerc, setDownPaymentPerc] = React.useState(20);
    const [houseBudget, setHouseBudget] = React.useState(450000);

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
            console.log(data);
            setNetIncome(data);
        });
    }, [salary, province]);

    return (
        <div className="App">
            <header className="App-header">
                <div className="left-side">
                    <label>What is your yearly salary:</label>
                    <br />
                    <input
                        placeholder="70000"
                        type="number"
                        onBlur={(e) => setSalary(Number(e.target.value))}
                    ></input>
                    <br />
                    <label>Choose a province:</label>
                    <br />
                    <select
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
                    </select>
                    <br />
                    <label>Amount saved up so far:</label>
                    <br />
                    <input
                        placeholder="0"
                        type="number"
                        onBlur={(e) => setSavedUp(Number(e.target.value))}
                    ></input>
                    <br />
                    <label>Desired down payment percentage:</label>
                    <br />
                    <input
                        placeholder="20"
                        type="number"
                        onBlur={(e) => setDownPaymentPerc(Number(e.target.value))}
                    ></input>
                    <br />
                    <label>Budget for house:</label>
                    <br />
                    <input
                        placeholder="450000"
                        type="number"
                        onBlur={(e) => setHouseBudget(Number(e.target.value))}
                    ></input>
                </div>
                <div className="right-side">
                    {netIncome.yearly > 0 && (
                        <label>Your yearly net income is: {netIncome.yearly}</label>
                    )}
                    <br />
                    {netIncome.monthly > 0 && (
                        <label>
                            Your monthly net income is: {netIncome.monthly}
                        </label>
                    )}
                    <br />
                    {netIncome.biweekly > 0 && (
                        <label>
                            Your biweekly net income is: {netIncome.biweekly}
                        </label>
                    )}
                    <br />
                    {netIncome.weekly > 0 && (
                        <label>Your weekly net income is: {netIncome.weekly}</label>
                    )}
                    <br />
                    {netIncome.day > 0 && (
                        <label>Your daily net income is: {netIncome.day}</label>
                    )}
                    <br />
                    {netIncome.hourly > 0 && (
                        <label>Your hourly net income is: {netIncome.hourly}</label>
                    )}
                    <br />
                </div>
            </header>
        </div>
    );
}

export default App;
