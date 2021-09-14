import React from "react"
import { Link } from "react-router-dom";

import './AuthBtn.css'

// ...props = rest of props (onClick function)
function AuthBtn({link,name,previous,...props}) {
  return (<>
    <Link {...props} to={{ pathname: link, state: {from:previous}}}> {name} </Link></>
  )
}
export default AuthBtn;
