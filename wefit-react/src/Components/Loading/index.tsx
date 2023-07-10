import {LoadingContainer} from "./LoadingElements";
import Loader from "../../Assets/Images/Loader.png"

const Loading = () =>{
    return (
        <LoadingContainer>
            <img alt={"Carregando..."} src={Loader}/>
        </LoadingContainer>
    )
}

export default Loading;