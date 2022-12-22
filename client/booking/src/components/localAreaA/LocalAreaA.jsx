import React, { useState } from "react";
import "./localAreaA.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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

const LocalAreaA = () => {
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
    document.getElementById("localAreaDFouraa").removeAttribute("style");
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

  return (
    <>
      <div className="localAreaAAccordianMain">
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
                        Sabarmati very close to the Saint Dadheechi’s temple as
                        well as from Jail and a crematorium. Gandhi used to
                        remark, "This is the right place for our activities to
                        carry on the search for Truth and develop Fearlessness
                        for on one side are the iron bolts of the foreigners and
                        on the other, thunderbolts of mother nature." After
                        building a few essential structures, activities of the
                        Ashram commenced in 1917.
                      </p>

                      <p id="gandhiAshramsecondpara">
                        Gandhiji had driven all the major activities of
                        independence as well as upliftment of the society from
                        this Ashram which was popularly known as Sabarmati
                        Ashram. He stayed in the ashram for many years before he
                        finally proceeded for a march to Dandi to break the salt
                        law on 12 March 1930. Before starting the march to
                        Dandi, Gandhiji declared that he will not return to the
                        ashram before the independence of the country.
                      </p>

                      <p id="gandhiAshramthirdpara">
                        The Gandhi Smarak Sangrahalaya is run by a public trust
                        established in 1951. The museum’s new premises were
                        built in 1963. The museum’s main objective is to house
                        the personal memorabilia of Mahatma Gandhi. Consequently
                        the exhibits on view depict the vivid and historic
                        events of Gandhiji’s life. There are books, manuscripts
                        and photocopies of his correspondence, photographs of
                        Gandhiji with his wife Kasturba and other ashram
                        associates, life size oil paintings and actual relics
                        like his writing desk and spinning wheel.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        marble has been sacred to many Jain families, generation
                        after generation. It was built in 1848 A.D. at an
                        estimated cost of 10 lakh rupees by a rich merchant
                        Sheth Hutheesing as a dedication to the 15th Jain
                        Tirthankara, Shri Dharmanatha. Traditional artisans
                        working in stone belonged to the Sonpura & Salat
                        communities. The Salat community constructed
                        masterpieces of architecture ranging from forts, palaces
                        to temples. The work of the Hutheesing Jain temple is
                        attributed to Premchand Salat. One scholar has remarked,
                        "Each part goes on increasing in dignity as we approach
                        the sanctuary. Whether looked at from its courts or from
                        the outside, it possesses variety without confusion and
                        appropriateness of every part to the purpose for which
                        it was intended."
                      </p>

                      <p id="hutheesingTemplesecondpara">
                        Located outside the Delhi Gate, the temple is spread
                        over a sprawling courtyard, a mandapa surmounted by a
                        large ridged dome, which is supported by 12 ornate
                        pillars. The small garbhagruh (main shrine) on the east
                        end reaches up into three stunningly carved spires and
                        encircled by 52 small shrines dedicated to the various
                        Tirthankars. There are large protruding porches with
                        magnificently decorated columns and figural brackets on
                        three outer sides. Also, a recently built 78 ft Mahavir
                        stambha (tower) fashioned after the renowned tower at
                        Chittor in Rajasthan, flanks the outer courtyard by the
                        front entrance. Some of the motifs used in the design
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        little of its grandeur over the last few centuries. Till
                        date, the intricate carvings on the pillars that support
                        the five storeys are mostly intact; the beams work as
                        pit stops for pigeons flying in and out and the
                        structure still leaves jaws dropped for swarms of
                        people. The step-well represents the Indo-Islamic fusion
                        architecture that percolated through the many stepwells
                        of the period. There are some fascinating features of
                        the vav that make this an important emblem of superior
                        architecture. The opening in the ceilings above the
                        landing allows light and air to enter the octagonal
                        well, but direct sunlight never touches the steps except
                        at noon. It is said that the temperature inside the well
                        is six degrees cooler than outside. The stepwell has
                        three entrances. The stairs lead to an underground
                        storey, which has an octagonal opening on top. The walls
                        are covered in ornamental carvings with mythological and
                        village scenes. Some of them include Ami khumbor (a pot
                        that contains the water of life) and the Kalp vriksha (a
                        tree of life) carved out of a single slab of stone.
                        There is a belief that the small frieze of Navagraha
                        (nine-planets) towards the edge of the well protects the
                        monument from bad omens.
                      </p>

                      <p id="adalajStepwellsecondpara">
                        The stepwell was built by Mahmud Begada in 1411, to
                        commemorate Queen Rudabai, wife of Veersinh, the Vaghela
                        chieftain. It served both a utilitarian and spiritual
                        purpose for the people around. A number of people from
                        villages around once filled water from this stepwell.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Gujarat, on the western coast of India, is one of the
                        most prosperous and progressive Indian states. It came
                        into existence in 1960 when it was separated from the
                        State of Bombay. It is spread over an area of 1,96,024
                        square kms and has a population of 64 million.
                      </p>

                      <p id="sciencecitysecondpara">
                        The Government of Gujarat has established the Gujarat
                        Council of Science City, a registered society, to
                        achieve the Gujarat Science City mandate. The Government
                        is already in possession of 107 hectares of land.
                      </p>

                      <p id="sciencecitythirdpara">
                        Popularization of science to create scientific temper in
                        the community is a priority in the emerging environment
                        of knowledge-driven economic growth.
                      </p>

                      <p id="sciencecityforthpara">
                        Gujarat Science City is a bold initiative of the
                        Government of Gujarat to realize this priority. The
                        Government is creating a sprawling center at Ahmedabad
                        which aims to provide a perfect blend of education and
                        entertainment. It will showcase contemporary and
                        imaginative exhibits, minds on experiences, working
                        models, virtual reality, activity corners, labs and live
                        demonstrations to provide an understanding of science
                        and technology to the common man.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        One of the biggest personal collections of vintage cars,
                        bikes, buggies and utility vehicles, Auto World is a
                        delight for those who love wheels. Amongst the 300 plus
                        menu of mechanical extravaganza, some noted ones stand
                        out; the car that was used in the movie Gandhi and the
                        first May Bach ever made. Visitors can also find rare
                        and wonderful assemblage of vehicles including a
                        Bentley, Lagonda, Rolls Royce, Cadillac, Austin, Jaguar,
                        Mercedes and Auburns. The 1923 Rolls 20 HP with a
                        typical shooting brake-body by Barker is one of the most
                        fascinating cars from the Rolls Royce cache. The museum
                        has also found a place in the Guinness Book of World
                        Records for this amazing collection.
                      </p>

                      <p id="carmuseumsecondpara">
                        Pranlal Bhogilal started the Auto World Museum in his
                        private estate of 2200 acres, Dastan, in 1927, and
                        earned the Guinness Book of World Record listing in 1987
                        as the owner of the world's largest private garage. An
                        enthusiast for many years, Bhogilal collected over 204
                        cars of which 105 are in Ahmedabad. He ensured that all
                        cars were in running condition. Pranlal Bhogilal passed
                        away in 2011 at the age of 73. It is said that in 2006,
                        Ulrich Schmid-Maybach of the illustrious Maybach family
                        flew down to Ahmedabad from Germany to convince Pranlal
                        Bhogilal to sell him a 6-cylinder Maybach that was
                        designed by his grandfather. Bhogilal refused to part
                        with this treasure.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        'Akshardham' literally means the divine abode of God. It
                        is an eternal place for one to offer devotion and
                        experience everlasting peace. Swaminarayan Akshardham at
                        Gandhinagar is a mandir – a Hindu house of worship, a
                        dwelling place for God, and a spiritual and cultural
                        campus dedicated to devotion, education and unification.
                        Timeless devotional messages and vibrant Hindu
                        traditions are echoed in its art and architecture. The
                        mandir is a humble tribute to Bhagwan Swaminarayan
                        (1781- 1830) and the avatars, devas and sages of
                        Hinduism. This traditionally-styled complex was
                        inaugurated on October 30th, 1992 with the blessings of
                        HH Pramukh Swami Maharaj and through the devoted efforts
                        of skilled artisans and volunteers.
                      </p>

                      <p id="akshardhamsecondpara">
                        Each element of Akshardham echoes with spirituality –
                        the mandir, the exhibitions and even the gardens. The
                        Akshardham mandir has over two hundred murtis (idols),
                        representing spiritual stalwarts from over many
                        millennia. The spiritual premise of Akshardham is that
                        each soul is potentially divine. Whether we are serving
                        the family, our neighbors, the country, or people all
                        around the world, each act of kindness can help one move
                        towards divinity. Each prayer is an endeavor in
                        self-improvement and a step closer to God.
                      </p>

                      <p id="akshardhamthirdpara">
                        A visit to Akshardham is an enriching experience.
                        Whether it is in realizing the power of prayer, in
                        feeling the strength of non-violence, in becoming aware
                        of the universal nature of Hinduism’s ancient
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        As one traverses the length and breadth of Gujarat, one
                        constantly stumbles across architectural legacies of the
                        'Solanki' rule. You keep coming across, living spaces
                        and monuments of another time, offering an eclectic
                        glimpse of the artistic and ingenious beauty that makes
                        this exotically state vibrant.
                      </p>

                      <p id="suntemplesecondpara">
                        A soothing drive amidst green farmlands just 25 km away
                        from Mehsana on the way to the temples of goddess
                        Bahucharaji reposes the village of Modhera. Set along
                        the backdrop of River Pushpavati, surrounded by a
                        terra-formed garden of flowering trees and songs of
                        birds, rests the famed Sun temple of Modhera.
                      </p>

                      <p id="suntemplethirdpara">
                        As you relax and soothe your nerves, become one with
                        nature and open your mind to the poetry in stone,
                        dedicated to the sun god, living glimpses of the era far
                        elapsed emerge out of the intricacies of narrative
                        sculptures. The remains of the Sun Temples at Modhera
                        are relics of times gone by when reverence of the
                        natural elements fire, air, earth, water and sky were at
                        their peak sharing space with myriad manifestations of
                        Vedic gods. The ancient philosophy venerating natural
                        elements and its association with humans was considered
                        the prime force and energy of the life cycle. A walk
                        around the serene temple campus makes you aware of the
                        positively strong aura of energy which the place
                        radiates and through it brings one closer to the
                        environs.
                      </p>

                      <p id="suntempleforthpara">
                        The exclusively carved temple complex and the
                        magnificently sculpted kund are jewels in the art of
                        masonry of the Solanki period apparently which was also
                        known as the Golden Age of Gujarat. Savor your voyage
                        through time to the magnificent eons of the Golden
                        period as you get welcomed personally by the life like
                        icons, narrating stories and legends of Modhera!
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                <h3>Lothal, Archaeological remains of a Harappa Port-Town</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="gandhiAshramMain">
                  <div className="gandhiAshramDetails">
                    <div className="gandhiAshramAbout">
                      <p>
                        About 80km southwest of Ahmedabad, the city that stood
                        at this archaeological site 4500 years ago was one of
                        the most important of the Indus Valley civilisation,
                        which extended into what is now Pakistan. Excavations
                        have revealed the world’s oldest known artificial dock,
                        which was connected to an old course of the Sabarmati
                        River. Other features include the acropolis, the lower
                        town, the bead factory, the warehouses, and the drainage
                        system. The site has been nominated to be enlisted as a
                        UNESCO World Heritage Site. The traveller can see
                        fascinating finds by archeologists like canals and
                        dockyards that explain how this was an important trading
                        city. Artefacts suggest that trade may have been
                        conducted with Mesopotamia, Egypt and Persia. An entire
                        township with market and dock has been unearthed here.
                        An Archaeological Museum (10am–5pm, Friday closed) near
                        the site houses a number of artefacts like jewellery,
                        pottery, seals, religious symbols, and objects of daily
                        use here.
                      </p>

                      <p id="lothalsecondpara">
                        It is said that Lothal is a combination of two words;
                        Loth and thal, which in Gujarati means ‘the mound of the
                        dead.’ The city was inhabited during 3700 BCE and was a
                        thriving trading port. The excavation started from 13
                        February 1955 to 19 May 1960 by the Archaeological
                        Survey of India (ASI) to unearth the ancient city.
                        Archaeologists believe that the city was a part of a
                        major river system on the ancient trade route from Sindh
                        to Saurashtra in Gujarat. Excavations here have offered
                        the greatest number of antiquities in the archaeology of
                        modern India.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        The 25,000 sq. ft. temple, which sits on four acres of
                        land, blends the architectural styles of Sompura
                        (Gujarat) and Rajasthan. The temple features ornate
                        stone-clad pillars, intricately carved windows, a marble
                        floor engraved with colored granite designs, and a
                        Khamira (similar to bas-relief) and Araish (a marblelike
                        finish) ceiling decorated in Jaipur style.
                      </p>

                      <p id="iskconsecondpara">
                        Rising from the floor stand 68 large cylindrical
                        columns, tapering from 4 feet at the base to 2 at the
                        top. Inside the ceiling dome, which is 50 feet in
                        diameter, Krsna and the gopis (cowherd girls) dance in
                        beautiful fiberglass bas-reliefs. Elsewhere on the
                        ceiling, Krsna’s pastimes continue on 40 eight-foot
                        circular panels. And on the walls, too, we find Krsna in
                        His pastimes, each with an explanatory verse from
                        scripture.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        The Sidi Sayed Mosque is famed for its exquisite jali
                        windows, spider web fine, depicting the intricate
                        intertwining branches of the ‘tree of life’ that is best
                        seen from the road that runs along the back of the
                        mosque. The central arch of the mosque is also bereft of
                        the intricate latticework, making the eyes go straight
                        to the main stunning work at the back wall. The mosque
                        still functions as a place of prayer.
                      </p>

                      <p id="mosquesecondpara">
                        Popularly known as Sidi Sayed ni Jali the mosque was
                        built in the period 1572–73 AD by Sidi Sayed. It was the
                        same year that the Mughals conquered Gujarat. Sayed was
                        an Abyssinian saint of African descent who served in
                        Ahmed Shah’s army. He was from a community distinct in
                        culture and appearance that lives in parts of Gujarat
                        even today.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                  Veechar Cultural and Heritage Museum for Utensils - Vishalla
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
                        culture and tradition in its village-like environment
                        with its museum of old utensils known as Vechaar. The
                        museum found its way into Vishalla three years after
                        Vishalla was itself started, on 27 April 1981. Vechaar
                        is the only museum of its kind in the world, displaying
                        such a precious collection of utensils. The designer of
                        Vishalla, Mr. Patel, shares his success in the
                        establishment of Vechaar with Mr. Jyontindra Jain, a
                        well-known anthropologist. Mr. Jain fully supported and
                        guided the cause and eventually helped in setting up the
                        museum itself. His passion for the cause was so deep
                        that his good work did not stop at that; he wrote
                        catalogs for the museum himself.
                      </p>

                      <p id="utensilmuseumsecondpara">
                        A walk around the hut-like museum makes one's heart skip
                        a beat, marveling at the inimitable beauty of these
                        utensils of old. These utensils have been handed down
                        through the changing seasons and times, over the years.
                        They speak of the unmatched art and genius of humankind
                        during the days of old when people did not have the
                        modern facilities of our times. The designer could not
                        let our rich heritage pass with these vessels being lost
                        in the fire kilns! He was determined to preserve them,
                        and today, his dream is a reality in the form of
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
                              Veechar Cultural and Heritage Museum for Utensils
                              - Vishalla Map
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        collections of antique and modern Indian textiles, all
                        handmade and up to 500 years old. There are some
                        astoundingly beautiful pieces, displaying incredible
                        virtuosity and extravagance. You’ll see Kashmiri shawls
                        that took three years to make, and double-ikat fabrics
                        whose 100,000 threads were each individually dyed before
                        weaving. The main textile galleries can only be visited
                        in the morning session. The tours last two hours with a
                        maximum 25 people – 15 by group booking and 10 on a
                        first-come-first-served basis. Be there by 10 am to
                        maximize chances of getting in. The afternoon tour
                        (maximum 15 people, all first-come-first-served) is
                        devoted to the Sarabhai Foundation’s collection of
                        religious art, which explores depictions of Indian Gods
                        and a textile gallery.
                      </p>

                      <p id="calicosecondpara">
                        The Calico Museum was founded in 1949 by the
                        industrialist Gautam Sarabhai and his sister Gira
                        Sarabhai, and inaugurated by Prime Minister Jawaharlal
                        Nehru. Ahmedabad has always had a flourishing textile
                        industry which was at its peak during the late 1940s. It
                        was inspired by philosopher, metaphysician and
                        pioneering historian and philosopher of Indian art,
                        Ananda Coomaraswamy. It was Coomaraswamy who planted the
                        seed in Shri Gautam Sarabhai’s mind and suggested that
                        the museum should be housed in Ahmedabad, since it was a
                        major textile hub. After many talks and research, Shri
                        Sarabhai, his sister Gira Sarabhai and the industrial
                        house of Calico created this specialist museum anchored
                        on historical and technical study of Indian handicrafts
                        and industrial textiles. It was originally housed in
                        Calico Mills but as the range of the collection grew it
                        was shifted to the Sarabhai House in Shahibaug in 1983.
                        In the 1960s, the museum launched a publications
                        programme around Historical Textiles of India under the
                        editorship of John Irwin, then keeper of the Indian
                        Section of the Victoria and Albert Museum, and the
                        second, under the editorial direction of Dr Alfred
                        Bühler, who conducted a Contemporary Textile Craft
                        Survey of India.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
  );
};

export default LocalAreaA;
