import LocationSvg from "../LocationSvg/LocationSvg"
import styles from '../../../src/styles/cityButton/index.module.css'


const cityButtom = () => {

    return (
        <button className={styles.city}>
            <span className={styles.city__span}>
                <LocationSvg />
            </span>
            <span className={styles.city__text}>
                Новосибирск
            </span>
        </button>
    )
}

export default cityButtom