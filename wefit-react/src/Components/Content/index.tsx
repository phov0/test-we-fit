import {ReactNode} from "react";
import {ContentArea} from "./ContentElements";

interface Props {
    children:ReactNode
}
const Content = ({children}:Props) =>{
    return (
        <ContentArea>
            {children}
        </ContentArea>
    )
}

export default Content;