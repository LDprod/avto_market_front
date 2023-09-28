import { FC } from 'react'
import Cart from './Cart'
import NavBar from './NavBar'
import { firstNav, secondNav } from './NavBarData'
import Search from './Search'
import styles from './header.module.sass'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container + ' container'}>
				<div>Logo</div>
				<NavBar navigation={firstNav} />
				<Search />
				<NavBar navigation={secondNav} />
				<Cart />
			</div>
		</header>
	)
}

export default Header
