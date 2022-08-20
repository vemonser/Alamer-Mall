// import Collapse from "../../components/slider/collapse";

import { useEffect, useState } from "react";
import Router from "next/router";

export default function Department() {
  const [loaded, setLoaded] = useState(false);
  //     return(
  //         <>
  //         <Collapse/>

  //         </>
  //     )
  // }

  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/departments/" || pathname === "/departments") {
      Router.replace("/");
    } else
      setLoaded(() => {
        true;
      });
  });
  //...
}
