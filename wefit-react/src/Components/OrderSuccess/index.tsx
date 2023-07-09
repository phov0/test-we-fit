import {Button, Card} from "./OrderSuccesElements";
import OrderFinishedImage from "../../Assets/Images/Group 34.png";
import {useNavigate} from "react-router-dom";

const OrderSuccess = () => {
    const navigate = useNavigate();

    return(
      <Card>
        <div>Compra realizada com sucesso!</div>
        <img src={OrderFinishedImage}/>
          <Button onClick={()=>{navigate("/")}}>
          VOLTAR
        </Button>
      </Card>
    )
}

export default OrderSuccess;