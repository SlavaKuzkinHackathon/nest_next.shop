import { useState } from 'react'
import styles from '../../../src/styles/shippingPayment/index.module.scss'
const ShipingPayment = () => {

    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)
    const [tab4, setTab4] = useState(false)

    const handleTab1 = () => {
        setTab1(true)
        setTab2(false)
        setTab3(false)
        setTab4(false)
      }
    
      const handleTab2 = () => {
        setTab1(false)
        setTab2(true)
        setTab3(false)
        setTab4(false)
      }
    
      const handleTab3 = () => {
        setTab1(false)
        setTab2(false)
        setTab3(true)
        setTab4(false)
      }
    
      const handleTab4 = () => {
        setTab1(false)
        setTab2(false)
        setTab3(false)
        setTab4(true)
      }
    return(
        <section className={styles.shipping_payment}>
                <div className='container'>
                    <h2 className={styles.shipping_payment__title}>Доставка и оплата</h2>
                </div>
                <div className={styles.shipping_payment__tabs}></div>
        </section>
    )
}

export default ShipingPayment