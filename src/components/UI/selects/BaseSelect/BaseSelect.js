import s from "./BaseSelect.module.css";

const BaseSelect = (props) => {
	const { value, options, handleChange, attrValue, attrName } = props;

	const returnOptions = (options) => {
		return options.map((option) => (
			<option key={option.id} value={option[attrValue]}>
				{option[attrName]}
			</option>
		));
	};
	console.log(value);

	return (
		<select
			onChange={handleChange}
			value={value ? value.id : "Выберите BLYA юзера"}
			id='select'
			name='select'
			className={s["select-input"]}
		>
			<option value={''}>Не выбирать</option>
			{returnOptions(options)}
		</select>
	);
};

export default BaseSelect;
