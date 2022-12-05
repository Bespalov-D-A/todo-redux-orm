import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import { getAllTag, getAllTagAndAddFirst} from "../../store/selectors/tagSelector";
import {setSelectedTag} from "../../store/slices/todoSlice";
import s from './SortByTag.module.css'
import './SortByTag.css'

const SortByTag = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const options = getAllTag(state)
  
  const onChangeFunc = (e) => {
    if(e.length === 0) 
    dispatch(setSelectedTag(null))
    else dispatch(setSelectedTag(e))
  }

  return <div className={s.sort}>
        <Select
          // @ts-ignore
          //classNamePrefix="sort-by-tag"
          onChange={(e) => onChangeFunc(e)}
          options={options}
          isMulti={true}
        />

    </div>
}

export default SortByTag
