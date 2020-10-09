import React from 'react';
import logo from './logo.svg';
import './App.css';

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

    const handleSalaryChange = (e: any) => {
        setSalary(Number(e.target.value));
    };

    const handleProvinceChange = (e: any) => {
        console.log(e.target.value);
        setProvince(e.target.value);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <label>What is your yearly salary:</label>
                <br />
                <input
                    placeholder="70000"
                    onBlur={(e) => handleSalaryChange(e)}
                ></input>
                <br />
                <label>Choose a province:</label>
                <br />
                <select
                    name="provinces"
                    onChange={(e) => handleProvinceChange(e)}
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
                {netIncome.yearly > 0 && (
                    <label>Your yearly net income is: {netIncome.yearly}</label>
                )}
                {netIncome.monthly > 0 && (
                    <label>
                        Your monthly net income is: {netIncome.monthly}
                    </label>
                )}
                {netIncome.biweekly > 0 && (
                    <label>
                        Your biweekly net income is: {netIncome.biweekly}
                    </label>
                )}
                {netIncome.weekly > 0 && (
                    <label>Your weekly net income is: {netIncome.weekly}</label>
                )}
                {netIncome.day > 0 && (
                    <label>Your daily net income is: {netIncome.day}</label>
                )}
                {netIncome.hourly > 0 && (
                    <label>Your hourly net income is: {netIncome.hourly}</label>
                )}
            </header>
        </div>
    );
}

export default App;
