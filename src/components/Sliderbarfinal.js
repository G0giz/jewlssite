import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { FaShoppingBag,FaRegHeart  } from "react-icons/fa";
import '../style/SubMenu.css'
import Nav from 'react-bootstrap/Nav';
import Slide from '../Slidebar'
import '../style/TestCSS.css'

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Navigate, useNavigate } from 'react-router-dom'
import Cart from "./Cart";
import {  UserContext } from "../Context/InfoContextProvider";

// const StyledSearch = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.primary.main, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.primary.main, 0.25)
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto"
//   }
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch"
//     }
//   }
// }));

//search as JSX


export default function Sliderbarfinal() {
    const navigate = useNavigate()
    const{productList,first,setFirst,cartList}=useContext(UserContext)
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isActive, setActive] = useState("false");
  const [boxVisibility, setBoxVisibility] = useState(false);
  const [boxTypeVisibility, setboxTypeVisibility] = useState(false);
  const [boxStoneVisibility, setStoneVisibility] = useState(false);
  const [boxFeatureVisibility, setFeatureVisibility] = useState(false);

  useEffect(() => {
    //  debugger
    // console.log(first);
    if(!first)
    {
    // console.log(productList);
    setFirst(true)
    return
    }

  }, []);


  useEffect(()=>{
    
    setBoxVisibility(false)
    setboxTypeVisibility(false)
    setStoneVisibility(false)
    setFeatureVisibility(false)
  },[open])

  const showNewBox = () => {
    setBoxVisibility(!boxVisibility)
    setboxTypeVisibility(false)
    setStoneVisibility(false)
    setFeatureVisibility(false)
}

const showTypeBox = () => {
  setboxTypeVisibility(!boxTypeVisibility)
  setBoxVisibility(false)
  setStoneVisibility(false)
  setFeatureVisibility(false)
}


const showStoneBox = () => {
  setStoneVisibility(!boxTypeVisibility)
  setBoxVisibility(false)
  setboxTypeVisibility(false)
  setFeatureVisibility(false)
}

const showFeatureBox=()=>{
  setFeatureVisibility(!boxFeatureVisibility)
  setBoxVisibility(false)
  setboxTypeVisibility(false)
  setStoneVisibility(false)
}



  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };


  const MoveToMarket=(categor)=>{
    switch (categor) {
          //הליקס
      case 'הליקס':
        navigate('Market',{state:{categor}})
        break;
          //טראגוס
      case 'טראגוס':
        navigate('Market',{state:{categor}})
        break;
          //פלאט
      case 'פלאט':
        navigate('Market',{state:{categor}})
        break;
          //ספטום
      case 'ספטום':
          navigate('Market',{state:{categor}})
          break;
          //לשון
      case 'לשון':
          navigate('Market',{state:{categor}})
          break;
          //טבור
      case 'טבור':
        navigate('Market',{state:{categor}})
        break;
          //נזם
      case 'נזם':
        navigate('Market',{state:{categor}})
        break;    
          //'קונצ
      case "'קונצ":
        navigate('Market',{state:{categor}})
        break;      
      default:
        break;
    }
  }
  return (
    <AppBar position="static">
      
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar>
        <div id="cart-icon">
                    <div id="text-and-icon-cart">
                        <a className="menu-item" id="onHover">
                            הסל שלי
                        </a>
                            <div id='round-amount-cart'>
                                <p style={{color:'white'}}>
                                    {cartList.length}
                                </p>
                            </div>
                          <Cart ChangeIsShown={isShown} anchor={'left'}/>
                    </div>
                </div>
          <Typography onClick={()=>navigate('/')} variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            <p className="Header">
            MGaccessoryvsfdvsdfv
            </p>
          </Typography>

          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block"
              }
            }}
          >
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none"
              }
            }}
          >
            <MenuIcon style={{marginRight:'0px'}} />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#dbc8ff"
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                
                <li style={{listStyle:'none'}}>
                <ListItemButton>  
                
                <ListItemText onClick={()=>navigate('Market')} primary="NEW ARRIVALS" />
                </ListItemButton>
                </li>

                  <ListItemButton>
                  <li style={{listStyle:'none'}}>
                  <ListItemText onClick={() => showNewBox()} primary="PIERCING" />
                    {/* ,display: isShown ? 'none' : 'block' */}
                    {boxVisibility && <div className="show-box">
                       <ul style={{listStyle:'none'}}>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket('הליקס')}>הליקס</a>
                    </li>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket('טראגוס')}>טראגוס</a>
                    </li>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket('פלאט')}>פלאט</a>
                    </li>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket('ספטום')}>ספטום</a>
                    </li>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket('לשון')}>לשון</a>
                    </li>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket("טבור")}>טבור</a>
                    </li>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket("נזם")}>נזם</a>
                    </li>
                    <li className="display_li">
                      <a onClick={()=>MoveToMarket("'קונצ")}>'קונצ</a>
                    </li>
                  </ul></div>}
                  </li>
                  </ListItemButton>

                  <ListItemButton>
                 <li style={{listStyle:'none'}}>
                  <ListItemText onClick={() => showTypeBox()} primary="TYPE" />
                    {/* ,display: isShown ? 'none' : 'block' */}
                    {boxTypeVisibility && <div className="show-box">
                       <ul style={{listStyle:'none'}}>
                    <li className="display_li">
                      <a>חישוק</a>
                    </li>
                    <li className="display_li">
                      <a>חישוק סלימס</a>
                    </li>
                    <li className="display_li">
                      <a>לברט</a>
                    </li>
                    <li className="display_li">
                      <a>סוגר פרפר</a>
                    </li>
                    <li className="display_li">
                      <a>תליון</a>
                    </li>
                  </ul>
                  </div>}
                  </li>
                  </ListItemButton>

                  <ListItemButton>
                <li style={{listStyle:'none'}}>
                  <ListItemText onClick={() => showStoneBox()} primary="STONE" />
                    {/* ,display: isShown ? 'none' : 'block' */}
                    {boxStoneVisibility && <div className="show-box">
                       <ul style={{listStyle:'none'}}>
                    <li className="display_li">
                      <a>יהלומים</a>
                    </li>
                    <li className="display_li">
                      <a>אמרלד</a>
                    </li>
                  </ul>
                  </div>}
                  </li>
                  </ListItemButton>

                  <ListItemButton>
                <li style={{listStyle:'none'}}>
                  <ListItemText onClick={() => showFeatureBox()} primary="FEATURED" />
                    {/* ,display: isShown ? 'none' : 'block' */}
                    {boxFeatureVisibility && <div className="show-box">
                       <ul style={{listStyle:'none'}}>
                    <li className="display_li">
                      <a>יהלומים</a>
                    </li>
                    <li className="display_li">
                      <a>אמרלד</a>
                    </li>
                  </ul>
                  </div>}
                  </li>
                  </ListItemButton>

                <li style={{listStyle:'none'}}>
                <ListItemButton>
                  <ListItemText primary="SALE" />
                </ListItemButton>
                </li>

                <Divider sx={{ mb: 2 }} />

                 <ListItemButton>
                 <div id="cart-icon">
                    <div id="text-and-icon-cart">
                        <a className="menu-item" id="onHover">
                            הסל שלי
                        </a>
                            <div id='round-amount-cart'>
                                <p style={{color:'white'}}>
                                {cartList.length}
                                </p>
                            </div>
                        <FaShoppingBag id="image_icons_navbar"/>
                    </div>
                </div>
                </ListItemButton>

                <ListItemButton>
                <div id="cart-icon">
                    <div id="wish-list-icon">
                        <a className="menu-item" id="onHover">
                            WHISHLIST 
                        </a>
                        <div id='round-amount-cart'>
                            <p style={{color:'white'}}>
                                0
                            </p>
                        </div>
                        <FaRegHeart id="image_icons_navbar"/>
                     </div>
                </div>
                </ListItemButton>

                <Divider sx={{ mb: 2 }} />

              </Box>


            </Box>
          </Drawer>
        </Toolbar>
      </Container>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item className="ItemInNav hover-underline-animation">
          <Nav.Item >Active</Nav.Item>
        </Nav.Item>
        <Nav.Item className="ItemInNav hover-underline-animation">
          <Nav.Item >Link</Nav.Item>
        </Nav.Item>
        <Nav.Item className="ItemInNav hover-underline-animation"> 
          <Nav.Item >Link</Nav.Item>
        </Nav.Item>
        <Nav.Item className="MenuHover ItemInNav hover-underline-animation">
          <Nav.Item >
            Disabled
          </Nav.Item>
        </Nav.Item>
        <Nav.Item className="ItemInNav hover-underline-animation">
          <Nav.Item  >
          Disabled
          </Nav.Item>
        </Nav.Item>
        <Nav.Item className="dropdown ItemInNav hover-underline-animation">
          <Nav.Item >
          PIERCING
          </Nav.Item>
      <div className="dropdown-content">
        <a onClick={()=>MoveToMarket('הליקס')}>הליקס</a>
        <a onClick={()=>MoveToMarket('טראגוס')}>טראגוס</a>
        <a onClick={()=>MoveToMarket('פלאט')}>פלאט</a>
        <a onClick={()=>MoveToMarket('ספטום')}>ספטום</a>
        <a onClick={()=>MoveToMarket('לשון')}>לשון</a>
        <a onClick={()=>MoveToMarket("טבור")}>טבור</a>
        <a onClick={()=>MoveToMarket("נזם")}>נזם</a>
        <a onClick={()=>MoveToMarket("'קונצ")}>קונץ'</a>
      </div>
        </Nav.Item>
      </Nav>
          </AppBar>
  );
}
