import React from "react"
import Menu from "../ParentMainPage/Menu.js"
import ChildPageInfo from "./ChildPageInfo.js"
export default function ChildPage(){
    return(
        <> 
    <body>
        <div class="main">
          <Menu />
          <ChildPageInfo />
        </div>
      </body>
    </>
    )
}