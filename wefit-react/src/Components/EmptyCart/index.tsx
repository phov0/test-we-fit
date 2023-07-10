import {Hr, Text, ImageArea, Image, Button, Card} from "./EmptyCartElements";
import EmptyImage from "../../Assets/Images/Group.png";
import {useNavigate} from "react-router-dom";

const EmptyCart = () =>{
    const navigate = useNavigate();

    return (
        <Card>
            <Text>Parece que não <br/> há nada por aqui :(</Text>
            <ImageArea>
                <Image alt={""} src={EmptyImage}/>
            </ImageArea>
            <Hr/>

            <Button onClick={()=>{navigate("/")}}>
                VOLTAR
            </Button>
        </Card>
    )
}

export default EmptyCart;