import Link from 'next/link'
import { FC } from 'react'
import { ILink } from './Interface'
import styles from './header.module.sass'

interface Props {
	navigation: ILink[]
}
const NavBar: FC<Props> = ({ navigation }: Props) => {
	return (
		<nav className={styles.navBar}>
			<ul>
				{navigation.map(({ link, title }) => (
					<li key={link}>
						<Link href={link}>{title}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
