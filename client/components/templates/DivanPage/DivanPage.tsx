import { useStore } from 'effector-react'
import { $divan } from '../../../context/divan'
import styles from '../../../src/styles/divan/index.module.scss'
import DivanImagesList from '../../modules/DivanPage/DivanImagesList'
import { formatPrice } from '@/utils/common'


const DivanPage = () => {

    const divan = useStore($divan)

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
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DivanPage