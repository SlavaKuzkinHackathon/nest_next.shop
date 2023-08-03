import { useStore } from 'effector-react'

import { $shopingCart, $totalPrice } from '../../../context/shopping-cart'
import { formatPrice } from '@/utils/common'
import OrderAccordion from '../../modules/OrderPage/OrderAccordion'
import { useState } from 'react'
import styles from '../../../src/styles/order/index.module.scss'
import spinnerStyles from '../../../src/styles/spinner/spinner.module.css'

const OrderPage = () => {
    const shopingCart = useStore($shopingCart)
    const totalPrice = useStore($totalPrice)
    const [orderIsReady, setOrderIsReady] = useState(false)
    const [agreement, setAgreement] = useState(false)

    const handleAgreementChange = () => setAgreement(!agreement)

    return (
        <section className={styles.order}>
            <div className='container'>
                <h2 className={styles.order__title}>
                    Оформление заказа
                </h2>
                <div className={styles.order__inner}>
                    <div className={styles.order__cart}>
                        <OrderAccordion
                            setOrderIsReady={setOrderIsReady}
                            showDoneIcon={orderIsReady} />
                    </div>
                    <div className={styles.order__pay}>
                        <h3 className={styles.order__pay__title}>
                            Итого:
                        </h3>
                        <div className={styles.order__pay__inner}>
                            <div className={styles.order__pay__goods}>
                                <span> Товары ({shopingCart.reduce(
                                    (defaultCount, item) => defaultCount + item.count, 0)
                                })
                                </span>
                                <span>{formatPrice(totalPrice)} ₽</span>
                            </div>
                            <div className={styles.order__pay__total}>
                                <span>На сумму </span>
                                <span>{formatPrice(totalPrice)} ₽</span>
                            </div>
                            <button
                                disabled={!(orderIsReady && agreement)}
                                className={styles.order__pay__btn}
                                /* onClick={makePay} */
                            >
                               {/*  {spinner ? (
                                    <span
                                        className={spinnerStyles.spinner}
                                        style={{ top: '6px', left: '47%' }}
                                    />
                                ) : (
                                    ' */}Подтвердить заказ{/* '
                                )} */}
                            </button>
                            <label
                                className={styles.order__pay__rights}
                            >
                                <input
                                    className={styles.order__pay__rights__input}
                                    type="checkbox"
                                    onChange={handleAgreementChange}
                                    checked={agreement}
                                />
                                <span className={styles.order__pay__rights__text}>
                                    <strong>Согласен с условиями</strong> Правил пользования
                                    торговой площадкой и правилами возврата
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderPage