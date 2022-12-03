import {useDispatch} from 'react-redux'
import SortByTag from '../SortByTag/SortByTag'
import s from './SortForm.module.css'

const SortForm = () => {
  const dispatch = useDispatch()

  return <div className={s.sort}>
    <h3>SORT BY TAG</h3>
    <SortByTag />
    </div>
}

export default SortForm
