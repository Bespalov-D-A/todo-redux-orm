import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {getAllTag, getAllTagAndAddFirst} from "../../store/selectors/tagSelector";
import {getTodosByTag} from "../../store/selectors/todoSelector";
import {setSelectedTag} from "../../store/slices/todoSlice";
import s from './SortByTag.module.css'
import './SortByTag.css'

const SortByTag = (props) => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const options = getAllTagAndAddFirst(state)
  
  const onChangeFunc = (e) => {
    dispatch(setSelectedTag(e))
  }

  getTodosByTag(state)

  const selectStyle = {
    control: (baseStyles) => ({
      ...baseStyles,
      width: "200px;",
    }),
  };


  return <div className={s.sort}>
        <Select
          // @ts-ignore
          classNamePrefix="sort-by-tag"
          onChange={(e) => onChangeFunc(e.value)}
          styles={selectStyle}
          options={options}
        />

    </div>
}

export default SortByTag
