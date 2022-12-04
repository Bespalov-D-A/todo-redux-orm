import SortByTag from '../SortByTag/SortByTag'
import s from './SortForm.module.css'

const SortForm = () => {
  return <div className={s.sort}>
    <h4>СОРТИРОВАТЬ ПО ТЕГАМ</h4>
    <SortByTag />
    </div>
}

export default SortForm
