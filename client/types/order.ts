export interface IOrderAccordionProps {
    setOrderIsReady: (arg0: boolean) => void,
    showDoneIcon: boolean
}

export interface IMakePayFx {
    url: string,
    amount: string,
    /* description: string */
}

export interface ICheckPayFx {
    url: string
    paymentId: string
}