import {AppBar, Toolbar, Typography, styled} from '@mui/material'
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background: black
`;
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: white;
text-decoration: none
`;
const NavBar =()=>{
    return(
<Header position='static'>
    <Toolbar>
<Tabs to = "/">CRUD App</Tabs>
<Tabs to = "/all">All Users</Tabs>
<Tabs to = "/add">Add Users</Tabs>
    </Toolbar>
</Header>
    )
}
export default NavBar;