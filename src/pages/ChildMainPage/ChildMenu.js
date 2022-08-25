import React from "react";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";
import {Link} from "react-router-dom";

export default function ChildMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <Stack direction="row" spacing={5} >
        <Paper sx={{ height: "500px", width: "200px" , 
      background:"linear-gradient(107.46deg, rgba(255, 255, 255, 0.048) 1.21%, rgba(236, 236, 236, 0.2) 100%);", 
      borderRadius:"18px"}} >
          <MenuList className="menuList">
            <Grid
              container
              direction="row"
              alignItems="center"
              textAlign="center"
            >
              <Grid item>
                <AccountCircleIcon
                  sx={{
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    margin: "auto",
                    position: "relative",
                    left: "50px",
                  }}
                style={{color:"#0A46A9"}}/>
              </Grid>
            </Grid>
            <MenuItem sx={{ padding: "25px" }}>
              <ListItemIcon>
                <HomeIcon style={{color:"#0A46A9"}}/>
              </ListItemIcon>
              <Link to="/child"><ListItemText style={{color:"#9EC1F7"}}>Anasayfa</ListItemText></Link>
            </MenuItem>


            <br /> <br/> <br/> <br /> <br/> <br/>
            <MenuItem sx={{ padding: "25px" }}>
              <ListItemIcon>
                <LogoutIcon style={{color:"#0A46A9"}}/>
              </ListItemIcon>
              <Link to="/main"><ListItemText style={{color:"#9EC1F7"}}>Çıkış</ListItemText></Link>
            </MenuItem>
          </MenuList>
        </Paper>
      </Stack>
    </>
  );
}
