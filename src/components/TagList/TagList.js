import List from '../common/List/List'
import TagItem from '../TagItem/TagItem'
import s from './TagList.module.css'

const TagList = (props) => {
  const {tags, todoId} = props
  return <div className={s['tag-list']}>
    <List items={tags} renderItem={(tag)=> <TagItem todoId={todoId} key={tag.name} name={tag.name}/>}/>
    </div>
}

export default TagList
