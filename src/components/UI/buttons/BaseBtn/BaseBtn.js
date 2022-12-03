import s from './BaseBtn.module.css'

const BaseBtn = (props) => {
	const { btnRef, value, onClick, style } = props;

	return (
		<div ref={btnRef && btnRef} className={s.btn + ' ' + s[style]} onClick={onClick} >{value}</div>
	);
};

export default BaseBtn;
