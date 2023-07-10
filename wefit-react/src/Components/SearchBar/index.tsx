import {SearchArea, Input,TextArea, Text} from "./SearchBarElements";
import FindIcon from "../../Assets/Icons/FindIcon";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {CartState} from "../../Context";

const SearchBar = ()=>{

    const navigate = useNavigate();

    const { title="" } = useParams();

    const {
        state: { products },
    } = CartState();

    const [state, setState] = useState(title);

    const find = () =>{
        navigate(`/${state}`)
    }

    const handleKeypress = (e:any) => {
        if (e.code === "Enter") {
            find();
        }
    };

    return(
        <>
            <SearchArea>
                <Input
                    placeholder={"Buscar filme pelo nome"}
                    value={state}
                    onChange={({target}:any)=>{setState(target.value)}}
                    onKeyPress={handleKeypress}
                />
                <div onClick={find}>
                    <FindIcon />
                </div>
            </SearchArea>
            {
                title!=="" ?  <TextArea>
                    <Text> Exibindo resultados para "{title}"</Text>
                    <Text $bold>{products.length === 1 ? `${products.length} resultado encontrado` : `${products.length} resultados encontrados` }</Text>
                </TextArea>:<></>
            }
        </>

    )
}

export default SearchBar;