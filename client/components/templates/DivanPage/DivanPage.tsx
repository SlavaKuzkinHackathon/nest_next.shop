import { useStore } from 'effector-react'
import { $divan } from '../../../context/divan'
import styles from '../../../src/styles/divan/index.module.scss'


const DivanPage = () => {

    const divan = useStore($divan)

    return (
        <section>
            <div className="container">
                <div className={styles.divan__top}>
                    <h2>{divan.name}</h2>
                    <div className={styles.divan__inner}>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DivanPage