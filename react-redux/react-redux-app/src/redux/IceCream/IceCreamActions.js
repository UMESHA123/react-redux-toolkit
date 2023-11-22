import { BUY_ICE_CREAM } from "./IceCreamType";

export const buyIceCream = (number=1) => {
    return {
        type : BUY_ICE_CREAM,
        payload : number,
    }
}

