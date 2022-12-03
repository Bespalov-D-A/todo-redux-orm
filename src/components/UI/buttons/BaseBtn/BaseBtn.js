import s from "./BaseBtn.module.css";

const BaseBtn = (props) => {
	const { disabled, color, btnRef, value, onClick, style } = props;

	function onClickFunc() {
		if (!disabled) onClick();
		else return;
	}

	return (
		<div
			ref={btnRef && btnRef}
			className={
				s.btn +
				" " +
				s[style] +
				" " +
				s[color] +
				" " +
				(disabled ? s.disabled : "")
			}
			onClick={onClickFunc}
		>
			{value}
		</div>
	);
};

export default BaseBtn;
