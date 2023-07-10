import {Button, Card, Text, ImageArea} from "./OrderSuccesElements";
import OrderFinishedImage from "../../Assets/Images/Group 34.png";
import {useNavigate} from "react-router-dom";

const OrderSuccess = () => {
    const navigate = useNavigate();

    return(
        <Card>
            <Text>Compra realizada<br/> com sucesso!</Text>
            <ImageArea>
                <img alt={""} src={OrderFinishedImage}/>
            </ImageArea>

            <Button onClick={()=>{navigate("/")}}>
                VOLTAR
            </Button>
        </Card>
    )
}

export default OrderSuccess;