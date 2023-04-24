const Button = ({ handleClick }) => {
	return (
		<button className="button" onClick={handleClick} type="button">
			Przelicz
		</button>
	);
};

export default Button;
