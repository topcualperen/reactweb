import * as React from "react";
import ChildMenu from "./ChildMenu";
import ChildInfo from "./ChildInfo";


export default function ChildMainPage() {
    return (
    <> 
    <body>
        <div class="main">
          <ChildMenu />
          <ChildInfo />
        </div>
      </body>
    </>
  );
}
