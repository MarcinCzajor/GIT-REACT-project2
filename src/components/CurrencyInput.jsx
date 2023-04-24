const CurrencyInput = ({ inputValue, checkValue, valueInput }) => {
	return (
		<input
			className="currInput"
			type="number"
			onInput={inputValue}
			onKeyDown={checkValue}
			min="0.01"
			step="0.01"
			value={valueInput}
			placeholder="wpisz wartość"
		/>
	);
};

export default CurrencyInput;
