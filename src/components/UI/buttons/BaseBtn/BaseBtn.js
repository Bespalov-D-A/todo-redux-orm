import s from './BaseBtn.module.css'

const BaseBtn = (props) => {
	const { value, onClick, style } = props;

	return (
		<div className={s.btn + ' ' + s[style]} onClick={onClick} >{value}</div>
	);
};

export default BaseBtn;
