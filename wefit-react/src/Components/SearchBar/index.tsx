import {SearchArea, Input, TextArea, Text, FindIconArea} from "./SearchBarElements";
import FindIcon from "../../Assets/Icons/FindIcon";
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {CartState} from "../../Context";
import CloseIcon from "../../Assets/Icons/CloseIcon";

const SearchBar = ()=>{

    const navigate = useNavigate();

    const { title="" } = useParams();

    const {
        state: { products },
    } = CartState();

    const [searchValue, setSearchValue] = useState(title);

    const find = () =>{
        navigate(`/${searchValue}`)
    }

    const handleKeypress = (e:any) => {
        if (e.code === "Enter") {
            find();
        }
    };

    const handleClose = () =>{
        setSearchValue("");
        navigate("/")
    }

    return(
        <>
            <SearchArea>
                <Input
                    placeholder={"Buscar filme pelo nome"}
                    value={searchValue}
                    onChange={({target}:any)=>{setSearchValue(target.value)}}
                    onKeyPress={handleKeypress}
                />
                {
                    title !== "" && title === searchValue?
                        <div onClick={handleClose} >
                            <CloseIcon/>
                        </div>:
                        <FindIconArea $notEmpty={searchValue} onClick={find}>
                            <FindIcon />
                        </FindIconArea>
                }
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