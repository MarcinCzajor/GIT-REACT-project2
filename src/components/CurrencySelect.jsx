const OptionsChoice = ({ onChange, selectedCurrency }) => {
	return (
		<select
			className="selectCurr"
			value={selectedCurrency}
			onChange={onChange}
		>
			<option value="EUR">EUR</option>
			<option value="USD">USD</option>
			<option value="CHF">CHF</option>
		</select>
	);
};

export default OptionsChoice;
