import "./App.css";
import Title from "./components/Title";
import CurrencyInput from "./components/CurrencyInput";
import CurrencySelect from "./components/CurrencySelect";
import Button from "./components/Button";
import ExchangedCurrency from "./components/ExchangedCurrency";
import { useState } from "react";

const currencyAPI = "https://api.nbp.pl/api/exchangerates/tables/a/";

const App = () => {
	const [inputValue, setInputValue] = useState("");
	const [selectValue, setSelectValue] = useState("EUR");
	const [exchangedValue, setExchangedValue] = useState("0");

	const getCurrency = () => {
		if (inputValue === "" || inputValue === "0") {
			alert("wpisz inną wartość niż 0!!!!");
			setInputValue("");
		} else {
			fetch(currencyAPI)
				.then((response) => response.json())
				.then((data) => {
					const mid = data[0].rates.find(
						(element) => element.code === selectValue
					).mid;

					setExchangedValue(
						Number.parseFloat(inputValue * mid).toFixed(2)
					);
					setInputValue("");
				})
				.catch((err) => {
					alert(err.message);
				});
		}
	};

	const showInput = (e) => {
		setInputValue(e.target.value);
	};

	const showSelect = (e) => {
		setSelectValue(e.target.value);
	};

	const preventMinusValue = (e) => {
		if (/[-]/.test(e.key)) {
			alert("wpisz liczbę dodatnią!");
			e.preventDefault();
		} else if (e.key === "Enter") {
			getCurrency();
		}
	};

	return (
		<div className="layout">
			<div className="container">
				<Title />
				<div className="exchangeCont">
					<CurrencyInput
						inputValue={showInput}
						valueInput={inputValue}
						checkValue={preventMinusValue}
						className="inputValue"
					/>

					<CurrencySelect
						selectedCurrency={selectValue}
						onChange={showSelect}
					/>
					<Button handleClick={getCurrency} className="exchange" />
					<ExchangedCurrency exchangedValue={exchangedValue} />
				</div>
			</div>
		</div>
	);
};

export default App;
