import s from './BaseBtn.module.css'

const BaseBtn = (props) => {
	const { value, onClick, style } = props;

	return (
		<input className={s.btn + ' ' + s[style]} type="button" value={value} onClick={onClick} />
	);
};

export default BaseBtn;
