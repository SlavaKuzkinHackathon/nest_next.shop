/* eslint-disable @next/next/no-img-element */
import { IShopingCartItem } from "../../../types/shoping-cart"
import Link from "next/link"
import DeleteSvg from "../../Elements/DeleteSvg/DeleteSvg"
import { useEffect, useState } from "react"
import { formatPrice } from "@/utils/common"
import { removeItemFromCart, updateTotalPrice } from "@/utils/shoping-cart"
import CartItemCounter from "../../Elements/CartItemCounter/CartItemCounter"
import styles from '../../../src/styles/cartPopup/index.module.css'
import spinnerStyles from '../../../src/styles/spinner/spinner.module.css'


const CartPopupItem = ({ item }: { item: IShopingCartItem }) => {

    const [spinner, setSpinner] = useState(false)
    const [price, setPrice] = useState(item.price)

    useEffect(() => {
        setPrice(price * item.count)
    }, [])

    useEffect(() => {
        updateTotalPrice(price, item.divansId)
    }, [price])

    const increasePrice = () => setPrice(price + item.price)
    const decreasePrice = () => setPrice(price - item.price)

    const deleteCartItem = () => removeItemFromCart(item.divansId, setSpinner)

    return (
        <li className={styles.cart__popup__list__item}>
            <div className={styles.cart__popup__list__top}>
                <div className={styles.cart__popup__list__item__img}>
                    <img src={item.image} alt={item.name} />
                </div>
                <Link href={`/catalog/${item.divansId}`} passHref legacyBehavior>
                    <a className={styles.cart__popup__list__text}>
                        <span>{item.name.replace('.', '')}, {item.divans_manufacturer}</span>
                    </a>
                </Link>
                <button onClick={deleteCartItem} >
                    <span >
                        {spinner ? (
                            <span
                                className={spinnerStyles.spinner}
                                style={{ top: 0, left: 0, width: 20, height: 20 }}
                            />
                        ) : (
                            <DeleteSvg />
                        )}
                    </span>
                </button>
            </div>
            <div className={styles.cart__popup__list__bottom}>
                {item.in_stock === 0 ? (
                    <span className={styles.cart__popup__list__item__empty}>Нет на складе</span>
                ) : (
                    <CartItemCounter
                    totalCount={item.in_stock}
                    divansId={item.divansId}
                    initialCount={item.count}
                    increasePrice={increasePrice}
                    decreasePrice={decreasePrice}
                    />
                )}
                <span
                    className={styles.cart__popup__list__item__price}
                >
                    {formatPrice(price)} ₽
                </span>
            </div>
        </li>
    )
}

export default CartPopupItem