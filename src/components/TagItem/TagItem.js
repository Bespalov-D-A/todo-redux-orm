import {useDispatch} from 'react-redux'
import s from './TagItem.module.css'

const TagItem = (props) => {
  const dispatch = useDispatch()
  const {todoId, name} = props

  const deleteTag = () => {
    dispatch({type: 'DELETE_TAG_FROM_TODO', payload: {todoId, tag: name}}) 
  }
  
  return <div className={s.tag}>{name}
    <div className={s.del} onClick={deleteTag}>
          &#10006;
    </div>
    </div>

}

export default TagItem
