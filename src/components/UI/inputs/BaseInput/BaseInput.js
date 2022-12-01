import React from 'react'
import s from './BaseInput.module.css'

const BaseInput = (props) => {
	const { type, placeholder, value, onChange } = props;

	return (
		<div className={s['input-wrap']}>
			<input
				className={s.input}
				type={type}
				value={value}
				placeholder={placeholder ? placeholder : ''}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default BaseInput;
