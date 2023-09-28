import { FC } from 'react'
import styles from './footer.module.sass'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container + ' container'}>@avto-market prod.</div>
		</footer>
	)
}

export default Footer
