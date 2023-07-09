import {SearchArea, Input} from "./SearchBarElements";
import FindIcon from "../../Assets/Icons/FindIcon";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const SearchBar = ()=>{

    const navigate = useNavigate();

    const [state, setState] = useState("");

    const find = () =>{
        navigate(`/${state}`)
    }

    const handleKeypress = (e:any) => {
        if (e.code === "Enter") {
            find();
        }
    };

    return(
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
    )
}

export default SearchBar;