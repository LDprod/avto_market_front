import { FC } from 'react'
import styles from './header.module.sass'

const Search: FC = () => {
	return (
		<div className={styles.search}>
			<input
				type='text'
				placeholder='Введіть номер запчастини або VIN код автомобіля'
			/>
		</div>
	)
}

export default Search
