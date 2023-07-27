import { formatPrice } from "@/utils/common";
import { ICartAlertProps } from "../../../types/dashboard";
import Link from "next/link";
import styles from '../../../src/styles/dashboard/index.module.scss'

const CartAlert = ({ count, closeAlert }: ICartAlertProps) => {

    const showCountMessage = (count: string) => {
        if (count.endsWith('1')) {
            return 'товар'
        }
        if (count.endsWith('2') || count.endsWith('3') || count.endsWith('4')) {
            return 'товара'
        }
        return 'товаров'
    }

    return (
        <>
            <div className={styles.dashboard__alert__left}>
                <span>В корзине {count} {showCountMessage(`${count}`)}</span>
                <span>На сумму: {formatPrice(0)} ₽</span>
            </div>
            <div className={styles.dashboard__alert__right}>
                <Link href={"/order"} legacyBehavior passHref>
                    <a className={styles.dashboard__alert__btn_cart}> Перейти в корзину </a>
                </Link>
                <Link href={"/order"} legacyBehavior passHref>
                    <a className={styles.dashboard__alert__btn_order}> Оформить заказ </a>
                </Link>
            </div>
            <button
                className={styles.dashboard__alert__btn_close}
                onClick={closeAlert} />

        </>
    )
}

export default CartAlert