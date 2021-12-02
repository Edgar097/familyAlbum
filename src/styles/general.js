export default () => ({
  //FE6B8B

  //#ACFBCF
  //FF8E53
  flexBox: {
    background: "linear-gradient(45deg, #2B3EFC 30%, #48DB4E 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    padding: "0 30px",
    overflow: "auto",
  },
  dashBoardBackground: {
    backgroundColor: "#F4F4FC",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  dashboard: {
    display: "flex",
  },
  marginTitle: {
    flexGrow: 1,
    paddingLeft: "10%",
    color: "#FFFFFF",
  },
  appBar: {
    background: "#2B3EFC",
    width: "100%",
    position: "absolute",
    zIndex: "100",
  },
  flexBoxV2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 300,
    overflow: "auto",
  },
  flexBoxV3: {
    background: "#FCFCFC",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#FFFFFF",
    height: 900,
    padding: "0 30px",
    overflow: "auto",
  },
  normalL: {
    color: "#19191A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  normalTitle: {
    color: "#7688A1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableRow: {
    display: "flex",
  },
  chip: {
    color: "#BCBCF6",
  },
  TableCSS: {
    borderRadius: "90%",
  },
  headerButton: {
    width: "100%",
  },
  iconCSS: {
    margin: "0px 0px 0px 16px",
  },
  iconButton: {
    color: "#FFFFFF",
  },
  borders: {
    borderBottom: "3px solid rgb(212, 212, 212)",
  },
});

/*
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            { 
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            }
            </Toolbar>

 <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
         </Drawer>
*/
