import React, {ReactNode} from "react";
import {GridArea} from "./GridElements";


interface Props {
  children:ReactNode
}
function Grid({children}:Props) {
    return (
      <GridArea>
        {children}
      </GridArea>
    );
}

export default Grid;