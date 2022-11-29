export default function List(props) {
	return <>{props.items.map(props.renderItem)}</>
}
