import { AppBar,Toolbar,styled } from "@mui/material"


const Tabs = styled(`h3`)`
    text-align: center;
`
const NavBar=()=>{

    return(
        <AppBar>
            <Toolbar> 
            <Tabs>FOOD APP WITH MERN</Tabs>
            </Toolbar>
        </AppBar>

    )

}
export default NavBar;