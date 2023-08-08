
import { useForm } from 'react-hook-form'
import styles from '../../../src/styles/feedbackForm/index.module.scss'
import NameInput from './NameInpurt'
import { FeedbackInputs } from '../../../types/feedbackForm'
import PhoneInput from './PhoneInput'
import EmailInput from './EmailInput'
import MessageInput from './MessageInput'

const FeedbackForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FeedbackInputs>()

    const submitForms = (data: FeedbackInputs) => {
        console.log(data)
    }

    return (
        <div className={styles.feedback_form}>
            <h3 className={styles.feedback_form__title}>
                Форма обратной связи
            </h3>
            <form className={styles.feedback_form__form} onSubmit={handleSubmit(submitForms)}>
                <NameInput
                    register={register}
                    errors={errors}
                />
                <PhoneInput
                    register={register}
                    errors={errors}
                />
                <EmailInput
                    register={register}
                    errors={errors}
                />
                <MessageInput
                    register={register}
                    errors={errors}
                />
                <div className={styles.feedback_form__form__btn}>
                    <button>
                        Отправить сообщение
                    </button>
                </div>
            </form>
        </div>
    )

}

export default FeedbackForm