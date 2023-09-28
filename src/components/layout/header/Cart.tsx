import CartImg from '@/components/images/header/CartImg'
import { FC } from 'react'
import styles from './header.module.sass'

const Cart: FC = () => {
	return (
		<div className={styles.cart}>
			<CartImg />
		</div>
	)
}

export default Cart
