export const getMortgagePayment = (
	loanAmount: number,
	amortizationPeriod: number,
	interestRate: number
) => {
	let numberOfPayments = amortizationPeriod * 12;
	let interestRatePerMonth = interestRate / 100 / 12;
	return Math.round(
		(loanAmount *
			interestRatePerMonth *
			Math.pow(1 + interestRatePerMonth, numberOfPayments)) /
			(Math.pow(1 + interestRatePerMonth, numberOfPayments) - 1)
	);
};
