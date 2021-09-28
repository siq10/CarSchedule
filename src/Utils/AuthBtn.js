import React from "react"
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import './AuthBtn.css'

// ...props = rest of props (onClick function)
function AuthBtn({link,name,previous,...props}) {
  return (<>
    <Button component={Link} 
            {...props} 
            to={{ pathname: link, state: {from:previous}}} 
            color="inherit">
              {name}
    </Button>
    </>
  )
}
export default AuthBtn;
