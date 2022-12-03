import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import { getAllTagAndAddFirst} from "../../store/selectors/tagSelector";
import {setSelectedTag} from "../../store/slices/todoSlice";
import s from './SortByTag.module.css'
import './SortByTag.css'

const SortByTag = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const options = getAllTagAndAddFirst(state)
  
  const onChangeFunc = (e) => {
    if(e.length === 0) 
    dispatch(setSelectedTag(null))
    else dispatch(setSelectedTag(e))
  }

  const selectStyle = {
    control: (baseStyles) => ({
      ...baseStyles,
      width: "200px;",
    }),
  };


  return <div className={s.sort}>
        <Select
          // @ts-ignore
          //classNamePrefix="sort-by-tag"
          onChange={(e) => onChangeFunc(e)}
          styles={selectStyle}
          options={options}
          isMulti={true}
        />

    </div>
}

export default SortByTag
