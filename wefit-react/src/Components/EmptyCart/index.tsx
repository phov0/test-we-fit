import {Hr, ImageArea, Image, Button, Card} from "./EmptyCartElements";
import EmptyImage from "../../Assets/Images/Group.png";
import {useNavigate} from "react-router-dom";

const EmptyCart = () =>{
  const navigate = useNavigate();

  return (
    <Card>
      <div>Parece que não há nada por aqui :(</div>
      <ImageArea>
        <Image src={EmptyImage}/>
        <Hr/>
      </ImageArea>

      <Button onClick={()=>{navigate("/")}}>
        VOLTAR
      </Button>
    </Card>
  )
}

export default EmptyCart;