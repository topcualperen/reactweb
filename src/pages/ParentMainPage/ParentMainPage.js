import * as React from "react";
import Menu from "./Menu";
import Info from "./Info";

export default function ParentMainPage() {
    return (
    <> 
    <body>
        <div class="main">
          <Menu />
          <Info />
        </div>
      </body>
    </>
  );
}
