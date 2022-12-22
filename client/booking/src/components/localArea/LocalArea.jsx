import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./localArea.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Footer from "../footer/Footer";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  cursor: "pointer",
};

const LocalArea = () => {
  const [open1m, setOpen1m] = useState(false);
  const [open2m, setOpen2m] = useState(false);
  const [open3m, setOpen3m] = useState(false);
  const [open4m, setOpen4m] = useState(false);
  const [open5m, setOpen5m] = useState(false);
  const [open6m, setOpen6m] = useState(false);
  const [open7m, setOpen7m] = useState(false);
  const [open8m, setOpen8m] = useState(false);
  const [open9m, setOpen9m] = useState(false);
  const [open10m, setOpen10m] = useState(false);
  const [open11m, setOpen11m] = useState(false);
  const [open12m, setOpen12m] = useState(false);
  const [open13m, setOpen13m] = useState(false);
  const [open14m, setOpen14m] = useState(false);
  const [open15m, setOpen15m] = useState(false);
  const [open16m, setOpen16m] = useState(false);
  const [open17m, setOpen17m] = useState(false);

  const [showImgsM1, setShowImgsM1] = useState(false);
  const [showImgsM2, setShowImgsM2] = useState(false);
  const [showImgsM3, setShowImgsM3] = useState(false);
  const [showImgsM4, setShowImgsM4] = useState(false);
  const [showImgsM5, setShowImgsM5] = useState(false);
  const [showImgsM6, setShowImgsM6] = useState(false);
  const [showImgsM7, setShowImgsM7] = useState(false);
  const [showImgsM8, setShowImgsM8] = useState(false);
  const [showImgsM9, setShowImgsM9] = useState(false);
  const [showImgsM10, setShowImgsM10] = useState(false);
  const [showImgsM11, setShowImgsM11] = useState(false);
  const [showImgsM12, setShowImgsM12] = useState(false);
  const [showImgsM13, setShowImgsM13] = useState(false);
  const [showImgsM14, setShowImgsM14] = useState(false);
  const [showImgsM15, setShowImgsM15] = useState(false);
  const [showImgsM16, setShowImgsM16] = useState(false);
  const [showImgsM17, setShowImgsM17] = useState(false);

  // 1
  const [anchorElahone, setAnchorElahone] = useState(null);
  const [anchorElahtwo, setAnchorElahtwo] = useState(null);
  const [anchorElahthree, setAnchorElahthree] = useState(null);
  const [anchorElahfour, setAnchorElahfour] = useState(null);
  const [anchorElahfive, setAnchorElahfive] = useState(null);
  const [anchorElahsix, setAnchorElahsix] = useState(null);
  const [anchorElahseven, setAnchorElahseven] = useState(null);
  const [anchorElaheight, setAnchorElaheight] = useState(null);
  const [anchorElahnine, setAnchorElahnine] = useState(null);
  const [anchorElahten, setAnchorElahten] = useState(null);
  const [anchorElaheleven, setAnchorElaheleven] = useState(null);
  const [anchorElahtwelve, setAnchorElahtwelve] = useState(null);

  const [anchorEldlone, setAnchorEldlone] = useState(null);
  const [anchorEldltwo, setAnchorEldltwo] = useState(null);
  const [anchorEldlthree, setAnchorEldlthree] = useState(null);
  const [anchorEldlfour, setAnchorEldlfour] = useState(null);
  const [anchorEldlfive, setAnchorEldlfive] = useState(null);
  const [anchorEldlsix, setAnchorEldlsix] = useState(null);
  const [anchorEldlseven, setAnchorEldlseven] = useState(null);
  const [anchorEldleight, setAnchorEldleight] = useState(null);
  const [anchorEldlnine, setAnchorEldlnine] = useState(null);
  const [anchorEldlten, setAnchorEldlten] = useState(null);
  const [anchorEldleleven, setAnchorEldleleven] = useState(null);
  const [anchorEldltwelve, setAnchorEldltwelve] = useState(null);
  const [anchorEldlthirteen, setAnchorEldlthirteen] = useState(null);
  const [anchorEldlforteen, setAnchorEldlforteen] = useState(null);
  const [anchorEldlfifteen, setAnchorEldlfifteen] = useState(null);
  const [anchorEldlsixteen, setAnchorEldlsixteen] = useState(null);
  const [anchorEldlseventeen, setAnchorEldlseventeen] = useState(null);
  const [anchorEldleighteen, setAnchorEldleighteen] = useState(null);

  const [anchorElmbone, setAnchorElmbone] = useState(null);
  const [anchorElmbtwo, setAnchorElmbtwo] = useState(null);
  const [anchorElmbthree, setAnchorElmbthree] = useState(null);
  const [anchorElmbfour, setAnchorElmbfour] = useState(null);
  const [anchorElmbfive, setAnchorElmbfive] = useState(null);
  const [anchorElmbsix, setAnchorElmbsix] = useState(null);
  const [anchorElmbseven, setAnchorElmbseven] = useState(null);
  const [anchorElmbeight, setAnchorElmbeight] = useState(null);
  const [anchorElmbnine, setAnchorElmbnine] = useState(null);
  const [anchorElmbten, setAnchorElmbten] = useState(null);
  const [anchorElmbeleven, setAnchorElmbeleven] = useState(null);
  const [anchorElmbtwelve, setAnchorElmbtwelve] = useState(null);
  const [anchorElmbthirteen, setAnchorElmbthirteen] = useState(null);
  const [anchorElmbforteen, setAnchorElmbforteen] = useState(null);
  const [anchorElmbfifteen, setAnchorElmbfifteen] = useState(null);
  const [anchorElmbsixteen, setAnchorElmbsixteen] = useState(null);
  const [anchorElmbseventeen, setAnchorElmbseventeen] = useState(null);

  // 2
  const openahone = Boolean(anchorElahone);
  const handleClickahone = (event) => {
    setAnchorElahone(event.currentTarget);
  };
  const handleCloseahone = () => {
    setAnchorElahone(null);
  };

  const openahtwo = Boolean(anchorElahtwo);
  const handleClickahtwo = (event) => {
    setAnchorElahtwo(event.currentTarget);
  };
  const handleCloseahtwo = () => {
    setAnchorElahtwo(null);
  };

  const openahthree = Boolean(anchorElahthree);
  const handleClickahthree = (event) => {
    setAnchorElahthree(event.currentTarget);
  };
  const handleCloseahthree = () => {
    setAnchorElahthree(null);
  };

  const openahfour = Boolean(anchorElahfour);
  const handleClickahfour = (event) => {
    setAnchorElahfour(event.currentTarget);
  };
  const handleCloseahfour = () => {
    setAnchorElahfour(null);
  };

  const openahfive = Boolean(anchorElahfive);
  const handleClickahfive = (event) => {
    setAnchorElahfive(event.currentTarget);
  };
  const handleCloseahfive = () => {
    setAnchorElahfive(null);
  };

  const openahsix = Boolean(anchorElahsix);
  const handleClickahsix = (event) => {
    setAnchorElahsix(event.currentTarget);
  };
  const handleCloseahsix = () => {
    setAnchorElahsix(null);
  };

  const openahseven = Boolean(anchorElahseven);
  const handleClickahseven = (event) => {
    setAnchorElahseven(event.currentTarget);
  };
  const handleCloseahseven = () => {
    setAnchorElahseven(null);
  };

  const openaheight = Boolean(anchorElaheight);
  const handleClickaheight = (event) => {
    setAnchorElaheight(event.currentTarget);
  };
  const handleCloseaheight = () => {
    setAnchorElaheight(null);
  };

  const openahnine = Boolean(anchorElahnine);
  const handleClickahnine = (event) => {
    setAnchorElahnine(event.currentTarget);
  };
  const handleCloseahnine = () => {
    setAnchorElahnine(null);
  };

  const openahten = Boolean(anchorElahten);
  const handleClickahten = (event) => {
    setAnchorElahten(event.currentTarget);
  };
  const handleCloseahten = () => {
    setAnchorElahten(null);
  };

  const openaheleven = Boolean(anchorElaheleven);
  const handleClickaheleven = (event) => {
    setAnchorElaheleven(event.currentTarget);
  };
  const handleCloseaheleven = () => {
    setAnchorElaheleven(null);
  };

  const openahtwelve = Boolean(anchorElahtwelve);
  const handleClickahtwelve = (event) => {
    setAnchorElahtwelve(event.currentTarget);
  };
  const handleCloseahtwelve = () => {
    setAnchorElahtwelve(null);
  };

  // 2D
  const opendlone = Boolean(anchorEldlone);
  const handleClickdlone = (event) => {
    setAnchorEldlone(event.currentTarget);
  };
  const handleClosedlone = () => {
    setAnchorEldlone(null);
  };

  const opendltwo = Boolean(anchorEldltwo);
  const handleClickdltwo = (event) => {
    setAnchorEldltwo(event.currentTarget);
  };
  const handleClosedltwo = () => {
    setAnchorEldltwo(null);
  };

  const opendlthree = Boolean(anchorEldlthree);
  const handleClickdlthree = (event) => {
    setAnchorEldlthree(event.currentTarget);
  };
  const handleClosedlthree = () => {
    setAnchorEldlthree(null);
  };

  const opendlfour = Boolean(anchorEldlfour);
  const handleClickdlfour = (event) => {
    setAnchorEldlfour(event.currentTarget);
  };
  const handleClosedlfour = () => {
    setAnchorEldlfour(null);
  };

  const opendlfive = Boolean(anchorEldlfive);
  const handleClickdlfive = (event) => {
    setAnchorEldlfive(event.currentTarget);
  };
  const handleClosedlfive = () => {
    setAnchorEldlfive(null);
  };

  const opendlsix = Boolean(anchorEldlsix);
  const handleClickdlsix = (event) => {
    setAnchorEldlsix(event.currentTarget);
  };
  const handleClosedlsix = () => {
    setAnchorEldlsix(null);
  };

  const opendlseven = Boolean(anchorEldlseven);
  const handleClickdlseven = (event) => {
    setAnchorEldlseven(event.currentTarget);
  };
  const handleClosedlseven = () => {
    setAnchorEldlseven(null);
  };

  const opendleight = Boolean(anchorEldleight);
  const handleClickdleight = (event) => {
    setAnchorEldleight(event.currentTarget);
  };
  const handleClosedleight = () => {
    setAnchorEldleight(null);
  };

  const opendlnine = Boolean(anchorEldlnine);
  const handleClickdlnine = (event) => {
    setAnchorEldlnine(event.currentTarget);
  };
  const handleClosedlnine = () => {
    setAnchorEldlnine(null);
  };

  const opendlten = Boolean(anchorEldlten);
  const handleClickdlten = (event) => {
    setAnchorEldlten(event.currentTarget);
  };
  const handleClosedlten = () => {
    setAnchorEldlten(null);
  };

  const opendleleven = Boolean(anchorEldleleven);
  const handleClickdleleven = (event) => {
    setAnchorEldleleven(event.currentTarget);
  };
  const handleClosedleleven = () => {
    setAnchorEldleleven(null);
  };

  const opendltwelve = Boolean(anchorEldltwelve);
  const handleClickdltwelve = (event) => {
    setAnchorEldltwelve(event.currentTarget);
  };
  const handleClosedltwelve = () => {
    setAnchorEldltwelve(null);
  };

  const opendlthirteen = Boolean(anchorEldlthirteen);
  const handleClickdlthirteen = (event) => {
    setAnchorEldlthirteen(event.currentTarget);
  };
  const handleClosedlthirteen = () => {
    setAnchorEldlthirteen(null);
  };

  const opendlforteen = Boolean(anchorEldlforteen);
  const handleClickdlforteen = (event) => {
    setAnchorEldlforteen(event.currentTarget);
  };
  const handleClosedlforteen = () => {
    setAnchorEldlforteen(null);
  };

  const opendlfifteen = Boolean(anchorEldlfifteen);
  const handleClickdlfifteen = (event) => {
    setAnchorEldlfifteen(event.currentTarget);
  };
  const handleClosedlfifteen = () => {
    setAnchorEldlfifteen(null);
  };

  const opendlsixteen = Boolean(anchorEldlsixteen);
  const handleClickdlsixteen = (event) => {
    setAnchorEldlsixteen(event.currentTarget);
  };
  const handleClosedlsixteen = () => {
    setAnchorEldlsixteen(null);
  };

  const opendlseventeen = Boolean(anchorEldlseventeen);
  const handleClickdlseventeen = (event) => {
    setAnchorEldlseventeen(event.currentTarget);
  };
  const handleClosedlseventeen = () => {
    setAnchorEldlseventeen(null);
  };

  const opendleighteen = Boolean(anchorEldleighteen);
  const handleClickdleighteen = (event) => {
    setAnchorEldleighteen(event.currentTarget);
  };
  const handleClosedleighteen = () => {
    setAnchorEldleighteen(null);
  };

  // 2M
  const openmbone = Boolean(anchorElmbone);
  const handleClickmbone = (event) => {
    setAnchorElmbone(event.currentTarget);
  };
  const handleClosembone = () => {
    setAnchorElmbone(null);
  };

  const openmbtwo = Boolean(anchorElmbtwo);
  const handleClickmbtwo = (event) => {
    setAnchorElmbtwo(event.currentTarget);
  };
  const handleClosembtwo = () => {
    setAnchorElmbtwo(null);
  };

  const openmbthree = Boolean(anchorElmbthree);
  const handleClickmbthree = (event) => {
    setAnchorElmbthree(event.currentTarget);
  };
  const handleClosembthree = () => {
    setAnchorElmbthree(null);
  };

  const openmbfour = Boolean(anchorElmbfour);
  const handleClickmbfour = (event) => {
    setAnchorElmbfour(event.currentTarget);
  };
  const handleClosembfour = () => {
    setAnchorElmbfour(null);
  };

  const openmbfive = Boolean(anchorElmbfive);
  const handleClickmbfive = (event) => {
    setAnchorElmbfive(event.currentTarget);
  };
  const handleClosembfive = () => {
    setAnchorElmbfive(null);
  };

  const openmbsix = Boolean(anchorElmbsix);
  const handleClickmbsix = (event) => {
    setAnchorElmbsix(event.currentTarget);
  };
  const handleClosembsix = () => {
    setAnchorElmbsix(null);
  };

  const openmbseven = Boolean(anchorElmbseven);
  const handleClickmbseven = (event) => {
    setAnchorElmbseven(event.currentTarget);
  };
  const handleClosembseven = () => {
    setAnchorElmbseven(null);
  };

  const openmbeight = Boolean(anchorElmbeight);
  const handleClickmbeight = (event) => {
    setAnchorElmbeight(event.currentTarget);
  };
  const handleClosembeight = () => {
    setAnchorElmbeight(null);
  };

  const openmbnine = Boolean(anchorElmbnine);
  const handleClickmbnine = (event) => {
    setAnchorElmbnine(event.currentTarget);
  };
  const handleClosembnine = () => {
    setAnchorElmbnine(null);
  };

  const openmbten = Boolean(anchorElmbten);
  const handleClickmbten = (event) => {
    setAnchorElmbten(event.currentTarget);
  };
  const handleClosembten = () => {
    setAnchorElmbten(null);
  };

  const openmbeleven = Boolean(anchorElmbeleven);
  const handleClickmbeleven = (event) => {
    setAnchorElmbeleven(event.currentTarget);
  };
  const handleClosembeleven = () => {
    setAnchorElmbeleven(null);
  };

  const openmbtwelve = Boolean(anchorElmbtwelve);
  const handleClickmbtwelve = (event) => {
    setAnchorElmbtwelve(event.currentTarget);
  };
  const handleClosembtwelve = () => {
    setAnchorElmbtwelve(null);
  };

  const openmbthirteen = Boolean(anchorElmbthirteen);
  const handleClickmbthirteen = (event) => {
    setAnchorElmbthirteen(event.currentTarget);
  };
  const handleClosembthirteen = () => {
    setAnchorElmbthirteen(null);
  };

  const openmbforteen = Boolean(anchorElmbforteen);
  const handleClickmbforteen = (event) => {
    setAnchorElmbforteen(event.currentTarget);
  };
  const handleClosembforteen = () => {
    setAnchorElmbforteen(null);
  };

  const openmbfifteen = Boolean(anchorElmbfifteen);
  const handleClickmbfifteen = (event) => {
    setAnchorElmbfifteen(event.currentTarget);
  };
  const handleClosembfifteen = () => {
    setAnchorElmbfifteen(null);
  };

  const openmbsixteen = Boolean(anchorElmbsixteen);
  const handleClickmbsixteen = (event) => {
    setAnchorElmbsixteen(event.currentTarget);
  };
  const handleClosembsixteen = () => {
    setAnchorElmbsixteen(null);
  };

  const openmbseventeen = Boolean(anchorElmbseventeen);
  const handleClickmbseventeen = (event) => {
    setAnchorElmbseventeen(event.currentTarget);
  };
  const handleClosembseventeen = () => {
    setAnchorElmbseventeen(null);
  };

  const handleOpen1m = () => setOpen1m(true);
  const handleOpen2m = () => setOpen2m(true);
  const handleOpen3m = () => setOpen3m(true);
  const handleOpen4m = () => setOpen4m(true);
  const handleOpen5m = () => setOpen5m(true);
  const handleOpen6m = () => setOpen6m(true);
  const handleOpen7m = () => setOpen7m(true);
  const handleOpen8m = () => setOpen8m(true);
  const handleOpen9m = () => setOpen9m(true);
  const handleOpen10m = () => setOpen10m(true);
  const handleOpen11m = () => setOpen11m(true);
  const handleOpen12m = () => setOpen12m(true);
  const handleOpen13m = () => setOpen13m(true);
  const handleOpen14m = () => setOpen14m(true);
  const handleOpen15m = () => setOpen15m(true);
  const handleOpen16m = () => setOpen16m(true);
  const handleOpen17m = () => setOpen17m(true);

  const handleClose1m = () => setOpen1m(false);
  const handleClose2m = () => setOpen2m(false);
  const handleClose3m = () => setOpen3m(false);
  const handleClose4m = () => setOpen4m(false);
  const handleClose5m = () => setOpen5m(false);
  const handleClose6m = () => setOpen6m(false);
  const handleClose7m = () => setOpen7m(false);
  const handleClose8m = () => setOpen8m(false);
  const handleClose9m = () => setOpen9m(false);
  const handleClose10m = () => setOpen10m(false);
  const handleClose11m = () => setOpen11m(false);
  const handleClose12m = () => setOpen12m(false);
  const handleClose13m = () => setOpen13m(false);
  const handleClose14m = () => setOpen14m(false);
  const handleClose15m = () => setOpen15m(false);
  const handleClose16m = () => setOpen16m(false);
  const handleClose17m = () => setOpen17m(false);

  const [moreImg1a, setMoreImg1a] = useState(false);
  const [moreImg2a, setMoreImg2a] = useState(false);
  const [moreImg3a, setMoreImg3a] = useState(false);
  const [moreImg4a, setMoreImg4a] = useState(false);
  const [moreImg5a, setMoreImg5a] = useState(false);
  const [moreImg6a, setMoreImg6a] = useState(false);
  const [moreImg7a, setMoreImg7a] = useState(false);
  const [moreImg8a, setMoreImg8a] = useState(false);
  const [moreImg9a, setMoreImg9a] = useState(false);
  const [moreImg10a, setMoreImg10a] = useState(false);
  const [moreImg11a, setMoreImg11a] = useState(false);
  const [moreImg12a, setMoreImg12a] = useState(false);

  const [moreImg1, setMoreImg1] = useState(false);
  const [moreImg2, setMoreImg2] = useState(false);
  const [moreImg3, setMoreImg3] = useState(false);
  const [moreImg4, setMoreImg4] = useState(false);
  const [moreImg5, setMoreImg5] = useState(false);
  const [moreImg6, setMoreImg6] = useState(false);
  const [moreImg7, setMoreImg7] = useState(false);
  const [moreImg8, setMoreImg8] = useState(false);
  const [moreImg9, setMoreImg9] = useState(false);
  const [moreImg10, setMoreImg10] = useState(false);
  const [moreImg11, setMoreImg11] = useState(false);
  const [moreImg12, setMoreImg12] = useState(false);
  const [moreImg13, setMoreImg13] = useState(false);
  const [moreImg14, setMoreImg14] = useState(false);
  const [moreImg15, setMoreImg15] = useState(false);
  const [moreImg16, setMoreImg16] = useState(false);
  const [moreImg17, setMoreImg17] = useState(false);
  const [moreImg18, setMoreImg18] = useState(false);

  const [open1a, setOpen1a] = React.useState(false);
  const [open2a, setOpen2a] = React.useState(false);
  const [open3a, setOpen3a] = React.useState(false);
  const [open4a, setOpen4a] = React.useState(false);
  const [open5a, setOpen5a] = React.useState(false);
  const [open6a, setOpen6a] = React.useState(false);
  const [open7a, setOpen7a] = React.useState(false);
  const [open8a, setOpen8a] = React.useState(false);
  const [open9a, setOpen9a] = React.useState(false);
  const [open10a, setOpen10a] = React.useState(false);
  const [open11a, setOpen11a] = React.useState(false);
  const [open12a, setOpen12a] = React.useState(false);

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  const [open16, setOpen16] = React.useState(false);
  const [open17, setOpen17] = React.useState(false);
  const [open18, setOpen18] = React.useState(false);

  const handleOpen1a = () => setOpen1a(true);
  const handleOpen2a = () => setOpen2a(true);
  const handleOpen3a = () => setOpen3a(true);
  const handleOpen4a = () => setOpen4a(true);
  const handleOpen5a = () => setOpen5a(true);
  const handleOpen6a = () => setOpen6a(true);
  const handleOpen7a = () => setOpen7a(true);
  const handleOpen8a = () => setOpen8a(true);
  const handleOpen9a = () => setOpen9a(true);
  const handleOpen10a = () => setOpen10a(true);
  const handleOpen11a = () => setOpen11a(true);
  const handleOpen12a = () => setOpen12a(true);

  const handleOpen1 = () => setOpen1(true);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen3 = () => setOpen3(true);
  const handleOpen4 = () => setOpen4(true);
  const handleOpen5 = () => setOpen5(true);
  const handleOpen6 = () => setOpen6(true);
  const handleOpen7 = () => setOpen7(true);
  const handleOpen8 = () => setOpen8(true);
  const handleOpen9 = () => setOpen9(true);
  const handleOpen10 = () => setOpen10(true);
  const handleOpen11 = () => setOpen11(true);
  const handleOpen12 = () => setOpen12(true);
  const handleOpen13 = () => setOpen13(true);
  const handleOpen14 = () => setOpen14(true);
  const handleOpen15 = () => setOpen15(true);
  const handleOpen16 = () => setOpen16(true);
  const handleOpen17 = () => setOpen17(true);
  const handleOpen18 = () => setOpen18(true);

  const handleClose1a = () => setOpen1a(false);
  const handleClose2a = () => setOpen2a(false);
  const handleClose3a = () => setOpen3a(false);
  const handleClose4a = () => setOpen4a(false);
  const handleClose5a = () => setOpen5a(false);
  const handleClose6a = () => setOpen6a(false);
  const handleClose7a = () => setOpen7a(false);
  const handleClose8a = () => setOpen8a(false);
  const handleClose9a = () => setOpen9a(false);
  const handleClose10a = () => setOpen10a(false);
  const handleClose11a = () => setOpen11a(false);
  const handleClose12a = () => setOpen12a(false);

  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const handleClose4 = () => setOpen4(false);
  const handleClose5 = () => setOpen5(false);
  const handleClose6 = () => setOpen6(false);
  const handleClose7 = () => setOpen7(false);
  const handleClose8 = () => setOpen8(false);
  const handleClose9 = () => setOpen9(false);
  const handleClose10 = () => setOpen10(false);
  const handleClose11 = () => setOpen11(false);
  const handleClose12 = () => setOpen12(false);
  const handleClose13 = () => setOpen13(false);
  const handleClose14 = () => setOpen14(false);
  const handleClose15 = () => setOpen15(false);
  const handleClose16 = () => setOpen16(false);
  const handleClose17 = () => setOpen17(false);
  const handleClose18 = () => setOpen18(false);

  const showMoreImagesM1 = () => {
    setShowImgsM1(true);
    document.getElementById("viewMoreImagesM1").style.display = "none";
  };
  const closeMoreImagesM1 = () => {
    setShowImgsM1(false);
    document.getElementById("viewMoreImagesM1").removeAttribute("style");
  };
  const showMoreImagesM2 = () => {
    setShowImgsM2(true);
    document.getElementById("viewMoreImagesM2").style.display = "none";
  };
  const closeMoreImagesM2 = () => {
    setShowImgsM2(false);
    document.getElementById("viewMoreImagesM2").removeAttribute("style");
  };
  const showMoreImagesM3 = () => {
    setShowImgsM3(true);
    document.getElementById("viewMoreImagesM3").style.display = "none";
  };
  const closeMoreImagesM3 = () => {
    setShowImgsM3(false);
    document.getElementById("viewMoreImagesM3").removeAttribute("style");
  };
  const showMoreImagesM4 = () => {
    setShowImgsM4(true);
    document.getElementById("viewMoreImagesM4").style.display = "none";
  };
  const closeMoreImagesM4 = () => {
    setShowImgsM4(false);
    document.getElementById("viewMoreImagesM4").removeAttribute("style");
  };
  const showMoreImagesM5 = () => {
    setShowImgsM5(true);
    document.getElementById("viewMoreImagesM5").style.display = "none";
  };
  const closeMoreImagesM5 = () => {
    setShowImgsM5(false);
    document.getElementById("viewMoreImagesM5").removeAttribute("style");
  };
  const showMoreImagesM6 = () => {
    setShowImgsM6(true);
    document.getElementById("viewMoreImagesM6").style.display = "none";
  };
  const closeMoreImagesM6 = () => {
    setShowImgsM6(false);
    document.getElementById("viewMoreImagesM6").removeAttribute("style");
  };
  const showMoreImagesM7 = () => {
    setShowImgsM7(true);
    document.getElementById("viewMoreImagesM7").style.display = "none";
  };
  const closeMoreImagesM7 = () => {
    setShowImgsM7(false);
    document.getElementById("viewMoreImagesM7").removeAttribute("style");
  };
  const showMoreImagesM8 = () => {
    setShowImgsM8(true);
    document.getElementById("viewMoreImagesM8").style.display = "none";
  };
  const closeMoreImagesM8 = () => {
    setShowImgsM8(false);
    document.getElementById("viewMoreImagesM8").removeAttribute("style");
  };
  const showMoreImagesM9 = () => {
    setShowImgsM9(true);
    document.getElementById("viewMoreImagesM9").style.display = "none";
  };
  const closeMoreImagesM9 = () => {
    setShowImgsM9(false);
    document.getElementById("viewMoreImagesM9").removeAttribute("style");
  };
  const showMoreImagesM10 = () => {
    setShowImgsM10(true);
    document.getElementById("viewMoreImagesM10").style.display = "none";
  };
  const closeMoreImagesM10 = () => {
    setShowImgsM10(false);
    document.getElementById("viewMoreImagesM10").removeAttribute("style");
  };
  const showMoreImagesM11 = () => {
    setShowImgsM11(true);
    document.getElementById("viewMoreImagesM11").style.display = "none";
  };
  const closeMoreImagesM11 = () => {
    setShowImgsM11(false);
    document.getElementById("viewMoreImagesM11").removeAttribute("style");
  };
  const showMoreImagesM12 = () => {
    setShowImgsM12(true);
    document.getElementById("viewMoreImagesM12").style.display = "none";
  };
  const closeMoreImagesM12 = () => {
    setShowImgsM12(false);
    document.getElementById("viewMoreImagesM12").removeAttribute("style");
  };
  const showMoreImagesM13 = () => {
    setShowImgsM13(true);
    document.getElementById("viewMoreImagesM13").style.display = "none";
  };
  const closeMoreImagesM13 = () => {
    setShowImgsM13(false);
    document.getElementById("viewMoreImagesM13").removeAttribute("style");
  };
  const showMoreImagesM14 = () => {
    setShowImgsM14(true);
    document.getElementById("viewMoreImagesM14").style.display = "none";
  };
  const closeMoreImagesM14 = () => {
    setShowImgsM14(false);
    document.getElementById("viewMoreImagesM14").removeAttribute("style");
  };
  const showMoreImagesM15 = () => {
    setShowImgsM15(true);
    document.getElementById("viewMoreImagesM15").style.display = "none";
  };
  const closeMoreImagesM15 = () => {
    setShowImgsM15(false);
    document.getElementById("viewMoreImagesM15").removeAttribute("style");
  };
  const showMoreImagesM16 = () => {
    setShowImgsM16(true);
    document.getElementById("viewMoreImagesM16").style.display = "none";
  };
  const closeMoreImagesM16 = () => {
    setShowImgsM16(false);
    document.getElementById("viewMoreImagesM16").removeAttribute("style");
  };
  const showMoreImagesM17 = () => {
    setShowImgsM17(true);
    document.getElementById("viewMoreImagesM17").style.display = "none";
  };
  const closeMoreImagesM17 = () => {
    setShowImgsM17(false);
    document.getElementById("viewMoreImagesM17").removeAttribute("style");
  };

  const moreImages1a = () => {
    setMoreImg1a(true);
    document.getElementById("localAreaDOnea").style.display = "none";
  };
  const moreImages2a = () => {
    setMoreImg2a(true);
    document.getElementById("localAreaDTwoa").style.display = "none";
  };
  const moreImages3a = () => {
    setMoreImg3a(true);
    document.getElementById("localAreaDThreea").style.display = "none";
  };
  const moreImages4a = () => {
    setMoreImg4a(true);
    document.getElementById("localAreaDFoura").style.display = "none";
  };
  const moreImages5a = () => {
    setMoreImg5a(true);
    document.getElementById("localAreaDFivea").style.display = "none";
  };
  const moreImages6a = () => {
    setMoreImg6a(true);
    document.getElementById("localAreaDSixa").style.display = "none";
  };
  const moreImages7a = () => {
    setMoreImg7a(true);
    document.getElementById("localAreaDSevena").style.display = "none";
  };
  const moreImages8a = () => {
    setMoreImg8a(true);
    document.getElementById("localAreaDEighta").style.display = "none";
  };
  const moreImages9a = () => {
    setMoreImg9a(true);
    document.getElementById("localAreaDNinea").style.display = "none";
  };
  const moreImages10a = () => {
    setMoreImg10a(true);
    document.getElementById("localAreaDTena").style.display = "none";
  };
  const moreImages11a = () => {
    setMoreImg11a(true);
    document.getElementById("localAreaDElevena").style.display = "none";
  };
  const moreImages12a = () => {
    setMoreImg12a(true);
    document.getElementById("localAreaDTvelvea").style.display = "none";
  };

  const closeDImgs1a = () => {
    setMoreImg1a(false);
    document.getElementById("localAreaDOnea").removeAttribute("style");
  };
  const closeDImgs2a = () => {
    setMoreImg2a(false);
    document.getElementById("localAreaDTwoa").removeAttribute("style");
  };
  const closeDImgs3a = () => {
    setMoreImg3a(false);
    document.getElementById("localAreaDThreea").removeAttribute("style");
  };
  const closeDImgs4a = () => {
    setMoreImg4a(false);
    document.getElementById("localAreaDFoura").removeAttribute("style");
  };
  const closeDImgs5a = () => {
    setMoreImg5a(false);
    document.getElementById("localAreaDFivea").removeAttribute("style");
  };
  const closeDImgs6a = () => {
    setMoreImg6a(false);
    document.getElementById("localAreaDSixa").removeAttribute("style");
  };
  const closeDImgs7a = () => {
    setMoreImg7a(false);
    document.getElementById("localAreaDSevena").removeAttribute("style");
  };
  const closeDImgs8a = () => {
    setMoreImg8a(false);
    document.getElementById("localAreaDEighta").removeAttribute("style");
  };
  const closeDImgs9a = () => {
    setMoreImg9a(false);
    document.getElementById("localAreaDNinea").removeAttribute("style");
  };
  const closeDImgs10a = () => {
    setMoreImg10a(false);
    document.getElementById("localAreaDTena").removeAttribute("style");
  };
  const closeDImgs11a = () => {
    setMoreImg11a(false);
    document.getElementById("localAreaDElevena").removeAttribute("style");
  };
  const closeDImgs12a = () => {
    setMoreImg12a(false);
    document.getElementById("localAreaDTvelvea").removeAttribute("style");
  };

  const moreImages1 = () => {
    setMoreImg1(true);
    document.getElementById("localAreaDOne").style.display = "none";
  };
  const moreImages2 = () => {
    setMoreImg2(true);
    document.getElementById("localAreaDTwo").style.display = "none";
  };
  const moreImages3 = () => {
    setMoreImg3(true);
    document.getElementById("localAreaDThree").style.display = "none";
  };
  const moreImages4 = () => {
    setMoreImg4(true);
    document.getElementById("localAreaDFour").style.display = "none";
  };
  const moreImages5 = () => {
    setMoreImg5(true);
    document.getElementById("localAreaDFive").style.display = "none";
  };
  const moreImages6 = () => {
    setMoreImg6(true);
    document.getElementById("localAreaDSix").style.display = "none";
  };
  const moreImages7 = () => {
    setMoreImg7(true);
    document.getElementById("localAreaDSeven").style.display = "none";
  };
  const moreImages8 = () => {
    setMoreImg8(true);
    document.getElementById("localAreaDEight").style.display = "none";
  };
  const moreImages9 = () => {
    setMoreImg9(true);
    document.getElementById("localAreaDNine").style.display = "none";
  };
  const moreImages10 = () => {
    setMoreImg10(true);
    document.getElementById("localAreaDTen").style.display = "none";
  };
  const moreImages11 = () => {
    setMoreImg11(true);
    document.getElementById("localAreaDEleven").style.display = "none";
  };
  const moreImages12 = () => {
    setMoreImg12(true);
    document.getElementById("localAreaDTvelve").style.display = "none";
  };
  const moreImages13 = () => {
    setMoreImg13(true);
    document.getElementById("localAreaDThirteen").style.display = "none";
  };
  const moreImages14 = () => {
    setMoreImg14(true);
    document.getElementById("localAreaDForteen").style.display = "none";
  };
  const moreImages15 = () => {
    setMoreImg15(true);
    document.getElementById("localAreaDFifteen").style.display = "none";
  };
  const moreImages16 = () => {
    setMoreImg16(true);
    document.getElementById("localAreaDSixteen").style.display = "none";
  };
  const moreImages17 = () => {
    setMoreImg17(true);
    document.getElementById("localAreaDSeventeen").style.display = "none";
  };
  const moreImages18 = () => {
    setMoreImg18(true);
    document.getElementById("localAreaDEighteen").style.display = "none";
  };

  const closeDImgs1 = () => {
    setMoreImg1(false);
    document.getElementById("localAreaDOne").removeAttribute("style");
  };
  const closeDImgs2 = () => {
    setMoreImg2(false);
    document.getElementById("localAreaDTwo").removeAttribute("style");
  };
  const closeDImgs3 = () => {
    setMoreImg3(false);
    document.getElementById("localAreaDThree").removeAttribute("style");
  };
  const closeDImgs4 = () => {
    setMoreImg4(false);
    document.getElementById("localAreaDFour").removeAttribute("style");
  };
  const closeDImgs5 = () => {
    setMoreImg5(false);
    document.getElementById("localAreaDFive").removeAttribute("style");
  };
  const closeDImgs6 = () => {
    setMoreImg6(false);
    document.getElementById("localAreaDSix").removeAttribute("style");
  };
  const closeDImgs7 = () => {
    setMoreImg7(false);
    document.getElementById("localAreaDSeven").removeAttribute("style");
  };
  const closeDImgs8 = () => {
    setMoreImg8(false);
    document.getElementById("localAreaDEight").removeAttribute("style");
  };
  const closeDImgs9 = () => {
    setMoreImg9(false);
    document.getElementById("localAreaDNine").removeAttribute("style");
  };
  const closeDImgs10 = () => {
    setMoreImg10(false);
    document.getElementById("localAreaDTen").removeAttribute("style");
  };
  const closeDImgs11 = () => {
    setMoreImg11(false);
    document.getElementById("localAreaDEleven").removeAttribute("style");
  };
  const closeDImgs12 = () => {
    setMoreImg12(false);
    document.getElementById("localAreaDTvelve").removeAttribute("style");
  };
  const closeDImgs13 = () => {
    setMoreImg13(false);
    document.getElementById("localAreaDThirteen").removeAttribute("style");
  };
  const closeDImgs14 = () => {
    setMoreImg14(false);
    document.getElementById("localAreaDForteen").removeAttribute("style");
  };
  const closeDImgs15 = () => {
    setMoreImg15(false);
    document.getElementById("localAreaDFifteen").removeAttribute("style");
  };
  const closeDImgs16 = () => {
    setMoreImg16(false);
    document.getElementById("localAreaDSixteen").removeAttribute("style");
  };
  const closeDImgs17 = () => {
    setMoreImg17(false);
    document.getElementById("localAreaDSeventeen").removeAttribute("style");
  };
  const closeDImgs18 = () => {
    setMoreImg18(false);
    document.getElementById("localAreaDEighteen").removeAttribute("style");
  };
  const location = useLocation();
  console.log(location.pathname);

  // if(location.pathname = "/localarea/ahmedabad"){
  //   console.log("ahmedabad success")
  // }

  return (
    <>
      <Navbar />
      <Header type="list" typeTwo="singleHotel" />

      {/* Ahmedabad Start */}

      {location.pathname === "/localarea/ahmedabad" && (
        <>
          <div className="localAreaAAccordianMain">
            <h1 className="localAreaHeadingAhmedabad">
              Places to Explore in Ahmedabad
            </h1>
            {/* 1 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Gandhi Ashram</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Gandhiji selected a place on the bank of the river
                            Sabarmati very close to the Saint Dadheechi’s temple
                            as well as from Jail and a crematorium. Gandhi used
                            to remark, "This is the right place for our
                            activities to carry on the search for Truth and
                            develop Fearlessness for on one side are the iron
                            bolts of the foreigners and on the other,
                            thunderbolts of mother nature." After building a few
                            essential structures, activities of the Ashram
                            commenced in 1917.
                          </p>

                          <p id="gandhiAshramsecondpara">
                            Gandhiji had driven all the major activities of
                            independence as well as upliftment of the society
                            from this Ashram which was popularly known as
                            Sabarmati Ashram. He stayed in the ashram for many
                            years before he finally proceeded for a march to
                            Dandi to break the salt law on 12 March 1930. Before
                            starting the march to Dandi, Gandhiji declared that
                            he will not return to the ashram before the
                            independence of the country.
                          </p>

                          <p id="gandhiAshramthirdpara">
                            The Gandhi Smarak Sangrahalaya is run by a public
                            trust established in 1951. The museum’s new premises
                            were built in 1963. The museum’s main objective is
                            to house the personal memorabilia of Mahatma Gandhi.
                            Consequently the exhibits on view depict the vivid
                            and historic events of Gandhiji’s life. There are
                            books, manuscripts and photocopies of his
                            correspondence, photographs of Gandhiji with his
                            wife Kasturba and other ashram associates, life size
                            oil paintings and actual relics like his writing
                            desk and spinning wheel.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://gandhiashramsabarmati.org/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open1a && (
                          <div>
                            <Modal
                              open={open1a}
                              onClose={handleClose1a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Gandhi Ashram Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5996.854026561486!2d72.57893998998274!3d23.06021284293568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8479e05f1901%3A0x16cbb1101e5729a3!2sSabarmati%20Ashram!5e0!3m2!1sen!2sin!4v1662804524701!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/gandhi-statue-at-the-gandhi-ashram-in-ahemdabad-gujarat-india-picture-id1248499903?k=20&m=1248499903&s=612x612&w=0&h=-u8vfIiM4Bbwa79rc7TqjWNF9jPxijpYsBbd6lFKD1A="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDOnea"
                              onClick={moreImages1a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen1a}
                          >
                            SHOW MAP
                          </button>

                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahone ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahone ? "true" : undefined}
                              onClick={handleClickahone}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahone}
                              open={openahone}
                              onClose={handleCloseahone}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahone}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://gandhiashramsabarmati.org/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahone}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://gandhiashramsabarmati.org/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahone}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://gandhiashramsabarmati.org/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahone}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>

                    {moreImg1a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs1a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/gandhi-statue-at-the-gandhi-ashram-in-ahemdabad-gujarat-india-picture-id1248499903?k=20&m=1248499903&s=612x612&w=0&h=-u8vfIiM4Bbwa79rc7TqjWNF9jPxijpYsBbd6lFKD1A="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://images.unsplash.com/photo-1624903715293-afe920c6adad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FuZGhpJTIwYXNocmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/mahatma-gandhis-spinning-wheel-in-focus-back-view-picture-id1203535297?k=20&m=1203535297&s=612x612&w=0&h=fDct8-AnRxomqY8Md1E_9qqWZV-9cbjbACJVmPlm_vY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ahmedabad-gujarat-india-december-2019-residential-hut-of-vinoba-and-picture-id1263785500?k=20&m=1263785500&s=612x612&w=0&h=qFqXH4se6WYdkI0FKuhj48jmYQ6mWarO_5Cz1zNN4jg="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/dark-red-closed-wooden-door-with-steps-picture-id839822394?k=20&m=839822394&s=612x612&w=0&h=rOlZf4d3RwUQ-Rq_a2X0PQ0R6lQ6G13kSawiG1AQFB4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/vinoba-kutirmira-kutirsabarmati-ashramgandhi-ashram-picture-id849341890?k=20&m=849341890&s=612x612&w=0&h=WhjydK60AjaOFmPx0pvenrcegMqA42MDmUy2Bbtb13E="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/sabarmati-ashram-also-known-as-gandhi-ashram-in-ahmedabad-gujarat-picture-id90524485?k=20&m=90524485&s=612x612&w=0&h=xTwQfoh-3bX3fE174MPCifO7-5P8J1Euxk3SLl1O8fY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/january-10-gandhis-wooden-slippers-and-other-personal-belongings-at-picture-id639383698?k=20&m=639383698&s=612x612&w=0&h=qVxwmFgDuStyZ4YABdAD63pS5sp_C3KSAghO1HRqnP4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/january-10-hriday-kutir-the-spartan-home-that-the-mahatma-used-made-picture-id639383878?k=20&m=639383878&s=612x612&w=0&h=hMlr87ftchL6yQQO6Fki6qgihNTniVdijAj_2xFK9pQ="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/january-10-the-simple-office-space-of-gandhi-he-sat-on-the-floor-on-picture-id639383640?k=20&m=639383640&s=612x612&w=0&h=6Owg7DaRFI-N-7kIVXDraBEqcKUXjVxxscqsH50tyg0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/sabarmati-ashram-was-the-residence-of-mahatma-gandhi-and-is-located-picture-id535247180?k=20&m=535247180&s=612x612&w=0&h=JvQz18athC_ApcILoM0ldd8LPyTkjJLZOmjWgRBcAFc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sabarmati-riverfront-view-from-sabarmati-ashram-in-ahmedabad-picture-id472916370?k=20&m=472916370&s=612x612&w=0&h=kIW88XCURxi8PkU1hQq6Ld_YM4zLOj3WG31RVHWlTjU="
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 2 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Hutheesing Jain Temple</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            This remarkably elegant temple created out of white
                            marble has been sacred to many Jain families,
                            generation after generation. It was built in 1848
                            A.D. at an estimated cost of 10 lakh rupees by a
                            rich merchant Sheth Hutheesing as a dedication to
                            the 15th Jain Tirthankara, Shri Dharmanatha.
                            Traditional artisans working in stone belonged to
                            the Sonpura & Salat communities. The Salat community
                            constructed masterpieces of architecture ranging
                            from forts, palaces to temples. The work of the
                            Hutheesing Jain temple is attributed to Premchand
                            Salat. One scholar has remarked, "Each part goes on
                            increasing in dignity as we approach the sanctuary.
                            Whether looked at from its courts or from the
                            outside, it possesses variety without confusion and
                            appropriateness of every part to the purpose for
                            which it was intended."
                          </p>

                          <p id="hutheesingTemplesecondpara">
                            Located outside the Delhi Gate, the temple is spread
                            over a sprawling courtyard, a mandapa surmounted by
                            a large ridged dome, which is supported by 12 ornate
                            pillars. The small garbhagruh (main shrine) on the
                            east end reaches up into three stunningly carved
                            spires and encircled by 52 small shrines dedicated
                            to the various Tirthankars. There are large
                            protruding porches with magnificently decorated
                            columns and figural brackets on three outer sides.
                            Also, a recently built 78 ft Mahavir stambha (tower)
                            fashioned after the renowned tower at Chittor in
                            Rajasthan, flanks the outer courtyard by the front
                            entrance. Some of the motifs used in the design
                            remind one of the Sultanate minarets of the Mughal
                            period.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.gujarattourism.com/central-zone/ahmedabad/hutheesing-jain-temple.html"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open2a && (
                          <div>
                            <Modal
                              open={open2a}
                              onClose={handleClose2a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Hutheesing Jain Temple Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5277781149243!2d72.58728621447999!3d23.041104621418114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84402338beab%3A0x6fb65dff678b1499!2sHutheesing%20Jain%20Temple!5e0!3m2!1sen!2sin!4v1662816160728!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/hutheesing-temple-in-ahmadabad-picture-id636412880?k=20&m=636412880&s=612x612&w=0&h=Y5_ABgeCJmfH_gs2pvf0PEziV0MzLPKbq0Ew_5LgfGA="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDTwoa"
                              onClick={moreImages2a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen2a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahtwo ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahtwo ? "true" : undefined}
                              onClick={handleClickahtwo}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahtwo}
                              open={openahtwo}
                              onClose={handleCloseahtwo}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahtwo}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/hutheesing-jain-temple.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahtwo}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/hutheesing-jain-temple.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahtwo}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/hutheesing-jain-temple.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahtwo}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg2a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs2a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hutheesing-temple-in-ahmadabad-picture-id636412880?k=20&m=636412880&s=612x612&w=0&h=Y5_ABgeCJmfH_gs2pvf0PEziV0MzLPKbq0Ew_5LgfGA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hutheesing-jain-temple-in-ahmedabad-gujarat-india-picture-id937367318?k=20&m=937367318&s=612x612&w=0&h=Fe8vcrnS_y_qW1pGHEU07KZgt3V_SaIUme4xT_VD7u8="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hutheesing-temple-ahmedabad-picture-id1074141604?k=20&m=1074141604&s=612x612&w=0&h=a4-IPUXBQw2-OdiGzigGx4oJCV5MbnhJGvqALEzwNKA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/kirti-stambha-tower-of-hutheesing-jain-temple-in-ahmedabad-gujarat-picture-id937351466?k=20&m=937351466&s=612x612&w=0&h=7QF7T5V5Bszxz014rUhDwQQMeedunBEY3jbzZMu1WJI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/jain-devotee-visits-a-hutheesing-jain-temple-on-the-last-day-of-as-picture-id123233990?k=20&m=123233990&s=612x612&w=0&h=ah1u9INp_cS4o27k8CX_ah0DwSIYxn9dZ2rJ1X6oTog="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hutheesing-temple-in-ahmadabad-picture-id636412856?k=20&m=636412856&s=612x612&w=0&h=_TBjjxPvuJMygqbDsw8wuZffVBBGK0CvWZDz2LwMvHo="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/jain-devotees-visit-a-hutheesing-jain-temple-on-the-last-day-of-as-picture-id123233992?k=20&m=123233992&s=612x612&w=0&h=y3O8_YAm4EWo5GqbJOtry8RJb4-pXUKX09NBkXRnTbg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/hutheesing-jain-temple-picture-id1337885089?k=20&m=1337885089&s=612x612&w=0&h=QHPlhxiTXOQhZ8jf-qWZztYq3BE4r-TvHUhqDbLPXwk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/hutheesing-jain-temple-picture-id1337885094?k=20&m=1337885094&s=612x612&w=0&h=e1v-trHZApb0x2DMzmNGL1nZhaPxsL7MJUlKHq4FjcE="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/sculptures-picture-id1337885101?k=20&m=1337885101&s=612x612&w=0&h=TSKYXQVQ1CV0VZbyafy2ElwmbkMUgNpVUQIDGeTKbNo="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/young-indian-jain-devotees-wearing-traditional-clothes-walks-around-a-picture-id89824198?k=20&m=89824198&s=612x612&w=0&h=orD4DGPtxEk6Bwd0PyMhLHM8BLTSZB0x6aoMRIYiS4c="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hutheesing-temple-in-ahmadabad-picture-id636412950?k=20&m=636412950&s=612x612&w=0&h=83rYlqvoFy-rafYm-SBWUavU7V6XDxuzKdEUyS1tE_w="
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 3 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Adalaj Stepwell</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            The flamboyant 15th-century stepwell, has lost only
                            little of its grandeur over the last few centuries.
                            Till date, the intricate carvings on the pillars
                            that support the five storeys are mostly intact; the
                            beams work as pit stops for pigeons flying in and
                            out and the structure still leaves jaws dropped for
                            swarms of people. The step-well represents the
                            Indo-Islamic fusion architecture that percolated
                            through the many stepwells of the period. There are
                            some fascinating features of the vav that make this
                            an important emblem of superior architecture. The
                            opening in the ceilings above the landing allows
                            light and air to enter the octagonal well, but
                            direct sunlight never touches the steps except at
                            noon. It is said that the temperature inside the
                            well is six degrees cooler than outside. The
                            stepwell has three entrances. The stairs lead to an
                            underground storey, which has an octagonal opening
                            on top. The walls are covered in ornamental carvings
                            with mythological and village scenes. Some of them
                            include Ami khumbor (a pot that contains the water
                            of life) and the Kalp vriksha (a tree of life)
                            carved out of a single slab of stone. There is a
                            belief that the small frieze of Navagraha
                            (nine-planets) towards the edge of the well protects
                            the monument from bad omens.
                          </p>

                          <p id="adalajStepwellsecondpara">
                            The stepwell was built by Mahmud Begada in 1411, to
                            commemorate Queen Rudabai, wife of Veersinh, the
                            Vaghela chieftain. It served both a utilitarian and
                            spiritual purpose for the people around. A number of
                            people from villages around once filled water from
                            this stepwell.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open3a && (
                          <div>
                            <Modal
                              open={open3a}
                              onClose={handleClose3a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Adalaj Stepwell Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.0966290306587!2d72.57792121448217!3d23.16667311674152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c29dab0c5bf89%3A0xdb1dddc4bdbd398f!2sThe%20Adalaj%20Stepwell!5e0!3m2!1sen!2sin!4v1662818169992!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/adalaj-stepwell-picture-id636354030?k=20&m=636354030&s=612x612&w=0&h=eFrtf25QjaUeJsHlgvyxO8GGkydPwo4zB8kuCdWqp24="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDThreea"
                              onClick={moreImages3a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen3a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahthree ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahthree ? "true" : undefined}
                              onClick={handleClickahthree}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahthree}
                              open={openahthree}
                              onClose={handleCloseahthree}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahthree}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahthree}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahthree}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.gujarattourism.com/central-zone/gandhinagar/adalaj-ni-vav.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahthree}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg3a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs3a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/adalaj-stepwell-picture-id636354030?k=20&m=636354030&s=612x612&w=0&h=eFrtf25QjaUeJsHlgvyxO8GGkydPwo4zB8kuCdWqp24="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/adalaj-stepwell-on-a-dark-day-picture-id1297036922?k=20&m=1297036922&s=612x612&w=0&h=JoSHr24bZfDEiKV25UbnquU_1U7fjdR15arnJ3dRk34="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/adalaj-stepwell-picture-id636354076?k=20&m=636354076&s=612x612&w=0&h=xJmoPIs6M_mzDx0f8AnFinvsCyRrA9YyqHHYG6-YPrA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/rani-ki-vav-an-stepwell-on-the-banks-of-saraswati-river-in-patan-a-picture-id1143622559?k=20&m=1143622559&s=612x612&w=0&h=9GM3naRStkMeT7zSx2gkI1KU5MwkU_pIMFiJupAxPHc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/rani-ki-vav-an-stepwell-on-the-banks-of-saraswati-river-in-patan-a-picture-id1141812275?k=20&m=1141812275&s=612x612&w=0&h=1-ZnaC9K7toSX6keTopa1zWYYkdk9DYxeiNxRGzDmFY="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/adalaj-stepwell-in-ahmedabad-gujarat-picture-id466137514?k=20&m=466137514&s=612x612&w=0&h=aZHtkr2ih4scCYVuYqXMgBgeq1XFrWTDLnLnGmh3s_8="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/adalaj-stepwell-in-ahmedabad-in-india-picture-id964847244?k=20&m=964847244&s=612x612&w=0&h=HzFDmdG4xrSh9C8axaX1FUD2K_u8wUbjurd_dFmBbR4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/old-well-in-ahmedabad-india-gujarat-may-2015-picture-id1029164610?k=20&m=1029164610&s=612x612&w=0&h=-lliNszRfPZWG44CyVsI-4l2vPdIE9qXBYbPfLbrRQE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/adalaj-stepwell-tall-pillars-indian-heritage-tourist-place-ahmedabad-picture-id821330384?k=20&m=821330384&s=612x612&w=0&h=OfG0p9XcRkXXIWy8O4kn3IgnHEAFeKmftg-BoHwgbDU="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/vintage-crafted-at-adalaj-stepwell-in-ahmedabad-india-picture-id534161995?k=20&m=534161995&s=612x612&w=0&h=yVDjRaYb48cUAMLeKRi0o1Qh_oO2KmrrDQ84ipVY1tU="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/rani-ki-vav-an-stepwell-on-the-banks-of-saraswati-river-in-patan-a-picture-id1141812282?k=20&m=1141812282&s=612x612&w=0&h=Zp17A7X4x_GrRSAScsu-nftOPqt2SFqaxhMCcf8HO6o="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/dada-harir-vav-stepwell-is-a-hindu-water-building-in-asarwa-ahmedabad-picture-id1143229647?k=20&m=1143229647&s=612x612&w=0&h=9P00OkxR2wPlyaTfn3kKrzO-EXuwZRSMOelL1GgpYWI="
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 4 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Gujarat Science City</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Gujarat, on the western coast of India, is one of
                            the most prosperous and progressive Indian states.
                            It came into existence in 1960 when it was separated
                            from the State of Bombay. It is spread over an area
                            of 1,96,024 square kms and has a population of 64
                            million.
                          </p>

                          <p id="sciencecitysecondpara">
                            The Government of Gujarat has established the
                            Gujarat Council of Science City, a registered
                            society, to achieve the Gujarat Science City
                            mandate. The Government is already in possession of
                            107 hectares of land.
                          </p>

                          <p id="sciencecitythirdpara">
                            Popularization of science to create scientific
                            temper in the community is a priority in the
                            emerging environment of knowledge-driven economic
                            growth.
                          </p>

                          <p id="sciencecityforthpara">
                            Gujarat Science City is a bold initiative of the
                            Government of Gujarat to realize this priority. The
                            Government is creating a sprawling center at
                            Ahmedabad which aims to provide a perfect blend of
                            education and entertainment. It will showcase
                            contemporary and imaginative exhibits, minds on
                            experiences, working models, virtual reality,
                            activity corners, labs and live demonstrations to
                            provide an understanding of science and technology
                            to the common man.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://sciencecity.gujarat.gov.in/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open4a && (
                          <div>
                            <Modal
                              open={open4a}
                              onClose={handleClose4a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Gujarat Science City Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.4612336130153!2d72.49305501448069!3d23.080205719964425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d8f9ac3ec17%3A0xf955692e13272fcf!2sScience%20City%20Ahmedabad!5e0!3m2!1sen!2sin!4v1662819508209!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/ground-staff-inspect-solar-plane-at-airport-in-ahmedabad-on-the-main-picture-id465871588?k=20&m=465871588&s=612x612&w=0&h=UCgZSE95CoFfK5poi1qLRZIIcWtMn7NgYe5hzywcj8A="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDFoura"
                              onClick={moreImages4a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen4a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahfour ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahfour ? "true" : undefined}
                              onClick={handleClickahfour}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahfour}
                              open={openahfour}
                              onClose={handleCloseahfour}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahfour}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://sciencecity.gujarat.gov.in/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahfour}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://sciencecity.gujarat.gov.in/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahfour}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://sciencecity.gujarat.gov.in/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahfour}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg4a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs4a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/ground-staff-inspect-solar-plane-at-airport-in-ahmedabad-on-the-main-picture-id465871588?k=20&m=465871588&s=612x612&w=0&h=UCgZSE95CoFfK5poi1qLRZIIcWtMn7NgYe5hzywcj8A="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/ground-staff-inspect-solar-plane-at-airport-in-ahmedabad-on-the-main-picture-id465872024?k=20&m=465872024&s=612x612&w=0&h=lfKEJKrWishLstma2IX988Kfxn5Ru6Yi5IzZKZCuy2k="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/students-watch-the-demonstration-of-a-working-model-of-a-polar-as-picture-id1184947425?k=20&m=1184947425&s=612x612&w=0&h=P8KZOS1JAliLzTQEHyAC_hazRameFB95cpG-exTS0hM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/astronaut-sunita-williams-and-gujarat-science-citys-executive-dilip-picture-id165690948?k=20&m=165690948&s=612x612&w=0&h=9zlhY3qVIInXnf3JyujByD6DQ-dyQPiIeMoPK7SwG2w="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/indian-visitors-view-on-screen-the-progress-of-a-total-solar-eclipse-picture-id89160145?k=20&m=89160145&s=612x612&w=0&h=AjYytGXy6I-eBymZeOnOoSXHp-bPOQ8DpMKmmbGc_k4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gujarat-science-citys-executive-director-sd-vora-uses-solar-filter-picture-id1190486960?k=20&m=1190486960&s=612x612&w=0&h=OexbKz5kPvi-qPe_dQ-JhCETSoo3OCa7FLHyji94nhs="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/man-watches-the-solar-eclipse-through-a-telescope-at-gujarat-science-picture-id1190486955?k=20&m=1190486955&s=612x612&w=0&h=VZmz-psoDASGP63Ck5Q_oZGjPUoD8POA_Z4Vqz1Xuqg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/indian-visitors-walk-through-an-exhibit-after-exiting-a-motion-a-picture-id186961798?k=20&m=186961798&s=612x612&w=0&h=A_kW7cFIHAdSBwK1pwkodjHwNK91bvPocGxYkg5PATI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.financialexpress.com/wp-content/uploads/2021/07/Nature-Park-Shah.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.financialexpress.com/wp-content/uploads/2021/07/Aquatics-2-Shah.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/visitor-look-at-fish-swimming-inside-an-aquatic-gallery-at-the-city-picture-id1234095901?k=20&m=1234095901&s=612x612&w=0&h=yVXI0rxOfs9BY_Q1bARCSB0rMtPWhkQPCpGm9QBgOAI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/in-this-picture-taken-on-december-11-the-recently-inducted-african-picture-id1237178967?k=20&m=1237178967&s=612x612&w=0&h=IbDEkJt2kxqZ_kmqEaZXIUiGl6Pd1LsO1jMNhhpMxWo="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/fish-swim-inside-an-aquatic-gallery-at-the-gujarat-science-city-some-picture-id1234096002?k=20&m=1234096002&s=612x612&w=0&h=ozOT1THVz0Az8Nb0FnyhRenVdDdVWWmLiKhbNoQuR-E="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.financialexpress.com/wp-content/uploads/2021/07/Aquatics-Shah.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://ahmedabadtourism.in/images/places-to-visit/headers/gujarat-science-city-ahmedabad-tourism-entry-fee-timings-holidays-reviews-header.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/an-indian-guest-tries-armeo-spring-shoulder-and-arm-robot-during-the-picture-id1041745410?k=20&m=1041745410&s=612x612&w=0&h=SJgbEtQ5FxDjn7004D5OZoNsxxx-PMtdRc2-zwZ-UQU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/indian-doctor-disha-shah-helps-an-indian-guest-to-walk-with-lower-picture-id1041745264?k=20&m=1041745264&s=612x612&w=0&h=Fo6n9mA81WQCs0siLIa9rjEWvKZF1mjeftvWOY5f068="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/an-indian-guest-tries-a-robot-hand-hope-of-hand-during-the-launch-of-picture-id1041745062?k=20&m=1041745062&s=612x612&w=0&h=Eb2icrnW38i-ucXgVQ3dGuxboSZnlyL2_CNRLeEd4mY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.financialexpress.com/wp-content/uploads/2021/07/Robotics-2-Modi.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.financialexpress.com/wp-content/uploads/2021/07/Robotics-Modi.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 5 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Auto World Vintage Car Museum</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            One of the biggest personal collections of vintage
                            cars, bikes, buggies and utility vehicles, Auto
                            World is a delight for those who love wheels.
                            Amongst the 300 plus menu of mechanical
                            extravaganza, some noted ones stand out; the car
                            that was used in the movie Gandhi and the first May
                            Bach ever made. Visitors can also find rare and
                            wonderful assemblage of vehicles including a
                            Bentley, Lagonda, Rolls Royce, Cadillac, Austin,
                            Jaguar, Mercedes and Auburns. The 1923 Rolls 20 HP
                            with a typical shooting brake-body by Barker is one
                            of the most fascinating cars from the Rolls Royce
                            cache. The museum has also found a place in the
                            Guinness Book of World Records for this amazing
                            collection.
                          </p>

                          <p id="carmuseumsecondpara">
                            Pranlal Bhogilal started the Auto World Museum in
                            his private estate of 2200 acres, Dastan, in 1927,
                            and earned the Guinness Book of World Record listing
                            in 1987 as the owner of the world's largest private
                            garage. An enthusiast for many years, Bhogilal
                            collected over 204 cars of which 105 are in
                            Ahmedabad. He ensured that all cars were in running
                            condition. Pranlal Bhogilal passed away in 2011 at
                            the age of 73. It is said that in 2006, Ulrich
                            Schmid-Maybach of the illustrious Maybach family
                            flew down to Ahmedabad from Germany to convince
                            Pranlal Bhogilal to sell him a 6-cylinder Maybach
                            that was designed by his grandfather. Bhogilal
                            refused to part with this treasure.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.gujarattourism.com/central-zone/ahmedabad/auto-world-vintage-car-museum.html"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open5a && (
                          <div>
                            <Modal
                              open={open5a}
                              onClose={handleClose5a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Auto World Vintage Car Museum Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.086516683314!2d72.6850730144802!3d23.057289520816685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e873f46439111%3A0xc38658a3a8db9375!2sAuto%20World%20Vintage%20Car%20Museum!5e0!3m2!1sen!2sin!4v1662858352318!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/auto-world-vintage-car-museum/gallery/Auto%20World%20Vintage%20Car%20Museum%20(6).jpg"
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDFivea"
                              onClick={moreImages5a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen5a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahfive ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahfive ? "true" : undefined}
                              onClick={handleClickahfive}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahfive}
                              open={openahfive}
                              onClose={handleCloseahfive}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahfive}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/auto-world-vintage-car-museum.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahfive}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/auto-world-vintage-car-museum.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahfive}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/auto-world-vintage-car-museum.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahfive}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg5a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs5a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/auto-world-vintage-car-museum/gallery/Auto%20World%20Vintage%20Car%20Museum%20(6).jpg"
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/general-view-of-vehicles-on-display-at-auto-world-car-museum-in-some-picture-id90781778?k=20&m=90781778&s=612x612&w=0&h=kXpISVpalVhA-joFadc_jNl9HkCLbCKPSgTE9b6_6cQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/french-mors-a-1906-model-on-display-at-auto-world-car-museum-in-some-picture-id90781768?k=20&m=90781768&s=612x612&w=0&h=z8MWusaMSKwqbYv_CEVRESgIfbGe5nX_Bmnhi4wLxZY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mercedesbenz-300c-from-1955-used-by-indias-first-president-rajendra-picture-id90781718?k=20&m=90781718&s=612x612&w=0&h=Ubk5r-TCHgvj_qpk4iaZH6R_rnFmrEYa32sBrbV5yKc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909425?k=20&m=88909425&s=612x612&w=0&h=dwu0_UtiRKoljJrpu8XfOSMXdV5UckSbOGd4QPT8JEg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909423?k=20&m=88909423&s=612x612&w=0&h=b0auhgbk2YbAae_uFn_C1nal4fAEM3jvmfipvhB4c0w="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909421?k=20&m=88909421&s=612x612&w=0&h=3ANQusVuOVy9tw1w2j0Aqx8bdHMaMKKl9Zwzi-tqxQI="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909410?k=20&m=88909410&s=612x612&w=0&h=ZFIg4SDzWaEbppzy3CSH_EKv_zxh_o5mYPr094PdFrg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909395?k=20&m=88909395&s=612x612&w=0&h=wnPZCLA8_sMANv4RaD1vD0JuFYQAnYa_eIBrgvAvgwE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909396?k=20&m=88909396&s=612x612&w=0&h=vMUOZbFRx8Dz6jrjw_gNrlyL6DSEhkroZQKhDh7yDss="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909393?k=20&m=88909393&s=612x612&w=0&h=isDgUr1jRaaQQJPttVBpVFQaISpeZ_OsZlhDUwKyh3A="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88908720?k=20&m=88908720&s=612x612&w=0&h=tjUKRA4rVFrIbcF0N6tpOdwZatF6LH6er11oPqp4ROY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pranlal-bhogilal-oldest-car-museum-in-ahmedabad-gujarat-india-picture-id88909403?k=20&m=88909403&s=612x612&w=0&h=Z-kfJOSd2o6CJNtu9gfa_EZBv1uQqR5AZ96p1Bqm4Wk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/auto-world-vintage-car-museum/gallery/Auto%20World%20Vintage%20Car%20Museum%20(15).jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/auto-world-vintage-car-museum/gallery/Auto%20World%20Vintage%20Car%20Museum%20(11).jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.gujarattourism.com/content/dam/gujrattourism/images/museums/auto-world-vintage-car-museum/gallery/Auto%20World%20Vintage%20Car%20Museum%20(14).jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 6 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Swaminarayan Akshardham Gujarat</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            'Akshardham' literally means the divine abode of
                            God. It is an eternal place for one to offer
                            devotion and experience everlasting peace.
                            Swaminarayan Akshardham at Gandhinagar is a mandir –
                            a Hindu house of worship, a dwelling place for God,
                            and a spiritual and cultural campus dedicated to
                            devotion, education and unification. Timeless
                            devotional messages and vibrant Hindu traditions are
                            echoed in its art and architecture. The mandir is a
                            humble tribute to Bhagwan Swaminarayan (1781- 1830)
                            and the avatars, devas and sages of Hinduism. This
                            traditionally-styled complex was inaugurated on
                            October 30th, 1992 with the blessings of HH Pramukh
                            Swami Maharaj and through the devoted efforts of
                            skilled artisans and volunteers.
                          </p>

                          <p id="akshardhamsecondpara">
                            Each element of Akshardham echoes with spirituality
                            – the mandir, the exhibitions and even the gardens.
                            The Akshardham mandir has over two hundred murtis
                            (idols), representing spiritual stalwarts from over
                            many millennia. The spiritual premise of Akshardham
                            is that each soul is potentially divine. Whether we
                            are serving the family, our neighbors, the country,
                            or people all around the world, each act of kindness
                            can help one move towards divinity. Each prayer is
                            an endeavor in self-improvement and a step closer to
                            God.
                          </p>

                          <p id="akshardhamthirdpara">
                            A visit to Akshardham is an enriching experience.
                            Whether it is in realizing the power of prayer, in
                            feeling the strength of non-violence, in becoming
                            aware of the universal nature of Hinduism’s ancient
                            principles, or just in admiring the beauty of God’s
                            abode on Earth – each element has a resounding
                            significance.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://akshardham.com/gujarat/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open6a && (
                          <div>
                            <Modal
                              open={open6a}
                              onClose={handleClose6a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Swaminarayan Akshardham Gujarat Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.378683202384!2d72.67171931448341!3d23.229303114400082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0e0167d8e9%3A0x9777963dd1f06126!2sBAPS%20Akshardham%20Temple%20%7C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1662860791025!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/akshardham-temple-picture-id539025138?k=20&m=539025138&s=612x612&w=0&h=S9rRwOtoYqFIGor1VR8TfhjBYdMKBApRzwovOMl1Wfo="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDSixa"
                              onClick={moreImages6a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen6a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahsix ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahsix ? "true" : undefined}
                              onClick={handleClickahsix}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahsix}
                              open={openahsix}
                              onClose={handleCloseahsix}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahsix}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://akshardham.com/gujarat/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahsix}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://akshardham.com/gujarat/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahsix}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://akshardham.com/gujarat/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahsix}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg6a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs6a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/akshardham-temple-picture-id539025138?k=20&m=539025138&s=612x612&w=0&h=S9rRwOtoYqFIGor1VR8TfhjBYdMKBApRzwovOMl1Wfo="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/facade-of-a-temple-akshardham-delhi-india-picture-id173295222?k=20&m=173295222&s=612x612&w=0&h=Yqfvzw-Sv6ieXtD0kkYpbxsAw6kHzDXSP-7nb_Nq1OA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/swaminarayan-akshardham-temple-in-delhi-on-november-24-2005-picture-id90547274?k=20&m=90547274&s=612x612&w=0&h=kQ6vqJL-za_HGFhWOAcZLK0_NglVTluCuEV_Ge0sj_A="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/swaminarayan-akshardham-temple-in-delhi-on-november-24-2005-picture-id90547157?k=20&m=90547157&s=612x612&w=0&h=ceZFEWqrSeW_C94zZFq82AM8TCRSRoWyic8JsXBuF2M="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/swaminarayan-akshardham-temple-in-delhi-on-november-24-2005-picture-id90547076?k=20&m=90547076&s=612x612&w=0&h=PFi2tTEeDYj7pk7DRJtKtd0ZSGvSIRlIThXtmJ7dfyI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/monument_MMCL1297-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/carving_IMG_0027-2-300x169.jpg"
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/mandir-garbhagruh_MMCL1384-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/abhishek-mandap_mmcl1589-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/akshardham-temple-in-new-delhi-picture-id88929335?k=20&m=88929335&s=612x612&w=0&h=HtY1xHCq009bvB48e-M--4M1OXLI2jfOALqnH3IIc_k="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/exhibition1_IMG_0279-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/garden_MMCL2028-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/garden_MMCL2031-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2017/06/garden-1-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2017/06/garden-3-300x169.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://akshardham.com/gujarat/wp-content/uploads/2015/06/garden-5-300x169.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 7 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Modhera Sun Temple</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            As one traverses the length and breadth of Gujarat,
                            one constantly stumbles across architectural
                            legacies of the 'Solanki' rule. You keep coming
                            across, living spaces and monuments of another time,
                            offering an eclectic glimpse of the artistic and
                            ingenious beauty that makes this exotically state
                            vibrant.
                          </p>

                          <p id="suntemplesecondpara">
                            A soothing drive amidst green farmlands just 25 km
                            away from Mehsana on the way to the temples of
                            goddess Bahucharaji reposes the village of Modhera.
                            Set along the backdrop of River Pushpavati,
                            surrounded by a terra-formed garden of flowering
                            trees and songs of birds, rests the famed Sun temple
                            of Modhera.
                          </p>

                          <p id="suntemplethirdpara">
                            As you relax and soothe your nerves, become one with
                            nature and open your mind to the poetry in stone,
                            dedicated to the sun god, living glimpses of the era
                            far elapsed emerge out of the intricacies of
                            narrative sculptures. The remains of the Sun Temples
                            at Modhera are relics of times gone by when
                            reverence of the natural elements fire, air, earth,
                            water and sky were at their peak sharing space with
                            myriad manifestations of Vedic gods. The ancient
                            philosophy venerating natural elements and its
                            association with humans was considered the prime
                            force and energy of the life cycle. A walk around
                            the serene temple campus makes you aware of the
                            positively strong aura of energy which the place
                            radiates and through it brings one closer to the
                            environs.
                          </p>

                          <p id="suntempleforthpara">
                            The exclusively carved temple complex and the
                            magnificently sculpted kund are jewels in the art of
                            masonry of the Solanki period apparently which was
                            also known as the Golden Age of Gujarat. Savor your
                            voyage through time to the magnificent eons of the
                            Golden period as you get welcomed personally by the
                            life like icons, narrating stories and legends of
                            Modhera!
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.gujarattourism.com/north-zone/mehsana/sun-temple-modhera.html"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open7a && (
                          <div>
                            <Modal
                              open={open7a}
                              onClose={handleClose7a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Modhera Sun Temple Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5806638871272!2d72.13077821448985!3d23.583499501049612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c6e36ea6babd5%3A0x81b9e6ddfcbab237!2sModhera%20Sun%20Temple!5e0!3m2!1sen!2sin!4v1662862197999!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/low-angal-veiw-of-the-assembly-hall-frome-stapes-to-kunda-the-sun-picture-id1189487407?k=20&m=1189487407&s=612x612&w=0&h=rBDvUgRs9xMbVIXzSoM7IjjjfUCodmiuHJLgIqQQpkU="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDSevena"
                              onClick={moreImages7a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen7a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahseven ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahseven ? "true" : undefined}
                              onClick={handleClickahseven}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahseven}
                              open={openahseven}
                              onClose={handleCloseahseven}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahseven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.gujarattourism.com/north-zone/mehsana/sun-temple-modhera.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahseven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.gujarattourism.com/north-zone/mehsana/sun-temple-modhera.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahseven}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.gujarattourism.com/north-zone/mehsana/sun-temple-modhera.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahseven}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg7a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs7a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/low-angal-veiw-of-the-assembly-hall-frome-stapes-to-kunda-the-sun-picture-id1189487407?k=20&m=1189487407&s=612x612&w=0&h=rBDvUgRs9xMbVIXzSoM7IjjjfUCodmiuHJLgIqQQpkU="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/interior-of-sun-temple-modhera-gujarat-picture-id1346885859?k=20&m=1346885859&s=612x612&w=0&h=8tC3lmY5A_hn2Jlkx4arclV_O8dVgBMTiui3_2bi2sE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sun-temple-at-modhera-picture-id485530510?k=20&m=485530510&s=612x612&w=0&h=PbWH84Tt3_gDbOGLPf2-znhuLxzxGPtj49jw_Ix_diQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/stepped-water-tank-or-suryakunda-sun-temple-modhera-gujarat-india-picture-id1175481332?k=20&m=1175481332&s=612x612&w=0&h=zd887mXLQEDSYLZNzN8UJMu0PFJTAa-GjYRxGnlKCzg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sun-temple-modhera-gujarat-picture-id1346885901?k=20&m=1346885901&s=612x612&w=0&h=-W-sC1tSRlbRKmilmKlxLPTykB4JZ7MwShf5AQOBZBE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/view-of-the-stepwell-at-sun-temple-in-modhera-gujarat-india-picture-id1210555567?k=20&m=1210555567&s=612x612&w=0&h=btRHWnqaGSO6dCV5f8gTffaBegE9Gj_YmUsrAb4G-7k="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/modhera-sun-temple-picture-id469919014?k=20&m=469919014&s=612x612&w=0&h=8U9SwNoyXvQjTuEHMDTP5XCXPK_60J8ia4mO4_6JoBA="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/vintage-crafted-designs-on-rocks-at-sun-temple-modhera-ahmedaba-picture-id471666876?k=20&m=471666876&s=612x612&w=0&h=FDK3ZFBuQJ0XowZBZCQg1gUlvbqMDRfjHg0-VNDYsuk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sun-temple-at-modhera-picture-id636354240?k=20&m=636354240&s=612x612&w=0&h=Vq1mCo9rUccOY5CO9T20yY15F_Bv1EEiRrIHew28zGE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/stone-carved-temple-on-the-stepped-water-tank-sun-temple-modhera-picture-id1175481437?k=20&m=1175481437&s=612x612&w=0&h=X3n7JknyYqgQjE8gygugfvr-CxuH8P6R8BNWX1kNd8U="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/statues-depicting-folklore-sun-temple-modhera-gujarat-india-picture-id1175481631?k=20&m=1175481631&s=612x612&w=0&h=zRbtnHvqnN5EmYa-jdiFCCKketWKD1k5Dnp9jaM6k14="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/view-of-the-stepwell-at-sun-temple-in-modhera-gujarat-india-picture-id1210796450?k=20&m=1210796450&s=612x612&w=0&h=Z5Gr0rO31AOQF_fO_AFwRBCCl0losLfaookV9_ZSDg8="
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 8 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>
                      Lothal, Archaeological remains of a Harappa Port-Town
                    </h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            About 80km southwest of Ahmedabad, the city that
                            stood at this archaeological site 4500 years ago was
                            one of the most important of the Indus Valley
                            civilisation, which extended into what is now
                            Pakistan. Excavations have revealed the world’s
                            oldest known artificial dock, which was connected to
                            an old course of the Sabarmati River. Other features
                            include the acropolis, the lower town, the bead
                            factory, the warehouses, and the drainage system.
                            The site has been nominated to be enlisted as a
                            UNESCO World Heritage Site. The traveller can see
                            fascinating finds by archeologists like canals and
                            dockyards that explain how this was an important
                            trading city. Artefacts suggest that trade may have
                            been conducted with Mesopotamia, Egypt and Persia.
                            An entire township with market and dock has been
                            unearthed here. An Archaeological Museum (10am–5pm,
                            Friday closed) near the site houses a number of
                            artefacts like jewellery, pottery, seals, religious
                            symbols, and objects of daily use here.
                          </p>

                          <p id="lothalsecondpara">
                            It is said that Lothal is a combination of two
                            words; Loth and thal, which in Gujarati means ‘the
                            mound of the dead.’ The city was inhabited during
                            3700 BCE and was a thriving trading port. The
                            excavation started from 13 February 1955 to 19 May
                            1960 by the Archaeological Survey of India (ASI) to
                            unearth the ancient city. Archaeologists believe
                            that the city was a part of a major river system on
                            the ancient trade route from Sindh to Saurashtra in
                            Gujarat. Excavations here have offered the greatest
                            number of antiquities in the archaeology of modern
                            India.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.gujarattourism.com/central-zone/ahmedabad/lothal.html"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open8a && (
                          <div>
                            <Modal
                              open={open8a}
                              onClose={handleClose8a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Lothal, Archaeological remains of a Harappa
                                  Port-Town Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5019477648!2d72.24717141447066!3d22.522862340471608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395edc8869194b67%3A0x623e98495d1d82fa!2sLothal%2C%20Archaeological%20remains%20of%20a%20Harappa%20Port-Town!5e0!3m2!1sen!2sin!4v1662863241038!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/lothalthe-ancient-civilizationgujaratindia-picture-id537658963?k=20&m=537658963&s=612x612&w=0&h=EFIHhBakXJcqyc6GXaWqz3i_cpzNuzPZJmkqEQlpRLw="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDEighta"
                              onClick={moreImages8a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen8a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openaheight ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openaheight ? "true" : undefined}
                              onClick={handleClickaheight}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElaheight}
                              open={openaheight}
                              onClose={handleCloseaheight}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseaheight}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/lothal.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseaheight}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/lothal.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseaheight}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/lothal.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseaheight}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg8a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs8a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/lothalthe-ancient-civilizationgujaratindia-picture-id537658963?k=20&m=537658963&s=612x612&w=0&h=EFIHhBakXJcqyc6GXaWqz3i_cpzNuzPZJmkqEQlpRLw="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196154209?k=20&m=1196154209&s=612x612&w=0&h=WX-5BtYFSUm2UJI9RQNUGcnt-77y56YEP5qz82RH2Os="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196154215?k=20&m=1196154215&s=612x612&w=0&h=hOkA460qaq6XkB-xrlBmZHsIC_Wzu3QHYndjegbCL2E="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196154220?k=20&m=1196154220&s=612x612&w=0&h=dNdutr-qlX4gG4TRLGkKxcMzN5MrUJ3lKJlq3PFMB4Q="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196161394?k=20&m=1196161394&s=612x612&w=0&h=F8SqDVRoWgQkK_3kYZWcem5q5sRNym7nkd8oMxltOnw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196154216?k=20&m=1196154216&s=612x612&w=0&h=GtGzsLazREeZcCDV6NbphFfKhOwVVCdBbGJkB6jREJI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196154205?k=20&m=1196154205&s=612x612&w=0&h=l3O5eKL8cpf27Bg7JMnff8i5UahZ7Ze-v1jBLsp5rtk="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196154204?k=20&m=1196154204&s=612x612&w=0&h=zxBjPGb1xyLNp0WWdES1uvKuzmmMu-aQCzs2ljxQ4_g="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gujarat-lothal-ruins-of-ancient-city-lothal-indus-valley-civilization-picture-id566432029?k=20&m=566432029&s=612x612&w=0&h=ghidT-Kn42py26WHHL4ogBR5oiKp3neNekAtzBXtc2g="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/lothalthe-ancient-civilization-gujarat-india-picture-id537603431?k=20&m=537603431&s=612x612&w=0&h=SjlZlpvHKqSrw95SbeUpsR7XcKJTyissWki02lt4lLg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/lothal-brick-work-at-ancient-site-gujarat-india-picture-id537601003?k=20&m=537601003&s=612x612&w=0&h=OLW8pHAYJvhnI7X8N90N59EzeYPlSB4Jm9g7hashaag="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id1196154219?k=20&m=1196154219&s=612x612&w=0&h=YHZw7g4Lw_sJ387BovBma8TTcbkX3i_zUzFEHgcv41M="
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 9 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>ISKCON Temple Ahmedabad</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            The 25,000 sq. ft. temple, which sits on four acres
                            of land, blends the architectural styles of Sompura
                            (Gujarat) and Rajasthan. The temple features ornate
                            stone-clad pillars, intricately carved windows, a
                            marble floor engraved with colored granite designs,
                            and a Khamira (similar to bas-relief) and Araish (a
                            marblelike finish) ceiling decorated in Jaipur
                            style.
                          </p>

                          <p id="iskconsecondpara">
                            Rising from the floor stand 68 large cylindrical
                            columns, tapering from 4 feet at the base to 2 at
                            the top. Inside the ceiling dome, which is 50 feet
                            in diameter, Krsna and the gopis (cowherd girls)
                            dance in beautiful fiberglass bas-reliefs. Elsewhere
                            on the ceiling, Krsna’s pastimes continue on 40
                            eight-foot circular panels. And on the walls, too,
                            we find Krsna in His pastimes, each with an
                            explanatory verse from scripture.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://iskconahmedabad.com/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open9a && (
                          <div>
                            <Modal
                              open={open9a}
                              onClose={handleClose9a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  ISKCON Temple Ahmedabad Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117499.96897643871!2d72.3749870625!3d23.028397000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac8a7faf3%3A0xf226f03a8c6040e9!2sISKCON%20-%20Sri%20Sri%20Radha%20Govindji%20Temple!5e0!3m2!1sen!2sin!4v1662864804717!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/facade-of-a-temple-iskcon-temple-ahmedabad-gujarat-india-picture-id481690289?k=20&m=481690289&s=612x612&w=0&h=BzJGYk8Fv6Wl1TtnkD7ttuMRvIGZ9rLJtT_3ECiZ2P8="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDNinea"
                              onClick={moreImages9a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen9a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahnine ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahnine ? "true" : undefined}
                              onClick={handleClickahnine}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahnine}
                              open={openahnine}
                              onClose={handleCloseahnine}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahnine}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://iskconahmedabad.com/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahnine}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://iskconahmedabad.com/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahnine}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://iskconahmedabad.com/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahnine}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg9a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs9a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/facade-of-a-temple-iskcon-temple-ahmedabad-gujarat-india-picture-id481690289?k=20&m=481690289&s=612x612&w=0&h=BzJGYk8Fv6Wl1TtnkD7ttuMRvIGZ9rLJtT_3ECiZ2P8="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/02/1-11-600x600.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/02/2-10-600x600.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/03/1-1-400x400.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/03/2-1-400x400.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/03/3-1-400x400.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/02/4-6-600x600.png"
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/02/3-9-600x600.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/04/1.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/02/1-5-400x400.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/02/6-2-400x400.png"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://iskconahmedabad.com/wp-content/uploads/2022/03/1-3-600x600.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 10 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Sidi Saiyyed Mosque</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            The Sidi Sayed Mosque is famed for its exquisite
                            jali windows, spider web fine, depicting the
                            intricate intertwining branches of the ‘tree of
                            life’ that is best seen from the road that runs
                            along the back of the mosque. The central arch of
                            the mosque is also bereft of the intricate
                            latticework, making the eyes go straight to the main
                            stunning work at the back wall. The mosque still
                            functions as a place of prayer.
                          </p>

                          <p id="mosquesecondpara">
                            Popularly known as Sidi Sayed ni Jali the mosque was
                            built in the period 1572–73 AD by Sidi Sayed. It was
                            the same year that the Mughals conquered Gujarat.
                            Sayed was an Abyssinian saint of African descent who
                            served in Ahmed Shah’s army. He was from a community
                            distinct in culture and appearance that lives in
                            parts of Gujarat even today.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.gujarattourism.com/central-zone/ahmedabad/siddi-sayed-mosque.html"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open10a && (
                          <div>
                            <Modal
                              open={open10a}
                              onClose={handleClose10a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Sidi Saiyyed Mosque Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9097385398472!2d72.5788465144797!3d23.027086121938865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e844fc79401b5%3A0x2d62f388bec1fa89!2sSidi%20Saiyyed%20Mosque!5e0!3m2!1sen!2sin!4v1662867894812!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/the-window-tree-of-life-sidi-saiyyed-mosque-or-sidi-saiyyid-ni-jali-picture-id1245930224?k=20&m=1245930224&s=612x612&w=0&h=bDDApbBOA3GEFO7HfUp_Q7PD1AaVhNqFw5blEUeHaew="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDTena"
                              onClick={moreImages10a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen10a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahten ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahten ? "true" : undefined}
                              onClick={handleClickahten}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahten}
                              open={openahten}
                              onClose={handleCloseahten}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahten}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/siddi-sayed-mosque.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahten}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/siddi-sayed-mosque.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahten}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.gujarattourism.com/central-zone/ahmedabad/siddi-sayed-mosque.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahten}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg10a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs10a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/the-window-tree-of-life-sidi-saiyyed-mosque-or-sidi-saiyyid-ni-jali-picture-id1245930224?k=20&m=1245930224&s=612x612&w=0&h=bDDApbBOA3GEFO7HfUp_Q7PD1AaVhNqFw5blEUeHaew="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sidi-saiyyed-mosque-in-ahmedabad-picture-id1303030842?k=20&m=1303030842&s=612x612&w=0&h=XXjjw-UuNul0tOxCxnk38dZ_s8e7gq-2dI1EtS5mKvc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/jama-masijd-mosque-in-makaraba-ahmedabad-in-the-indian-state-of-picture-id1143229706?k=20&m=1143229706&s=612x612&w=0&h=O9fRstDXSF4nki7sYtk1y3DEU70Wl_OE3I8zjvS-4uI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sidi-saiyyed-mosque-in-ahmedabad-picture-id1303030838?k=20&m=1303030838&s=612x612&w=0&h=T6Is7SH4XKkPeL6WCUd7R7MuMCgeX5lWG8dcg9x_I34="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sidi-saiyyed-mosque-in-ahmedabad-picture-id1303030817?k=20&m=1303030817&s=612x612&w=0&h=aZ98ckl5eZFHSKY4ptWM05OP-vHijOfj_ty5xktfTfU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/jama-masijd-mosque-in-makaraba-ahmedabad-in-the-indian-state-of-picture-id1143229689?k=20&m=1143229689&s=612x612&w=0&h=Sb5A7euop98KVeCWERm7ohdeDVTZnnKVGm1hcBv6MJk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/courtyard-of-a-mosque-sidi-saiyyed-mosque-ahmedabad-gujarat-india-picture-id481690277?k=20&m=481690277&s=612x612&w=0&h=rtBU-KFl_1qLHKIZkySe-_FRLZZk1HdtWp5Q4jy91xc="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hazrat-harir-ra-masjid-at-ahmedabad-in-the-indian-state-of-gujarat-picture-id1143229673?k=20&m=1143229673&s=612x612&w=0&h=D3yux-GMHQcd9kl0bDPi2-JqU3aajs6BW10FVXv7abc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hazrat-harir-ra-masjid-at-ahmedabad-in-the-indian-state-of-gujarat-picture-id1143229662?k=20&m=1143229662&s=612x612&w=0&h=ep72l3bHZCglhyxeHPX6MVkordbW5PeaKlwzbg4uKVQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hazrat-harir-ra-masjid-at-ahmedabad-in-the-indian-state-of-gujarat-picture-id1143229664?k=20&m=1143229664&s=612x612&w=0&h=Z9eO2jwUyBfJJqiv0Ka3iD3xRrg9rLmX2S5l1Nm6-kU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/left-side-view-the-sidi-saiyyed-mosque-in-ahmedabad-gujarat-is-a-ode-picture-id1293719171?k=20&m=1293719171&s=612x612&w=0&h=sq_deTvWtxPUK3jkdGGK4HiP-9wlbNLfNdyUzNYtdHM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/jama-masijd-mosque-in-makaraba-ahmedabad-in-the-indian-state-of-picture-id1143229699?k=20&m=1143229699&s=612x612&w=0&h=wyrQrjjuxH54Nron3kfPvMeZt622MLupIPLjNv_KIDU="
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 11 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>
                      Veechar Cultural and Heritage Museum for Utensils -
                      Vishalla
                    </h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Vishalla prides itself on its presentation of Indian
                            culture and tradition in its village-like
                            environment with its museum of old utensils known as
                            Vechaar. The museum found its way into Vishalla
                            three years after Vishalla was itself started, on 27
                            April 1981. Vechaar is the only museum of its kind
                            in the world, displaying such a precious collection
                            of utensils. The designer of Vishalla, Mr. Patel,
                            shares his success in the establishment of Vechaar
                            with Mr. Jyontindra Jain, a well-known
                            anthropologist. Mr. Jain fully supported and guided
                            the cause and eventually helped in setting up the
                            museum itself. His passion for the cause was so deep
                            that his good work did not stop at that; he wrote
                            catalogs for the museum himself.
                          </p>

                          <p id="utensilmuseumsecondpara">
                            A walk around the hut-like museum makes one's heart
                            skip a beat, marveling at the inimitable beauty of
                            these utensils of old. These utensils have been
                            handed down through the changing seasons and times,
                            over the years. They speak of the unmatched art and
                            genius of humankind during the days of old when
                            people did not have the modern facilities of our
                            times. The designer could not let our rich heritage
                            pass with these vessels being lost in the fire
                            kilns! He was determined to preserve them, and
                            today, his dream is a reality in the form of
                            Vechaar.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.vishalla.com/museum.html"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open11a && (
                          <div>
                            <Modal
                              open={open11a}
                              onClose={handleClose11a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Veechar Cultural and Heritage Museum for
                                  Utensils - Vishalla Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.814249846119!2d72.53328531447906!3d22.99385702317179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8520c2b959ad%3A0x98c1a8c1409a0a1f!2sVichaar%20Museum!5e0!3m2!1sen!2sin!4v1662869139713!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://www.vishalla.com/images/museum/small-images/_DSC3044.JPG"
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDElevena"
                              onClick={moreImages11a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen11a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openaheleven ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openaheleven ? "true" : undefined}
                              onClick={handleClickaheleven}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElaheleven}
                              open={openaheleven}
                              onClose={handleCloseaheleven}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseaheleven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.vishalla.com/museum.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseaheleven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.vishalla.com/museum.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseaheleven}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.vishalla.com/museum.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseaheleven}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg11a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs11a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3044.JPG"
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3030.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3094.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3101.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3123.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/ADS_6699.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/BSS_1800.JPG"
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3025.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3093.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/_DSC3099.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/ADS_6724.JPG"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.vishalla.com/images/museum/small-images/DIP_3005.JPG"
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 12 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>The Calico Museum of Textiles</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            This museum contains one of the world’s finest
                            collections of antique and modern Indian textiles,
                            all handmade and up to 500 years old. There are some
                            astoundingly beautiful pieces, displaying incredible
                            virtuosity and extravagance. You’ll see Kashmiri
                            shawls that took three years to make, and
                            double-ikat fabrics whose 100,000 threads were each
                            individually dyed before weaving. The main textile
                            galleries can only be visited in the morning
                            session. The tours last two hours with a maximum 25
                            people – 15 by group booking and 10 on a
                            first-come-first-served basis. Be there by 10 am to
                            maximize chances of getting in. The afternoon tour
                            (maximum 15 people, all first-come-first-served) is
                            devoted to the Sarabhai Foundation’s collection of
                            religious art, which explores depictions of Indian
                            Gods and a textile gallery.
                          </p>

                          <p id="calicosecondpara">
                            The Calico Museum was founded in 1949 by the
                            industrialist Gautam Sarabhai and his sister Gira
                            Sarabhai, and inaugurated by Prime Minister
                            Jawaharlal Nehru. Ahmedabad has always had a
                            flourishing textile industry which was at its peak
                            during the late 1940s. It was inspired by
                            philosopher, metaphysician and pioneering historian
                            and philosopher of Indian art, Ananda Coomaraswamy.
                            It was Coomaraswamy who planted the seed in Shri
                            Gautam Sarabhai’s mind and suggested that the museum
                            should be housed in Ahmedabad, since it was a major
                            textile hub. After many talks and research, Shri
                            Sarabhai, his sister Gira Sarabhai and the
                            industrial house of Calico created this specialist
                            museum anchored on historical and technical study of
                            Indian handicrafts and industrial textiles. It was
                            originally housed in Calico Mills but as the range
                            of the collection grew it was shifted to the
                            Sarabhai House in Shahibaug in 1983. In the 1960s,
                            the museum launched a publications programme around
                            Historical Textiles of India under the editorship of
                            John Irwin, then keeper of the Indian Section of the
                            Victoria and Albert Museum, and the second, under
                            the editorial direction of Dr Alfred Bühler, who
                            conducted a Contemporary Textile Craft Survey of
                            India.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.calicomuseum.org/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open12a && (
                          <div>
                            <Modal
                              open={open12a}
                              onClose={handleClose12a}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  The Calico Museum of Textiles Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.16869280225!2d72.59001021448019!3d23.054276220928692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8472b482907f%3A0x4e40a0c83ece73b5!2sThe%20Calico%20Museum%20of%20Textiles!5e0!3m2!1sen!2sin!4v1662870441932!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/calico-museum-of-textiles-in-ahmedabad-gujarat-india-picture-id90562758?k=20&m=90562758&s=612x612&w=0&h=AqXhcYBQNvoR6v3DBe4KgxP-zfprtB8I-IeKQSaIV1Y="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              id="localAreaDTvelvea"
                              onClick={moreImages12a}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen12a}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openahtwelve ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openahtwelve ? "true" : undefined}
                              onClick={handleClickahtwelve}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElahtwelve}
                              open={openahtwelve}
                              onClose={handleCloseahtwelve}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleCloseahtwelve}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.calicomuseum.org/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahtwelve}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.calicomuseum.org/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleCloseahtwelve}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.calicomuseum.org/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleCloseahtwelve}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg12a && (
                      <>
                        <div className="aWithCloseIcon">
                          <div className="aCloseIconMain">
                            <CancelIcon
                              className="ACloseIcon"
                              onClick={closeDImgs12a}
                            />
                          </div>
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/calico-museum-of-textiles-in-ahmedabad-gujarat-india-picture-id90562758?k=20&m=90562758&s=612x612&w=0&h=AqXhcYBQNvoR6v3DBe4KgxP-zfprtB8I-IeKQSaIV1Y="
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/calico-museum-of-textiles-in-ahmedabad-gujarat-india-picture-id90562762?k=20&m=90562762&s=612x612&w=0&h=LUVg3O7rqLlRBk3nhHuHQtm5YDJbbtEEb1Q7Jd7-sFg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_29731.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_26691.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_2679.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/Dsc_27491.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_29581.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_33931.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_3380.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_34321.jpg"
                              alt=""
                            />
                          </div>

                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/DSC_34311.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="http://calicomuseum.org/wp-content/uploads/2013/10/MG_3716_web.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </>
      )}
      {/* Ahmedabad End */}

      {/* Delhi Start */}
      {/* Main Div Start */}

      {location.pathname === "/localarea/delhi" && (
        <>
          <div className="localAreaDAccordianMain">
            <h1 className="localAreaHeadingDelhi">
              Places to Explore in Delhi
            </h1>
            {/* 1 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Red Fort</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            The Red Fort Complex was built as the palace fort of
                            Shahjahanabad – the new capital of the fifth Mughal
                            Emperor of India, Shah Jahan. Named for its massive
                            enclosing walls of red sandstone, it is adjacent to
                            an older fort, the Salimgarh, built by Islam Shah
                            Suri in 1546, with which it forms the Red Fort
                            Complex. The private apartments consist of a row of
                            pavilions connected by a continuous water channel,
                            known as the Nahr-i-Behisht (Stream of Paradise).
                            The Red Fort is considered to represent the zenith
                            of Mughal creativity which, under the Shah Jahan,
                            was brought to a new level of refinement. The
                            planning of the palace is based on Islamic
                            prototypes, but each pavilion reveals architectural
                            elements typical of Mughal building, reflecting a
                            fusion of Persian, Timurid and Hindu traditions The
                            Red Fort’s innovative planning and architectural
                            style, including the garden design, strongly
                            influenced later buildings and gardens in Rajasthan,
                            Delhi, Agra and further afield.
                          </p>
                          <p className="localAreaDPara">
                            This palace fortress is known as the Red Fort
                            because of the red sandstone fabric of its rampart
                            walls. The fort with its halls, palaces, pavilions
                            and serene gardens was completed in 1648. Within the
                            enclosure of the red fort are located many fairytale
                            buildings. The Diwan-i-Khas (also known as Shah
                            Mahal) and the Rang Mahal (also called Imtiyaz Mahal
                            or palace of distinctions) are the two most
                            conspicuous buildings inside the Red Fort. The Hall
                            of Public Audience (Diwan-i- Aam) is another famous
                            building within the Red Fort. Son-et-lumiere shows,
                            tracing the history of the Mughal Empire in India,
                            outlining their glory and the eventful causes for
                            their downfall are held in the Red Fort every
                            evening.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/red-fort.html"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open1 && (
                          <div>
                            <Modal
                              open={open1}
                              onClose={handleClose1}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Red Fort Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.118714424302!2d77.23883161459582!3d28.65616388976274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1662977633870!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title1"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/lahori-gate-main-entrance-to-the-red-fort-in-new-delhi-india-picture-id1287050440?k=20&m=1287050440&s=612x612&w=0&h=OPcQrrZjAdnVoUM-FptOCJLMaLhs6CBHu9VoMYetiwo="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDOne"
                              onClick={moreImages1}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen1}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlone ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlone ? "true" : undefined}
                              onClick={handleClickdlone}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlone}
                              open={opendlone}
                              onClose={handleClosedlone}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlone}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/red-fort.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlone}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/red-fort.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlone}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/red-fort.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlone}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg1 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs1}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lahori-gate-main-entrance-to-the-red-fort-in-new-delhi-india-picture-id1287050440?k=20&m=1287050440&s=612x612&w=0&h=OPcQrrZjAdnVoUM-FptOCJLMaLhs6CBHu9VoMYetiwo="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise-picture-id1169495248?k=20&m=1169495248&s=612x612&w=0&h=nefb5jqjU-Y0r2zKfUYCZawEnQg10SwChXuro08z5-k="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/red-fort-or-lal-qila-in-delhi-india-ancient-fort-made-of-red-with-picture-id1193750679?k=20&m=1193750679&s=612x612&w=0&h=9oZsu2C2_RGQNsY65zgNgOZ_LzFK8s6pla0iOreiBGI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/diwaniam-at-the-red-fort-in-delhi-india-picture-id481216092?k=20&m=481216092&s=612x612&w=0&h=po1ewnWiPlnpzKtX117aDyUYi-thKoKozo4xntm33Hk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/taj-mahal-india-agra-7-world-wonders-beautiful-tajmahal-trave-picture-id613542750?k=20&m=613542750&s=612x612&w=0&h=qkkVhWxaKRUjSeVkunX_iqyqJ9TMXOUZcftmBYXvwF8="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/red-fort-located-in-agra-india-picture-id609833780?k=20&m=609833780&s=612x612&w=0&h=0Gg50pE96H7Ovw7UV2tTLSIIcWDVE8X8ei3b160cFsk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/red-fort-fortress-wall-picture-id681300654?k=20&m=681300654&s=612x612&w=0&h=-XNOS3kO74Fpe8hHfB9fWopipCpeU3NIOkCTeaJCTls="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lahori-gate-at-the-red-fort-in-delhi-india-picture-id489765218?k=20&m=489765218&s=612x612&w=0&h=tWj_N8MlkagQMQTQbjHqp6moawLGJhpfxbiGy9N4b4U="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/agra-fort-exterior-architecture-with-landscape-at-sunset-picture-id1169495903?k=20&m=1169495903&s=612x612&w=0&h=m_rze00P_buPtKpLaLUcSc2hhRfGzOhSySqQamjOlSs="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/agras-red-fort-picture-id462296155?k=20&m=462296155&s=612x612&w=0&h=Vt7GmpypGkz3vsti8k5FKrbRawh8FSpRUK-T0stjf48="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/balcony-of-agra-fort-agra-india-picture-id485774921?k=20&m=485774921&s=612x612&w=0&h=m6B-oKIhZtpWJNv-zXJWUXACM3J_4vBstzfx1p3WTH0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/indian-flag-photo-red-fort-new-delhi-picture-id1385613130?k=20&m=1385613130&s=612x612&w=0&h=ZRelfXyZsCit8eluRgPEWVKoQ5YbU3GM-ktmhyiRKrE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 1 End */}

            {/* 2 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Qutab Minar</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Qutab Minar is a soaring, 73 m-high tower of
                            victory, built in 1193 by Qutab-ud-din Aibak
                            immediately after the defeat of Delhi's last Hindu
                            kingdom. The tower has five distinct storeys, each
                            marked by a projecting balcony and tapers from a 15
                            m diameter at the base to just 2.5 m at the top. The
                            first three storeys are made of red sandstone; the
                            fourth and fifth storeys are of marble and
                            sandstone. At the foot of the tower is the
                            Quwwat-ul-Islam Mosque, the first mosque to be built
                            in India. An inscription over its eastern gate
                            provocatively informs that it was built with
                            material obtained from demolishing '27 Hindu
                            temples'. A 7 m-high iron pillar stands in the
                            courtyard of the mosque. It is said that if you can
                            encircle it with your hands while standing with your
                            back to it your wish will be fulfilled.
                          </p>
                          <p className="localAreaDPara">
                            The origins of Qutab Minar are shrouded in
                            controversy. Some believe it was erected as a tower
                            of victory to signify the beginning of the Muslim
                            rule in India. Others say it served as a minaret to
                            the muezzins to call the faithful to prayer.", "No
                            one can, however, dispute that the tower is not only
                            one of the finest monuments in India, but also in
                            the world. Qutab-ud-din Aibak, the first Muslim
                            ruler of Delhi, commenced the construction of the
                            Qutab Minar in 1200 AD, but could only finish the
                            basement. His successor, Iltutmush, added three more
                            storeys, and in 1368, Firoz Shah Tughlak constructed
                            the fifth and the last storey.
                          </p>
                          <p className="localAreaDPara">
                            The development of architectural styles from Aibak
                            to Tughlak is quite evident in the minar. The relief
                            work and even the materials used for construction
                            differ. The 238 feet Qutab Minar is 47 feet at the
                            base and tapers to nine feet at the apex. The tower
                            is ornamented by bands of inscriptions and by four
                            projecting balconies supported by elaborately
                            decorated brackets. Even though in ruins, the Quwwat
                            Ui Islam (Light of Islam) Mosque in the Qutab
                            complex is one of the most magnificent structures in
                            the world. Qutab-ud-din Aibak started its
                            construction in 1193 and the mosque was completed in
                            1197.
                          </p>
                          <p className="localAreaDPara">
                            Iltutmush in 1230 and Alla-ud-din Khilji in 1315
                            made additions to the building. The main mosque
                            comprises of an inner and outer courtyard,decorated
                            with shafts and surrounded by piller. Most of these
                            shafts are from the 27 Hindu temples, which were
                            plundered to construct the mosque. It is, therefore,
                            not surprising that the Muslim mosque has typical
                            Hindu ornamentation. Close to the mosque is one of
                            Delhi's most curious antiques, the Iron Pillar.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://delhitourism.gov.in/delhitourism/tourist_place/qutab_minar.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open2 && (
                          <div>
                            <Modal
                              open={open2}
                              onClose={handleClose2}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Qutab Minar Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.506253482801!2d77.18332901459279!3d28.52449929571413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e065dc72379%3A0xf6e7259f610de1d7!2sQutab%20Minar%2C%20Seth%20Sarai%2C%20Mehrauli%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1662978150406!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title2"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/the-qutb-minar-picture-id121171565?k=20&m=121171565&s=612x612&w=0&h=uKBiS7K-DT3A-PAoPSurl493Z83Slhjf_6bQZojXk3c="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDTwo"
                              onClick={moreImages2}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen2}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendltwo ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendltwo ? "true" : undefined}
                              onClick={handleClickdltwo}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldltwo}
                              open={opendltwo}
                              onClose={handleClosedltwo}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedltwo}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/qutab_minar.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedltwo}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/qutab_minar.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedltwo}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/qutab_minar.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedltwo}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg2 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs2}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qutub-minar-delhi-india-picture-id165204592?k=20&m=165204592&s=612x612&w=0&h=9i-2oe4MPEC1xIE4s87fvYCgvy3LTu_g68QE6cRATWk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qutb-minar-delhi-picture-id494224980?k=20&m=494224980&s=612x612&w=0&h=Ct66PQpbPeH3DMXlaKI4AnMfgk9qLVzA9FVDKD20rTY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qutub-minar-picture-id1130492244?k=20&m=1130492244&s=612x612&w=0&h=4hGl4_Bwff1jeI90-kTVjHQost0baBLecmirouuQ84Q="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qutub-minar-architectural-detail-picture-id510003228?k=20&m=510003228&s=612x612&w=0&h=nrOSHUmCh1bqVdv0FXDle0MxK3MBDeA20JYwfnro2PE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qutub-minar-the-tallest-minaret-of-india-picture-id1302816440?k=20&m=1302816440&s=612x612&w=0&h=jwoGPlhNL-9QG6lcPTb7ogcogDSImJzJT-ud-ZIG7Pw="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/ruins-at-qutub-minar-delhi-picture-id526128042?k=20&m=526128042&s=612x612&w=0&h=xv30yb1ox6XXO-5QX1kCEFmWgFyoHqQJ7V8a4hScl78="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qutub-minar-picture-id1316557772?k=20&m=1316557772&s=612x612&w=0&h=SKX7ldT3EqqVfLvM5I0TULLhPsLPHSzX1mfWX26RLXk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/wide-view-of-the-qutub-minar-ruins-packed-with-tourists-picture-id155269887?k=20&m=155269887&s=612x612&w=0&h=r1VzuT85u5KIXYcHwYrH7YqUSCkVIQLVo_-GCFu_jgU="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qutb-minar-picture-id1148435577?k=20&m=1148435577&s=612x612&w=0&h=XsGwjoXGaydeTdYQGB4FOLlaIT8dUCgXqDVkGos19g4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/colonnade-in-quitab-minar-temple-picture-id176117025?k=20&m=176117025&s=612x612&w=0&h=6gkvkfTtkT5eMc3bdQ-pXUw_DUK-pKbeska8QDizPo0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/the-alai-darwaza-in-qutub-minar-complex-delhi-india-picture-id497604846?k=20&m=497604846&s=612x612&w=0&h=DFFq1Kr-Ox7KmwLSt5L9aHUdPU8UoZTk57E35kdiKAg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/columns-at-quwwat-ulislam-mosque-in-qutab-complex-india-picture-id623537736?k=20&m=623537736&s=612x612&w=0&h=2KFV_EY9h1YedvoxyPGsnAQwGDDYuPup7uKPK7IW8hY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 2 End */}

            {/* 3 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Lotus Temple</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            The Lotus Temple, located in Delhi, India, is a
                            Bahá’í House of Worship that was dedicated in
                            December 1986, costing $10 million. Notable for its
                            flowerlike shape, it has become a prominent
                            attraction in the city. Like all Bahá’í Houses of
                            Worship, the Lotus Temple is open to all, regardless
                            of religion or any other qualification. The building
                            is composed of 27 free-standing marble-clad “petals”
                            arranged in clusters of three to form nine sides,
                            with nine doors opening onto a central hall with a
                            height of slightly over 40 metres and a capacity of
                            2,500 people. The Lotus Temple has won numerous
                            architectural awards and has been featured in many
                            newspaper and magazine articles. A 2001 CNN report
                            referred to it as the most visited building in the
                            world.
                          </p>
                          <p className="localAreaDPara">
                            Lotus temple is situated near Nehru Place and
                            Kalkaji Mandir metro station is just 500 meters
                            away.
                          </p>
                          <p className="localAreaDPara">
                            The temple is in the village of Bahapur in New
                            Delhi, National Capital Territory of Delhi. The
                            architect was an Iranian, Fariborz Sahba who now
                            lives in Canada. He was approached in 1976 to design
                            the Lotus Temple and later oversaw its construction.
                            The structural design was undertaken by the UK firm
                            Flint and Neill over the course of 18 months, and
                            the construction was done by ECC Construction Group
                            of Larsen & Toubro Limited. The major part of the
                            funds needed to buy this land was donated by
                            Ardishír Rustampúr of Hyderabad, Sindh, who gave his
                            entire life savings for this purpose in 1953. A
                            portion of the construction budget was saved and
                            used to build a greenhouse to study indigenous
                            plants and flowers that would be appropriate for use
                            on the site.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://dmsoutheast.delhi.gov.in/tourist-place/lotus-temple-delhi/"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open3 && (
                          <div>
                            <Modal
                              open={open3}
                              onClose={handleClose3}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Lotus Temple Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5415443057273!2d77.25663771459345!3d28.553496694405517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c16e028cd1%3A0x653beb1ee85ec67a!2sLotus%20Temple!5e0!3m2!1sen!2sin!4v1662978812208!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title3"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/lotus-temple-picture-id533189605?k=20&m=533189605&s=612x612&w=0&h=B5bOBAqsBD8Gm0BFGdCCt0TVo-_D4WS1PXAgn1k6fsg="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDThree"
                              onClick={moreImages3}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen3}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlthree ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlthree ? "true" : undefined}
                              onClick={handleClickdlthree}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlthree}
                              open={opendlthree}
                              onClose={handleClosedlthree}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlthree}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://dmsoutheast.delhi.gov.in/tourist-place/lotus-temple-delhi/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlthree}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://dmsoutheast.delhi.gov.in/tourist-place/lotus-temple-delhi/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlthree}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://dmsoutheast.delhi.gov.in/tourist-place/lotus-temple-delhi/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlthree}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg3 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs3}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lotus-temple-picture-id533189605?k=20&m=533189605&s=612x612&w=0&h=B5bOBAqsBD8Gm0BFGdCCt0TVo-_D4WS1PXAgn1k6fsg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/the-lotus-temple-picture-id471878489?k=20&m=471878489&s=612x612&w=0&h=FCZlmfGfEt0S0Ni630hygYIMaCPQftY9aRnWmPZO2hU="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lotus-temple-picture-id956166516?k=20&m=956166516&s=612x612&w=0&h=zEAQvA8NOYZqpDl9DOJMaswv7hYcxkLkgMG2lihjZDQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/the-bah-lotus-temple-new-delhi-india-picture-id184652158?k=20&m=184652158&s=612x612&w=0&h=uHdM2iWGEjifqtUHwS6DAke2IFcetasQwy9_oBdyE18="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lotus-temple-picture-id532961216?k=20&m=532961216&s=612x612&w=0&h=1qULEKN8CzQ1OFAEWj5HVfq4oylvl5BCLRSPyMHx8dA="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lotu-temple-new-dehli-picture-id800502044?k=20&m=800502044&s=612x612&w=0&h=-1S7tCemrTLR2xoxPHQpH-Ai0wbxKq_PK-_Lp1fLeis="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 3 End */}

            {/* 4 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>India Gate</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            At the centre of New Delhi stands the 42 m high
                            India Gate, an 'Arc-de-Triomphe' like archway in the
                            middle of a crossroad. Almost similar to its French
                            counterpart, it commemorates the 70,000 Indian
                            soldiers who lost their lives fighting for the
                            British Army during the World War I. The memorial
                            bears the names of more than 13,516 British and
                            Indian soldiers killed in the Northwestern Frontier
                            in the Afghan war of 1919.
                          </p>
                          <p className="localAreaDPara">
                            The foundation stone of India Gate was laid by His
                            Royal Highness, the Duke of Connaught in 1921 and it
                            was designed by Edwin Lutyens. The monument was
                            dedicated to the nation 10 years later by the then
                            Viceroy, Lord Irwin. Another memorial, Amar Jawan
                            Jyoti was added much later, after India got its
                            independence. The eternal flame burns day and night
                            under the arch to remind the nation of soldiers who
                            laid down their lives in the Indo-Pakistan War of
                            December 1971.
                          </p>
                          <p className="localAreaDPara">
                            The entire arch stands on a low base of red
                            Bharatpur stone and rises in stages to a huge
                            moulding. The cornice is inscribed with the Imperial
                            suns while both sides of the arch have INDIA,
                            flanked by the dates MCMXIV (1914 left) and MCMXIX
                            (1919 right). The shallow domed bowl at the top was
                            intended to be filled with burning oil on
                            anniversaries but this is rarely done.", "During
                            nightfall, India Gate is dramatically floodlit while
                            the fountains nearby make a lovely display with
                            coloured lights. India Gate stands at one end of
                            Rajpath, and the area surrounding it is generally
                            referred to as 'India Gate'.", "Surrounding the
                            imposing structure is a large expanse of lush green
                            lawns, which is a popular picnic spot. One can see
                            hoards of people moving about the brightly lit area
                            and on the lawns on summer evenings.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://delhitourism.gov.in/delhitourism/tourist_place/india_gate.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open4 && (
                          <div>
                            <Modal
                              open={open4}
                              onClose={handleClose4}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  India Gate Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.561907193021!2d77.22732101459478!3d28.612916691720343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1662978981786!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title4"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/india-gate-lit-with-tricolor-picture-id672288354?k=20&m=672288354&s=612x612&w=0&h=5PYzhUaaoU6k_vXld5uisGKR9Z4zBWI2Y74tIhLWBFE="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDFour"
                              onClick={moreImages4}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen4}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlfour ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlfour ? "true" : undefined}
                              onClick={handleClickdlfour}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlfour}
                              open={opendlfour}
                              onClose={handleClosedlfour}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlfour}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/india_gate.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlfour}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/india_gate.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlfour}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/india_gate.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlfour}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg4 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs4}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-gate-lit-with-tricolor-picture-id672288354?k=20&m=672288354&s=612x612&w=0&h=5PYzhUaaoU6k_vXld5uisGKR9Z4zBWI2Y74tIhLWBFE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-gate-in-new-dehli-at-dusk-picture-id481501921?k=20&m=481501921&s=612x612&w=0&h=OVwwQzdyHZA38I2MmutNcF9H_Dcl6_oa89Ez9rYmcfE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-gate-delhi-illuminated-dusk-scene-picture-id471052720?k=20&m=471052720&s=612x612&w=0&h=dLA8EYjJP7U6Zz5VldIDq4HogkEwv4cbmiAhrF6zSIA="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-gate-at-sunrise-famous-landmark-of-new-dehli-no-people-picture-id1293057815?k=20&m=1293057815&s=612x612&w=0&h=og4wP9JrfAzFfcfeHjVvxaVOg-JlZlpMlcSNKyjHyCc="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/delhi-india-picture-id1279268665?k=20&m=1279268665&s=612x612&w=0&h=xcVDNKVsv7jzS6lLwZvenqk4BYxRq2S-2KwClYkPgdc="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-gate-at-night-new-delhi-picture-id482072953?k=20&m=482072953&s=612x612&w=0&h=tKqg6x_Eopm5Houn5Nii1ex1YycAVdc4Q2lAR7QCf-o="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-gate-picture-id1306663357?k=20&m=1306663357&s=612x612&w=0&h=ktKen8yFgUI281TZNjjQKfc8xt5mA9RTIz-TkRXv9p0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-gate-in-delhi-picture-id182428221?k=20&m=182428221&s=612x612&w=0&h=d8oDk_disd3H_QeJWh_-8IOprKD-6Rphv-JOWZZtITk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 4 End */}

            {/* 5 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Jama Masjid</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            This great mosque of Old Delhi is the largest in
                            India, with a courtyard capable of holding 25,000
                            devotees. It was begun in 1644 and ended up being
                            the final architectural extravagance of Shah Jahan,
                            the Mughal emperor who built the Taj Mahal and the
                            Red Fort.
                          </p>
                          <p className="localAreaDPara">
                            The highly decorative mosque has three great gates,
                            four towers and two 40 m-high minarets constructed
                            of strips of red sandstone and white marble.
                            Travellers can hire robes at the northern gate. This
                            may be the only time you get to dress like a local
                            without feeling like an outsider so make the most of
                            it.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://delhitourism.gov.in/delhitourism/tourist_place/jama_masjid.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open5 && (
                          <div>
                            <Modal
                              open={open5}
                              onClose={handleClose5}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Jama Masjid Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.301696676085!2d77.23125341459571!3d28.650683890011063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd18df89b215%3A0xdd57369e29bf9d96!2sJama%20Masjid!5e0!3m2!1sen!2sin!4v1662979140302!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title5"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/jama-masjid-mosque-in-delhi-picture-id497901082?k=20&m=497901082&s=612x612&w=0&h=DsGj3EDXPZ0exa00lCy6R5rfNESE5usxLFxn75th96U="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDFive"
                              onClick={moreImages5}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen5}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlfive ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlfive ? "true" : undefined}
                              onClick={handleClickdlfive}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlfive}
                              open={opendlfive}
                              onClose={handleClosedlfive}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlfive}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/jama_masjid.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlfive}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/jama_masjid.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlfive}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/jama_masjid.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlfive}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg5 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs5}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-mosque-in-delhi-picture-id497901082?k=20&m=497901082&s=612x612&w=0&h=DsGj3EDXPZ0exa00lCy6R5rfNESE5usxLFxn75th96U="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-old-delhi-india-picture-id476586370?k=20&m=476586370&s=612x612&w=0&h=KokQRkkLfys__TVEpZcfYHVJJ6DJpo1SU0fEzOmEscQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-delhi-picture-id545439632?k=20&m=545439632&s=612x612&w=0&h=b6_sT5yaCpf4gv11khxLb6fGp39MUI1TrabmucTR_F4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-on-eid-picture-id1397592271?k=20&m=1397592271&s=612x612&w=0&h=Hvi3vPnbjs4NcL1AD1SAFjhNgyoMjVyOtqgv1iad_4c="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-muslim-mosque-in-india-delhi-india-picture-id874533988?k=20&m=874533988&s=612x612&w=0&h=7_ugYZ2fSr-irHgcIv4i4aLgYM05pU7eMI-FU1061xk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-picture-id1264782031?k=20&m=1264782031&s=612x612&w=0&h=R5ddJD4XfjnK0A58cTeU3zWwxD68kH86psm9UDZTw2Q="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-mosque-delhi-india-picture-id152502047?k=20&m=152502047&s=612x612&w=0&h=4e68n46ibpNt7681cPS6a7fA_0G4M0nibGaKfRsW010="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-mosque-delhi-india-picture-id182355178?k=20&m=182355178&s=612x612&w=0&h=TEdn1IlVn2AxTxjv_Fy6FsJ1uhUUE6TBO1yDW1pZuGc="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-mosque-delhi-india-picture-id185405187?k=20&m=185405187&s=612x612&w=0&h=GshwliGwbUivVHg5rhlyy6vka9miSIiP8qQpcRY8nZE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-picture-id1163890163?k=20&m=1163890163&s=612x612&w=0&h=FRJudxGxtC8BYnB6Wq902lRiD7EiSiy9wMmmHuyKYF4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-masjid-picture-id1129572369?k=20&m=1129572369&s=612x612&w=0&h=WwDT3AT5Tk20MsxjOlAg-I0yIlBOG3DqEba4KkE_YVU="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jama-dome-mosque-picture-id1176326548?k=20&m=1176326548&s=612x612&w=0&h=b5TI3tRJdmqueDs4cIYHesrjQkPG_qhP_oUtLSKTp3o="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 5 End */}

            {/* 6 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Humayun's Tomb</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Located near the crossing of Mathura road and Lodhi
                            road, this magnificent garden tomb is the first
                            substantial example of Mughal architecture in India.
                          </p>
                          <p className="localAreaDPara">
                            It was built in 1565 A.D. nine years after the death
                            of Humayun, by his senior widow Bega Begam. Inside
                            the walled enclosure the most notable features are
                            the garden squares (chaharbagh) with pathways water
                            channels, centrally located well proportional
                            mausoleum topped by double dome.
                          </p>
                          <p className="localAreaDPara">
                            There are several graves of Mughal rulers located
                            inside the walled enclosure and from here in 1857
                            A.D; Lieutenant Hudson had captured the last Mughal
                            emperor Bahadur Shah II.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://delhitourism.gov.in/delhitourism/tourist_place/humayun_tomb.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open6 && (
                          <div>
                            <Modal
                              open={open6}
                              onClose={handleClose6}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Humayun's Tomb Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2268950508187!2d77.24883361459439!3d28.592969292622367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31abf23b4d5%3A0xb20a251215dad3f0!2sHumayun&#39;s%20Tomb%2C%20Nizamuddin%2C%20Nizamuddin%20East%2C%20New%20Delhi%2C%20Delhi%20110013!5e0!3m2!1sen!2sin!4v1662979256716!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title6"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/humayuns-tomb-delhi-india-cngltrv1109-picture-id489343716?k=20&m=489343716&s=612x612&w=0&h=5mcr9OyteOs9LwMxo0yKr0FAi7ITycSmP_AAkUvSKjo="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDSix"
                              onClick={moreImages6}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen6}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlsix ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlsix ? "true" : undefined}
                              onClick={handleClickdlsix}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlsix}
                              open={opendlsix}
                              onClose={handleClosedlsix}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlsix}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/humayun_tomb.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlsix}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/humayun_tomb.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlsix}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/humayun_tomb.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlsix}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg6 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs6}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayuns-tomb-delhi-india-cngltrv1109-picture-id489343716?k=20&m=489343716&s=612x612&w=0&h=5mcr9OyteOs9LwMxo0yKr0FAi7ITycSmP_AAkUvSKjo="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayuns-tomb-in-delhi-india-picture-id1348311480?k=20&m=1348311480&s=612x612&w=0&h=XFlTbpg115pWys6_z7feTZp4o9EkTpn_jJWEgJ787uI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayuns-tomb-new-delhi-india-picture-id516337087?k=20&m=516337087&s=612x612&w=0&h=n8XEQEzNJTS0NY0rij8g4DEnSf3ec6bYlKZzGmaY7pQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/tomb-of-barber-delhi-picture-id1408607363?k=20&m=1408607363&s=612x612&w=0&h=56f1mPBrIf2nbK5rg-4GNIWx9u_64KNX1I5vAl_rek4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/detail-on-the-araba-sarai-at-humayuns-tomb-delhi-picture-id469036948?k=20&m=469036948&s=612x612&w=0&h=fqCvnLhYvv_Yhh3NkdmBJxaF5cMpvip4jBIHcTZx748="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/photo-of-the-pattern-on-the-wall-of-the-mosque-picture-id1402104647?k=20&m=1402104647&s=612x612&w=0&h=2Mvny0Jwv8dtIELyJ7brIWqMJztIKFDeG2jk29uJwAw="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/side-wall-of-humayun-tomb-complex-picture-id1317726611?k=20&m=1317726611&s=612x612&w=0&h=GnjqjG8A7jLdPvFFSX0Nrsh5u50MmI_zErINDAWENSI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/tombstone-outside-humayuns-tomb-picture-id481751216?k=20&m=481751216&s=612x612&w=0&h=tbo2bymVoLBQT61HiKdnspc-ojjKsSnxwxGENzkg5Nw="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/isa-khan-niyazi-tomb-in-humayun-tomb-complex-in-delhi-ind-picture-id1311343388?k=20&m=1311343388&s=612x612&w=0&h=216FrwD4heABB4uMG2jRYY0m11HZoTxSz_co_49XsvU="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayuns-tomb-picture-id182794126?k=20&m=182794126&s=612x612&w=0&h=OfeQdZ-TTz6dtiQnoYOzzZJnZBG0BC_09FxcnDgpJlQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayuns-tomb-picture-id182823192?k=20&m=182823192&s=612x612&w=0&h=-RMrAHHfZ9McE4jqQMhlPOhGy23IX--gD94vShbOxj4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayuns-tomb-in-new-delhi-india-picture-id485780074?k=20&m=485780074&s=612x612&w=0&h=iBZ5-1eWbXrkXSUzultVHdgmUC4Z1scEs_9eX4y5U_M="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 6 End */}

            {/* 7 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Swaminarayan Akshardham, New Delhi</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            'Akshardham' means the divine abode of God. It is
                            hailed as an eternal place of devotion, purity and
                            peace. Swaminarayan Akshardham at New Delhi is a
                            Mandir – an abode of God, a Hindu house of worship,
                            and a spiritual and cultural campus dedicated to
                            devotion, learning and harmony. Timeless Hindu
                            spiritual messages, vibrant devotional traditions
                            and ancient architecture all are echoed in its art
                            and architecture.The mandir is a humble tribute to
                            Bhagwan Swaminarayan (1781- 1830), the avatars,
                            devas and great sages of Hinduism. The
                            traditionally-styled complex was inaugurated on 6
                            November 2005 with the blessings of HH Pramukh Swami
                            Maharaj and through the devoted efforts of skilled
                            artisans and volunteers.
                          </p>
                          <p className="localAreaDPara">
                            Each element of Akshardham echoes with spirituality
                            – the Mandir, the Exhibitions and even the
                            Gardens.The Akshardham mandir has over two hundred
                            murtis, representing many of the spiritual stalwarts
                            over many millennia. The spiritual premise of
                            Akshardham is that each soul is potentially divine.
                            Whether we are serving the family, the country our
                            neighbors or all living beings the world over , each
                            service can help one move towards divinity. Each
                            prayer is a call towards improving oneself and
                            moving closer to God.
                          </p>
                          <p className="localAreaDPara">
                            A visit to Akshardham is a spiritually enriching
                            experience. Whether it is in realising the power of
                            prayer, in feeling the strength of non-violence, in
                            being aware of the universal nature of Hinduism’s
                            ancient principles, or just in admiring the beauty
                            of God’s abode on Earth –- each element has a
                            spiritual significance.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://akshardham.com/"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open7 && (
                          <div>
                            <Modal
                              open={open7}
                              onClose={handleClose7}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Swaminarayan Akshardham, New Delhi Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5698605918437!2d77.2750732145948!3d28.61267819173121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35b9975b1fb%3A0x69a09f265ef3b22a!2sAkshardham!5e0!3m2!1sen!2sin!4v1662979461916!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title7"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/akshardham-temple-new-delhi-india-picture-id483067712?k=20&m=483067712&s=612x612&w=0&h=PPiw51gPQjdrUtbFfxRZjBaVWCPtUB511DekwV5sQcg="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDSeven"
                              onClick={moreImages7}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen7}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlseven ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlseven ? "true" : undefined}
                              onClick={handleClickdlseven}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlseven}
                              open={opendlseven}
                              onClose={handleClosedlseven}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlseven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://akshardham.com/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlseven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://akshardham.com/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlseven}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://akshardham.com/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlseven}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg7 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs7}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/akshardham-temple-new-delhi-india-picture-id483067712?k=20&m=483067712&s=612x612&w=0&h=PPiw51gPQjdrUtbFfxRZjBaVWCPtUB511DekwV5sQcg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/akshardham-temple-at-new-delhi-indiacngltrv1109-picture-id486811554?k=20&m=486811554&s=612x612&w=0&h=JExzMZ8jHmF0MSJB1wE0KOr0aOBE1LvmCsJlpdkX-uI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/swaminarayan-akshardham-noida-mor-pandav-nagar-new-delhi-india-picture-id1139687394?k=20&m=1139687394&s=612x612&w=0&h=40Lu2Q2b4Qv-wIxQXfiTmxxplcR3LZ6efPffgwDlo64="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/akshardham-temple-picture-id1182498389?k=20&m=1182498389&s=612x612&w=0&h=hyfnb_Hds2OrRkvfinor-t-zFtAojWvMO6aeFRrqYeI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/india-new-delhi-akshardham-temple-picture-id586188166?k=20&m=586188166&s=612x612&w=0&h=CGVHMpSnmB71KMq7bSWeeY5VJvEV323JAq47sbI8v3I="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/beautiful-view-of-akshardham-temple-in-new-delhi-india-picture-id1186130877?k=20&m=1186130877&s=612x612&w=0&h=_Tp5ex8aqxWPZDCxWLy2IraQh93-Um1bj0s6g87L62A="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/akshardham-temple-picture-id1182498839?k=20&m=1182498839&s=612x612&w=0&h=nRpk2C7ULvFc6fovV0tGqzg1763D6DlMNubgglHta5c="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/akshardham-temple-new-delhi-india-picture-id483067716?k=20&m=483067716&s=612x612&w=0&h=_-iGwq82P7K7saptIQEKBNYJEYmEWPyW7wMBVq7VpCY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/akshardham-temple-new-delhi-india-picture-id483067730?k=20&m=483067730&s=612x612&w=0&h=FO8DXJiSsWrpIduUGNKklNPoEGQTapL2KdOAf7V7Ln4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/beautiful-view-of-akshardham-temple-at-night-in-new-delhi-india-picture-id1186129258?k=20&m=1186129258&s=612x612&w=0&h=m9W0kXVNaJ3e2YC7QZYNlhOrPhyxq5vXUVOjvfb2y60="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/akshardham-temple-at-new-delhi-indiacngltrv1109-picture-id486809420?k=20&m=486809420&s=612x612&w=0&h=Gbx0jG_26tr-BRtFAJkzGHqBhoH3mV9ioFr4cku53RE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 7 End */}

            {/* 8 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Shri Laxmi Narayan Temple</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Laxmi Narayan Temple, also known as Birla Mandir, is
                            one of Delhi's major temples and a major tourist
                            attraction. Built by the industrialst Sh. J.K. Birla
                            in 1939, this beautiful temple is located in the
                            west of Connaught Place.
                          </p>
                          <p className="localAreaDPara">
                            The temple is dedicated to Laxmi (the goddess of
                            prosperity) and Narayana (The preserver). The temple
                            was inaugurated by Mahatma Gandhi on the condition
                            that people of all castes will be allowed to enter
                            the temple.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://delhitourism.gov.in/delhitourism/tourist_place/birla_mandir.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open8 && (
                          <div>
                            <Modal
                              open={open8}
                              onClose={handleClose8}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Shri Laxmi Narayan Temple Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.902928322475!2d77.19680761459526!3d28.632671290826558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcbaaa7edb15%3A0x2d2dc76b52aa7f6e!2sShri%20Laxmi%20Narayan%20Temple%20(Birla%20Mandir)!5e0!3m2!1sen!2sin!4v1662979601278!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title8"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/laxmi-narayan-temple-new-delhi-india-picture-id499725068?k=20&m=499725068&s=612x612&w=0&h=ubljJYv0bfBDolDh3hufoXYGeeXh0pv5J6o-l_w8Ay0="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDEight"
                              onClick={moreImages8}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen8}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendleight ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendleight ? "true" : undefined}
                              onClick={handleClickdleight}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldleight}
                              open={opendleight}
                              onClose={handleClosedleight}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedleight}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/birla_mandir.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedleight}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/birla_mandir.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedleight}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/birla_mandir.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedleight}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg8 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs8}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-new-delhi-india-picture-id499725068?k=20&m=499725068&s=612x612&w=0&h=ubljJYv0bfBDolDh3hufoXYGeeXh0pv5J6o-l_w8Ay0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lakshmi-narayan-temple-new-delhi-india-picture-id463182841?k=20&m=463182841&s=612x612&w=0&h=Wni_xqImVMVCivAcyBxL4z_d0wut-kNAXkaLr5uXTw4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-picture-id943687956?k=20&m=943687956&s=612x612&w=0&h=H0nEZ2Iq3fGmn4GMnFh417Gr1vKnNRv9odvC9T__tgo="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-new-delhi-india-picture-id473303858?k=20&m=473303858&s=612x612&w=0&h=OkoTpPJuboVwRd91Tmh18Pp4huUXq2rLRSGd9B1k914="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lakshmi-narayan-temple-new-delhi-india-picture-id463196587?k=20&m=463196587&s=612x612&w=0&h=iT36TWLGIv7PekLuCT-T7wZh8O3FMFckHWRafOh9DJs="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-picture-id843015774?k=20&m=843015774&s=612x612&w=0&h=d983_Xy6HQ99YEASt3fztmCNmB-c9EdNOS0uyyFIS-E="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-new-delhi-india-picture-id499854338?k=20&m=499854338&s=612x612&w=0&h=cQGT5-Tb1yXAhRiUEPmgd2hXN3Ft5dhVrB2RJ-Ttn3k="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-new-delhi-india-picture-id473293884?k=20&m=473293884&s=612x612&w=0&h=4l-Cu91lRTqM48xptOD3EPjTR_2xStkOxleOTlqHHFk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-new-delhi-india-picture-id472924198?k=20&m=472924198&s=612x612&w=0&h=pjc3Zwo1KAFgPkRpZLYU1u5DGTPuiEjf567Nz7CC76k="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/laxmi-narayan-temple-new-delhi-india-picture-id473090206?k=20&m=473090206&s=612x612&w=0&h=uR57n7nAyi7E6qYDV_TNkulW9HhHDjIE8FeaVYlb9rA="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 8 End */}

            {/* 9 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Gurudwara Shri Bangla Sahib</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            GURDWARA SRI BANGLA SAHIB is situated in the Delhi
                            City. Built in the sacred visit of SRI GURU
                            HARKRISHAN JI to Delhi. At the request of Mughal
                            King Aurangzeb and through the persuasion of Mirza
                            Raja Jai Singh of Amber, GURU SAHIB agreed to come
                            to Delhi. Raja Jai Singh invited GURU SAHIB to the
                            present site which originally belonged to Raja Jai
                            Singh. Raja's wife thought of testing the spiritual
                            powers of the GURU SAHIB and disguised herself as
                            maid servant and sat among the attendants. GURU
                            SAHIB at the age of 8 years identified the RANI and
                            sat in her lap. Thus convincing her of the the
                            spiritual powers of SRI GURU NANAK DEV JI and his
                            True Disciples. In those days small pox was raging
                            in the city of Delhi on an epidemic form.
                          </p>
                          <p className="localAreaDPara">
                            The citizens of Delhi suffered grief and death As a
                            result of calamity that had befallen there. GURU
                            SAHIB out of love and compassion for suffering
                            humanity dipped his holy feet in water and poured
                            charan amrit into small chaubacha (tank). All those
                            who took water from caubacha were cured from the
                            disease. Thus the people of Delhi were saved from
                            that epidemic. Devotees with faith and devotion come
                            from far and near and get rid of suffering by taking
                            a dip in the holy water.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://www.dsgmc.in/DharmParchar/GurdwaraBanglaSahib"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open9 && (
                          <div>
                            <Modal
                              open={open9}
                              onClose={handleClose9}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Gurudwara Shri Bangla Sahib Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1128035587503!2d77.20688171459516!3d28.626381091111256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9eccc07d2d%3A0x6db044e71b8e8e3b!2sGurudwara%20Shri%20Bangla%20Sahib!5e0!3m2!1sen!2sin!4v1662979736265!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title9"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/panorama-of-gurudwara-bangla-sahib-new-delhi-the-most-prominent-sikh-picture-id1129899970?k=20&m=1129899970&s=612x612&w=0&h=_Zgg3f6fK98VrViKkh3KUD8kpdHAk-QjA0akRQmOXJQ="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDNine"
                              onClick={moreImages9}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen9}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlnine ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlnine ? "true" : undefined}
                              onClick={handleClickdlnine}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlnine}
                              open={opendlnine}
                              onClose={handleClosedlnine}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlnine}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.dsgmc.in/DharmParchar/GurdwaraBanglaSahib">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlnine}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.dsgmc.in/DharmParchar/GurdwaraBanglaSahib">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlnine}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.dsgmc.in/DharmParchar/GurdwaraBanglaSahib">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlnine}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg9 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs9}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/panorama-of-gurudwara-bangla-sahib-new-delhi-the-most-prominent-sikh-picture-id1129899970?k=20&m=1129899970&s=612x612&w=0&h=_Zgg3f6fK98VrViKkh3KUD8kpdHAk-QjA0akRQmOXJQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/gurdwara-bangla-sahib-picture-id469861316?k=20&m=469861316&s=612x612&w=0&h=Ci4BOXmGQpMs-lhbzMqanCfbb4F_BwCnf2CqjPtHWos="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/gurdwara-bangla-sahib-picture-id470608268?k=20&m=470608268&s=612x612&w=0&h=jw_YQNNXLi2nrmq4Tku3BTip5HyE5N4rMtSwRj754Bw="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/isolated-gurudwara-building-entrance-gate-with-flat-sky-at-morning-picture-id1398593413?k=20&m=1398593413&s=612x612&w=0&h=DRnGKhToiJSZYkZT1FnDrnl8w9jT6zwNm0WU18U61YE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/night-view-of-the-front-of-gurudwara-bangla-sahib-in-new-delhi-picture-id1223293485?k=20&m=1223293485&s=612x612&w=0&h=glSZ7od4PtGpxHA8sO2v23yEoO-Im1Q8Fm6zTT7bZ-E="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/gurudwara-bangla-sahib-picture-id1146910358?k=20&m=1146910358&s=612x612&w=0&h=5NHAZ-um7-Ngi4_G0euDBVSOF2NUpMXwdfChL7Oc2pA="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/bangla-sahib-gurudwara-in-delhi-india-lit-during-the-evening-picture-id1249118036?k=20&m=1249118036&s=612x612&w=0&h=K06DgzQA37BPsyvhn8x9V5zarUty-T2swbmwbzQI7ng="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/holy-bathing-pond-at-gurudwara-with-flat-sky-at-morning-from-flat-picture-id1398592594?k=20&m=1398592594&s=612x612&w=0&h=cxtTfr8L4ta7awd-6TKXewGReB7Ft30bOYZuT7NsxPI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/isolated-gurudwara-building-with-golden-dome-and-flat-sky-at-morning-picture-id1398592840?k=20&m=1398592840&s=612x612&w=0&h=2o-2RkSJ21jwk1Cc4_BLNJEkdNiUFXBldM-wsLpqR54="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/isolated-gurudwara-building-with-golden-dome-and-flat-sky-at-morning-picture-id1398592671?k=20&m=1398592671&s=612x612&w=0&h=XG8tQ7fbKQpW3x4cpuLh4k5flJyBMJ3sKvTFo6kblj8="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/bangla-sahib-gurudwara-new-delhi-picture-id525149241?k=20&m=525149241&s=612x612&w=0&h=Ypoe6tDKx7cauLQYfOCQVpFyyZfHTH7D155dO-rkPfo="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/gurudwara-bangla-sahib-picture-id468064024?k=20&m=468064024&s=612x612&w=0&h=wS2No33lIOSserpfCKULwHGpAxpjyxJGMC5Amh3K_t0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 9 End */}

            {/* 10 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Purana Qila</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            One does not have to go far to see the old fort or
                            Purana Quila standing stoically amidst wild
                            greenery.Built on the site of the most ancient of
                            the numerous cities of Delhi, Indraprastha, Purana
                            Quila is roughly rectangular in shape having a
                            circuit of nearly two kilometers.
                          </p>
                          <p className="localAreaDPara">
                            The thick ramparts crowned by merlons have three
                            gateways provided with bastions on either side. It
                            was surrounded by a wide moat, connected to river
                            Yamuna, which used to flow on the east of the fort.
                            The northern gate way, called the Talaqui darwaza or
                            the forbidden gateway, combines the typically
                            Islamic pointed arch with Hindu Chhatris and
                            brackets; whereas the southern gateway called the
                            Humayun Darwaza also had a similar plan.
                          </p>
                          <p className="localAreaDPara">
                            The massive gateway and walls of Purana Quila were
                            built by Humayun and the foundation laid for the new
                            capital, Dinpanah. The work was carried forward by
                            Sher Shah Suri,who displaced Humayun, Purana Quila
                            is the venue for the spectacular sound and light
                            show held every evening.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://delhitourism.gov.in/delhitourism/tourist_place/purana_quila.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open10 && (
                          <div>
                            <Modal
                              open={open10}
                              onClose={handleClose10}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Purana Qila Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6732025719207!2d77.24154841459476!3d28.6095790918712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3214b3b6771%3A0x139279610ab2ccb3!2sPurana%20Qila!5e0!3m2!1sen!2sin!4v1662979929952!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title10"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/purana-qila-is-one-of-the-oldest-forts-in-delhi-india-picture-id1359732897?k=20&m=1359732897&s=612x612&w=0&h=Uj3zJQUZ4mJHz-fwLxzj0xj4a7GYoJ7UIJQwe6z2X8Y="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDTen"
                              onClick={moreImages10}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen10}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlten ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlten ? "true" : undefined}
                              onClick={handleClickdlten}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlten}
                              open={opendlten}
                              onClose={handleClosedlten}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlten}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/purana_quila.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlten}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/purana_quila.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlten}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/purana_quila.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlten}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg10 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs10}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/purana-qila-is-one-of-the-oldest-forts-in-delhi-india-picture-id1359732897?k=20&m=1359732897&s=612x612&w=0&h=Uj3zJQUZ4mJHz-fwLxzj0xj4a7GYoJ7UIJQwe6z2X8Y="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/khairul-manzil-masjid-at-purana-qila-delhi-india-cngltrv1109-picture-id489352056?k=20&m=489352056&s=612x612&w=0&h=ZcwLakeEQjuzxaEhCajyE8SFtSS2lRgSg_1w8giZNBY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayuns-gate-of-purana-qila-fort-picture-id1334740263?k=20&m=1334740263&s=612x612&w=0&h=R0vb6jVYMqqzLC362Z_ifU31bMr7Upbrq3IPGClnv4A="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/humayun-darwaza-interior-at-purana-qila-new-delhi-picture-id836669652?k=20&m=836669652&s=612x612&w=0&h=YZU3dJpTWyVpSCzH2tNE9HFlk1aWH7yjut_wL6qJAoE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qilaikuna-mosque-purana-qila-new-delhi-picture-id499680933?k=20&m=499680933&s=612x612&w=0&h=TC_teobazoA8pcNmgQhP_WvFqqnQsd7B4ecNHyUxbMY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/bara-darwaza-as-seen-from-inside-purana-qila-in-delhi-picture-id637530498?k=20&m=637530498&s=612x612&w=0&h=jhCL23DKMcAASNKQD7L7QlM9DKzcxltp25FzvEdwM-Q="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/purana-qila-picture-id538882974?k=20&m=538882974&s=612x612&w=0&h=OKqswj0_Chl5C5HftzKklzt0rEHoEvAqXbdH2ADBGAA="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/wooden-door-texture-background-purana-qila-delhi-india-picture-id1293729980?k=20&m=1293729980&s=612x612&w=0&h=KoSTbJHgDIruS04MmYMJR20tWHkhZTcWhGMeXTC3Xp0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/interior-of-qilaikuna-mosque-purana-qila-new-delhi-india-picture-id469550222?k=20&m=469550222&s=612x612&w=0&h=jFRtuHOgP3uCCN1TTAdbdAzfz6AsazaEyyKZgF-rQvg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/old-fort-delhi-picture-id466559733?k=20&m=466559733&s=612x612&w=0&h=xmsua3hn1IqT7pGMJ0PZOM27PC9nkf6Gb5MNkG__pAE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/qilaikuhna-mosque-in-purana-qila-india-picture-id171254064?k=20&m=171254064&s=612x612&w=0&h=6HUmLYUcQCW7qF7sw9ABW08wvor5tWHXTHEFAFbibz0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/inside-of-purana-qila-delhi-picture-id1293707756?k=20&m=1293707756&s=612x612&w=0&h=LfAXKMerXnzY38n_0r6a9lGxOZ_DF4yQwfO362rOBsg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 10 End */}

            {/* 11 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Lodhi Garden</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Earlier known as Lady Willingdon Park, Lodhi Gardens
                            is a captivating park, located in the New Delhi. It
                            lies between the Khan Market and the Safdarjung
                            Tomb. Lodi Gardens present an impressive blend of
                            lush greenery and majestic architectures which
                            belong to 15th and 16th century.
                          </p>
                          <p className="localAreaDPara">
                            Lodhi Gardens offer an ideal setting for family
                            outings as well as a perfect spot for those seeking
                            some peaceful time amid the refreshing nature.
                            Sunset is especially breathtaking at the Lodhi
                            Gardens. Adding to natural greenery are the
                            impressive structures of tombs and mosques.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://www.delhitourism.gov.in/delhitourism/entertainment/lodhi_garden.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open11 && (
                          <div>
                            <Modal
                              open={open11}
                              onClose={handleClose11}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Lodhi Garden Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2225192817964!2d77.21749071459435!3d28.593100592616437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2ececc92e35%3A0x86c0764b1c0d4bea!2sLodhi%20Garden!5e0!3m2!1sen!2sin!4v1662978410577!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title11"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/lodhi-gardens-picture-id471778372?k=20&m=471778372&s=612x612&w=0&h=7xPObOFindulr-SZmHNfprk_tOuE0RUz83la3b88kOI="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDEleven"
                              onClick={moreImages11}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen11}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendleleven ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendleleven ? "true" : undefined}
                              onClick={handleClickdleleven}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldleleven}
                              open={opendleleven}
                              onClose={handleClosedleleven}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedleleven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.delhitourism.gov.in/delhitourism/entertainment/lodhi_garden.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedleleven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.delhitourism.gov.in/delhitourism/entertainment/lodhi_garden.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedleleven}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.delhitourism.gov.in/delhitourism/entertainment/lodhi_garden.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedleleven}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg11 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs11}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lodhi-gardens-picture-id471778372?k=20&m=471778372&s=612x612&w=0&h=7xPObOFindulr-SZmHNfprk_tOuE0RUz83la3b88kOI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lodi-gardens-park-in-new-delhi-picture-id1287053532?k=20&m=1287053532&s=612x612&w=0&h=pPPMDMfEovEz7BNeHusKoKunA7z5o4V800Qyvw2LGfI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/mughal-architecture-inside-lodhi-gardens-delhi-india-beautiful-the-picture-id1412415171?k=20&m=1412415171&s=612x612&w=0&h=CBFXLkVLSUWlFdjfaiSScxGfwhRZ-sh6oNqKNggIRiY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lodhi-tomb-in-garden-picture-id187234682?k=20&m=187234682&s=612x612&w=0&h=ODBdGmS5GnyfWCPVV4eRBcGNNGibdziX3sQPQK5yZW4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/bara-gumbad-mosque-lodi-gardens-delhi-picture-id1334792909?k=20&m=1334792909&s=612x612&w=0&h=qsswrQdMq0rqg4xX-ovuKTUxTarpJvl72PO-sL-r0Z4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lodhi-gardennew-delhi-picture-id471851205?k=20&m=471851205&s=612x612&w=0&h=8gIBfSR3fz0QjJLeInod-ShoGzyC21ZRfJqygwnxc6w="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/garden-in-lodhi-garden-new-delhi-picture-id485774538?k=20&m=485774538&s=612x612&w=0&h=US9hI8bZ7cZTFncm-Z8VJjkr3gJcMHXcHXupaXqVdno="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/bara-gumbad-at-lodi-garden-in-delhi-india-picture-id1205962441?k=20&m=1205962441&s=612x612&w=0&h=UefstMLqT04mJjP2yyMI6JIaRDildnmPggYwvZwceZc="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/tomb-located-in-lodhi-garden-in-new-delhi-india-picture-id1248238646?k=20&m=1248238646&s=612x612&w=0&h=hKbfidUQPlzoGp_LEUoQaVjaqqu7OeJCcMyu7oe3SpI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/tomb-of-sikandar-lodi-in-lodhi-gardens-in-new-delhi-india-picture-id1287050453?k=20&m=1287050453&s=612x612&w=0&h=yUDqk5yUcjoZBb8Fh5LENHwapKjbbds9c_HRUe62z1Y="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lodhi-garden-picture-id847152750?k=20&m=847152750&s=612x612&w=0&h=pntpmhCS7S3RXeie3CaLIANwpFwMdFoo3mPUHEB_WNo="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lodhi-garden-picture-id1143762169?k=20&m=1143762169&s=612x612&w=0&h=IrBTCaej4LnGSvy1mHDSr1t6k8EfqLV557RPasxjIwA="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 11 End */}

            {/* 12 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Rashtrapati Bhavan</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Rashtrapati Bhavan, home to the President of the
                            world’s largest democracy, epitomizes India’s
                            strength, its democratic traditions and secular
                            character.
                          </p>
                          <p className="localAreaDPara">
                            Rashtrapati Bhavan was the creation of architects of
                            exceptional imagination and masterfulness, Sir Edwin
                            Lutyens and Herbert Baker. It was Sir Lutyens who
                            conceptualized the H shaped building, covering an
                            area of 5 acres on a 330 acre estate. This mansion
                            has a total of 340 rooms spread over four floors,
                            2.5 kilometres of corridors and 190 acres of garden
                            area.
                          </p>
                          <p className="localAreaDPara">
                            Painstaking efforts of thousands of labourers
                            including masons, carpenters, artists, carvers, and
                            cutters saw the completion of this masterwork in the
                            year 1929. Originally built as the residence for the
                            Viceroy of India, Viceroy's House as it was then
                            called, has metamorphosed into today’s Rashtrapati
                            Bhavan. From being a symbol of imperial domination
                            and power, it is today emblematic of Indian
                            democracy and its secular, plural and inclusive
                            traditions. Former President of India, Shri R.
                            Venkataraman has rightly said, 'Nature and man, rock
                            and architecture, have rarely collaborated to so
                            fine a purpose as in the fashioning of the
                            magnificent Rashtrapati Bhavan.'
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://rashtrapatisachivalaya.gov.in/rbtour/"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open12 && (
                          <div>
                            <Modal
                              open={open12}
                              onClose={handleClose12}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Rashtrapati Bhavan Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4387785033405!2d77.19586311459493!3d28.616608741553346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sRashtrapati%20Bhavan!5e0!3m2!1sen!2sin!4v1662980203144!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title12"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/rashtrapati-bhavan-picture-id492861367?k=20&m=492861367&s=612x612&w=0&h=mrdw-W5dkLI-prRrP3-iHm65B7Sq5Bt3cICaJNdoKWg="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDTvelve"
                              onClick={moreImages12}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen12}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendltwelve ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendltwelve ? "true" : undefined}
                              onClick={handleClickdltwelve}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldltwelve}
                              open={opendltwelve}
                              onClose={handleClosedltwelve}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedltwelve}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://rashtrapatisachivalaya.gov.in/rbtour/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedltwelve}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://rashtrapatisachivalaya.gov.in/rbtour/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedltwelve}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://rashtrapatisachivalaya.gov.in/rbtour/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedltwelve}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg12 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs12}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/rashtrapati-bhavan-picture-id492861367?k=20&m=492861367&s=612x612&w=0&h=mrdw-W5dkLI-prRrP3-iHm65B7Sq5Bt3cICaJNdoKWg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/new-delhi-president-house-at-night-picture-id185224294?k=20&m=185224294&s=612x612&w=0&h=rxtgesWuxFzh1x2zcueL6_l5xvVOACU5mSw3tzIu9UI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/rashtrapati-bhavan-picture-id540242592?k=20&m=540242592&s=612x612&w=0&h=c-uuYTtEPnIdNZsspXc-1cKJF6s0Spuye0CXdO-Mfq0="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/presidential-palace-in-delhi-picture-id172369785?k=20&m=172369785&s=612x612&w=0&h=xrnzlY1zXtiBLUbObHo0qRPRW8QsCDC9DBLvlqf-4_Y="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/new-delhi-president-house-at-night-picture-id185226222?k=20&m=185226222&s=612x612&w=0&h=3LhIiIgZXzThcph9dNccy6c55TiDLqUaEAyR2ohdC-Q="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/architecture-picture-id1133369886?k=20&m=1133369886&s=612x612&w=0&h=RPeDNsrIpvpsfYfg4-vrh-5cMYwCrrZH9cJdOkebH3w="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/lights-lighting-up-the-rashtrapati-bhavan-in-new-delhiindia-bhavan-picture-id1068684678?k=20&m=1068684678&s=612x612&w=0&h=-UQI88V-Mb4M34daxfO2UFKEDcw3snG9_jpyPnjwz3c="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/rashtrapati-bhavan-picture-id542926978?k=20&m=542926978&s=612x612&w=0&h=NSOgRzaHyGHQuofUbLsXu_WaZ7Yb5FcOUKaKlAhOZ08="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/architectural-detail-of-the-rashtrapati-bhavan-picture-id825796934?k=20&m=825796934&s=612x612&w=0&h=gy8rFD7p7mnuLhTU0BtEg2hK20wbAIDx_-t5_tHsPyY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/closed-gate-of-the-indian-parliament-picture-id511098015?k=20&m=511098015&s=612x612&w=0&h=yVWgTWssLi-gRqeLM-KWw6N6oAjEpuT1fpvFeb17Kdk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/rashtrapati-bhavan-gate-residence-president-new-delhi-india-picture-id185231841?k=20&m=185231841&s=612x612&w=0&h=p0BiyDM_YBL3WsDorh8ywdTEOk6SVybtvMfxYsvhvOs="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/indian-four-lions-emblem-rashtrapati-bhavan-new-delhi-india-picture-id176870783?k=20&m=176870783&s=612x612&w=0&h=O3h4GQJx-Vy6vzFZ0G5yYu16zdVNTwE29ahCsoTDG4Y="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 12 End */}

            {/* 13 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Raj Ghat</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Raj Ghat is a memorial to Mahatma Gandhi. It’s
                            located not far from the river Yamuna and was
                            originally the name of a historic ghat. There was
                            the ‘Raj Ghat Gate’ of the walled city, opening at
                            Raj Ghat on the Yamuna. Eventually, the memorial
                            area was also called Raj Ghat. It was here where
                            Mahatma Gandhi’s last rites were performed on
                            January 31, 1948, a day after his death.
                          </p>
                          <p className="localAreaDPara">
                            This memorial to Mahatma Gandhi is located between
                            Ring Road and the banks of the Yamuna River, towards
                            the southeast of Red Fort, and four kilometers away
                            from Janpath, towards the northeast of Feroz Shah. A
                            black marble platform marks the spot of Mahatma
                            Gandhi’s cremation, attracting many tourists. His
                            last words, ‘Hey Ram,’ are inscribed on the marble
                            which is always adorned with flowers. The memorial
                            was designed by Vanu G. Bhuta, who intended it to
                            reflect the simplicity of the Mahatma’s life. It is
                            uncovered, with an eternal flame that burns
                            continuously at one end.
                          </p>
                          <p className="localAreaDPara">
                            Foreign dignitaries visiting India pay respect to
                            Gandhi by laying flowers on the platform. A
                            remembrance ceremony is held every Friday at Raj
                            Ghat, along with the prayer sessions held on
                            Gandhi’s birth and death anniversaries. There is
                            also a Gandhi Memorial Museum where a film is shown
                            – between 9:30 am and 5:30 pm except on Thursday –
                            about his life and philosophy. It is also presented
                            on Sunday in Hindi at 4 pm, and at 5 pm, it is shown
                            in English.
                          </p>
                          <p className="localAreaDPara">
                            Within the complex, there are trees labeled near the
                            platform, which were planted by various dignitaries,
                            including Queen Elizabeth II, former Australian
                            Prime Minister Gough Whitman, Ho Chi Minh, former US
                            President Dwight Eisenhower, and many others.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/raj-ghat.html"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open13 && (
                          <div>
                            <Modal
                              open={open13}
                              onClose={handleClose13}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Raj Ghat Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6374525500432!2d77.24731151459547!3d28.64062609046647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcdafe80dca3%3A0x1a5978757d31b6ef!2sRaj%20Ghat!5e0!3m2!1sen!2sin!4v1662980466787!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title13"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/rajghat-memorial-to-mahatma-gandhi-delhi-picture-id122783585?k=20&m=122783585&s=612x612&w=0&h=SUiv1mWGOXDS12V65VA2uRDTAaNyijzqnlrKxQKPazg="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDThirteen"
                              onClick={moreImages13}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen13}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlthirteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={
                                opendlthirteen ? "true" : undefined
                              }
                              onClick={handleClickdlthirteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlthirteen}
                              open={opendlthirteen}
                              onClose={handleClosedlthirteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlthirteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/raj-ghat.html">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlthirteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/raj-ghat.html">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlthirteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.incredibleindia.org/content/incredibleindia/en/destinations/delhi/raj-ghat.html">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlthirteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg13 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs13}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/rajghat-memorial-to-mahatma-gandhi-delhi-picture-id122783585?k=20&m=122783585&s=612x612&w=0&h=SUiv1mWGOXDS12V65VA2uRDTAaNyijzqnlrKxQKPazg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/raj-ghat-mahatma-gandhi-crematorium-site-delhi-india-picture-id902776466?k=20&m=902776466&s=612x612&w=0&h=lhOXbwop2Vzs3HjwuEwfg9I4ag-fSiWktm5ERqZkLMI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/gandhi-smriti-picture-id470608878?k=20&m=470608878&s=612x612&w=0&h=hiTXUFo28MCo8SzkubEWG9NqxxHGT2gFgiAAFpi6tHs="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/rajghat-historical-site-new-delhi-india-picture-id896690622?k=20&m=896690622&s=612x612&w=0&h=_fHLVKeEH22-vPYTTTOaOMtMXVh5NralVDIsCRR8FXk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/gandhi-smriti-picture-id493498449?k=20&m=493498449&s=612x612&w=0&h=PqWyWwMYlUc6ktQmlehY_ys3mKjqz9LDej69fcdC5ZQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/raj-ghat-picture-id531542060?k=20&m=531542060&s=612x612&w=0&h=tMTqz0UFgJpHh459h0Mz5fTth-ZbpvvChHQw-6n0FPo="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/detail-of-mahatma-gandhi-memorial-picture-id465030244?k=20&m=465030244&s=612x612&w=0&h=GwhW8nE3dsfEKmlS2RJtE4XSIselG1EH9_rs-HcLXZs="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/raj-ghat-mahatma-gandhi-crematorium-site-delhi-india-picture-id902776464?k=20&m=902776464&s=612x612&w=0&h=UnuL--hve45y01Bh3VebzLSPD93T96rwRXx4L3ETqsk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/raj-ghat-mahatma-gandhi-crematorium-site-delhi-india-picture-id902776536?k=20&m=902776536&s=612x612&w=0&h=NvlhK4QxwbjKkG0CAvhJf1S2A_Sr_yS42Zjq5o63m7o="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/raj-ghat-mahatma-gandhi-crematorium-site-delhi-india-picture-id902776494?k=20&m=902776494&s=612x612&w=0&h=siHo0hkl_qnMWPybrojs6kt7dzUOwZFL3Ky1QoSyzH4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 13 End */}

            {/* 14 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Jantar Mantar</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Jantar Mantar (Yantra - instruments, mantra -
                            formulae) was constructed in 1724. Maharaja Jai
                            Singh of Jaipur who built this observatory went on
                            to build other observatories in Ujjain , Varanasi
                            and Mathura. Jai Singh had found the existing
                            astronomical instruments too small to take correct
                            measurements and so he built these larger and more
                            accurate instruments.
                          </p>
                          <p className="localAreaDPara">
                            The instruments at Jantar Mantar are fascinating for
                            their ingenuity, but accurate observations can no
                            longer be made from here because of the tall
                            buildings around.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://delhitourism.gov.in/delhitourism/tourist_place/jantar_mantar.jsp"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open14 && (
                          <div>
                            <Modal
                              open={open14}
                              onClose={handleClose14}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Jantar Mantar Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0901738170483!2d77.21443801459516!3d28.627059391080426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4a694fc49b%3A0xa24a6ec962781b0c!2sJantar%20Mantar!5e0!3m2!1sen!2sin!4v1662980648525!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title14"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.istockphoto.com/photos/jantar-mantar-new-delhi-india-cngltrv1109-picture-id487736282?k=20&m=487736282&s=612x612&w=0&h=PQcAk6a2MF8HgEa-BeK0wxGmQqYacR1Z1F_G9EdHqbo="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDForteen"
                              onClick={moreImages14}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen14}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlforteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlforteen ? "true" : undefined}
                              onClick={handleClickdlforteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlforteen}
                              open={opendlforteen}
                              onClose={handleClosedlforteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlforteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/jantar_mantar.jsp">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlforteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/jantar_mantar.jsp">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlforteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://delhitourism.gov.in/delhitourism/tourist_place/jantar_mantar.jsp">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlforteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg14 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs14}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/jantar-mantar-new-delhi-india-cngltrv1109-picture-id487736282?k=20&m=487736282&s=612x612&w=0&h=PQcAk6a2MF8HgEa-BeK0wxGmQqYacR1Z1F_G9EdHqbo="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/astronomical-observatory-jantar-mantar-in-delhi-picture-id155916103?k=20&m=155916103&s=612x612&w=0&h=G7gdIJX9SNXI9LvRXyBYTU4R-pDsBGzp5W2zJFtsfdM="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/dinner-mantar-picture-id640949944?k=20&m=640949944&s=612x612&w=0&h=wbimmGD_fz00tYM7zgeUy0LirTtSquaorcmeaU-hULU="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/dinner-mantar-jaipur-picture-id538991610?k=20&m=538991610&s=612x612&w=0&h=uLb6aSb2khAWigtFkC-c1q9E6G68tFwP-DDcYiGXBfQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/dinner-mantar-jaipur-picture-id469930406?k=20&m=469930406&s=612x612&w=0&h=RGlumXW51Mx5TvbfUu0a_81l3r_APPTwABaKQ8-AeRA="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/dinner-mantar-jaipur-picture-id469806870?k=20&m=469806870&s=612x612&w=0&h=uWn6nPzs7wOy4UAtEl7Gk-5fglFxqcO7f81dfLUkaSw="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/rama-yantra-at-the-historical-jantar-mantar-astronomical-observatory-picture-id1413202297?k=20&m=1413202297&s=612x612&w=0&h=F66HPgQ2I7ZN0OBMiIXBE8b6oev20WDuhsIrDO11Yuw="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/historic-jantar-mantar-astronomical-observatory-delhi-india-a-unesco-picture-id1418796055?k=20&m=1418796055&s=612x612&w=0&h=zweyLalEuWgNDinXoXhP_jjw5rglPwOuTEMGTF-vsVs="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/red-instrument-picture-id515689801?k=20&m=515689801&s=612x612&w=0&h=9GiBFlr-U8cbyyKfqjkdHujyrptPZAsfREHElHm_Rpc="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/dinner-mantar-picture-id595112574?k=20&m=595112574&s=612x612&w=0&h=meafZR4ZZJLf15cmcoqeeZtQtu70qzY4CLVw1AeDmD4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/staircase-picture-id476138961?k=20&m=476138961&s=612x612&w=0&h=zF7W9MbNcOqHeuDTXTkS-HBzMENT4urEc_Z73JcpFc4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.istockphoto.com/photos/concentric-arches-picture-id153740406?k=20&m=153740406&s=612x612&w=0&h=AE-kn00WfK6RXeS-2efZGH2dJ8Ar47e7SIaIt3900yk="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 14 End */}

            {/* 15 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>National Museum</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            The National Museum, New Delhi, as we see it today,
                            has an interesting beginning. The blueprint for
                            establishing the National Museum in Delhi was
                            prepared by the Maurice Gwyer Committee in May 1946.
                            An Exhibition of Indian Art, consisting of selected
                            artefacts from various museums of India was
                            organized by the Royal Academy, London with the
                            cooperation of Government of India and Britain. The
                            Exhibition went on display in the galleries of
                            Burlington House, London during the winter months of
                            1947-48. It was decided to display the same
                            collection in Delhi, before the return of exhibits
                            to their respective museums. An exhibition was
                            organized in the the RashtrapatiBhawan (President's
                            residence), New Delhi in 1949, which turned out to
                            be a great success. This event proved responsible
                            for the creation of the National Museum.
                          </p>
                          <p className="localAreaDPara">
                            The success of this Exhibition led to the idea that
                            advantage should be taken of this magnificent
                            collection to build up the nucleus collection of the
                            National Museum. State Governments, Museum
                            authorities and private donors, who had participated
                            in the exhibition, were approached for the gift or
                            loan of artefacts, and most of them responded
                            generously.
                          </p>
                          <p className="localAreaDPara">
                            On August 15, 1949, the National Museum, New Delhi,
                            was inaugurated in the Rashtrapati Bhawan by Shri
                            R.C. Rajagopalachari, the Governor-General of India.
                            The foundation of the present building was laid by
                            Pandit Jawaharlal Nehru, the Prime Minister of
                            India, on May 12, 1955. The first phase of the
                            National Museumbuilding was formally inaugurated by
                            Dr. SarvepalliRadhakrishnan, the Vice President of
                            India, on December 18, 1960. The second phase of the
                            building was completed in 1989.
                          </p>
                          <p className="localAreaDPara">
                            While the Museum continued to grow its collection
                            through gifts that were sought painstakingly,
                            artefacts were collected through its Arts Purchase
                            Committee. The Museum presently holds approximately
                            2,00,000 objects of diverse nature, both Indian as
                            well as foreign, and its holdings cover a time span
                            of more than five thousand years of Indian cultural
                            heritage.
                          </p>
                          <p className="localAreaDPara">
                            The National Museum was initially looked after by
                            the Director General of Archaeology until 1957, when
                            the Ministry of Education, Government of India,
                            declared it a separate institution and placed it
                            under its own direct control. At present, the
                            National Museum is under the administrative control
                            of the Ministry of Culture, Government of India.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="http://www.nationalmuseumindia.gov.in/"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open15 && (
                          <div>
                            <Modal
                              open={open15}
                              onClose={handleClose15}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  National Museum Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5953944268535!2d77.21710221459479!3d28.61191249176576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd52c71ff0eb%3A0x20429f292fa5eecf!2sNational%20Museum!5e0!3m2!1sen!2sin!4v1662980966798!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title15"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/National-Museum-building-situated-in-New-Delhi,-India.jpg"
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDFifteen"
                              onClick={moreImages15}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen15}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlfifteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlfifteen ? "true" : undefined}
                              onClick={handleClickdlfifteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlfifteen}
                              open={opendlfifteen}
                              onClose={handleClosedlfifteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlfifteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="http://www.nationalmuseumindia.gov.in/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlfifteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="http://www.nationalmuseumindia.gov.in/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlfifteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="http://www.nationalmuseumindia.gov.in/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlfifteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg15 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs15}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://www.outlookindia.com/outlooktraveller//public/uploads/filemanager/images/National-Museum-building-situated-in-New-Delhi,-India.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1599029097_48.11-2-min.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575699444_DSC_1157.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575700845_87.503-1.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575699882_72.251%20(a).jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575710434_5.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575710209_63.1590.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575535720_63-1169.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575538110_6.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575710319_Vishwarup%20Vishnu.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575710160_DSC_8015.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575710389_DSC_0302.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1599044201_home-pic-2.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1598951923_Dagger%203.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1598952106_Pistol.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1598952133_Shield.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1598952033_Helmet.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575702011_M01.44.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575702629_64.927.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575702964_90.800.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575609283_DSC_0278.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575710820_DSC_4593.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575868335__DSC1787.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575868432__DSC9520.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1575869246__DSC9417.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1599027425_DSC_4852-min.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1599115023_M-74-145-r-min.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1599115058_76.223%20-%20Copy-min.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1599115085_80-1303-r-min.JPG"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1601272926_67.313%20-%20Copy.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1601274015_74-518-min.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="http://www.nationalmuseumindia.gov.in/uploads/photos/1599218003_HR-2196-232%20MJ-min.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 15 End */}

            {/* 16 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>National Zoological Park</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            Every other day, there are travellers who come to
                            Delhi in search of a great wildlife experience,
                            which the city soulfully offers too. The National
                            Zoological Park is one such place in Delhi which
                            from the year 1950 has been giving tourists a
                            fun-filled adventure through the wild. Over 1300
                            animals and birds from travel destinations like
                            Africa, the United States, and Australia are
                            sheltered here.
                          </p>
                          <p className="localAreaDPara">
                            The zoo is counted among the list of largest and
                            most well maintained zoological parks around Asia.
                            From the very entrance of the zoo, one can spot a
                            lake where ducks and storks are seen enjoying
                            each-others company. Wildlife lovers are in for a
                            surprise as animals that they can spot here range
                            from Blackbuck, Rhinoceros, Giraffe, White Tiger,
                            Chimpanzees, Jaguar, Gir Lion to name a few.
                          </p>
                          <p className="localAreaDPara">
                            According to the authorities, birds from far corners
                            like Arctic and Serbia are believed to mark their
                            presence in the summer season. Apart from the fauna,
                            the flora is also something that is worth noticing
                            as it not only beautiful but also gives a cozy
                            environment to the wild species.
                          </p>
                          <p className="localAreaDPara">
                            National Zoological Park serves as the perfect place
                            to spend some free time and to enjoy a boat ride.
                            Winters is considered the most ideal time to pay a
                            visit here as the weather stays in favour of
                            tourists as they can easily explore every part of
                            the park.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://nzpnewdelhi.gov.in/"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open16 && (
                          <div>
                            <Modal
                              open={open16}
                              onClose={handleClose16}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  National Zoological Park Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7676989432853!2d77.24321481459468!3d28.606744991999484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce318a027dbb9%3A0xf12a1c6b59580448!2sNational%20Zoological%20Park!5e0!3m2!1sen!2sin!4v1662981247416!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title16"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://static.theprint.in/wp-content/uploads/2018/04/luluilululululullulululullululu.jpg?compress=true&quality=80&w=376&dpr=2.6"
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDSixteen"
                              onClick={moreImages16}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen16}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlsixteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={opendlsixteen ? "true" : undefined}
                              onClick={handleClickdlsixteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlsixteen}
                              open={opendlsixteen}
                              onClose={handleClosedlsixteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlsixteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://nzpnewdelhi.gov.in/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlsixteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://nzpnewdelhi.gov.in/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlsixteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://nzpnewdelhi.gov.in/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlsixteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg16 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs16}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://static.theprint.in/wp-content/uploads/2018/04/luluilululululullulululullululu.jpg?compress=true&quality=80&w=376&dpr=2.6"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/001/original/picture1.jpg?1617020217"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/002/original/picture2.jpg?1617020238"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/003/original/picture3.jpg?1617020253"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/004/original/picture4.jpg?1617020273"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/005/original/picture5.jpg?1617020293"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/007/original/picture7.jpg?1617020329"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/010/original/picture10.jpg?1617020382"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/012/original/picture12.jpg?1617020422"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/013/original/picture13.jpg?1617020455"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/016/original/picture16.jpg?1617020509"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/014/original/picture14.jpg?1617020471"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://nzpnewdelhi.gov.in/system/galleries/images/000/000/015/original/picture15.jpg?1617020492"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/flock-of-rosy-pelican-birds-swim-in-a-pond-at-the-national-zoological-picture-id1240565559?k=20&m=1240565559&s=612x612&w=0&h=u-TMKjzeqV1jam97SINoF9S_HkaJBgFpN5-bwjBEOgs="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/leopard-is-pictured-at-national-zoological-park-after-it-opened-its-picture-id1232058661?k=20&m=1232058661&s=612x612&w=0&h=pUCdV7wcAopPCU9KNyVfOpFPtsG74b4glL6RPY5NTTg="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/seized-animal-bones-are-displayed-at-the-national-zoological-park-in-picture-id458278266?k=20&m=458278266&s=612x612&w=0&h=T7Nn0bmoTytmUx9LMNTCRl5Yj0uAbMUi7UNKwJ1ug18="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/himalayan-black-bears-at-the-national-zoological-park-on-a-hot-summer-picture-id533411430?k=20&m=533411430&s=612x612&w=0&h=dROfjUFoLGgK8UYgXwRMN_gBb7hKBG9cnzWN-Go6m2k="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/hippopotamus-at-the-national-zoological-park-in-new-delhi-india-on-22-picture-id1145566636?k=20&m=1145566636&s=612x612&w=0&h=TValYYzbwuby8mV2yXPbYe_4ot-b7IObHo2vbapNhYE="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/indian-cormorants-are-seen-playing-in-the-water-on-a-hot-summer-day-picture-id1240075877?k=20&m=1240075877&s=612x612&w=0&h=mfNXnavKPlKmKhWsLGW46D7Zt6QF1stdYuM30nXbezY="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/new-delhi-india-a-crocodile-rests-in-its-enclosure-at-the-zoological-picture-id56692477?k=20&m=56692477&s=612x612&w=0&h=LO7YKIVWpG7Y04Gb9Wmq3Z1NXLzOF6wEBYYWSr1n7IM="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 16 End */}

            {/* 17 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>National Crafts Museum & Hastkala Academy</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            The National Handicrafts and Handlooms Museum,
                            popularly known as the National Crafts Museum &
                            Hastkala Academy, celebrates the rich, diverse, and
                            practising craft traditions of India. Situated in a
                            large campus at the corner of Pragati Maidan,
                            opposite the majestic Purana Qila, the museum was
                            designed by the renowned architect Charles Correa.
                          </p>
                          <p className="localAreaDPara">
                            At present the Museum collection consists of over
                            33,000 specimens in various crafts, acquired over a
                            period of 60 years collected from various states of
                            India named as Andhra Pradesh, Arunachal Pradesh,
                            Assam, Bihar, Delhi, Gujarat, Haryana, Himachal
                            Pradesh, Jammu and Kashmir, Karnataka, Kerala,
                            Madhya Pradesh, Maharashtra, Manipur, Meghalaya,
                            Mizoram, Nagaland, Orissa, Punjab, Rajasthan, Tamil
                            Nadu, Tripura, Uttar Pradesh, West Bengal. The
                            collection reflects the continuing traditions of
                            handicrafts and handlooms.
                          </p>
                          <p className="localAreaDPara">
                            Museum collection consists of a variety of
                            traditional artifacts such as Textiles, a vast range
                            of metal lamps, sculptures, utensils etc,
                            Wood-works, Folk/tribal paintings , range of cane
                            and bamboo crafts, clay and terracotta figures and a
                            lot more. The exquisite examples of textiles include
                            Kalamkaris, Jamawars, Pashmina and Shahtosh shawls,
                            embroidered fabrics especially Kanthas, Chikankari
                            works and chaklas Tie and Die (Bandhani) fabrics,
                            Baluchar and Jamdaani saris, Pichwais, phulkaris,
                            Ikat fabrics of Orissa, Chamba Rumals, Block printed
                            textile fabrics of Gujarat and Rajasthan, Himru
                            textile pieces of Maharashtra, Naga shawls, Chanderi
                            saris and a variety of tribal textiles of the
                            Lambadi, Toda and Naga tribes of North- eastern
                            India.
                          </p>
                          <p className="localAreaDPara">
                            The rare and finest specimens of traditional Indian
                            handicrafts and handlooms are preserved with the
                            objective that these would serve as source material
                            for the revival, reproduction and development of
                            Indian crafts. These source materials are meant for
                            the master craftsmen, art-historians and craft
                            designers along with the people who are interested
                            to know our age-old cultural heritage. Museum is a
                            special attraction for foreign tourists who wish to
                            have a glimpse of our material culture.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="http://nationalcraftsmuseum.nic.in/"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open17 && (
                          <div>
                            <Modal
                              open={open17}
                              onClose={handleClose17}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  National Crafts Museum & Hastkala Academy Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5385935472495!2d77.24031131459488!3d28.613615791688655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce327db3380b7%3A0xa15ac51bd91a02!2sNational%20Crafts%20Museum%20%26%20Hastkala%20Academy!5e0!3m2!1sen!2sin!4v1662981426234!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title17"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.gettyimages.com/photos/national-handicrafts-and-handloom-museum-also-known-as-crafts-museum-picture-id509158266?k=20&m=509158266&s=612x612&w=0&h=a3F3QR_wuxjoW4Xrq6DqQJVroPhmdmDe5PEuu8xmiqI="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDSeventeen"
                              onClick={moreImages17}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen17}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendlseventeen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={
                                opendlseventeen ? "true" : undefined
                              }
                              onClick={handleClickdlseventeen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldlseventeen}
                              open={opendlseventeen}
                              onClose={handleClosedlseventeen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedlseventeen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="http://nationalcraftsmuseum.nic.in/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlseventeen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="http://nationalcraftsmuseum.nic.in/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedlseventeen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="http://nationalcraftsmuseum.nic.in/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedlseventeen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg17 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs17}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/national-handicrafts-and-handloom-museum-also-known-as-crafts-museum-picture-id509158266?k=20&m=509158266&s=612x612&w=0&h=a3F3QR_wuxjoW4Xrq6DqQJVroPhmdmDe5PEuu8xmiqI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/national-handicrafts-and-handloom-museum-also-known-as-crafts-museum-picture-id509158166?k=20&m=509158166&s=612x612&w=0&h=nyRHyV7bcoT0I6kOUcHV8uE3z3peUvHM12Akp4q8cmw="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/national-handicrafts-and-handloom-museum-also-known-as-crafts-museum-picture-id509158242?k=20&m=509158242&s=612x612&w=0&h=J1pvm9EkYq1fuYXTAe0eqDaXqlccrdNYGFLhZimKBLI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/tourists-visiting-the-national-handicrafts-and-handloom-museum-also-picture-id509158126?k=20&m=509158126&s=612x612&w=0&h=tg6tw1xTqJTIYgsMmpBUWe472IT2eMEK07KBlfEUNao="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/tourists-visiting-the-national-handicrafts-and-handloom-museum-also-picture-id509158040?k=20&m=509158040&s=612x612&w=0&h=Ldn3YKesDN6PHH4lSWm3i8AujxUZ53whsNS8-SIbAhQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/the-national-handicrafts-and-handloom-museum-also-known-as-crafts-picture-id509157850?k=20&m=509157850&s=612x612&w=0&h=-pAiO06Xu4AhdYwYvGuhLffg_WjkDC7wLShXnZsyn1s="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/the-cafe-lota-inside-the-national-handicrafts-and-handloom-museum-picture-id509157740?k=20&m=509157740&s=612x612&w=0&h=ZSM12KjXTfin5L_IlXR4JTrS2pusMs8rQmjxrXvCjI8="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/tourists-visiting-the-national-handicrafts-and-handloom-museum-also-picture-id509158070?k=20&m=509158070&s=612x612&w=0&h=L7IXTu6aNRfj2yIoW2kmoBgFstI4UE9zewQdYnglf2E="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/tourists-visiting-the-national-handicrafts-and-handloom-museum-also-picture-id509158026?k=20&m=509158026&s=612x612&w=0&h=95ZbrqZVG3b_mv1ocWXSDeWbr1f5-pePB6Oj6nVcgrI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/the-national-handicrafts-and-handloom-museum-also-known-as-crafts-picture-id509157898?k=20&m=509157898&s=612x612&w=0&h=lLiuZij5rKYFwnNXK-hawCXLNDyWqQ6mDPPO80Ghn1Y="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/tourists-visiting-the-national-handicrafts-and-handloom-museum-also-picture-id509157792?k=20&m=509157792&s=612x612&w=0&h=EVoP6Up_t1xAToXqaYsszvNaBbGE1lcrSRBlIjYIDV4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/tourists-visiting-the-national-handicrafts-and-handloom-museum-also-picture-id509157770?k=20&m=509157770&s=612x612&w=0&h=6wkVGN31gMdHVk7xzSDoKS5y5CKERhz2oiFkOInqZN4="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 17 End */}

            {/* 18 */}
            <div className="localAreaDAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>National Rail Museum</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="localAreaDMain">
                      <div className="localAreaDDetails">
                        <div className="localAreaDAbout">
                          <p>
                            The National Rail Museum, New Delhi represents the
                            splendid more than 166 years of rich heritage of
                            Indian Railway sprawling in over 11 acres of land.
                            Emulating the setting of a railway yard, the
                            extensive outdoor gallery houses a variety of steam,
                            diesel and electric locomotives along with
                            fascinating collection of royal saloons, wagons,
                            carriages, armored trains, rail cars and a
                            turntable. These original life-size exhibits have
                            been well maintained and restored. Interactive
                            displays and models exhibited inside the Indoor
                            gallery displays the remarkable stories related to
                            early modes of transportation till date and future
                            endeavors in Indian Railways. There are also some
                            remarkable collections of historical photographs,
                            documents, railway artifacts, static exhibits,
                            antiquated items and old furniture which enhance the
                            experience of around 05 lakhs visitors every year
                            and envisioned them how a single investment of
                            Indian Railway helped in unification and progress of
                            India as a nation.
                          </p>
                          <p className="localAreaDPara">
                            Spend a day with your family & friends and enjoy joy
                            and toy train rides, 3D virtual coach ride, Diesel
                            and Steam Simulators, coupled with a lavish meal at
                            recently built rail restaurant.
                          </p>
                        </div>
                        <div className="localAreaDSite">
                          <a
                            href="https://www.nrmindia.org/"
                            className="localAreaDSiteText"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="localAreaDImg">
                        {open18 && (
                          <div>
                            <Modal
                              open={open18}
                              onClose={handleClose18}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  National Rail Museum Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4927159984627!2d77.17922201459416!3d28.58499199298287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d7021a0de89%3A0xdb46d0593f9caa02!2sNational%20Rail%20Museum!5e0!3m2!1sen!2sin!4v1662981545999!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title={"title18"}
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}
                        <div className="localAreaDMultipleImgDiv">
                          <img
                            src="https://media.gettyimages.com/photos/rail-museum-logo-at-national-rail-museum-at-chanakyapuri-during-a-picture-id942331886?k=20&m=942331886&s=612x612&w=0&h=8ymqvwDxVfNhcUM3sc4wIsUJ9-4Co2ffAMhPWa8JrTI="
                            alt=""
                            className="localAreaDMultipleImg"
                          />
                          <div className="localAreaDOverlayMain">
                            <div
                              className="localAreaDOverlay"
                              id="localAreaDEighteen"
                              onClick={moreImages18}
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="localAreaDImgbelowPart">
                          <button
                            className="localAreaDMap"
                            onClick={handleOpen18}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                opendleighteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={
                                opendleighteen ? "true" : undefined
                              }
                              onClick={handleClickdleighteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEldleighteen}
                              open={opendleighteen}
                              onClose={handleClosedleighteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosedleighteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.nrmindia.org/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedleighteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.nrmindia.org/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosedleighteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.nrmindia.org/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosedleighteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {moreImg18 && (
                      <div className="dWithCloseIcon">
                        <div className="dCloseIconMain">
                          <CancelIcon
                            className="DCloseIcon"
                            onClick={closeDImgs18}
                          />
                        </div>

                        <div className="localAreaDMultipleImagesBelowDivMain">
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/rail-museum-logo-at-national-rail-museum-at-chanakyapuri-during-a-picture-id942331886?k=20&m=942331886&s=612x612&w=0&h=8ymqvwDxVfNhcUM3sc4wIsUJ9-4Co2ffAMhPWa8JrTI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/builders-plates-from-indian-workshop-showcased-at-national-rail-at-picture-id942331958?k=20&m=942331958&s=612x612&w=0&h=sf4fnuZluEClZr7YEpWOHa-C9_kT-sJzU1jSENZI5fQ="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/stephensons-rocket-steam-loco-built-in-1829-by-robert-stephenson-co-picture-id942331890?k=20&m=942331890&s=612x612&w=0&h=tzo4lNt4ZhzITlHtunLFR4uXT718Oq183iwee1k5c_E="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/quit-india-movement-dolls-exhibited-at-national-rail-museum-at-a-picture-id942332010?k=20&m=942332010&s=612x612&w=0&h=pxnQjm4hb7Y3UEvOojDy60r_rQTTETo9q4tEwmUMBFc="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/photographs-showcasing-the-role-of-indian-railways-in-the-military-picture-id942332002?k=20&m=942332002&s=612x612&w=0&h=Cu78nRLi4g6uuqqHd9z_aDTxU3_ywukqMgxZk_bfJqI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/model-showing-bullet-train-running-passing-wankhede-stadium-in-life-picture-id942331946?k=20&m=942331946&s=612x612&w=0&h=tbpHP1DiRJae18csrGN_Yj-fRZL_Z0F9jEWMAHZ6x0A="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://media.gettyimages.com/photos/model-showing-high-mountain-railway-operation-at-national-rail-museum-picture-id942331920?k=20&m=942331920&s=612x612&w=0&h=Z4KjMPjcJsAycgtp7e-ev2nX7enKz1uMMRzD7aHaVNI="
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://www.holidify.com/images/cmsuploads/compressed/17145562344_0fb4268658_o_20180325050605.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://www.holidify.com/images/cmsuploads/compressed/1024px-National_Rail_Museum_India_Museum_Junction_20190618214714.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://www.holidify.com/images/cmsuploads/compressed/1024px-Toy_train_NRM_20190618214718.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://www.holidify.com/images/cmsuploads/compressed/1024px-HPS2_Class_4-6-0_no._24467_locomotive._20190618214721.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                          <div className="localAreaDMultipleImagesBelow">
                            <img
                              src="https://www.holidify.com/images/cmsuploads/compressed/1024px-Indoor_Exhibit_at_National_Rail_Museum_20190618214725.jpg"
                              alt=""
                              className="localAreaDExtraImgs"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* 18 End */}
          </div>
        </>
      )}
      {/* Main Div End */}
      {/* Delhi End */}

      {/* Mumbai Start */}

      {location.pathname === "/localarea/mumbai" && (
        <>
          <div className="localAreaAAccordianMain">
            <h1 className="localAreaHeadingMumbai">
              Places to Explore in Mumbai
            </h1>
            {/* 1 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Gateway of India</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            The Gateway of India is an arch monument built
                            during the 20th century in Bombay, India. The
                            monument was erected to commemorate the landing of
                            King George V and Queen Mary at Apollo Bunder on
                            their visit to India in 1911.
                          </p>

                          <p className="localAreaMPara">
                            Built in Indo-Saracenic style, the foundation stone
                            for the Gateway of India was laid on 31 March 1911.
                            The structure is an arch made of basalt, 26 metres
                            (85 feet) high. The final design of George Wittet
                            was sanctioned in 1914 and the construction of the
                            monument was completed in 1924. The Gateway was
                            later used as a symbolic ceremonial entrance to
                            India for Viceroys and the new Governors of Bombay.
                            It served to allow entry and access to India.
                          </p>

                          <p className="localAreaMPara">
                            The Gateway of India is located on the waterfront at
                            Apollo Bunder area at the end of Chhatrapati Shivaji
                            Marg in South Mumbai and overlooks the Arabian Sea.
                            The monument has also been referred to as the Taj
                            Mahal of Mumbai, and is the city’s top tourist
                            attraction.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://mumbaicity.gov.in/tourist-place/gateway-of-india/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open1m && (
                          <div>
                            <Modal
                              open={open1m}
                              onClose={handleClose1m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Gateway of India Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.212428663272!2d72.83246561441298!3d18.92198916171355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0xc70a25a7209c733c!2sGateway%20Of%20India%20Mumbai!5e0!3m2!1sen!2sin!4v1662873369724!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/mumbais-iconic-historical-landmark-gateway-of-india-beautifully-and-picture-id1397747193?k=20&m=1397747193&s=612x612&w=0&h=nFBcQX9NlPQHFN1pG0rN3nhwQesw2fXy_zt3O0N-6NE="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM1}
                              id="viewMoreImagesM1"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen1m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbone ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbone ? "true" : undefined}
                              onClick={handleClickmbone}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbone}
                              open={openmbone}
                              onClose={handleClosembone}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembone}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://mumbaicity.gov.in/tourist-place/gateway-of-india/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembone}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://mumbaicity.gov.in/tourist-place/gateway-of-india/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembone}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://mumbaicity.gov.in/tourist-place/gateway-of-india/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembone}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM1 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM1}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/mumbais-iconic-historical-landmark-gateway-of-india-beautifully-and-picture-id1397747193?k=20&m=1397747193&s=612x612&w=0&h=nFBcQX9NlPQHFN1pG0rN3nhwQesw2fXy_zt3O0N-6NE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/illuminated-gateway-of-india-mumbai-picture-id512832839?k=20&m=512832839&s=612x612&w=0&h=vw4xN84X56z7Fb8mflEUs9rYdjLUfzD0LdjDhhemqmE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/gateway-to-india-picture-id172371293?k=20&m=172371293&s=612x612&w=0&h=j9MG36NbqiCqSH6RJhyQvqlrvyHHYIAzYrcbq8XPXp4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/the-gateway-of-india-mumbai-aerial-view-in-bw-composition-picture-id499568604?k=20&m=499568604&s=612x612&w=0&h=kfsKEMvqwMsqhOQoq2nb-9mbJn2rw7ir9qwTi1fwB_4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/the-gateway-to-india-picture-id105813891?k=20&m=105813891&s=612x612&w=0&h=cQvSoHcylfKW6WE9_-NtTuqiuQCc0glMZwhMHJ8hQn4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/gateway-of-india-picture-id1287703819?k=20&m=1287703819&s=612x612&w=0&h=i4bXHB3wrgbltGJHZyIYkTvxgIi4qFAY2Mn1cHWv3uM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/mumbai-india-gateway-of-india-archmonument-used-as-a-symbolic-to-picture-id1266916471?k=20&m=1266916471&s=612x612&w=0&h=77fBNk2cjWtnZEGRv5w9wpmhUy6t9LrmhgXSgHhiv_E="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gateway-of-india-in-mumbaiarchite-on-march-15-2012-in-mumbai-india-picture-id861554304?k=20&m=861554304&s=612x612&w=0&h=qYtbqhj8y_Kg9WVgTD-z6w_CL0BOjFxoBN-4x_OKco4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gateway-of-india-in-mumbai-maharashtra-india-picture-id535254478?k=20&m=535254478&s=612x612&w=0&h=9xzXTVLVuWkle-giH30ohZq1tdN401vapuOlMHTY128="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gateway-of-india-mumbai-picture-id95732370?k=20&m=95732370&s=612x612&w=0&h=dmZ3Bb7A8WAqRZRTNqQzaZ8yXEP4bMDwxkpnAtbEx3M="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gateway-of-india-picture-id494393573?k=20&m=494393573&s=612x612&w=0&h=NKQsgKMMvhdd_oZ4o4eJAZ280bAdGBNvO-2NTsGV2PU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gateway-of-india-mumbai-india-picture-id671654193?k=20&m=671654193&s=612x612&w=0&h=o2C-P08908PbfSOs4IIpeH3AJ3JdfjFTRjKpZNpqwR4="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 2 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Marine Drive</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Marine Drive, also called the Queen’s Necklace, is
                            one of the most easily recognizable landmarks in
                            Mumbai. This arc-shaped bay-side boulevard lining
                            the Arabian Sea in South Mumbai is arguably the best
                            spot to watch beautiful sunsets and indulge in
                            leisurely walks. A favorite hangout spot of the
                            Mumbaikars, it is a prime tourist attraction as
                            well. When you step out of your hotels in Mumbai,
                            make sure to explore this hotspot that offers
                            splendid views of the city’s skyline.
                          </p>

                          <p className="localAreaMPara">
                            Today, a visit to the Marine Drive counts among the
                            best things to do in Mumbai. The road stretches from
                            the southern end of Nariman Point to the Girgaum
                            Chowpatty aka Chowpatty Beach. During the day, it is
                            a fantastic place to drive along or stand and absorb
                            the mesmerizing view of the sea and the beach. The
                            place becomes more attractive during the evening
                            hours when the gorgeous view of the setting sun adds
                            to its beauty. Come night and the whole
                            crescent-shaped coastline illuminates with sparkling
                            lights that resemble a string of pearls, justifying
                            its moniker ‘Queen’s Necklace’. Every year, on the
                            26th of January, a colorful parade takes place along
                            this promenade on the occasion of India’s Republic
                            Day.
                          </p>

                          <p className="localAreaMPara">
                            Marine Drive takes on a life of its own during the
                            evening hours when it is filled with fast food
                            peddlers and a lively crowd. If you want to
                            experience its quieter side, plan a visit during the
                            early morning hours when joggers throng this place.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://en.wikipedia.org/wiki/Marine_Drive,_Mumbai"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open2m && (
                          <div>
                            <Modal
                              open={open2m}
                              onClose={handleClose2m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Marine Drive Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7328338093944!2d72.82080961441329!3d18.94321616105658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e25ee8439d%3A0x5acd924f2726ad2b!2sMarine%20Dr%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1662885818100!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/sunset-at-marine-drive-picture-id1050055748?k=20&m=1050055748&s=612x612&w=0&h=zoduwYY4iHXWD2Qc2ORhGH6Tpb9kTLMaqEHmoXLtrXk="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM2}
                              id="viewMoreImagesM2"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen2m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbtwo ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbtwo ? "true" : undefined}
                              onClick={handleClickmbtwo}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbtwo}
                              open={openmbtwo}
                              onClose={handleClosembtwo}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembtwo}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://en.wikipedia.org/wiki/Marine_Drive,_Mumbai">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembtwo}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://en.wikipedia.org/wiki/Marine_Drive,_Mumbai">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembtwo}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://en.wikipedia.org/wiki/Marine_Drive,_Mumbai">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembtwo}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM2 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM2}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sunset-at-marine-drive-picture-id1050055748?k=20&m=1050055748&s=612x612&w=0&h=zoduwYY4iHXWD2Qc2ORhGH6Tpb9kTLMaqEHmoXLtrXk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/queens-necklace-mumbai-skyline-sea-sunset-picture-id1163906054?k=20&m=1163906054&s=612x612&w=0&h=Bw4T2_IqsoTEvNl1-0YvMCP_K_xttm36eCJzhNH9ERs="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/marine-drive-picture-id1203209251?k=20&m=1203209251&s=612x612&w=0&h=9NjCMvEOmQPgxQLeUyVgC7AP8XeJxC9U2mGYZ0UjScc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/marine-drive-in-the-night-with-car-light-trails-mumbai-maharashtra-picture-id1220337952?k=20&m=1220337952&s=612x612&w=0&h=ZUDy21vKykJ3obbl5Kz8Y1cFyYm1aIstJZS6U7pEkMA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/lighthouse-in-ancient-dwarka-city-india-picture-id675488644?k=20&m=675488644&s=612x612&w=0&h=t7C6eP65gDUSXy4gsSwfgBwtkwj5IoJWQd1WKMTGn1M="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/view-of-mumbai-skyline-from-marine-drive-picture-id1398259433?k=20&m=1398259433&s=612x612&w=0&h=ny92UQ32Gg2U8ohNteQFSPSMC639p9h0xsBp7tCEOEo="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/mumbai-skyline-at-sunset-picture-id168711359?k=20&m=168711359&s=612x612&w=0&h=ZzZxvh9B1365igzdY8cj8mk8deZEZXkIs14qtp-kF1c="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/mumbai-skyline-sunset-picture-id465832882?k=20&m=465832882&s=612x612&w=0&h=b6GZhB6qNU7aSUGoqM76U8ey2K6kXv0F-7EtOYDF_Co="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/marine-drive-mumbai-picture-id942588566?k=20&m=942588566&s=612x612&w=0&h=bMsL58ArPYgA-YlCK92YbzC7K8hA6pHPXz3RgfK_5yQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/marine-drive-deserted-just-after-a-15daylong-lockdown-to-check-the-picture-id1232320089?k=20&m=1232320089&s=612x612&w=0&h=kzeKYYLiW9JAM9DxNZNySSGR0BxfVWI6NI4j_ZY0mKI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/view-of-the-marine-drive-also-known-as-the-queens-necklace-picture-id542371806?k=20&m=542371806&s=612x612&w=0&h=JoIuaMdqHWrH-ti1GgwcxDJLgQtXg1xmLSgQImxTymo="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://images.unsplash.com/photo-1584175728154-a0b4b064b753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFyaW5lJTIwZHJpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                              alt=""
                            />
                          </div>
                        </div>{" "}
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 3 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Bandra-Worli Sea Link</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            The Bandra Worli Sea Link of Mumbai, which was
                            officially named ‘Rajiv Gandhi Sea Link’, is 5.6
                            kilometres long, 8-lane architectural, engineering
                            and infrastructural marvel of India. It is the first
                            cable-stay bridge built on open seas in India.",
                            "The Bandra Worli Sea Link has become one of the
                            prominent landmarks of Mumbai and has also made it
                            to the top 10 Trip Advisor’s Traveller’s Choice
                            awards of 2018, under the category of architecture
                            and modern infrastructure structures.
                          </p>

                          <p className="localAreaMPara">
                            When it comes to driving through Mumbai’s roads, the
                            first thing that comes to one’s mind is the Bandra
                            Worli Sea Link. The bridge was designed in such a
                            way that it can allow a little over 37,000 vehicles
                            per day.", "The view and beauty of the bridge at
                            night is a sight to behold as the stay cables are
                            entirely lit and the vehicles running on the bridge
                            make an amazing photo opportunity for all
                            photography enthusiasts.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://en.wikipedia.org/wiki/Bandra%E2%80%93Worli_Sea_Link"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open3m && (
                          <div>
                            <Modal
                              open={open3m}
                              onClose={handleClose3m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Bandra-Worli Sea Link Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7747739494725!2d72.81326621441455!3d19.02964375837413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfe44d82e565%3A0xd29ced040497b57d!2sBandra-Worli%20Sea%20Link!5e0!3m2!1sen!2sin!4v1662886776069!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/bandra-worli-sea-link-mumbai-picture-id915681526?k=20&m=915681526&s=612x612&w=0&h=IQWwUqnknW_2F-fNhudS_OLEC4xzf3l6O8LYkuMkcX0="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM3}
                              id="viewMoreImagesM3"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen3m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbthree ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbthree ? "true" : undefined}
                              onClick={handleClickmbthree}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbthree}
                              open={openmbthree}
                              onClose={handleClosembthree}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembthree}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://en.wikipedia.org/wiki/Bandra%E2%80%93Worli_Sea_Link">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembthree}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://en.wikipedia.org/wiki/Bandra%E2%80%93Worli_Sea_Link">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembthree}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://en.wikipedia.org/wiki/Bandra%E2%80%93Worli_Sea_Link">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembthree}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM3 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM3}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/bandra-worli-sea-link-mumbai-picture-id915681526?k=20&m=915681526&s=612x612&w=0&h=IQWwUqnknW_2F-fNhudS_OLEC4xzf3l6O8LYkuMkcX0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/-picture-id936136672?k=20&m=936136672&s=612x612&w=0&h=_rJQw6DNll5bqnzZFb8-FBA5d6tleqO8aqTusDd2lSk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/bandra-worli-sea-link-picture-id803849854?k=20&m=803849854&s=612x612&w=0&h=VX7ohUPdt_wOUc1VKhJbT14w0Lulrz7U8-nXGaZXt08="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/bandraworli-sea-link-picture-id522515669?k=20&m=522515669&s=612x612&w=0&h=EjtBUbWixz3C-vN2xj3hZiXPW6Mfm_Ft0WW96L38Hco="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/the-bandra-worli-sea-link-shot-at-dusk-in-mumbai-a-famous-landmark-picture-id1201904524?k=20&m=1201904524&s=612x612&w=0&h=A5b3uodR6CAI1LpuBQAfHqpeH2YCG7VWVIoAixXcawc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sea-link-bridge-picture-id1299567250?k=20&m=1299567250&s=612x612&w=0&h=8QpgA24D09Edsg8_Cw3l4vKTeNJu1L47lxBx5A34Fu8="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/worli-sea-link-bridge-picture-id474395607?k=20&m=474395607&s=612x612&w=0&h=bYRusV_UFmLLkTiQnw1QzfNd9Nv-WlG-WddjYQtzO20="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/night-view-of-bandra-worli-sea-link-bridge-picture-id1138929765?k=20&m=1138929765&s=612x612&w=0&h=breAjqv7LWqKtcyGv0JPEli1DXaVre669L3zKrXM7VE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/bandraworli-sea-link-picture-id1319605101?k=20&m=1319605101&s=612x612&w=0&h=5_ka34O5EQ_BbcERb0U3cYFxXaPPMLfUJiyv5HqmO-g="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/bandraworli-sea-link-mumbai-maharashtra-picture-id653055174?k=20&m=653055174&s=612x612&w=0&h=1k8b1Kz4BGgzMxpddczPxhLUQSQyLLaSDtzazCEMwnw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/elite-runner-during-the-tata-mumbai-marathon-2018-at-bandra-worli-on-picture-id908383960?k=20&m=908383960&s=612x612&w=0&h=JGvDFRjD4kIh9s_GdvP9Bdtt5EG_5xgFBBrKb4UX4MI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/participant-of-elite-group-in-mumbai-cyclothontour-de-mumbai-2011at-picture-id821656866?k=20&m=821656866&s=612x612&w=0&h=c7gHEE8W_Z4w1AU3xJBqXqu-959so1ht5BMyGAsfA5A="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 4 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Elephanta Caves</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            The Elephanta Caves are located in Western India on
                            Elephanta Island (otherwise known as the Island of
                            Gharapuri), which features two hillocks separated by
                            a narrow valley. The small island is dotted with
                            numerous ancient archaeological remains that are the
                            sole testimonies to its rich cultural past. These
                            archaeological remains reveal evidence of occupation
                            from as early as the 2nd century BC. The rock-cut
                            Elephanta Caves were constructed about the mid-5th
                            to 6th centuries AD. The most important among the
                            caves is the great Cave 1, which measures 39 metres
                            from the front entrance to the back. In plan, this
                            cave in the western hill closely resembles Dumar
                            Lena cave at Ellora, in India. The main body of the
                            cave, excluding the porticos on the three open sides
                            and the back aisle, is 27 metres square and is
                            supported by rows of six columns each.
                          </p>

                          <p className="localAreaMPara">
                            The 7-metre-high masterpiece “Sadashiva” dominates
                            the entrance to Cave 1. The sculpture represents
                            three aspects of Shiva: the Creator, the Preserver,
                            and the Destroyer, identified, respectively, with
                            Aghora or Bhairava (left half), Taptapurusha or
                            Mahadeva (central full face), and Vamadeva or Uma
                            (right half). Representations of Nataraja,
                            Yogishvara, Andhakasuravadha, Ardhanarishwara,
                            Kalyanasundaramurti, Gangadharamurti, and
                            Ravanaanugrahamurti are also noteworthy for their
                            forms, dimensions, themes, representations, content,
                            alignment and execution.
                          </p>

                          <p className="localAreaMPara">
                            The layout of the caves, including the pillar
                            components, the placement and division of the caves
                            into different parts, and the provision of a sanctum
                            or Garbhagriha of sarvatobhadra plan, are important
                            developments in rock-cut architecture. The Elephanta
                            Caves emerged from a long artistic tradition, but
                            demonstrate refreshing innovation. The combination
                            of aesthetic beauty and sculptural art, replete with
                            respondent Rasas, reached an apogee at the Elephanta
                            Caves. Hindu spiritualistic beliefs and symbology
                            are finely utilized in the overall planning of the
                            caves.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://whc.unesco.org/en/list/244/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open4m && (
                          <div>
                            <Modal
                              open={open4m}
                              onClose={handleClose4m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Elephanta Caves Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.2774030899714!2d72.92929771441358!3d18.963352460432617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5307da3602f%3A0xf4ab181b1aaef53f!2sElephanta%20Caves!5e0!3m2!1sen!2sin!4v1662887429533!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/elephanta-caves-mumbai-india-picture-id115921989?k=20&m=115921989&s=612x612&w=0&h=VoE_XOnx-Ogy4sm6IgE6FnluhmFG0Y3ee__xtRE7nE0="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM4}
                              id="viewMoreImagesM4"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen4m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbfour ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbfour ? "true" : undefined}
                              onClick={handleClickmbfour}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbfour}
                              open={openmbfour}
                              onClose={handleClosembfour}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembfour}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://whc.unesco.org/en/list/244/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembfour}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://whc.unesco.org/en/list/244/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembfour}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://whc.unesco.org/en/list/244/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembfour}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM4 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM4}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/elephanta-caves-mumbai-india-picture-id115921989?k=20&m=115921989&s=612x612&w=0&h=VoE_XOnx-Ogy4sm6IgE6FnluhmFG0Y3ee__xtRE7nE0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/elephanta-island-caves-picture-id515705000?k=20&m=515705000&s=612x612&w=0&h=1biL-UynznV9ud0xFUWd2ItJxcmsBdqO9mloWO4VW8c="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/elephanta-island-caves-picture-id469907090?k=20&m=469907090&s=612x612&w=0&h=9kEPMNxndJVgxKiG8lU3anadB8eAP1RLo2ok16nu9Rk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/historical-elephanta-cave-and-old-sculpture-of-lord-shiva-and-gautama-picture-id1172983645?k=20&m=1172983645&s=612x612&w=0&h=EcuT4ByL00FhE_dU_LpVZC2ezbjht6OBEnW_sW1JtJY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ellora-monumets-picture-id890220894?k=20&m=890220894&s=612x612&w=0&h=Iaa29fQPiTB3qvPIngIeSGdJbylXmfhxTpIb4J0QXpM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/kanheri-caves-city-mumbai-state-maharashtra-in-india-it-is-a-ancient-picture-id1185589810?k=20&m=1185589810&s=612x612&w=0&h=qKpAUQZ2QioUd5j-Ng6OzK3wH-cPaGgbnL9q6SZIcYg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ancient-carving-of-hindu-god-shiva-in-elephanta-caves-picture-id947795200?k=20&m=947795200&s=612x612&w=0&h=qFpscisiq3vSNeM2jRu71i6i-IWgX6PPm4HZXrrqV4M="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/elephanta-caves-unesco-world-heritage-site-mumbai-maharashtra-india-picture-id1338427393?k=20&m=1338427393&s=612x612&w=0&h=1nbjhjrnRAUTvJisTIhvnPCDGmG-qOt5krU7TC2d2V0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hindu-god-vishnu-carving-in-elephanta-caves-india-picture-id498068719?k=20&m=498068719&s=612x612&w=0&h=K7QW8a84jAsgf30c_xUDLQzqI7DH5mD5jCWHtn9ZD5U="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/elephanta-island-caves-picture-id950365042?k=20&m=950365042&s=612x612&w=0&h=HFSZaAcqVO3nNm8jQdkRew0EV6n-R28ii8-C6JNsKNM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/kanheri-caves-city-mumbai-state-maharashtra-in-india-it-is-a-ancient-picture-id1185585827?k=20&m=1185585827&s=612x612&w=0&h=XeLroc51hZHVIiiurZCFv05FznW5OLSGzJcEJ7Glfz0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/elephanta-caves-ruins-in-mumbai-india-at-gharapuri-island-picture-id1210066704?k=20&m=1210066704&s=612x612&w=0&h=-O0h5KT4kkorK3xbD2WHoiQXBLPXqBsMSxMdHVpA4yg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/god-budha-hand-made-scriptures-on-walls-in-historic-and-centuries-old-picture-id1185816713?k=20&m=1185816713&s=612x612&w=0&h=7DkDOc2zZ1jaQy8oWu-xCTsmXo-jBgMCdqrtSrtESrI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/god-budha-hand-made-scriptures-on-walls-in-historic-and-centuries-old-picture-id1185817059?k=20&m=1185817059&s=612x612&w=0&h=rkE9xkq-TrHA3zomgxDB2yZwN804PmqzSPj7Wsp0-Xs="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/hindu-temple-elephanta-island-mumbai-picture-id537454487?k=20&m=537454487&s=612x612&w=0&h=OOT2RR5E12OfpYK43Xvzmp9pELExlv6hSzC49D3mcO8="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/kanheri-caves-city-mumbai-state-maharashtra-in-india-it-is-a-ancient-picture-id1185591336?k=20&m=1185591336&s=612x612&w=0&h=h7aWc6jlRuqFeWJiko-iK1oe2V06_dMGtyizOpuL9EM="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 5 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Kanheri Caves</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            On the outskirts of Mumbai, away from the hustle and
                            bustle of the city, lies this green and airy tourist
                            spot – Kanheri Caves. This serene cave complex is
                            situated on a hillside and you can access it through
                            steps cut into the rocks.
                          </p>

                          <p className="localAreaMPara">
                            Kanheri Caves complex was built over a long time. It
                            is a collection of 109 caves, with the earliest ones
                            dating back to 1st century BCE. Those are relatively
                            plain in comparison to the caves built later.", "The
                            most recent caves are from 11th century CE. Most of
                            them served as Buddhist viharas. Although the caves
                            are carved out in several styles, one thing which
                            remains constant is a stone plinth in each cave.
                          </p>

                          <p className="localAreaMPara">
                            Kanheri Caves used to be a Buddhist monastery and a
                            point for worship, study and meditation. It is
                            located within the Sanjay Gandhi National Park and
                            you will need to trek through lush green forests to
                            reach the caves.
                          </p>

                          <p className="localAreaMPara">
                            Apart from checking out the caves and the views
                            nearby, you can also witness multiple paintings and
                            statues of Buddha, some of which remain unfinished.
                            Kanheri Caves also have numerous small streams and
                            waterfalls. If you’re looking for a tranquil place
                            to get a view of the city’s skyline, Kanheri Caves
                            in Mumbai should be your choice.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://sgnp.maharashtra.gov.in/1231/Kanheri-Caves"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open5m && (
                          <div>
                            <Modal
                              open={open5m}
                              onClose={handleClose5m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Kanheri Caves Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.756017691511!2d72.90466171441706!3d19.205855952869825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9e6e177d16d%3A0xf5677ab36922b95f!2sKanheri%20Caves!5e0!3m2!1sen!2sin!4v1662890290612!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186444?k=20&m=993186444&s=612x612&w=0&h=A6-i0Uv2nyCv3jk6DUHJkVDr9j6tuzURwd9dSIReS00="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM5}
                              id="viewMoreImagesM5"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen5m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbfive ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbfive ? "true" : undefined}
                              onClick={handleClickmbfive}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbfive}
                              open={openmbfive}
                              onClose={handleClosembfive}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembfive}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://sgnp.maharashtra.gov.in/1231/Kanheri-Caves">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembfive}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://sgnp.maharashtra.gov.in/1231/Kanheri-Caves">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembfive}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://sgnp.maharashtra.gov.in/1231/Kanheri-Caves">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembfive}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM5 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM5}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186444?k=20&m=993186444&s=612x612&w=0&h=A6-i0Uv2nyCv3jk6DUHJkVDr9j6tuzURwd9dSIReS00="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186570?k=20&m=993186570&s=612x612&w=0&h=Ur4qnY98PpihdMn-lSqfbaKJ7VaJZTOs1fLH0hxQxUE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186460?k=20&m=993186460&s=612x612&w=0&h=8PpcOenWPpH44k1onY6E4Kz1SPqsvAWxQNe53WhiLsU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186566?k=20&m=993186566&s=612x612&w=0&h=K283GOauibRLyzvow_Ma5MJE0cCFmfXUnZf0VyNP_PM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186540?k=20&m=993186540&s=612x612&w=0&h=3YVcmw0jJ_lXvRcHRZBerr3_ymhmPLzh9mcb-gEJ-dg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186552?k=20&m=993186552&s=612x612&w=0&h=9peyc1JTpIHXI-OOlAWjR9E2dDLy6IEHbgFC3t7hW0A="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186448?k=20&m=993186448&s=612x612&w=0&h=VZ6cTi9TVE5qOshlNhctBf7K_sv6gBUFIhMn-053nnQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-caves-mumbai-india-picture-id656891956?k=20&m=656891956&s=612x612&w=0&h=oSclGwDb0RG-WkWbhkHiA3w0vHO5ZMdJFzE301-k_KI="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-caves-mumbai-india-picture-id656891958?k=20&m=656891958&s=612x612&w=0&h=2OXcYY78s2aNRejKl0tziBRQu2NyOcOFJqF4EAiDCsU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-caves-mumbai-india-picture-id656891816?k=20&m=656891816&s=612x612&w=0&h=JVGsRvARp7a0D9QaPpBcoMdTivtqNg6xi2HQbjEftso="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-caves-mumbai-india-picture-id656891800?k=20&m=656891800&s=612x612&w=0&h=4xO8t9x-xbP7t7ni-4BWOQE5AGGKxKYUktCX2wsTXjg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/relief-sculptures-in-kanheri-caves-picture-id583680724?k=20&m=583680724&s=612x612&w=0&h=tZaOUxrQel5vsdWHGLvQ8Vz3AcqNWTPBdm9YlIY7TIE="
                              alt=""
                            />
                          </div>
                        </div>{" "}
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 6 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Shree Siddhivinayak Temple</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Shree Ganesh is the first to be worshipped before
                            beginning any new project or venture as he is the
                            destroyer of obstacles (Vighnaharta). This is Shree
                            Siddhivinayak Ganapati Temple at Prabhadevi in
                            Mumbai, a two-century-old Temple that fulfills the
                            desires of the worshipers.
                          </p>

                          <p className="localAreaMPara">
                            The city of Mumbai is a mute witness to places of
                            worship & historical interest, which are not only
                            popular but also of archaeological importance.
                          </p>

                          <p className="localAreaMPara">
                            Arguably the most popular & significant places of
                            worship are the Shree Siddhivinayak Ganapati Mandir
                            situated at Prabhadevi. This temple was first
                            consecrated on Thursday 19th November 1801, a fact
                            that is noted in government records. The temple then
                            was a small structure housing the black stone idol
                            of Shree Siddhivinayak, which was two and half feet
                            wide. The outstanding feature of this deity is the
                            tilt of the trunk to the right side. The idol has
                            four hands (Chaturbhuj), which contains a lotus in
                            upper right, a small axe in upper left, holy beads
                            in the lower right and a bowl full of Modaks (a
                            delicacy which is a perennial favorite with Shree
                            Siddhivinayak). Flanking the deity on both sides are
                            Riddhi & Siddhi, goddesses signifying sanctity,
                            fulfillment, prosperity and riches. Etched on the
                            forehead of the deity is an eye, which resembles the
                            third eye of Lord Shiva.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.siddhivinayak.org/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open6m && (
                          <div>
                            <Modal
                              open={open6m}
                              onClose={handleClose6m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Shree Siddhivinayak Temple Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0656075498887!2d72.82806171441433!3d19.016830458772507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cec0d851ebc3%3A0xcc61876914526329!2sShree%20Siddhivinayak%20Ganpati%20Temple!5e0!3m2!1sen!2sin!4v1662890795167!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/aerial-view-of-siddhivinayak-temple-at-prabhadevi-in-mumbai-india-picture-id90524859?k=20&m=90524859&s=612x612&w=0&h=EacMpt-Bltad-hMzl1T-mjoeigTO8Njg6xsMK3kjv6w="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM6}
                              id="viewMoreImagesM6"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen6m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbsix ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbsix ? "true" : undefined}
                              onClick={handleClickmbsix}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbsix}
                              open={openmbsix}
                              onClose={handleClosembsix}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembsix}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.siddhivinayak.org/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembsix}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.siddhivinayak.org/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembsix}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.siddhivinayak.org/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembsix}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM6 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM6}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/aerial-view-of-siddhivinayak-temple-at-prabhadevi-in-mumbai-india-picture-id90524859?k=20&m=90524859&s=612x612&w=0&h=EacMpt-Bltad-hMzl1T-mjoeigTO8Njg6xsMK3kjv6w="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/aerial-view-of-siddhivinayak-temple-at-prabhadevi-in-mumbai-india-picture-id90566400?k=20&m=90566400&s=612x612&w=0&h=Ge0jrda6C-uSEOQP1vg17ri6e_1VWkmk-ofz6YhXdDY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/siddhivinayak-temple-lord-ganesha-gets-coconut-offerings-on-tuesday-picture-id654129180?k=20&m=654129180&s=612x612&w=0&h=chpNoSWEpexemM5_KUHPFctBbXjXYeysAvE386OoP9I="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/people-take-blessing-of-siddhivinayak-on-the-occasion-of-angarika-at-picture-id635427256?k=20&m=635427256&s=612x612&w=0&h=C6NIqW8-KfoG9QPkLouu0C7yHmTCv90osPZ_Jv48wug="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/siddhivinayak-temple-picture-id626992526?k=20&m=626992526&s=612x612&w=0&h=mzEf3SLl7immhlC3n8BxHW7tezbuQNWXWclcHrHko0I="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/siddhivinayak-temple-picture-id608972824?k=20&m=608972824&s=612x612&w=0&h=QOpi6coKP4oQlPjTdLhNdegJXTzCStTWoM2Ey_BonRU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/maharashtra-finance-minister-sudhir-mungantiwar-takes-blessing-of-picture-id466720642?k=20&m=466720642&s=612x612&w=0&h=Dm3ogI5nJqKD9BQfdDSYN85QOaDXHbPlr_yJ7FUwJ-s="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/maharashtra-finance-minister-sudhir-mungantiwar-takes-blessing-of-picture-id466720638?k=20&m=466720638&s=612x612&w=0&h=23hFcIFg6-0chfTTNcH2UMmVaoMhN1X8UaX3Vw4J-Pk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/devotees-seek-blessings-of-lord-ganesha-on-the-occasion-of-angarkhi-picture-id1240093346?k=20&m=1240093346&s=612x612&w=0&h=A7tjPu4I4JLF1ArfjxzfN2WKxSaz0ZBc_2FQTufXHpw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/devotees-seek-blessings-of-lord-ganesha-on-the-occasion-of-angarkhi-picture-id1240093283?k=20&m=1240093283&s=612x612&w=0&h=NKQ86KWiOlZus2cq48CK_sAn4ij8miK1P_Fqrj_9sos="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/devotees-seek-blessings-of-lord-ganesha-on-the-occasion-of-angarkhi-picture-id1240093276?k=20&m=1240093276&s=612x612&w=0&h=r6XKftvQyFc_JIXJ6lf6gmKKn8aXVXOgMf30LNOhw8c="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/devotees-offer-their-prayer-to-lord-ganesha-on-the-occasion-of-at-picture-id1009006190?k=20&m=1009006190&s=612x612&w=0&h=rkRQkBNdIA2yQUwOoVZPlWp5NVcGTpQD7P3M8IjTSdg="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 7 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Mahalakshmi Temple</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Shree Mahalakshmi Temple Mumbai is one of the oldest
                            temples in the city. It is dedicated to Goddess
                            Mahalakshmi – the Goddess of Wealth. It is a seaside
                            temple along the shores of the Arabian Sea.
                          </p>

                          <p className="localAreaMPara">
                            The temple also has the idols of Goddess Mahakali
                            and Mahasaraswati. All the three idols are adorned
                            with gold bangles, pearl necklaces and nose rings.
                            During Navratri and many other festivals, you will
                            also come across special arrangements and
                            decorations. However, whether or not there is a
                            special occasion, the place is full of devotees
                            throughout the year.
                          </p>

                          <p className="localAreaMPara">
                            The trustees of Mahalakshmi Temple Mumbai also take
                            part in various social activities like providing
                            scholarships to poor students, assisting poor
                            patients financially and donating to the
                            educational, religious and medical institutions in
                            Maharashtra.
                          </p>

                          <p className="localAreaMPara">
                            The charming appearance of Mahalakshmi Temple, its
                            mythological importance and the calm atmosphere
                            makes it a must-visit tourist spot of Mumbai.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://mahalakshmi-temple.com/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open7m && (
                          <div>
                            <Modal
                              open={open7m}
                              onClose={handleClose7m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Mahalakshmi Temple Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.961997541328!2d72.80421521441374!3d18.977285660000483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6ce5383ed1%3A0xe20c7a512463dd62!2sShree%20Mahalakshmi%20Temple!5e0!3m2!1sen!2sin!4v1662891493971!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://i.pinimg.com/236x/36/81/43/368143f8762422e895a3489ff9dba994.jpg"
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM7}
                              id="viewMoreImagesM7"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen7m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbseven ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbseven ? "true" : undefined}
                              onClick={handleClickmbseven}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbseven}
                              open={openmbseven}
                              onClose={handleClosembseven}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembseven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://mahalakshmi-temple.com/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembseven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://mahalakshmi-temple.com/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembseven}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://mahalakshmi-temple.com/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembseven}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM7 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM7}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/36/81/43/368143f8762422e895a3489ff9dba994.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/42/84/8f/42848f11082877411bd433a2033db8db.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/e2/e8/0b/e2e80bcda08c49a667602657738000c4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/f3/24/10/f32410c607d03e275ffba90aae89f002.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/a9/d4/b8/a9d4b87b82b998b58644414ec3d51973.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/e7/23/7e/e7237ee837962835d692fb8eb180c608.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/c3/ea/26/c3ea26290fbeee969a01a598c415a553.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/08/27/02/082702c8f8d59d33953423f2feaf4fdb.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/3d/17/8b/3d178bec7357ea33a4721ec808cf35f3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/f3/24/10/f32410c607d03e275ffba90aae89f002.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/67/eb/49/67eb49e1b26a0728b1d4fcd80e96e4d6.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://i.pinimg.com/236x/e7/23/7e/e7237ee837962835d692fb8eb180c608.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 8 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Haji Ali Dargah</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Haji Ali Dargah is one of the most popular religious
                            places in Mumbai, visited by people of all religions
                            alike. Haji Ali Dargah is one of India’s most famous
                            and prestigious landmarks situated about 500 yards
                            from the Mumbai shoreline in the middle of the
                            Arabian Sea off Lala Lajpatrai Marg.
                          </p>

                          <p className="localAreaMPara">
                            The structure was erected on a set of high rising
                            rocks and was given its present day shape in the
                            early 19th century after the Trust was legally
                            formed as an entity in 1916.
                          </p>

                          <p className="localAreaMPara">
                            Haji Ali Dargah is the complex housing the tomb of
                            the Muslim Saint Pir Haji Ali Shah Bukhari (R.A.).
                            Along with the tomb, there is also a Masjid at Haji
                            Ali. This monument has been sentinel to the shores
                            of Mumbai since a long time.
                          </p>

                          <p className="localAreaMPara">
                            The structure has white domes and minarets
                            reminiscent with the Mughal architecture of the
                            period. The Dargah is a renowned pilgrimage site
                            among the Muslims. Non-Muslims are also allowed to
                            visit the Dargah. The white-coloured structure
                            attracts visitors in large numbers. About 10 - 15
                            thousand people visit the Dargah daily. The number
                            of visitors increases to 20 - 30 thousand, on
                            Thursdays, Fridays and Sundays. Lakhs of devotees
                            visit the Dargah on the second day of Ramadhan Eid
                            and Bakri Eid (Eid-ul-Uzha), and during which the
                            pathway leading to the Dargah Complex looks like a
                            Sea of Humanity.
                          </p>

                          <p className="localAreaMPara">
                            People from all parts of the world without
                            restrictions of caste, creed and religion visit the
                            Dargah to offer their prayers and for the
                            fulfillment of their wishes by the blessings of the
                            Saint Pir Haji Ali Shah Bukhari (R.A.). Some pray
                            for wealth, others for health, children, marriages,
                            etc. have their wishes being granted at all the
                            times.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="http://www.hajialidargah.in/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open8m && (
                          <div>
                            <Modal
                              open={open8m}
                              onClose={handleClose8m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Haji Ali Dargah Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.838745893253!2d72.80672681418325!3d18.982727687141484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7e930d42e3%3A0xd5e05dc7ab078d05!2sHaji%20Ali%20Dargah!5e0!3m2!1sen!2sin!4v1662896043942!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/haji-ali-dargah-picture-id470635002?k=20&m=470635002&s=612x612&w=0&h=PQgS6qQkRiPmxR6nvlrD-UAlG689S4z_xpnZIPyG03w="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM8}
                              id="viewMoreImagesM8"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen8m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbeight ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbeight ? "true" : undefined}
                              onClick={handleClickmbeight}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbeight}
                              open={openmbeight}
                              onClose={handleClosembeight}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembeight}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="http://www.hajialidargah.in/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembeight}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="http://www.hajialidargah.in/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembeight}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="http://www.hajialidargah.in/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembeight}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM8 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM8}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/haji-ali-dargah-picture-id470635002?k=20&m=470635002&s=612x612&w=0&h=PQgS6qQkRiPmxR6nvlrD-UAlG689S4z_xpnZIPyG03w="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/sunset-at-haji-ali-dargah-picture-id1344707174?k=20&m=1344707174&s=612x612&w=0&h=WA4AvnlqMWgJPFoaVO4UJcYNd6tUjOPVtwZ2u9BfLEg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/haji-ali-dargah-in-mumbai-picture-id486908676?k=20&m=486908676&s=612x612&w=0&h=DnW7H3D-L1AECbDWpV6aOHVHW1y-BqkwWgxzzJAugaY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/haji-ali-dargah-mosque-in-mumbai-india-picture-id936357740?k=20&m=936357740&s=612x612&w=0&h=xJrHxO2IHc-3k2TyiC4-MKQ8wljAdl5WjmQNNfKFSpc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/haji-ali-dargah-mosque-and-tomb-in-mumbai-india-picture-id1199591149?k=20&m=1199591149&s=612x612&w=0&h=5li2sNkKpTRmdjtmFZZxn6Wvnq5stm5pyyM6_sX10CQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/the-haji-ali-dargah-a-famous-tomb-and-a-mosque-in-mumbai-india-picture-id925857426?k=20&m=925857426&s=612x612&w=0&h=gGNRS5T7tbRkmjfrncXV0RR98CETyVlOSUvWV2TTfrY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/haji-ali-dargah-mosque-and-tomb-in-mumbai-india-picture-id1199591154?k=20&m=1199591154&s=612x612&w=0&h=_-GGCdV3Vbk2aa9dEKuAxWqrAMv31n5ciykSf8f1kBQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/haji-ali-dargah-mosque-in-mumbai-india-picture-id936357800?k=20&m=936357800&s=612x612&w=0&h=b0lgBkATtTzUJ-CICYTFSbGuMMmcKQXh-ozGSseC8fs="
                              alt=""
                            />
                          </div>
                        </div>{" "}
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 9 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Chhatrapati Shivaji Maharaj Terminus</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Chhatrapati Shivaji Terminus (formerly Victoria
                            Terminus) is a 19th-century railway station in
                            Mumbai, that is known for its architectural mix of
                            Victorian Gothic Revival and traditional Indian
                            features.", "It is a symbol of the blossom period of
                            Mumbai as a commercial city in the late 19th
                            century. The station was opened in 1887, on the
                            Silver Jubilee of Empress Victoria. Its architect
                            was Frederick William Stevens, who implemented
                            advanced structural and technical solutions. He
                            designed it in the Gothic Revival style, which has
                            many similarities to traditional Indian palace
                            architecture, such as the use of turrets, colouring
                            and ground plan.
                          </p>

                          <p className="localAreaMPara">
                            The station was originally named 'Victoria
                            Terminus'. In 1996, in response to demands by the
                            Shiv Sena and in keeping with the policy of renaming
                            locations with Indian names, the station was renamed
                            by the state government after Chhatrapati Shivaji, a
                            famed 17th century Maratha king.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://whc.unesco.org/en/list/945/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open9m && (
                          <div>
                            <Modal
                              open={open9m}
                              onClose={handleClose9m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Chhatrapati Shivaji Maharaj Terminus Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8090444875875!2d72.83325881418232!3d18.939844587166103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce27b8aa3bdf%3A0x21434b0703218d1b!2sChhatrapati%20Shivaji%20Maharaj%20Terminus!5e0!3m2!1sen!2sin!4v1662897066279!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/wideangle-shot-showing-gothic-architecture-of-chatrapati-shivaji-picture-id1045609710?k=20&m=1045609710&s=612x612&w=0&h=vxn0Voe_LW9RJKSGSGFf-anQb78SglB-B43puHjfj4I="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM9}
                              id="viewMoreImagesM9"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen9m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbnine ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbnine ? "true" : undefined}
                              onClick={handleClickmbnine}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbnine}
                              open={openmbnine}
                              onClose={handleClosembnine}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembnine}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://whc.unesco.org/en/list/945/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembnine}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://whc.unesco.org/en/list/945/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembnine}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://whc.unesco.org/en/list/945/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembnine}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM9 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM9}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/wideangle-shot-showing-gothic-architecture-of-chatrapati-shivaji-picture-id1045609710?k=20&m=1045609710&s=612x612&w=0&h=vxn0Voe_LW9RJKSGSGFf-anQb78SglB-B43puHjfj4I="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/chhatrapati-shivaji-maharaj-terminus-formerly-known-as-victoria-a-picture-id1221343658?k=20&m=1221343658&s=612x612&w=0&h=8EBqrWo3tSmKbT5mH0iAGiGcsUZmeLZdMSmEjfiE7rk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/chhatrapati-shivaji-terminus-railway-station-picture-id1218396902?k=20&m=1218396902&s=612x612&w=0&h=iqbGEDqTCV5x95NXcWQWUQhn24DF4z7FLW5WumMtN1U="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/architecture-inside-chhatrapati-shivaji-maharaj-terminus-railway-is-picture-id1294618415?k=20&m=1294618415&s=612x612&w=0&h=16CLNVRrd8iZm1AqCTK8ZyZ8ApRZ_ZWvgme5g4jKHRc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/stained-glass-details-inside-chhatrapati-shivaji-maharaj-terminus-picture-id1211486352?k=20&m=1211486352&s=612x612&w=0&h=iHOPVK_T3xTK52S9a2e9BvkWwK7S45LNKmZdN1us6nM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/chhatrapati-shivaji-terminus-railway-station-picture-id1218396941?k=20&m=1218396941&s=612x612&w=0&h=3Fqek3-rcitJPzQZevaxGGKZgBxqa8-YhAgtlR2oK2U="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/chhatrapati-shivaji-maharaj-terminus-formerly-victoria-terminus-in-picture-id856615296?k=20&m=856615296&s=612x612&w=0&h=zDu78Ts90jVmR1zpb2cXLjZewK55So2ySKgVjS3u-nY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/chhatrapati-shivaji-maharaj-terminus-formerly-victoria-terminus-in-picture-id856615290?k=20&m=856615290&s=612x612&w=0&h=knhrov9-WZ-sBGmYkvQIanMj7r0tQI-llj8-v5aeuyI="
                              alt=""
                            />
                          </div>
                        </div>{" "}
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 10 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Chhatrapati Shivaji Maharaj Vastu Sangrahalaya</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Chhatrapati Shivaji Maharaj Vastu Sangrahalaya,
                            formerly known as the Prince of Wales Museum of
                            Western India, is one of the premier art and history
                            museums in India. Situated on the southern tip of
                            Mumbai on the ‘Crescent Site’, the Museum building
                            is a fine example of the Indo-Saracenic style of
                            architecture.
                          </p>

                          <p className="localAreaMPara">
                            Today this building is listed as a Grade I Heritage
                            Building and was the recipient of the ‘2010 UNESCO
                            Asia – Pacific Heritage Award’ for Cultural Heritage
                            Conservation. It has also been awarded the first
                            place for Heritage Building Maintenance by the
                            Indian Heritage Society.
                          </p>

                          <p className="localAreaMPara">
                            Our aim at Chhatrapati Shivaji Maharaj Vastu
                            Sangrahalaya (CSMVS) is to create awareness and
                            sensitivity towards our rich heritage through a
                            visitor-friendly museum for the purposes of
                            education, study and enjoyment of the public.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://csmvs.in/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open10m && (
                          <div>
                            <Modal
                              open={open10m}
                              onClose={handleClose10m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Chhatrapati Shivaji Maharaj Vastu Sangrahalaya
                                  Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.101487493496!2d72.83050291418208!3d18.926901487173602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c3eaf8b127%3A0x44e72610553e9253!2sChhatrapati%20Shivaji%20Maharaj%20Vastu%20Sangrahalaya!5e0!3m2!1sen!2sin!4v1662897681575!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/chhatrapati-shivaji-maharaj-vastu-sangrahalaya-formerly-known-as-the-picture-id486314190?k=20&m=486314190&s=612x612&w=0&h=Gza1wusi5pM-5kMhW6WnGzgruLLELaTEFJbhEUqvnnQ="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM10}
                              id="viewMoreImagesM10"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen10m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbten ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbten ? "true" : undefined}
                              onClick={handleClickmbten}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbten}
                              open={openmbten}
                              onClose={handleClosembten}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembten}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://csmvs.in/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembten}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://csmvs.in/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembten}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://csmvs.in/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembten}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM10 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM10}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/chhatrapati-shivaji-maharaj-vastu-sangrahalaya-formerly-known-as-the-picture-id486314190?k=20&m=486314190&s=612x612&w=0&h=Gza1wusi5pM-5kMhW6WnGzgruLLELaTEFJbhEUqvnnQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/the-chhatrapati-shivaji-maharaj-vastu-sangrahalaya-or-prince-of-wales-picture-id557652511?k=20&m=557652511&s=612x612&w=0&h=3MPNoSPIizNA53ro0fPZeeiehqZzlUGHrRLYHCeSlLY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/sculpture-gallery-at-chhatrapati-shivaji-maharaj-vastu-sangrahalaya-picture-id486314072?k=20&m=486314072&s=612x612&w=0&h=xQ1kEt9C7J-c7XC1e52PpkAuIi6yV9WkALrm5757OzA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/chhatrapati-shivaji-maharaj-vastu-sangrahalaya-formerly-known-as-the-picture-id486314008?k=20&m=486314008&s=612x612&w=0&h=bXnAdNqTjKJlzd_IuWSxRaLVyJ2H-F3JcdU9E38BEsk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/statuet-of-buddhist-godess-tara-at-chhatrapati-shivaji-maharaj-vastu-picture-id486313994?k=20&m=486313994&s=612x612&w=0&h=UHQBvBFO0XncOcpz3ZlDV6JTFuy69G5C7evLnjZIObM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/work-by-jacob-jordaens-from-flemish-masterpieces-from-antwerp-at-picture-id486313944?k=20&m=486313944&s=612x612&w=0&h=0jfQGm0MCw6czL7McO9jVLgEjqkh7TE5WQ6bBbyhvR8="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/the-work-by-michaelina-wautier-from-flemish-masterpieces-from-antwerp-picture-id486313924?k=20&m=486313924&s=612x612&w=0&h=PjzbBCAHMHtrV8denqVlhl2dvrOTBtpiUTZt-Pve33o="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/the-cyrus-cylinder-displayed-at-chhatrapati-shivaji-maharaj-vastu-picture-id486313844?k=20&m=486313844&s=612x612&w=0&h=-ADStjqEpQZ6mLe1ArdJoyUfASGzvs7q6PnRfGxz1f4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/08/28.5602.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/08/22.2738.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/08/3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/07/Dis.acc-1675-1_01-1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/07/Ashoka-Reoplica_01.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/07/33.811.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/06/TC-83.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/06/22.602.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/03/97.2-1_02.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://csmvs.in/wp-content/uploads/2022/01/075-Shivaji-Gold-Hon-Obv.jpg"
                              alt=""
                            />
                          </div>
                        </div>{" "}
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 11 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Global Vipassana Pagoda</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            It is a meditation dome in the outskirts of Mumbai,
                            which is built as a tribute to Sayagyi U Ba Khin, a
                            Vipassana teacher from Myanmar.
                          </p>

                          <p className="localAreaMPara">
                            Situated among the green and peaceful environment of
                            Gorai Island, Global Vipassana Meditation Pagoda
                            Mumbai is one of the Seven Wonders of Maharashtra.
                            It is also one of the must-visit tourist spots in
                            Mumbai.
                          </p>

                          <p className="localAreaMPara">
                            The dome resembles the Shwedagon Pagoda of Myanmar.
                            It is the world’s largest stone dome standing
                            without any supporting pillars and here, 8000 people
                            can meditate at a time. Global Vipassana Pagoda
                            follows the values of Gautam Buddha and spreads his
                            teachings.
                          </p>

                          <p className="localAreaMPara">
                            The monks here practice meditation and relaxation as
                            taught by Vipassana guruji Shree S N Goenka. And
                            they have devoted their entire life to this
                            purpose.", "The pagoda also organizes regular
                            Vipassana meditation courses.
                          </p>

                          <p className="localAreaMPara">
                            Apart from the large main dome, Global Vipassana
                            Pagoda complex has two smaller domes, namely North
                            Pagoda and South Pagoda. Then, there is a seated
                            Buddha statue, carved out of a single marble rock.
                          </p>

                          <p className="localAreaMPara">
                            The Gong Tower and the Bell Tower are the other
                            significant structures that contribute to the beauty
                            of Global Vipassana Pagoda.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.globalpagoda.org/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open11m && (
                          <div>
                            <Modal
                              open={open11m}
                              onClose={handleClose11m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Global Vipassana Pagoda Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.243807189596!2d72.80370041418803!3d19.228203387000722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b158222067c7%3A0x4ce86be376e098ba!2sGlobal%20Vipassana%20Pagoda!5e0!3m2!1sen!2sin!4v1662898549146!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/buddha-temple-picture-id499692995?k=20&m=499692995&s=612x612&w=0&h=KoHUNEWsuhz5j5Omc_N2u4O_ULZYlFbfu5ErUDlhyAw="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM11}
                              id="viewMoreImagesM11"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen11m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbeleven ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbeleven ? "true" : undefined}
                              onClick={handleClickmbeleven}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbeleven}
                              open={openmbeleven}
                              onClose={handleClosembeleven}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembeleven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.globalpagoda.org/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembeleven}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.globalpagoda.org/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembeleven}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.globalpagoda.org/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembeleven}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM11 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM11}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/buddha-temple-picture-id499692995?k=20&m=499692995&s=612x612&w=0&h=KoHUNEWsuhz5j5Omc_N2u4O_ULZYlFbfu5ErUDlhyAw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/buddhist-temple-picture-id499693079?k=20&m=499693079&s=612x612&w=0&h=uiAS6dugdUPUyTccIu4qu9JIAFWeS4uB_WxzqluYpsA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/statues-at-the-global-vipassana-pagoda-in-mumbai-india-picture-id1177454874?k=20&m=1177454874&s=612x612&w=0&h=cGVKDmFw0Y3yp-A1584fr1SlQqv9J9cUFhbqYGZbUbM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pagoda-picture-id486561249?k=20&m=486561249&s=612x612&w=0&h=9XTnxmaKp8je6mAwHWwLGmHV9eV4FF1SjQp3_nHIODY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/buddhist-temple-picture-id499701591?k=20&m=499701591&s=612x612&w=0&h=0rfCmjY0LWR5TfGWJ2rJGXeBprU6hYm3Wyj5B0LH72Q="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pagoda-picture-id499693057?k=20&m=499693057&s=612x612&w=0&h=5PcsxxTBAgr7VepWtDLoKIfsc9YibSX6u33jNVYvI8w="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mumbai-buddhist-pagoda-picture-id486232927?k=20&m=486232927&s=612x612&w=0&h=uSqpVjkMaPFWUTP2P26DfAYIkBjMYTOwk0F7rVx-tJ0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/pagoda-temple-picture-id488335297?k=20&m=488335297&s=612x612&w=0&h=ZhamTVoHafDI-FOjGT9GpBFafs5DEGmq90todFiWfnw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/buddhist-pagoda-picture-id486232891?k=20&m=486232891&s=612x612&w=0&h=hgaSzzfzJiY7IyUFc0VzzdH4axRfGxT-3iVOeWxNDU0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/statues-at-the-global-vipassana-pagoda-in-mumbai-india-picture-id1177460715?k=20&m=1177460715&s=612x612&w=0&h=HPN1xbxk4myjSBfJR06sAHHgQDflhxMXmni5EWOR-Y0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/global-vipassana-pagoda-picture-id622286304?k=20&m=622286304&s=612x612&w=0&h=DaAijNpa0RTuW2MwMYUHjETIKv4B_Gk93Vmvew8eSAc="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/global-vipassana-pagoda-details-picture-id470647384?k=20&m=470647384&s=612x612&w=0&h=tlaWNeWOPMdpRKdmzxa1AxunVUcwGG7c8VykI27QLLA="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 12 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Flora Fountain</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Flora Fountain, also known as the Hutatma Chowk
                            since 1960, is an exquisitely sculpted structure
                            located in the heart of South Mumbai. Flora Fountain
                            was initially named after the Governor of Bombay,
                            Sir Bartle Frere, but just before the fountain’s
                            inauguration in 1864, the name ‘Flora’ was bestowed
                            on it, after the Roman Goddess of flowers and the
                            season of spring. In 1960, the fountain became known
                            as Martyr’s Square, or Hutatma Chowk, with an
                            impressive stone statue bearing a pair of torch
                            holding patriots, to honor the 105 members of the
                            Samyuktha Maharashtra Samiti who lost their lives
                            while fighting for a separate Maharashtrian state.
                          </p>

                          <p className="localAreaMPara">
                            The Flora Fountain was constructed by the
                            Agri–Horticultural Society of Western India in 1864,
                            out of a donation by Cursetjee Fardoonjee Parekh.
                            Designed by Richard Norman Shaw, it was sculpted
                            from imported Portland stone by James Forsythe. A
                            magnificent statue of the Roman Goddess is installed
                            at the top of the structure, making the fountain
                            edifice look even more beautiful. However, according
                            to some, its white coat of oil paint has to some
                            extent marred the antiquity of the fountain.
                          </p>

                          <p className="localAreaMPara">
                            Located in the heart of South Mumbai, Flora Fountain
                            is very close to the Chattrapati Shivaji Terminus as
                            well as Churchgate. Within walking distance of the
                            fountain, you can find some of the most impressive
                            institutions and buildings of Mumbai, such as the
                            University of Mumbai, the old Secretariat, the
                            Gateway of India, the Bombay High Court, the Central
                            Telegraph Office and many other heritage buildings.
                            The fountain is especially beautiful at night when
                            illuminated.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://en.wikipedia.org/wiki/Flora_Fountain"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open12m && (
                          <div>
                            <Modal
                              open={open12m}
                              onClose={handleClose12m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Flora Fountain Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9756325653902!2d72.82932891418221!3d18.932472687170375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1dcddd8200d%3A0x918ba93685508c8a!2sFlora%20Fountain!5e0!3m2!1sen!2sin!4v1662899570894!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.istockphoto.com/photos/flora-fountain-in-mumbai-picture-id517163456?k=20&m=517163456&s=612x612&w=0&h=tsJXpVECLQSC1C1pfey7Xa03ig0ucrswyhFXmUl34iw="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM12}
                              id="viewMoreImagesM12"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen12m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbtwelve ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbtwelve ? "true" : undefined}
                              onClick={handleClickmbtwelve}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbtwelve}
                              open={openmbtwelve}
                              onClose={handleClosembtwelve}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembtwelve}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://en.wikipedia.org/wiki/Flora_Fountain">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembtwelve}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://en.wikipedia.org/wiki/Flora_Fountain">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembtwelve}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://en.wikipedia.org/wiki/Flora_Fountain">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembtwelve}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM12 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM12}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/flora-fountain-in-mumbai-picture-id517163456?k=20&m=517163456&s=612x612&w=0&h=tsJXpVECLQSC1C1pfey7Xa03ig0ucrswyhFXmUl34iw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/flora-fountain-mumbai-picture-id172224793?k=20&m=172224793&s=612x612&w=0&h=qe94f6WuWsT4J-mxhGAnUkGWTeBG4T5BGJQExDbJjSw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/flora-fountain-in-mumbai-picture-id513441530?k=20&m=513441530&s=612x612&w=0&h=wrgNG1D9N9LkPgQBKSXm0YwpVpR7py0Wl9d0xIG3rm0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/artistic-heritage-of-mumbai-city-picture-id494342940?k=20&m=494342940&s=612x612&w=0&h=v8Q6aAwBP9rz7I7bx_B_PMZ0iAvUANSKCi3XsB7QwPY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/flora-fountain-picture-id1140983344?k=20&m=1140983344&s=612x612&w=0&h=jJ52q1mzewoSw7D_K_QtxvpEmpqFu6emcyegTQF-ugA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/floral-fountain-mumbai-detail-picture-id97992118?k=20&m=97992118&s=612x612&w=0&h=qXAZfoljQExkMcpSqwjoc7wxZFNhrA6P3B51NnqtWYM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/flora-fountain-at-the-hutatma-chowk-picture-id1178573602?k=20&m=1178573602&s=612x612&w=0&h=o30c0u8ofyIcz3v2gZcyYlYvHhtW8YiHAfG8cIaJRH0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/flora-fountain-in-mumbai-india-picture-id1197311076?k=20&m=1197311076&s=612x612&w=0&h=86BBSdl8GbLswaXK-NTzCVuXtHCNjIm8R37XqJLWboo="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 13 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Sanjay Gandhi National Park</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            When in Mumbai, a visit to the Sanjay Gandhi
                            National Park (SGNP) becomes imperative. The
                            national park is also called the lungs of the city
                            and is the only national park in the world known to
                            be present within a city’s premises. Far from the
                            bustle of the city, the environment inside the
                            national park is completely peaceful and offers
                            serenity.
                          </p>

                          <p className="localAreaMPara">
                            Spread across a total area of 103 square kilometres,
                            the governing body of the national park is the
                            Ministry of Environment, Forest and Climate Change
                            and the footfall of visitors each year rounds up to
                            a little over 2 million. The entire area of the
                            national park forms approximately 20% of Mumbai’s
                            geographical area.
                          </p>

                          <p className="localAreaMPara">
                            The park is home to over 40 species of mammals, 254
                            species of birds, 150 species of butterflies, 78
                            species of reptiles and amphibians and last but not
                            the least and most important, over a surprisingly
                            high population of 1300 species of plants.
                          </p>

                          <p className="localAreaMPara">
                            At the exit gate of the park, there is a souvenir
                            shop that offers artefacts, coffee table books on
                            SGNP Biodiversity, trekking gears and apparel, books
                            on tribes of Maharashtra, organic consumables and
                            forest produce.
                          </p>
                        </div>

                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://sgnp.maharashtra.gov.in/Site/Home/Index.aspx"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open13m && (
                          <div>
                            <Modal
                              open={open13m}
                              onClose={handleClose13m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Sanjay Gandhi National Park Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2299140765385!2d72.91598971418802!3d19.22880918700043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0c88b1d3d9f%3A0x3621dd69daa8e2cf!2sSanjay%20Gandhi%20National%20Park!5e0!3m2!1sen!2sin!4v1662900682332!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/portrait-of-spotted-deer-at-sanjay-gandhi-national-park-picture-id691081117?k=20&m=691081117&s=612x612&w=0&h=m-AcNzPfgvENykHrhPklFf-OLlb0AJiugQqabMtFXfg="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM13}
                              id="viewMoreImagesM13"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen13m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbthirteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={
                                openmbthirteen ? "true" : undefined
                              }
                              onClick={handleClickmbthirteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbthirteen}
                              open={openmbthirteen}
                              onClose={handleClosembthirteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembthirteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://sgnp.maharashtra.gov.in/Site/Home/Index.aspx">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembthirteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://sgnp.maharashtra.gov.in/Site/Home/Index.aspx">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembthirteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://sgnp.maharashtra.gov.in/Site/Home/Index.aspx">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembthirteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM13 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM13}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/portrait-of-spotted-deer-at-sanjay-gandhi-national-park-picture-id691081117?k=20&m=691081117&s=612x612&w=0&h=m-AcNzPfgvENykHrhPklFf-OLlb0AJiugQqabMtFXfg="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/thyrididae-herdonia-spmoth-picture-id158832192?k=20&m=158832192&s=612x612&w=0&h=mz3ZyQXpJFF7EAH_Iu1Q--gwHs2U5P88Tnxc4DOx43o="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/the-mystery-of-the-kanheri-caves-picture-id979990318?k=20&m=979990318&s=612x612&w=0&h=HZqi3MfP4WJMCK2iWLWHVm0iucJCBwbaigPg1iDkChk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/water-lily-picture-id149623192?k=20&m=149623192&s=612x612&w=0&h=W1pTolN4SX7TRlF0JXIp83d3nDmXJEWXNcih_TSzlPQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/kanheri-cavesbuddhist-caves-of-india-picture-id993186566?k=20&m=993186566&s=612x612&w=0&h=K283GOauibRLyzvow_Ma5MJE0cCFmfXUnZf0VyNP_PM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/two-rescued-leopard-cubs-tara-and-suraj-seen-playing-in-rescue-center-picture-id977966646?k=20&m=977966646&s=612x612&w=0&h=G8NbVFQVs2JmDd7IN4NidxU-r6WXsnBcxbYEPevqZEo="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/artistic-and-graphic-stone-in-sanjay-gandhi-national-park-borivali-picture-id520958776?k=20&m=520958776&s=612x612&w=0&h=jwGddGmhoRIHQekdNdXbimfWPkkEXnV5Yai3lstV5x4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/greenery-scene-in-sanjay-gandhi-national-park-borivali-bombay-mumbai-picture-id520928636?k=20&m=520928636&s=612x612&w=0&h=tI_M0YLgdhFcVNLDGFLaB5clfbx12_DX5-Cam1O4RAU="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/lioness-shobha-released-in-a-lion-safari-with-her-three-cubs-jespa-picture-id144559819?k=20&m=144559819&s=612x612&w=0&h=Mc0R2972Swnoxe2Nj1eD5BYw-iijMvYT4NnvRC99ecY="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/front-portrait-of-a-macaque-monkey-picture-id1387425089?k=20&m=1387425089&s=612x612&w=0&h=Fc6h1ojZzhHZLs_Y9BPIMKsHFNb_ZlwfKeyheK03N0g="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/carving-at-kanheri-buddhist-caves-mumbai-maharashtra-picture-id1347281579?k=20&m=1347281579&s=612x612&w=0&h=_xiIZyZ5Q-PbGrerANM5C9dUVdA60ZbjCcPyF1B2h4M="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/tiger-taking-rest-in-sanjay-gandhi-national-park-in-mumbai-picture-id957321262?k=20&m=957321262&s=612x612&w=0&h=6Rp8YPmu2jCl1DIJWJ2ucLUDyIM48OBdTwJVLbnf3h0="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 14 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Basilica of Our Lady of the Mount</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            This 100-year-old Roman Catholic basilica located on
                            a hillock in Bandra overlooks the Arabian Sea. It
                            attracts devotees from all faiths who come to pray
                            and seek blessings from Mother Mary. The church has
                            been built in the Neo-Gothic style of architecture.
                            There are seven steps in white marble that lead the
                            eye of the visitor to the statue of Mother Mary
                            holding her son Jesus Christ in her right hand. The
                            wooden statue is crowned with a white and gold veil
                            that flows down to the topmost marble step. The
                            murals depict scenes from the life of Mary.
                          </p>

                          <p className="localAreaMPara">
                            Although the current church edifice is relatively
                            modern, the history behind the statue of Our Lady
                            goes back to the 16th century when Jesuit priests
                            from Portugal brought the statue to the current
                            location and constructed a chapel. A week-long
                            festival takes place here in September to celebrate
                            Mother Mary’s birthday. Known as the Bandra Fair,
                            thousands of devotees come here during that time to
                            partake in the festive activities that take place in
                            and around the beautifully decorated church. Many
                            stalls selling religious artefacts, curios, candles
                            and baked goodness are also set up.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="http://www.mountmarybasilicabandra.in/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open14m && (
                          <div>
                            <Modal
                              open={open14m}
                              onClose={handleClose14m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Basilica of Our Lady of the Mount Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3904519587986!2d72.82028601441472!3d19.046563157847693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9409a609d75%3A0xd0a71c45e7557bfa!2sBasilica%20of%20Our%20Lady%20of%20the%20Mount!5e0!3m2!1sen!2sin!4v1662909555105!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/mount-mary-church-picture-id145677166?k=20&m=145677166&s=612x612&w=0&h=n1ZIbTg9l1lNna2ogxbgAqcuJDIBVvRb-gM3Z6Rhmck="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM14}
                              id="viewMoreImagesM14"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen14m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbforteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbforteen ? "true" : undefined}
                              onClick={handleClickmbforteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbforteen}
                              open={openmbforteen}
                              onClose={handleClosembforteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembforteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="http://www.mountmarybasilicabandra.in/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembforteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="http://www.mountmarybasilicabandra.in/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembforteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="http://www.mountmarybasilicabandra.in/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembforteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM14 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM14}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mount-mary-church-picture-id145677166?k=20&m=145677166&s=612x612&w=0&h=n1ZIbTg9l1lNna2ogxbgAqcuJDIBVvRb-gM3Z6Rhmck="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mount-mary-basilica-of-our-lady-at-bandra-west-hill-road-bombay-picture-id520817354?k=20&m=520817354&s=612x612&w=0&h=ilLj0YkwiW5aQ6cDxdWwDG1dLYVBkUfwWB5KxFifZ_k="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mount-mary-church-picture-id578969239?k=20&m=578969239&s=612x612&w=0&h=kmIH1ehDJovqH9k95H-dWJnNwplEBYV_i5cjl3CNgtE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/low-angle-view-of-mount-mary-church-against-sky-picture-id942344388?k=20&m=942344388&s=612x612&w=0&h=HSz9nP0BgZeQ76zBYIP1u5wyT9HucLAKyi8hDcofvsA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/devotees-come-to-pray-at-mount-mary-church-bandra-on-december-24-2017-picture-id898547656?k=20&m=898547656&s=612x612&w=0&h=hj7ndV2OpQbTo9z0QGs3TbmHiAasWp3HCsLaEqfE8us="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/devotees-come-to-pray-at-mount-mary-church-bandra-on-december-24-2017-picture-id898547590?k=20&m=898547590&s=612x612&w=0&h=g8rfEQ6LKufFL9ZBVBaXoBQTTc_jAV4dEawD5x3EMAM="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/devotees-come-to-pay-their-tribute-at-the-church-at-bandra-on-10-in-picture-id602409370?k=20&m=602409370&s=612x612&w=0&h=OddSAab0wUMn7isy2NPaadOPkEhcwguCDgpODG6dVU4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mount-mary-basilica-mount-mary-picture-id603206054?k=20&m=603206054&s=612x612&w=0&h=bD8XIzxHn8SJHq85b8AuyJSGCTBRXZsl6NfWwMD-gfA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/interior-decoration-of-mount-mary-church-bandra-mumbai-maharashtra-picture-id520906522?k=20&m=520906522&s=612x612&w=0&h=V6AV7DbtM7hengV43MWpG2yHY7VXrWgNutS-LGZVKLQ="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/people-visit-mount-mary-church-on-christmas-eve-at-bandra-on-december-picture-id1237413021?k=20&m=1237413021&s=612x612&w=0&h=m3Zqd8eeov9xGqJtSIyHQIJYEtrFLkWmSX05UJKz1RE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/deserted-view-of-mounty-mary-church-bandra-during-cancel-the-mount-picture-id1235260172?k=20&m=1235260172&s=612x612&w=0&h=1Qtipzaks1DXmdEIaj4a16gvL6hxnvrTxg_CYivKKxw="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/mount-mary-church-mumbai-picture-id588620094?k=20&m=588620094&s=612x612&w=0&h=W67iBZxs46a3yuJzm9XbVLhMw9ZiuBkOY3UQ_cyAIgw="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 15 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Dr. Bhau Daji Lad Museum</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            The Dr. Bhau Daji Lad Mumbai City Museum is an
                            institution of the Municipal Corporation of Greater
                            Mumbai. For the first time in India, a
                            public-private partnership has been established for
                            the management of a cultural institution. In
                            February 2003, an agreement was signed between the
                            Municipal Corporation Greater Mumbai (MCGM), the
                            Jamnalal Bajaj Foundation and the Indian National
                            Trust for Art and Cultural Heritage (INTACH).
                          </p>

                          <p className="localAreaMPara">
                            The Museum opened at the present site in 1872 as the
                            erstwhile Victoria and Albert Museum, Bombay. As
                            Mumbai’s first Museum, it showcases the city’s
                            cultural heritage and history through a rare
                            collection of Fine and Decorative Arts that
                            highlight Early Modern Art practices as well as the
                            craftsmanship of various communities of the Bombay
                            Presidency. The permanent collection includes
                            miniature clay models, dioramas, maps, lithographs,
                            photographs, and rare books that document the life
                            of the people of Mumbai and the history of the city
                            from the late eighteenth to early-twentieth
                            centuries.
                          </p>

                          <p className="localAreaMPara">
                            The Museum, once in a derelict condition, underwent
                            a comprehensive five-year restoration and won
                            UNESCO’s 2005 Award of Excellence in the field of
                            Cultural Conservation. The Museum re-opened in 2008
                            with an extensive exhibition program and is
                            committed to promoting contemporary art and culture.
                          </p>

                          <p className="localAreaMPara">
                            The Museum has collaborated with other museums and
                            cultural institutions from around the world to
                            showcase contemporary artists and international
                            exhibitions that relate to the Museum’s permanent
                            collection.", "In December of 2012, the Museum
                            introduced a dynamic cultural hub, the Museum Plaza,
                            which offers the public a recreational space for
                            performances, outdoor activities, and workshops. The
                            Museum has restored and re-appropriated abandoned
                            spaces to accommodate a Special Projects Space,
                            Museum Cafe, Museum Shop and an Education Centre.
                          </p>

                          <p className="localAreaMPara">
                            The Museum has embarked on an ambitious expansion
                            plan, supported by the Municipal Corporation of
                            Greater Mumbai and private donors, which includes
                            developing a new wing adjoining the Museum Plaza.
                            Facilities will include a Mumbai Modern Gallery, a
                            state of the art Special Exhibitions Gallery to host
                            national and international exhibitions, an
                            auditorium, a learning centre, expanded library and
                            archives, a conservation centre, staff and visitor
                            amenities like cafes and shops.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.bdlmuseum.org/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open15m && (
                          <div>
                            <Modal
                              open={open15m}
                              onClose={handleClose15m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Dr. Bhau Daji Lad Museum Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.9233114356084!2d72.83262661441381!3d18.97899395994754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5b428e70af%3A0x79efde6c140c2e05!2sDr.%20Bhau%20Daji%20Lad%20Museum!5e0!3m2!1sen!2sin!4v1662910147552!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://thumbs.dreamstime.com/b/dr-bhau-daji-lad-mumbai-city-museum-formerly-victoria-albert-oldest-india-99252401.jpg"
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM15}
                              id="viewMoreImagesM15"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen15m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbfifteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbfifteen ? "true" : undefined}
                              onClick={handleClickmbfifteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbfifteen}
                              open={openmbfifteen}
                              onClose={handleClosembfifteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembfifteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.bdlmuseum.org/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembfifteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.bdlmuseum.org/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembfifteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.bdlmuseum.org/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembfifteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM15 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM15}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://thumbs.dreamstime.com/b/dr-bhau-daji-lad-mumbai-city-museum-formerly-victoria-albert-oldest-india-99252401.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/collections/img/galleries/img_01_895X539.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/collections/img/galleries/img_02_895X539.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/collections/img/galleries/img_03_895X539.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/collections/img/galleries/img_04_895X539.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/collections/img/galleries/img_05_895X539.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/collections/img/galleries/img_06_895X539.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/assets/images/collection-01.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/assets/images/collection-02.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://www.bdlmuseum.org/assets/images/collection-03.jpg"
                              alt=""
                            />
                          </div>
                        </div>{" "}
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 16 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Vasai Fort</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Vasai, also called Bassein, lies about 45 kms of
                            Palghar City. it is located in Vasai taluka. The
                            fort in the old city was headquarter of the
                            Portuguese in the north, next in importance to Goa.
                            The coastal land-fort of Vasai was surrounded by sea
                            on three sides and to the landslide it had a moat
                            which was filled by sea-water. its 4.5 kms long
                            strong stone wall had 11 bastions. The fort had two
                            gates- the westward land-gate. There was also a
                            small citadel in the fort well-equipped with
                            water-tanks, store-houses, armory, etc., the fort
                            also had fields for growing grains and vegetables.
                            All the old structures inside the wall are now in
                            ruins.
                          </p>

                          <p className="localAreaMPara">
                            Vasai was the main naval base and sort of
                            ship-building centre of the Portuguese. it was here
                            in 1802 AD, the Peshwa Bajirav signed the infamous
                            ‘Treaty of Bassein’ which virtually dissolved the
                            Maratha Confederacy. Finally, the fort and the city
                            of Vasai were ceded to the British in 1817 AD.
                          </p>
                        </div>

                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://en.wikipedia.org/wiki/Fort_Vasai"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open16m && (
                          <div>
                            <Modal
                              open={open16m}
                              onClose={handleClose16m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Vasai Fort Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.8908281102104!2d72.81339271441891!3d19.330543048946335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae0d11f21ae5%3A0x178d6c5c42c53d28!2sVasai%20Fort!5e0!3m2!1sen!2sin!4v1662911134539!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/structures-of-vasai-fort-picture-id668389858?k=20&m=668389858&s=612x612&w=0&h=9rPryJow5kY8OzuFSlnsPGyAJw8_x0LGZ7yA8cuHdvo="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM16}
                              id="viewMoreImagesM16"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen16m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbsixteen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openmbsixteen ? "true" : undefined}
                              onClick={handleClickmbsixteen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbsixteen}
                              open={openmbsixteen}
                              onClose={handleClosembsixteen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembsixteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://en.wikipedia.org/wiki/Fort_Vasai">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembsixteen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://en.wikipedia.org/wiki/Fort_Vasai">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembsixteen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://en.wikipedia.org/wiki/Fort_Vasai">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembsixteen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM16 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM16}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/structures-of-vasai-fort-picture-id668389858?k=20&m=668389858&s=612x612&w=0&h=9rPryJow5kY8OzuFSlnsPGyAJw8_x0LGZ7yA8cuHdvo="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/structures-of-vasai-fort-picture-id668387768?k=20&m=668387768&s=612x612&w=0&h=Evk4gh97ybYuJWEITnNbGfG6FpX0OB5CUXACuSddksA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/structures-of-vasai-fort-picture-id668387812?k=20&m=668387812&s=612x612&w=0&h=NtcZ6i_0BXCyB7HRshZcyzWCOLxvAI4o3ZttIhAAy7M="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/structures-of-vasai-fort-picture-id668389898?k=20&m=668389898&s=612x612&w=0&h=5ISfEpmL707gb0Fapq2MKOWzZeni8m-pHgQkdt7cGoE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/structures-of-vasai-fort-picture-id668387882?k=20&m=668387882&s=612x612&w=0&h=AyOknl9ODJlm44T7yJqFjo1mSO937EJWyJgomP_YW64="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/the-abandoned-ruins-of-vasai-fort-picture-id1247093811?k=20&m=1247093811&s=612x612&w=0&h=xoPeVKX-Ju67zen4uN1umT6S-nfqeJj9WGxJrZlm5A4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/morning-at-vasai-fort-vasai-thane-maharashtra-india-picture-id1158619807?k=20&m=1158619807&s=612x612&w=0&h=2UW-YcGX4-IhJUjIRF7MeX1u0Oy2FLRJW5Iv26vIc7k="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ancient-portuguese-fort-in-vasai-india-picture-id1203116612?k=20&m=1203116612&s=612x612&w=0&h=pLxfzb4-p9AL7pUypII-hjaea-N7nYRDLNTHsd_2DR0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ancient-portuguese-fort-in-vasai-india-picture-id1203116633?k=20&m=1203116633&s=612x612&w=0&h=rrzjDsYe6-ky1n-dTEGtcZ5FoD83MMgTkKk9n2V-P_M="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ancient-portuguese-fort-in-vasai-india-picture-id1203116688?k=20&m=1203116688&s=612x612&w=0&h=DQE54SU5fg6kbSj67LUd3j-a0P06iwBZdgJV0oJu4N4="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ancient-portuguese-fort-in-vasai-india-picture-id1203116715?k=20&m=1203116715&s=612x612&w=0&h=eE5oTOU65GYMGUsWtX9HmwFOUyg2oHg-AUsMyVuX9H0="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.istockphoto.com/photos/ancient-portuguese-fort-in-vasai-india-picture-id1203116670?k=20&m=1203116670&s=612x612&w=0&h=bTIwM0Cpe_vA0851hsF2WICz_aWM9Oo41JWzn450QxI="
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            {/* 17 */}
            <div className="localAreaAAccordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    <h3>Mani Bhavan Gandhi Sangrahalaya</h3>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="gandhiAshramMain">
                      <div className="gandhiAshramDetails">
                        <div className="gandhiAshramAbout">
                          <p>
                            Mani Bhavan is a simple old-style, two storied
                            building on Laburnum Road, Mumbai. Whenever Gandhiji
                            was in Mumbai between 1917 to 1934, he stayed here.
                            It is now converted into a museum and research
                            centre. Mumbai and its inhabitants have played a
                            very prominent part in India's unique struggle for
                            freedom. Gandhiji was rightly proud of its patriotic
                            and cosmopolitan citizens. Mani Bhavan is one of the
                            few important places hallowed by Mahatma Gandhi's
                            close association.
                          </p>

                          <p className="localAreaMPara">
                            Mani Bhavan, a modest two-storied building on the
                            Laburnum Road in the comparatively quiet locality
                            called Gamdevi, served as Gandhiji's Bombay
                            head-quarters for about seventeen long and eventful
                            years (1917-1934). It belonged to Shri Revashankar
                            Jagjeevan Jhaveri, who was Gandhi's friend and a
                            host during that period. It was from Mani Bhavan
                            that Gandhi initiated Satyagraha against Rowlatt Act
                            and propagated the causes of Swadeshi, Khadi and
                            Hindu-Muslim Unity. In 1955 the building was
                            dedicated as a memorial to Gandhiji and to the very
                            important activities of great significance he
                            initiated from that place.
                          </p>

                          <p className="localAreaMPara">
                            Mani Bhavan has a story to tell as it housed
                            Gandhiji occasionally during the times when he grew
                            in stature and strength, from an agitator to a world
                            figure by successfully introducing satyagraha
                            (individual as well as mass) as a new and effective
                            weapon to fight all evil and injustice.
                          </p>

                          <p className="localAreaMPara">
                            It is obviously impossible to draw the full picture
                            or tell the whole story here. This is an humble
                            attempt to give the reader a few glimpses of the
                            great drama enacted in this small corner of Mumbai
                            by Gandhiji and his illustrious colleagues. To the
                            visitors, it will give an idea of the dynamism of
                            the great Mahatma even while he was shaping himself
                            and the nation, along the uncharted path of
                            non-violent resistance to foreign rule and to all
                            evil.
                          </p>

                          <p className="localAreaMPara">
                            The visitors from all over the world come to Mani
                            Bhavan, to see the Room that Gandhiji occupied, its
                            Picture Gallery, the Library Hall and the Terrace
                            where he was arrested on January 4, 1932.
                          </p>

                          <p className="localAreaMPara">
                            Gandhiji was a dynamic person and he kept on
                            evolving. Even a change in his outward dress
                            indicated an inner change. On his return from South
                            Africa, he flung away the European style of dressing
                            and took to the Indian style. Then again his
                            original Kathiawadi turban was replaced by a
                            Kashmiri cap which in its turn was discarded in
                            favour of a white-cap popularly known as the Gandhi
                            cap. The change ultimately culminated in a bare loin
                            cloth - a significant symbol representing the Indian
                            peasantry and its poverty. Perhaps Mani Bhavan is
                            the only place besides the Sabarmati Ashram, where
                            he donned all these dresses in their sequence.
                          </p>
                        </div>
                        <div className="gandhiAshramSite">
                          <a
                            className="gandhiAshramSiteText"
                            href="https://www.gandhi-manibhavan.org/"
                            target={"blank"}
                          >
                            Learn more...
                          </a>
                        </div>
                      </div>
                      <div className="gandhiAshramImg">
                        {open17m && (
                          <div>
                            <Modal
                              open={open17m}
                              onClose={handleClose17m}
                              aria-labelledby="modal-modal-title"
                              aria-describedby="modal-modal-description"
                            >
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Mani Bhavan Gandhi Sangrahalaya Map
                                </Typography>
                                <Typography
                                  id="modal-modal-description"
                                  sx={{ mt: 2 }}
                                >
                                  <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.355226375237!2d72.80931441441352!3d18.959913060539204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce0c6988759f%3A0x1ffe26352f6ff22e!2sMani%20Bhavan%20Gandhi%20Sangrahalaya!5e0!3m2!1sen!2sin!4v1662912105030!5m2!1sen!2sin"
                                    width={"600"}
                                    height={"450"}
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    title="iframeTitle"
                                  ></iframe>
                                </Typography>
                              </Box>
                            </Modal>
                          </div>
                        )}

                        <div className="gandhiAshramMultipleImgDiv">
                          <img
                            className="gandhiAshramMultipleImg"
                            src="https://media.gettyimages.com/photos/mani-bhavan-picture-id628261720?k=20&m=628261720&s=612x612&w=0&h=Rhk1_0copV0HS7i__j6CIWIqHA7LQQLqvvNbVLVOCk8="
                            alt=""
                          />
                          <div className="gandhiAshramOverlayMain">
                            <div
                              className="gandhiAshramOverlay"
                              onClick={showMoreImagesM17}
                              id="viewMoreImagesM17"
                            >
                              View More Images
                            </div>
                          </div>
                        </div>
                        <div className="gandhiAshramImgbelowPart">
                          <button
                            className="gandhiAshramMap"
                            onClick={handleOpen17m}
                          >
                            SHOW MAP
                          </button>
                          <div>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openmbseventeen ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={
                                openmbseventeen ? "true" : undefined
                              }
                              onClick={handleClickmbseventeen}
                            >
                              <button className="gandhiAshramShare">
                                <Tooltip title="Share">
                                  <ShareIcon className="gandhiAshramShareIcon" />
                                </Tooltip>
                              </button>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorElmbseventeen}
                              open={openmbseventeen}
                              onClose={handleClosembseventeen}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              <MenuItem onClick={handleClosembseventeen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <FacebookShareButton url="https://www.gandhi-manibhavan.org/">
                                    <img
                                      src="/images/FR.png"
                                      className="localAreaSocialImg"
                                      alt="FR"
                                    />
                                  </FacebookShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembseventeen}>
                                {" "}
                                <div className="localAreaShareDiv">
                                  <WhatsappShareButton url="https://www.gandhi-manibhavan.org/">
                                    <img
                                      src="/images/WR.png"
                                      className="localAreaSocialImg"
                                      alt="WR"
                                    />
                                  </WhatsappShareButton>
                                </div>
                              </MenuItem>
                              <MenuItem onClick={handleClosembseventeen}>
                                <div className="localAreaShareDiv">
                                  <TwitterShareButton url="https://www.gandhi-manibhavan.org/">
                                    <img
                                      src="/images/TR.png"
                                      className="localAreaSocialImg"
                                      alt="TR"
                                    />
                                  </TwitterShareButton>
                                </div>
                              </MenuItem>
                              {/* <MenuItem onClick={handleClosembseventeen}><div className="localAreaShareDiv"><img src="/images/IR.png" className="localAreaSocialImg" alt="IR" /></div></MenuItem> */}
                            </Menu>
                          </div>
                        </div>
                      </div>
                    </div>
                    {showImgsM17 && (
                      <div className="withCloseIcon">
                        <div className="closeIconMain">
                          <CancelIcon
                            className="closeIcon"
                            onClick={closeMoreImagesM17}
                          />
                        </div>
                        <div className="gandhiAshramMultipleImagesBelowDivMain">
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mani-bhavan-picture-id628261720?k=20&m=628261720&s=612x612&w=0&h=Rhk1_0copV0HS7i__j6CIWIqHA7LQQLqvvNbVLVOCk8="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/view-of-the-mani-bhavan-gandhi-sangrahalaya-mahatma-gandhi-museum-and-picture-id90566329?k=20&m=90566329&s=612x612&w=0&h=vLmpFKE2dwNVzOJ8MpVhgM3QOTNvPRh_Hv5QqJvmLKk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/view-of-the-mani-bhavan-gandhi-sangrahalaya-mahatma-gandhi-museum-and-picture-id90566300?k=20&m=90566300&s=612x612&w=0&h=2h0BsHFqjsVD8R6pAStRh7YGS-Tzi0XTEsu4z7WXUec="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mani-bhavan-gandhi-sangrahalaya-is-a-memorial-museum-which-housed-picture-id170967846?k=20&m=170967846&s=612x612&w=0&h=gZd15KBIf20_DtNEyLwNnLuqjTHiboJYxiWEZ9L0Bvs="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/mani-bhavan-is-the-house-were-mahatma-gandhi-stayed-during-his-visits-picture-id143075966?k=20&m=143075966&s=612x612&w=0&h=QOEil50s_QJJ1-HXyKi319sSQ2lNErAzRqfBN-7L8tk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gandhis-home-in-bombay-in-mumbai-india-in-january-1997-today-the-home-picture-id124127087?k=20&m=124127087&s=612x612&w=0&h=uQbt_4Lo4Fydlqbq2QE7_7qbso1v4QH3MQ6OPotC-oE="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/gandhis-home-in-bombay-in-mumbai-india-in-january-1997-today-the-home-picture-id124127085?k=20&m=124127085&s=612x612&w=0&h=H9fcnZdLXNzGnhWivkJgDgihkTX3mvAAbTJ1X_GO5DA="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://media.gettyimages.com/photos/view-of-the-mani-bhavan-gandhi-sangrahalaya-mahatma-gandhi-museum-and-picture-id90566315?k=20&m=90566315&s=612x612&w=0&h=H8KpnWU953NSKluBo8EDTK65cNHvCKjh0Tqi56iPTzk="
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://fastly.4sqi.net/img/general/600x600/3539416_wf8Co0goLwLyxOU77H3FQHrkGGXrHMbRGWwXYx-4S5s.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://fastly.4sqi.net/img/general/600x600/62778_SYZU6yfPdfkofF7-fIQ_KFJRHyYNrIfo-QP1BuqeCCE.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://fastly.4sqi.net/img/general/600x600/1677418_b4FJ1JdpptVxP0YjWa1oyPbv6T1r1IQ0I_B3YP0uo4o.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gandhiAshramMultipleImagesBelow">
                            <img
                              className="extraImgs"
                              src="https://fastly.4sqi.net/img/general/600x600/151204961_B3GJtiItso3F0-JP1B1DSRB57jctCWsw2fyKtZzmxtY.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </>
      )}
      {/* Mumbai End */}
      <div className="localAreaFooter">
        <Footer />
      </div>
    </>
  );
};

export default LocalArea;
