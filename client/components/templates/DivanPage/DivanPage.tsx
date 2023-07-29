import { useStore } from 'effector-react'
import { $divan } from '../../../context/divan'
import styles from '../../../src/styles/divan/index.module.scss'
import spinnerStyles from '../../../src/styles/spinner/spinner.module.css'
import DivanImagesList from '../../modules/DivanPage/DivanImagesList'
import { formatPrice } from '@/utils/common'
import { $shopingCart } from '../../../context/shopping-cart'
import { useState } from 'react'
import CartHoverCheckedSvg from '../../Elements/CartHoverCheckedSvg/CartHoverCheckedSvg'
import CartHoverSvg from '../../Elements/CartHoverSvg/CartHoverSvg'
import { toggleCartItem } from '@/utils/shoping-cart'
import { $user } from '../../../context/user'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import DivanTabs from '../../modules/DivanPage/DivanTabs'


const DivanPage = () => {

    const divan = useStore($divan)
    const cartItems = useStore($shopingCart)
    const isMobile = useMediaQuery(850)
    const user = useStore($user)
    const isInCart = cartItems.some((item) => item.divansId === divan.id)
    const [spinnerToggleCart, setSpinnerToggleCart] = useState(false)

    const toggleToCart = () =>
    toggleCartItem(user.username, divan.id, isInCart, setSpinnerToggleCart)

    return (
        <section>
            <div className="container">
                <div className={styles.divan__top}>
                    <h2>{divan.name}</h2>
                    <div className={styles.divan__inner}>
                        <DivanImagesList />
                        <div className={styles.divan__info}>
                            <span className={styles.divan__info__price}>
                                {formatPrice(divan.price || 0)} ₽
                            </span>
                            <span className={styles.divan__info__stock}>
                                {divan.in_stock > 0 ? (
                                    <span className={styles.divan__info__stock__success}>
                                        Есть на складе
                                    </span>
                                ) : (
                                    <span className={styles.divan__info__stock__not}>
                                        Нет на складе
                                    </span>
                                )}
                            </span>
                            <span className={styles.divan__info__code}>
                                Артикул: {divan.vendor_code}
                            </span>
                            <button className={`${styles.part__info__btn} ${isInCart ? styles.in_cart : ''
                                }`}
                                onClick={toggleToCart}
                            >
                                {spinnerToggleCart ? (
                                    <span
                                        className={spinnerStyles.spinner}
                                        style={{ top: 10, left: '45%' }}
                                    />
                                ) : (
                                    <>
                                        <span className={styles.part__info__btn__icon}>
                                            {isInCart ? <CartHoverCheckedSvg /> : <CartHoverSvg />}
                                        </span>
                                        {isInCart ? (
                                            <span>Добавлено в карзину</span>
                                        ) : (
                                            <span>Положить в корзину</span>
                                        )}
                                    </>
                                )}
                            </button>
                            {!isMobile && <DivanTabs/> }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DivanPage