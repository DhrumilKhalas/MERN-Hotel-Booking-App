import React, { useState } from "react";
import "./localAreaD.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShareIcon from "@mui/icons-material/Share";
import CancelIcon from "@mui/icons-material/Cancel";

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
};

const LocalAreaD = () => {
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

  return (
    <>
      {/* Main Div Start */}
      <div className="localAreaDAccordianMain">
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
                        enclosing walls of red sandstone, it is adjacent to an
                        older fort, the Salimgarh, built by Islam Shah Suri in
                        1546, with which it forms the Red Fort Complex. The
                        private apartments consist of a row of pavilions
                        connected by a continuous water channel, known as the
                        Nahr-i-Behisht (Stream of Paradise). The Red Fort is
                        considered to represent the zenith of Mughal creativity
                        which, under the Shah Jahan, was brought to a new level
                        of refinement. The planning of the palace is based on
                        Islamic prototypes, but each pavilion reveals
                        architectural elements typical of Mughal building,
                        reflecting a fusion of Persian, Timurid and Hindu
                        traditions The Red Fort’s innovative planning and
                        architectural style, including the garden design,
                        strongly influenced later buildings and gardens in
                        Rajasthan, Delhi, Agra and further afield.
                      </p>
                      <p className="localAreaDPara">
                        This palace fortress is known as the Red Fort because of
                        the red sandstone fabric of its rampart walls. The fort
                        with its halls, palaces, pavilions and serene gardens
                        was completed in 1648. Within the enclosure of the red
                        fort are located many fairytale buildings. The
                        Diwan-i-Khas (also known as Shah Mahal) and the Rang
                        Mahal (also called Imtiyaz Mahal or palace of
                        distinctions) are the two most conspicuous buildings
                        inside the Red Fort. The Hall of Public Audience
                        (Diwan-i- Aam) is another famous building within the Red
                        Fort. Son-et-lumiere shows, tracing the history of the
                        Mughal Empire in India, outlining their glory and the
                        eventful causes for their downfall are held in the Red
                        Fort every evening.
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
                      <button className="localAreaDMap" onClick={handleOpen1}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        Qutab Minar is a soaring, 73 m-high tower of victory,
                        built in 1193 by Qutab-ud-din Aibak immediately after
                        the defeat of Delhi's last Hindu kingdom. The tower has
                        five distinct storeys, each marked by a projecting
                        balcony and tapers from a 15 m diameter at the base to
                        just 2.5 m at the top. The first three storeys are made
                        of red sandstone; the fourth and fifth storeys are of
                        marble and sandstone. At the foot of the tower is the
                        Quwwat-ul-Islam Mosque, the first mosque to be built in
                        India. An inscription over its eastern gate
                        provocatively informs that it was built with material
                        obtained from demolishing '27 Hindu temples'. A 7 m-high
                        iron pillar stands in the courtyard of the mosque. It is
                        said that if you can encircle it with your hands while
                        standing with your back to it your wish will be
                        fulfilled.
                      </p>
                      <p className="localAreaDPara">
                        The origins of Qutab Minar are shrouded in controversy.
                        Some believe it was erected as a tower of victory to
                        signify the beginning of the Muslim rule in India.
                        Others say it served as a minaret to the muezzins to
                        call the faithful to prayer.", "No one can, however,
                        dispute that the tower is not only one of the finest
                        monuments in India, but also in the world. Qutab-ud-din
                        Aibak, the first Muslim ruler of Delhi, commenced the
                        construction of the Qutab Minar in 1200 AD, but could
                        only finish the basement. His successor, Iltutmush,
                        added three more storeys, and in 1368, Firoz Shah
                        Tughlak constructed the fifth and the last storey.
                      </p>
                      <p className="localAreaDPara">
                        The development of architectural styles from Aibak to
                        Tughlak is quite evident in the minar. The relief work
                        and even the materials used for construction differ. The
                        238 feet Qutab Minar is 47 feet at the base and tapers
                        to nine feet at the apex. The tower is ornamented by
                        bands of inscriptions and by four projecting balconies
                        supported by elaborately decorated brackets. Even though
                        in ruins, the Quwwat Ui Islam (Light of Islam) Mosque in
                        the Qutab complex is one of the most magnificent
                        structures in the world. Qutab-ud-din Aibak started its
                        construction in 1193 and the mosque was completed in
                        1197.
                      </p>
                      <p className="localAreaDPara">
                        Iltutmush in 1230 and Alla-ud-din Khilji in 1315 made
                        additions to the building. The main mosque comprises of
                        an inner and outer courtyard,decorated with shafts and
                        surrounded by piller. Most of these shafts are from the
                        27 Hindu temples, which were plundered to construct the
                        mosque. It is, therefore, not surprising that the Muslim
                        mosque has typical Hindu ornamentation. Close to the
                        mosque is one of Delhi's most curious antiques, the Iron
                        Pillar.
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
                      <button className="localAreaDMap" onClick={handleOpen2}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        The Lotus Temple, located in Delhi, India, is a Bahá’í
                        House of Worship that was dedicated in December 1986,
                        costing $10 million. Notable for its flowerlike shape,
                        it has become a prominent attraction in the city. Like
                        all Bahá’í Houses of Worship, the Lotus Temple is open
                        to all, regardless of religion or any other
                        qualification. The building is composed of 27
                        free-standing marble-clad “petals” arranged in clusters
                        of three to form nine sides, with nine doors opening
                        onto a central hall with a height of slightly over 40
                        metres and a capacity of 2,500 people. The Lotus Temple
                        has won numerous architectural awards and has been
                        featured in many newspaper and magazine articles. A 2001
                        CNN report referred to it as the most visited building
                        in the world.
                      </p>
                      <p className="localAreaDPara">
                        Lotus temple is situated near Nehru Place and Kalkaji
                        Mandir metro station is just 500 meters away.
                      </p>
                      <p className="localAreaDPara">
                        The temple is in the village of Bahapur in New Delhi,
                        National Capital Territory of Delhi. The architect was
                        an Iranian, Fariborz Sahba who now lives in Canada. He
                        was approached in 1976 to design the Lotus Temple and
                        later oversaw its construction. The structural design
                        was undertaken by the UK firm Flint and Neill over the
                        course of 18 months, and the construction was done by
                        ECC Construction Group of Larsen & Toubro Limited. The
                        major part of the funds needed to buy this land was
                        donated by Ardishír Rustampúr of Hyderabad, Sindh, who
                        gave his entire life savings for this purpose in 1953. A
                        portion of the construction budget was saved and used to
                        build a greenhouse to study indigenous plants and
                        flowers that would be appropriate for use on the site.
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
                      <button className="localAreaDMap" onClick={handleOpen3}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        At the centre of New Delhi stands the 42 m high India
                        Gate, an 'Arc-de-Triomphe' like archway in the middle of
                        a crossroad. Almost similar to its French counterpart,
                        it commemorates the 70,000 Indian soldiers who lost
                        their lives fighting for the British Army during the
                        World War I. The memorial bears the names of more than
                        13,516 British and Indian soldiers killed in the
                        Northwestern Frontier in the Afghan war of 1919.
                      </p>
                      <p className="localAreaDPara">
                        The foundation stone of India Gate was laid by His Royal
                        Highness, the Duke of Connaught in 1921 and it was
                        designed by Edwin Lutyens. The monument was dedicated to
                        the nation 10 years later by the then Viceroy, Lord
                        Irwin. Another memorial, Amar Jawan Jyoti was added much
                        later, after India got its independence. The eternal
                        flame burns day and night under the arch to remind the
                        nation of soldiers who laid down their lives in the
                        Indo-Pakistan War of December 1971.
                      </p>
                      <p className="localAreaDPara">
                        The entire arch stands on a low base of red Bharatpur
                        stone and rises in stages to a huge moulding. The
                        cornice is inscribed with the Imperial suns while both
                        sides of the arch have INDIA, flanked by the dates
                        MCMXIV (1914 left) and MCMXIX (1919 right). The shallow
                        domed bowl at the top was intended to be filled with
                        burning oil on anniversaries but this is rarely done.",
                        "During nightfall, India Gate is dramatically floodlit
                        while the fountains nearby make a lovely display with
                        coloured lights. India Gate stands at one end of
                        Rajpath, and the area surrounding it is generally
                        referred to as 'India Gate'.", "Surrounding the imposing
                        structure is a large expanse of lush green lawns, which
                        is a popular picnic spot. One can see hoards of people
                        moving about the brightly lit area and on the lawns on
                        summer evenings.
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
                      <button className="localAreaDMap" onClick={handleOpen4}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        This great mosque of Old Delhi is the largest in India,
                        with a courtyard capable of holding 25,000 devotees. It
                        was begun in 1644 and ended up being the final
                        architectural extravagance of Shah Jahan, the Mughal
                        emperor who built the Taj Mahal and the Red Fort.
                      </p>
                      <p className="localAreaDPara">
                        The highly decorative mosque has three great gates, four
                        towers and two 40 m-high minarets constructed of strips
                        of red sandstone and white marble. Travellers can hire
                        robes at the northern gate. This may be the only time
                        you get to dress like a local without feeling like an
                        outsider so make the most of it.
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
                      <button className="localAreaDMap" onClick={handleOpen5}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        It was built in 1565 A.D. nine years after the death of
                        Humayun, by his senior widow Bega Begam. Inside the
                        walled enclosure the most notable features are the
                        garden squares (chaharbagh) with pathways water
                        channels, centrally located well proportional mausoleum
                        topped by double dome.
                      </p>
                      <p className="localAreaDPara">
                        There are several graves of Mughal rulers located inside
                        the walled enclosure and from here in 1857 A.D;
                        Lieutenant Hudson had captured the last Mughal emperor
                        Bahadur Shah II.
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
                      <button className="localAreaDMap" onClick={handleOpen6}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        'Akshardham' means the divine abode of God. It is hailed
                        as an eternal place of devotion, purity and peace.
                        Swaminarayan Akshardham at New Delhi is a Mandir – an
                        abode of God, a Hindu house of worship, and a spiritual
                        and cultural campus dedicated to devotion, learning and
                        harmony. Timeless Hindu spiritual messages, vibrant
                        devotional traditions and ancient architecture all are
                        echoed in its art and architecture.The mandir is a
                        humble tribute to Bhagwan Swaminarayan (1781- 1830), the
                        avatars, devas and great sages of Hinduism. The
                        traditionally-styled complex was inaugurated on 6
                        November 2005 with the blessings of HH Pramukh Swami
                        Maharaj and through the devoted efforts of skilled
                        artisans and volunteers.
                      </p>
                      <p className="localAreaDPara">
                        Each element of Akshardham echoes with spirituality –
                        the Mandir, the Exhibitions and even the Gardens.The
                        Akshardham mandir has over two hundred murtis,
                        representing many of the spiritual stalwarts over many
                        millennia. The spiritual premise of Akshardham is that
                        each soul is potentially divine. Whether we are serving
                        the family, the country our neighbors or all living
                        beings the world over , each service can help one move
                        towards divinity. Each prayer is a call towards
                        improving oneself and moving closer to God.
                      </p>
                      <p className="localAreaDPara">
                        A visit to Akshardham is a spiritually enriching
                        experience. Whether it is in realising the power of
                        prayer, in feeling the strength of non-violence, in
                        being aware of the universal nature of Hinduism’s
                        ancient principles, or just in admiring the beauty of
                        God’s abode on Earth –- each element has a spiritual
                        significance.
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
                      <button className="localAreaDMap" onClick={handleOpen7}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        Laxmi Narayan Temple, also known as Birla Mandir, is one
                        of Delhi's major temples and a major tourist attraction.
                        Built by the industrialst Sh. J.K. Birla in 1939, this
                        beautiful temple is located in the west of Connaught
                        Place.
                      </p>
                      <p className="localAreaDPara">
                        The temple is dedicated to Laxmi (the goddess of
                        prosperity) and Narayana (The preserver). The temple was
                        inaugurated by Mahatma Gandhi on the condition that
                        people of all castes will be allowed to enter the
                        temple.
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
                      <button className="localAreaDMap" onClick={handleOpen8}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        GURDWARA SRI BANGLA SAHIB is situated in the Delhi City.
                        Built in the sacred visit of SRI GURU HARKRISHAN JI to
                        Delhi. At the request of Mughal King Aurangzeb and
                        through the persuasion of Mirza Raja Jai Singh of Amber,
                        GURU SAHIB agreed to come to Delhi. Raja Jai Singh
                        invited GURU SAHIB to the present site which originally
                        belonged to Raja Jai Singh. Raja's wife thought of
                        testing the spiritual powers of the GURU SAHIB and
                        disguised herself as maid servant and sat among the
                        attendants. GURU SAHIB at the age of 8 years identified
                        the RANI and sat in her lap. Thus convincing her of the
                        the spiritual powers of SRI GURU NANAK DEV JI and his
                        True Disciples. In those days small pox was raging in
                        the city of Delhi on an epidemic form.
                      </p>
                      <p className="localAreaDPara">
                        The citizens of Delhi suffered grief and death As a
                        result of calamity that had befallen there. GURU SAHIB
                        out of love and compassion for suffering humanity dipped
                        his holy feet in water and poured charan amrit into
                        small chaubacha (tank). All those who took water from
                        caubacha were cured from the disease. Thus the people of
                        Delhi were saved from that epidemic. Devotees with faith
                        and devotion come from far and near and get rid of
                        suffering by taking a dip in the holy water.
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
                      <button className="localAreaDMap" onClick={handleOpen9}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        greenery.Built on the site of the most ancient of the
                        numerous cities of Delhi, Indraprastha, Purana Quila is
                        roughly rectangular in shape having a circuit of nearly
                        two kilometers.
                      </p>
                      <p className="localAreaDPara">
                        The thick ramparts crowned by merlons have three
                        gateways provided with bastions on either side. It was
                        surrounded by a wide moat, connected to river Yamuna,
                        which used to flow on the east of the fort. The northern
                        gate way, called the Talaqui darwaza or the forbidden
                        gateway, combines the typically Islamic pointed arch
                        with Hindu Chhatris and brackets; whereas the southern
                        gateway called the Humayun Darwaza also had a similar
                        plan.
                      </p>
                      <p className="localAreaDPara">
                        The massive gateway and walls of Purana Quila were built
                        by Humayun and the foundation laid for the new capital,
                        Dinpanah. The work was carried forward by Sher Shah
                        Suri,who displaced Humayun, Purana Quila is the venue
                        for the spectacular sound and light show held every
                        evening.
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
                      <button className="localAreaDMap" onClick={handleOpen10}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        Earlier known as Lady Willingdon Park, Lodhi Gardens is
                        a captivating park, located in the New Delhi. It lies
                        between the Khan Market and the Safdarjung Tomb. Lodi
                        Gardens present an impressive blend of lush greenery and
                        majestic architectures which belong to 15th and 16th
                        century.
                      </p>
                      <p className="localAreaDPara">
                        Lodhi Gardens offer an ideal setting for family outings
                        as well as a perfect spot for those seeking some
                        peaceful time amid the refreshing nature. Sunset is
                        especially breathtaking at the Lodhi Gardens. Adding to
                        natural greenery are the impressive structures of tombs
                        and mosques.
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
                      <button className="localAreaDMap" onClick={handleOpen11}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        Rashtrapati Bhavan, home to the President of the world’s
                        largest democracy, epitomizes India’s strength, its
                        democratic traditions and secular character.
                      </p>
                      <p className="localAreaDPara">
                        Rashtrapati Bhavan was the creation of architects of
                        exceptional imagination and masterfulness, Sir Edwin
                        Lutyens and Herbert Baker. It was Sir Lutyens who
                        conceptualized the H shaped building, covering an area
                        of 5 acres on a 330 acre estate. This mansion has a
                        total of 340 rooms spread over four floors, 2.5
                        kilometres of corridors and 190 acres of garden area.
                      </p>
                      <p className="localAreaDPara">
                        Painstaking efforts of thousands of labourers including
                        masons, carpenters, artists, carvers, and cutters saw
                        the completion of this masterwork in the year 1929.
                        Originally built as the residence for the Viceroy of
                        India, Viceroy's House as it was then called, has
                        metamorphosed into today’s Rashtrapati Bhavan. From
                        being a symbol of imperial domination and power, it is
                        today emblematic of Indian democracy and its secular,
                        plural and inclusive traditions. Former President of
                        India, Shri R. Venkataraman has rightly said, 'Nature
                        and man, rock and architecture, have rarely collaborated
                        to so fine a purpose as in the fashioning of the
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
                      <button className="localAreaDMap" onClick={handleOpen12}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        Raj Ghat is a memorial to Mahatma Gandhi. It’s located
                        not far from the river Yamuna and was originally the
                        name of a historic ghat. There was the ‘Raj Ghat Gate’
                        of the walled city, opening at Raj Ghat on the Yamuna.
                        Eventually, the memorial area was also called Raj Ghat.
                        It was here where Mahatma Gandhi’s last rites were
                        performed on January 31, 1948, a day after his death.
                      </p>
                      <p className="localAreaDPara">
                        This memorial to Mahatma Gandhi is located between Ring
                        Road and the banks of the Yamuna River, towards the
                        southeast of Red Fort, and four kilometers away from
                        Janpath, towards the northeast of Feroz Shah. A black
                        marble platform marks the spot of Mahatma Gandhi’s
                        cremation, attracting many tourists. His last words,
                        ‘Hey Ram,’ are inscribed on the marble which is always
                        adorned with flowers. The memorial was designed by Vanu
                        G. Bhuta, who intended it to reflect the simplicity of
                        the Mahatma’s life. It is uncovered, with an eternal
                        flame that burns continuously at one end.
                      </p>
                      <p className="localAreaDPara">
                        Foreign dignitaries visiting India pay respect to Gandhi
                        by laying flowers on the platform. A remembrance
                        ceremony is held every Friday at Raj Ghat, along with
                        the prayer sessions held on Gandhi’s birth and death
                        anniversaries. There is also a Gandhi Memorial Museum
                        where a film is shown – between 9:30 am and 5:30 pm
                        except on Thursday – about his life and philosophy. It
                        is also presented on Sunday in Hindi at 4 pm, and at 5
                        pm, it is shown in English.
                      </p>
                      <p className="localAreaDPara">
                        Within the complex, there are trees labeled near the
                        platform, which were planted by various dignitaries,
                        including Queen Elizabeth II, former Australian Prime
                        Minister Gough Whitman, Ho Chi Minh, former US President
                        Dwight Eisenhower, and many others.
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
                      <button className="localAreaDMap" onClick={handleOpen13}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        Jantar Mantar (Yantra - instruments, mantra - formulae)
                        was constructed in 1724. Maharaja Jai Singh of Jaipur
                        who built this observatory went on to build other
                        observatories in Ujjain , Varanasi and Mathura. Jai
                        Singh had found the existing astronomical instruments
                        too small to take correct measurements and so he built
                        these larger and more accurate instruments.
                      </p>
                      <p className="localAreaDPara">
                        The instruments at Jantar Mantar are fascinating for
                        their ingenuity, but accurate observations can no longer
                        be made from here because of the tall buildings around.
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
                      <button className="localAreaDMap" onClick={handleOpen14}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        The National Museum, New Delhi, as we see it today, has
                        an interesting beginning. The blueprint for establishing
                        the National Museum in Delhi was prepared by the Maurice
                        Gwyer Committee in May 1946. An Exhibition of Indian
                        Art, consisting of selected artefacts from various
                        museums of India was organized by the Royal Academy,
                        London with the cooperation of Government of India and
                        Britain. The Exhibition went on display in the galleries
                        of Burlington House, London during the winter months of
                        1947-48. It was decided to display the same collection
                        in Delhi, before the return of exhibits to their
                        respective museums. An exhibition was organized in the
                        the RashtrapatiBhawan (President's residence), New Delhi
                        in 1949, which turned out to be a great success. This
                        event proved responsible for the creation of the
                        National Museum.
                      </p>
                      <p className="localAreaDPara">
                        The success of this Exhibition led to the idea that
                        advantage should be taken of this magnificent collection
                        to build up the nucleus collection of the National
                        Museum. State Governments, Museum authorities and
                        private donors, who had participated in the exhibition,
                        were approached for the gift or loan of artefacts, and
                        most of them responded generously.
                      </p>
                      <p className="localAreaDPara">
                        On August 15, 1949, the National Museum, New Delhi, was
                        inaugurated in the Rashtrapati Bhawan by Shri R.C.
                        Rajagopalachari, the Governor-General of India. The
                        foundation of the present building was laid by Pandit
                        Jawaharlal Nehru, the Prime Minister of India, on May
                        12, 1955. The first phase of the National Museumbuilding
                        was formally inaugurated by Dr. SarvepalliRadhakrishnan,
                        the Vice President of India, on December 18, 1960. The
                        second phase of the building was completed in 1989.
                      </p>
                      <p className="localAreaDPara">
                        While the Museum continued to grow its collection
                        through gifts that were sought painstakingly, artefacts
                        were collected through its Arts Purchase Committee. The
                        Museum presently holds approximately 2,00,000 objects of
                        diverse nature, both Indian as well as foreign, and its
                        holdings cover a time span of more than five thousand
                        years of Indian cultural heritage.
                      </p>
                      <p className="localAreaDPara">
                        The National Museum was initially looked after by the
                        Director General of Archaeology until 1957, when the
                        Ministry of Education, Government of India, declared it
                        a separate institution and placed it under its own
                        direct control. At present, the National Museum is under
                        the administrative control of the Ministry of Culture,
                        Government of India.
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
                      <button className="localAreaDMap" onClick={handleOpen15}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        Every other day, there are travellers who come to Delhi
                        in search of a great wildlife experience, which the city
                        soulfully offers too. The National Zoological Park is
                        one such place in Delhi which from the year 1950 has
                        been giving tourists a fun-filled adventure through the
                        wild. Over 1300 animals and birds from travel
                        destinations like Africa, the United States, and
                        Australia are sheltered here.
                      </p>
                      <p className="localAreaDPara">
                        The zoo is counted among the list of largest and most
                        well maintained zoological parks around Asia. From the
                        very entrance of the zoo, one can spot a lake where
                        ducks and storks are seen enjoying each-others company.
                        Wildlife lovers are in for a surprise as animals that
                        they can spot here range from Blackbuck, Rhinoceros,
                        Giraffe, White Tiger, Chimpanzees, Jaguar, Gir Lion to
                        name a few.
                      </p>
                      <p className="localAreaDPara">
                        According to the authorities, birds from far corners
                        like Arctic and Serbia are believed to mark their
                        presence in the summer season. Apart from the fauna, the
                        flora is also something that is worth noticing as it not
                        only beautiful but also gives a cozy environment to the
                        wild species.
                      </p>
                      <p className="localAreaDPara">
                        National Zoological Park serves as the perfect place to
                        spend some free time and to enjoy a boat ride. Winters
                        is considered the most ideal time to pay a visit here as
                        the weather stays in favour of tourists as they can
                        easily explore every part of the park.
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
                      <button className="localAreaDMap" onClick={handleOpen16}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        The National Handicrafts and Handlooms Museum, popularly
                        known as the National Crafts Museum & Hastkala Academy,
                        celebrates the rich, diverse, and practising craft
                        traditions of India. Situated in a large campus at the
                        corner of Pragati Maidan, opposite the majestic Purana
                        Qila, the museum was designed by the renowned architect
                        Charles Correa.
                      </p>
                      <p className="localAreaDPara">
                        At present the Museum collection consists of over 33,000
                        specimens in various crafts, acquired over a period of
                        60 years collected from various states of India named as
                        Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Delhi,
                        Gujarat, Haryana, Himachal Pradesh, Jammu and Kashmir,
                        Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur,
                        Meghalaya, Mizoram, Nagaland, Orissa, Punjab, Rajasthan,
                        Tamil Nadu, Tripura, Uttar Pradesh, West Bengal. The
                        collection reflects the continuing traditions of
                        handicrafts and handlooms.
                      </p>
                      <p className="localAreaDPara">
                        Museum collection consists of a variety of traditional
                        artifacts such as Textiles, a vast range of metal lamps,
                        sculptures, utensils etc, Wood-works, Folk/tribal
                        paintings , range of cane and bamboo crafts, clay and
                        terracotta figures and a lot more. The exquisite
                        examples of textiles include Kalamkaris, Jamawars,
                        Pashmina and Shahtosh shawls, embroidered fabrics
                        especially Kanthas, Chikankari works and chaklas Tie and
                        Die (Bandhani) fabrics, Baluchar and Jamdaani saris,
                        Pichwais, phulkaris, Ikat fabrics of Orissa, Chamba
                        Rumals, Block printed textile fabrics of Gujarat and
                        Rajasthan, Himru textile pieces of Maharashtra, Naga
                        shawls, Chanderi saris and a variety of tribal textiles
                        of the Lambadi, Toda and Naga tribes of North- eastern
                        India.
                      </p>
                      <p className="localAreaDPara">
                        The rare and finest specimens of traditional Indian
                        handicrafts and handlooms are preserved with the
                        objective that these would serve as source material for
                        the revival, reproduction and development of Indian
                        crafts. These source materials are meant for the master
                        craftsmen, art-historians and craft designers along with
                        the people who are interested to know our age-old
                        cultural heritage. Museum is a special attraction for
                        foreign tourists who wish to have a glimpse of our
                        material culture.
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
                      <button className="localAreaDMap" onClick={handleOpen17}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
                        splendid more than 166 years of rich heritage of Indian
                        Railway sprawling in over 11 acres of land. Emulating
                        the setting of a railway yard, the extensive outdoor
                        gallery houses a variety of steam, diesel and electric
                        locomotives along with fascinating collection of royal
                        saloons, wagons, carriages, armored trains, rail cars
                        and a turntable. These original life-size exhibits have
                        been well maintained and restored. Interactive displays
                        and models exhibited inside the Indoor gallery displays
                        the remarkable stories related to early modes of
                        transportation till date and future endeavors in Indian
                        Railways. There are also some remarkable collections of
                        historical photographs, documents, railway artifacts,
                        static exhibits, antiquated items and old furniture
                        which enhance the experience of around 05 lakhs visitors
                        every year and envisioned them how a single investment
                        of Indian Railway helped in unification and progress of
                        India as a nation.
                      </p>
                      <p className="localAreaDPara">
                        Spend a day with your family & friends and enjoy joy and
                        toy train rides, 3D virtual coach ride, Diesel and Steam
                        Simulators, coupled with a lavish meal at recently built
                        rail restaurant.
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
                      <button className="localAreaDMap" onClick={handleOpen18}>
                        SHOW MAP
                      </button>
                      <button className="localAreaDShare">
                        <ShareIcon className="localAreaDShareIcon" />
                      </button>
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
      {/* Main Div End */}
    </>
  );
};

export default LocalAreaD;
