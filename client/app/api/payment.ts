import { createEffect } from "effector-next";
import api from '../axios.client'
import { IMakePayFx } from "../../types/order";

export const makePaymentFx = createEffect(
    async ({ url, amount }: IMakePayFx) => {
    const { data } = await api.post(url, { amount })


    return data

})