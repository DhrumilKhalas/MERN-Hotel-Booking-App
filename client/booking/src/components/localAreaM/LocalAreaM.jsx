import React, { useState } from "react";
import "../localAreaA/localAreaA.css";
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

const LocalAreaM = () => {
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
                <h3>Gateway of India</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="gandhiAshramMain">
                  <div className="gandhiAshramDetails">
                    <div className="gandhiAshramAbout">
                      <p>
                        The Gateway of India is an arch monument built during
                        the 20th century in Bombay, India. The monument was
                        erected to commemorate the landing of King George V and
                        Queen Mary at Apollo Bunder on their visit to India in
                        1911.
                      </p>

                      <p className="localAreaMPara">
                        Built in Indo-Saracenic style, the foundation stone for
                        the Gateway of India was laid on 31 March 1911. The
                        structure is an arch made of basalt, 26 metres (85 feet)
                        high. The final design of George Wittet was sanctioned
                        in 1914 and the construction of the monument was
                        completed in 1924. The Gateway was later used as a
                        symbolic ceremonial entrance to India for Viceroys and
                        the new Governors of Bombay. It served to allow entry
                        and access to India.
                      </p>

                      <p className="localAreaMPara">
                        The Gateway of India is located on the waterfront at
                        Apollo Bunder area at the end of Chhatrapati Shivaji
                        Marg in South Mumbai and overlooks the Arabian Sea. The
                        monument has also been referred to as the Taj Mahal of
                        Mumbai, and is the city’s top tourist attraction.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Marine Drive, also called the Queen’s Necklace, is one
                        of the most easily recognizable landmarks in Mumbai.
                        This arc-shaped bay-side boulevard lining the Arabian
                        Sea in South Mumbai is arguably the best spot to watch
                        beautiful sunsets and indulge in leisurely walks. A
                        favorite hangout spot of the Mumbaikars, it is a prime
                        tourist attraction as well. When you step out of your
                        hotels in Mumbai, make sure to explore this hotspot that
                        offers splendid views of the city’s skyline.
                      </p>

                      <p className="localAreaMPara">
                        Today, a visit to the Marine Drive counts among the best
                        things to do in Mumbai. The road stretches from the
                        southern end of Nariman Point to the Girgaum Chowpatty
                        aka Chowpatty Beach. During the day, it is a fantastic
                        place to drive along or stand and absorb the mesmerizing
                        view of the sea and the beach. The place becomes more
                        attractive during the evening hours when the gorgeous
                        view of the setting sun adds to its beauty. Come night
                        and the whole crescent-shaped coastline illuminates with
                        sparkling lights that resemble a string of pearls,
                        justifying its moniker ‘Queen’s Necklace’. Every year,
                        on the 26th of January, a colorful parade takes place
                        along this promenade on the occasion of India’s Republic
                        Day.
                      </p>

                      <p className="localAreaMPara">
                        Marine Drive takes on a life of its own during the
                        evening hours when it is filled with fast food peddlers
                        and a lively crowd. If you want to experience its
                        quieter side, plan a visit during the early morning
                        hours when joggers throng this place.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        kilometres long, 8-lane architectural, engineering and
                        infrastructural marvel of India. It is the first
                        cable-stay bridge built on open seas in India.", "The
                        Bandra Worli Sea Link has become one of the prominent
                        landmarks of Mumbai and has also made it to the top 10
                        Trip Advisor’s Traveller’s Choice awards of 2018, under
                        the category of architecture and modern infrastructure
                        structures.
                      </p>

                      <p className="localAreaMPara">
                        When it comes to driving through Mumbai’s roads, the
                        first thing that comes to one’s mind is the Bandra Worli
                        Sea Link. The bridge was designed in such a way that it
                        can allow a little over 37,000 vehicles per day.", "The
                        view and beauty of the bridge at night is a sight to
                        behold as the stay cables are entirely lit and the
                        vehicles running on the bridge make an amazing photo
                        opportunity for all photography enthusiasts.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Gharapuri), which features two hillocks separated by a
                        narrow valley. The small island is dotted with numerous
                        ancient archaeological remains that are the sole
                        testimonies to its rich cultural past. These
                        archaeological remains reveal evidence of occupation
                        from as early as the 2nd century BC. The rock-cut
                        Elephanta Caves were constructed about the mid-5th to
                        6th centuries AD. The most important among the caves is
                        the great Cave 1, which measures 39 metres from the
                        front entrance to the back. In plan, this cave in the
                        western hill closely resembles Dumar Lena cave at
                        Ellora, in India. The main body of the cave, excluding
                        the porticos on the three open sides and the back aisle,
                        is 27 metres square and is supported by rows of six
                        columns each.
                      </p>

                      <p className="localAreaMPara">
                        The 7-metre-high masterpiece “Sadashiva” dominates the
                        entrance to Cave 1. The sculpture represents three
                        aspects of Shiva: the Creator, the Preserver, and the
                        Destroyer, identified, respectively, with Aghora or
                        Bhairava (left half), Taptapurusha or Mahadeva (central
                        full face), and Vamadeva or Uma (right half).
                        Representations of Nataraja, Yogishvara,
                        Andhakasuravadha, Ardhanarishwara, Kalyanasundaramurti,
                        Gangadharamurti, and Ravanaanugrahamurti are also
                        noteworthy for their forms, dimensions, themes,
                        representations, content, alignment and execution.
                      </p>

                      <p className="localAreaMPara">
                        The layout of the caves, including the pillar
                        components, the placement and division of the caves into
                        different parts, and the provision of a sanctum or
                        Garbhagriha of sarvatobhadra plan, are important
                        developments in rock-cut architecture. The Elephanta
                        Caves emerged from a long artistic tradition, but
                        demonstrate refreshing innovation. The combination of
                        aesthetic beauty and sculptural art, replete with
                        respondent Rasas, reached an apogee at the Elephanta
                        Caves. Hindu spiritualistic beliefs and symbology are
                        finely utilized in the overall planning of the caves.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Kanheri Caves complex was built over a long time. It is
                        a collection of 109 caves, with the earliest ones dating
                        back to 1st century BCE. Those are relatively plain in
                        comparison to the caves built later.", "The most recent
                        caves are from 11th century CE. Most of them served as
                        Buddhist viharas. Although the caves are carved out in
                        several styles, one thing which remains constant is a
                        stone plinth in each cave.
                      </p>

                      <p className="localAreaMPara">
                        Kanheri Caves used to be a Buddhist monastery and a
                        point for worship, study and meditation. It is located
                        within the Sanjay Gandhi National Park and you will need
                        to trek through lush green forests to reach the caves.
                      </p>

                      <p className="localAreaMPara">
                        Apart from checking out the caves and the views nearby,
                        you can also witness multiple paintings and statues of
                        Buddha, some of which remain unfinished. Kanheri Caves
                        also have numerous small streams and waterfalls. If
                        you’re looking for a tranquil place to get a view of the
                        city’s skyline, Kanheri Caves in Mumbai should be your
                        choice.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Siddhivinayak Ganapati Temple at Prabhadevi in Mumbai, a
                        two-century-old Temple that fulfills the desires of the
                        worshipers.
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
                        consecrated on Thursday 19th November 1801, a fact that
                        is noted in government records. The temple then was a
                        small structure housing the black stone idol of Shree
                        Siddhivinayak, which was two and half feet wide. The
                        outstanding feature of this deity is the tilt of the
                        trunk to the right side. The idol has four hands
                        (Chaturbhuj), which contains a lotus in upper right, a
                        small axe in upper left, holy beads in the lower right
                        and a bowl full of Modaks (a delicacy which is a
                        perennial favorite with Shree Siddhivinayak). Flanking
                        the deity on both sides are Riddhi & Siddhi, goddesses
                        signifying sanctity, fulfillment, prosperity and riches.
                        Etched on the forehead of the deity is an eye, which
                        resembles the third eye of Lord Shiva.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        The temple also has the idols of Goddess Mahakali and
                        Mahasaraswati. All the three idols are adorned with gold
                        bangles, pearl necklaces and nose rings. During Navratri
                        and many other festivals, you will also come across
                        special arrangements and decorations. However, whether
                        or not there is a special occasion, the place is full of
                        devotees throughout the year.
                      </p>

                      <p className="localAreaMPara">
                        The trustees of Mahalakshmi Temple Mumbai also take part
                        in various social activities like providing scholarships
                        to poor students, assisting poor patients financially
                        and donating to the educational, religious and medical
                        institutions in Maharashtra.
                      </p>

                      <p className="localAreaMPara">
                        The charming appearance of Mahalakshmi Temple, its
                        mythological importance and the calm atmosphere makes it
                        a must-visit tourist spot of Mumbai.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        alike. Haji Ali Dargah is one of India’s most famous and
                        prestigious landmarks situated about 500 yards from the
                        Mumbai shoreline in the middle of the Arabian Sea off
                        Lala Lajpatrai Marg.
                      </p>

                      <p className="localAreaMPara">
                        The structure was erected on a set of high rising rocks
                        and was given its present day shape in the early 19th
                        century after the Trust was legally formed as an entity
                        in 1916.
                      </p>

                      <p className="localAreaMPara">
                        Haji Ali Dargah is the complex housing the tomb of the
                        Muslim Saint Pir Haji Ali Shah Bukhari (R.A.). Along
                        with the tomb, there is also a Masjid at Haji Ali. This
                        monument has been sentinel to the shores of Mumbai since
                        a long time.
                      </p>

                      <p className="localAreaMPara">
                        The structure has white domes and minarets reminiscent
                        with the Mughal architecture of the period. The Dargah
                        is a renowned pilgrimage site among the Muslims.
                        Non-Muslims are also allowed to visit the Dargah. The
                        white-coloured structure attracts visitors in large
                        numbers. About 10 - 15 thousand people visit the Dargah
                        daily. The number of visitors increases to 20 - 30
                        thousand, on Thursdays, Fridays and Sundays. Lakhs of
                        devotees visit the Dargah on the second day of Ramadhan
                        Eid and Bakri Eid (Eid-ul-Uzha), and during which the
                        pathway leading to the Dargah Complex looks like a Sea
                        of Humanity.
                      </p>

                      <p className="localAreaMPara">
                        People from all parts of the world without restrictions
                        of caste, creed and religion visit the Dargah to offer
                        their prayers and for the fulfillment of their wishes by
                        the blessings of the Saint Pir Haji Ali Shah Bukhari
                        (R.A.). Some pray for wealth, others for health,
                        children, marriages, etc. have their wishes being
                        granted at all the times.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Terminus) is a 19th-century railway station in Mumbai,
                        that is known for its architectural mix of Victorian
                        Gothic Revival and traditional Indian features.", "It is
                        a symbol of the blossom period of Mumbai as a commercial
                        city in the late 19th century. The station was opened in
                        1887, on the Silver Jubilee of Empress Victoria. Its
                        architect was Frederick William Stevens, who implemented
                        advanced structural and technical solutions. He designed
                        it in the Gothic Revival style, which has many
                        similarities to traditional Indian palace architecture,
                        such as the use of turrets, colouring and ground plan.
                      </p>

                      <p className="localAreaMPara">
                        The station was originally named 'Victoria Terminus'. In
                        1996, in response to demands by the Shiv Sena and in
                        keeping with the policy of renaming locations with
                        Indian names, the station was renamed by the state
                        government after Chhatrapati Shivaji, a famed 17th
                        century Maratha king.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, formerly
                        known as the Prince of Wales Museum of Western India, is
                        one of the premier art and history museums in India.
                        Situated on the southern tip of Mumbai on the ‘Crescent
                        Site’, the Museum building is a fine example of the
                        Indo-Saracenic style of architecture.
                      </p>

                      <p className="localAreaMPara">
                        Today this building is listed as a Grade I Heritage
                        Building and was the recipient of the ‘2010 UNESCO Asia
                        – Pacific Heritage Award’ for Cultural Heritage
                        Conservation. It has also been awarded the first place
                        for Heritage Building Maintenance by the Indian Heritage
                        Society.
                      </p>

                      <p className="localAreaMPara">
                        Our aim at Chhatrapati Shivaji Maharaj Vastu
                        Sangrahalaya (CSMVS) is to create awareness and
                        sensitivity towards our rich heritage through a
                        visitor-friendly museum for the purposes of education,
                        study and enjoyment of the public.
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
                              Chhatrapati Shivaji Maharaj Vastu Sangrahalaya Map
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Gorai Island, Global Vipassana Meditation Pagoda Mumbai
                        is one of the Seven Wonders of Maharashtra. It is also
                        one of the must-visit tourist spots in Mumbai.
                      </p>

                      <p className="localAreaMPara">
                        The dome resembles the Shwedagon Pagoda of Myanmar. It
                        is the world’s largest stone dome standing without any
                        supporting pillars and here, 8000 people can meditate at
                        a time. Global Vipassana Pagoda follows the values of
                        Gautam Buddha and spreads his teachings.
                      </p>

                      <p className="localAreaMPara">
                        The monks here practice meditation and relaxation as
                        taught by Vipassana guruji Shree S N Goenka. And they
                        have devoted their entire life to this purpose.", "The
                        pagoda also organizes regular Vipassana meditation
                        courses.
                      </p>

                      <p className="localAreaMPara">
                        Apart from the large main dome, Global Vipassana Pagoda
                        complex has two smaller domes, namely North Pagoda and
                        South Pagoda. Then, there is a seated Buddha statue,
                        carved out of a single marble rock.
                      </p>

                      <p className="localAreaMPara">
                        The Gong Tower and the Bell Tower are the other
                        significant structures that contribute to the beauty of
                        Global Vipassana Pagoda.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Flora Fountain, also known as the Hutatma Chowk since
                        1960, is an exquisitely sculpted structure located in
                        the heart of South Mumbai. Flora Fountain was initially
                        named after the Governor of Bombay, Sir Bartle Frere,
                        but just before the fountain’s inauguration in 1864, the
                        name ‘Flora’ was bestowed on it, after the Roman Goddess
                        of flowers and the season of spring. In 1960, the
                        fountain became known as Martyr’s Square, or Hutatma
                        Chowk, with an impressive stone statue bearing a pair of
                        torch holding patriots, to honor the 105 members of the
                        Samyuktha Maharashtra Samiti who lost their lives while
                        fighting for a separate Maharashtrian state.
                      </p>

                      <p className="localAreaMPara">
                        The Flora Fountain was constructed by the
                        Agri–Horticultural Society of Western India in 1864, out
                        of a donation by Cursetjee Fardoonjee Parekh. Designed
                        by Richard Norman Shaw, it was sculpted from imported
                        Portland stone by James Forsythe. A magnificent statue
                        of the Roman Goddess is installed at the top of the
                        structure, making the fountain edifice look even more
                        beautiful. However, according to some, its white coat of
                        oil paint has to some extent marred the antiquity of the
                        fountain.
                      </p>

                      <p className="localAreaMPara">
                        Located in the heart of South Mumbai, Flora Fountain is
                        very close to the Chattrapati Shivaji Terminus as well
                        as Churchgate. Within walking distance of the fountain,
                        you can find some of the most impressive institutions
                        and buildings of Mumbai, such as the University of
                        Mumbai, the old Secretariat, the Gateway of India, the
                        Bombay High Court, the Central Telegraph Office and many
                        other heritage buildings. The fountain is especially
                        beautiful at night when illuminated.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        When in Mumbai, a visit to the Sanjay Gandhi National
                        Park (SGNP) becomes imperative. The national park is
                        also called the lungs of the city and is the only
                        national park in the world known to be present within a
                        city’s premises. Far from the bustle of the city, the
                        environment inside the national park is completely
                        peaceful and offers serenity.
                      </p>

                      <p className="localAreaMPara">
                        Spread across a total area of 103 square kilometres, the
                        governing body of the national park is the Ministry of
                        Environment, Forest and Climate Change and the footfall
                        of visitors each year rounds up to a little over 2
                        million. The entire area of the national park forms
                        approximately 20% of Mumbai’s geographical area.
                      </p>

                      <p className="localAreaMPara">
                        The park is home to over 40 species of mammals, 254
                        species of birds, 150 species of butterflies, 78 species
                        of reptiles and amphibians and last but not the least
                        and most important, over a surprisingly high population
                        of 1300 species of plants.
                      </p>

                      <p className="localAreaMPara">
                        At the exit gate of the park, there is a souvenir shop
                        that offers artefacts, coffee table books on SGNP
                        Biodiversity, trekking gears and apparel, books on
                        tribes of Maharashtra, organic consumables and forest
                        produce.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        This 100-year-old Roman Catholic basilica located on a
                        hillock in Bandra overlooks the Arabian Sea. It attracts
                        devotees from all faiths who come to pray and seek
                        blessings from Mother Mary. The church has been built in
                        the Neo-Gothic style of architecture. There are seven
                        steps in white marble that lead the eye of the visitor
                        to the statue of Mother Mary holding her son Jesus
                        Christ in her right hand. The wooden statue is crowned
                        with a white and gold veil that flows down to the
                        topmost marble step. The murals depict scenes from the
                        life of Mary.
                      </p>

                      <p className="localAreaMPara">
                        Although the current church edifice is relatively
                        modern, the history behind the statue of Our Lady goes
                        back to the 16th century when Jesuit priests from
                        Portugal brought the statue to the current location and
                        constructed a chapel. A week-long festival takes place
                        here in September to celebrate Mother Mary’s birthday.
                        Known as the Bandra Fair, thousands of devotees come
                        here during that time to partake in the festive
                        activities that take place in and around the beautifully
                        decorated church. Many stalls selling religious
                        artefacts, curios, candles and baked goodness are also
                        set up.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Mumbai. For the first time in India, a public-private
                        partnership has been established for the management of a
                        cultural institution. In February 2003, an agreement was
                        signed between the Municipal Corporation Greater Mumbai
                        (MCGM), the Jamnalal Bajaj Foundation and the Indian
                        National Trust for Art and Cultural Heritage (INTACH).
                      </p>

                      <p className="localAreaMPara">
                        The Museum opened at the present site in 1872 as the
                        erstwhile Victoria and Albert Museum, Bombay. As
                        Mumbai’s first Museum, it showcases the city’s cultural
                        heritage and history through a rare collection of Fine
                        and Decorative Arts that highlight Early Modern Art
                        practices as well as the craftsmanship of various
                        communities of the Bombay Presidency. The permanent
                        collection includes miniature clay models, dioramas,
                        maps, lithographs, photographs, and rare books that
                        document the life of the people of Mumbai and the
                        history of the city from the late eighteenth to
                        early-twentieth centuries.
                      </p>

                      <p className="localAreaMPara">
                        The Museum, once in a derelict condition, underwent a
                        comprehensive five-year restoration and won UNESCO’s
                        2005 Award of Excellence in the field of Cultural
                        Conservation. The Museum re-opened in 2008 with an
                        extensive exhibition program and is committed to
                        promoting contemporary art and culture.
                      </p>

                      <p className="localAreaMPara">
                        The Museum has collaborated with other museums and
                        cultural institutions from around the world to showcase
                        contemporary artists and international exhibitions that
                        relate to the Museum’s permanent collection.", "In
                        December of 2012, the Museum introduced a dynamic
                        cultural hub, the Museum Plaza, which offers the public
                        a recreational space for performances, outdoor
                        activities, and workshops. The Museum has restored and
                        re-appropriated abandoned spaces to accommodate a
                        Special Projects Space, Museum Cafe, Museum Shop and an
                        Education Centre.
                      </p>

                      <p className="localAreaMPara">
                        The Museum has embarked on an ambitious expansion plan,
                        supported by the Municipal Corporation of Greater Mumbai
                        and private donors, which includes developing a new wing
                        adjoining the Museum Plaza. Facilities will include a
                        Mumbai Modern Gallery, a state of the art Special
                        Exhibitions Gallery to host national and international
                        exhibitions, an auditorium, a learning centre, expanded
                        library and archives, a conservation centre, staff and
                        visitor amenities like cafes and shops.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Vasai, also called Bassein, lies about 45 kms of Palghar
                        City. it is located in Vasai taluka. The fort in the old
                        city was headquarter of the Portuguese in the north,
                        next in importance to Goa. The coastal land-fort of
                        Vasai was surrounded by sea on three sides and to the
                        landslide it had a moat which was filled by sea-water.
                        its 4.5 kms long strong stone wall had 11 bastions. The
                        fort had two gates- the westward land-gate. There was
                        also a small citadel in the fort well-equipped with
                        water-tanks, store-houses, armory, etc., the fort also
                        had fields for growing grains and vegetables. All the
                        old structures inside the wall are now in ruins.
                      </p>

                      <p className="localAreaMPara">
                        Vasai was the main naval base and sort of ship-building
                        centre of the Portuguese. it was here in 1802 AD, the
                        Peshwa Bajirav signed the infamous ‘Treaty of Bassein’
                        which virtually dissolved the Maratha Confederacy.
                        Finally, the fort and the city of Vasai were ceded to
                        the British in 1817 AD.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
                        Mani Bhavan is a simple old-style, two storied building
                        on Laburnum Road, Mumbai. Whenever Gandhiji was in
                        Mumbai between 1917 to 1934, he stayed here. It is now
                        converted into a museum and research centre. Mumbai and
                        its inhabitants have played a very prominent part in
                        India's unique struggle for freedom. Gandhiji was
                        rightly proud of its patriotic and cosmopolitan
                        citizens. Mani Bhavan is one of the few important places
                        hallowed by Mahatma Gandhi's close association.
                      </p>

                      <p className="localAreaMPara">
                        Mani Bhavan, a modest two-storied building on the
                        Laburnum Road in the comparatively quiet locality called
                        Gamdevi, served as Gandhiji's Bombay head-quarters for
                        about seventeen long and eventful years (1917-1934). It
                        belonged to Shri Revashankar Jagjeevan Jhaveri, who was
                        Gandhi's friend and a host during that period. It was
                        from Mani Bhavan that Gandhi initiated Satyagraha
                        against Rowlatt Act and propagated the causes of
                        Swadeshi, Khadi and Hindu-Muslim Unity. In 1955 the
                        building was dedicated as a memorial to Gandhiji and to
                        the very important activities of great significance he
                        initiated from that place.
                      </p>

                      <p className="localAreaMPara">
                        Mani Bhavan has a story to tell as it housed Gandhiji
                        occasionally during the times when he grew in stature
                        and strength, from an agitator to a world figure by
                        successfully introducing satyagraha (individual as well
                        as mass) as a new and effective weapon to fight all evil
                        and injustice.
                      </p>

                      <p className="localAreaMPara">
                        It is obviously impossible to draw the full picture or
                        tell the whole story here. This is an humble attempt to
                        give the reader a few glimpses of the great drama
                        enacted in this small corner of Mumbai by Gandhiji and
                        his illustrious colleagues. To the visitors, it will
                        give an idea of the dynamism of the great Mahatma even
                        while he was shaping himself and the nation, along the
                        uncharted path of non-violent resistance to foreign rule
                        and to all evil.
                      </p>

                      <p className="localAreaMPara">
                        The visitors from all over the world come to Mani
                        Bhavan, to see the Room that Gandhiji occupied, its
                        Picture Gallery, the Library Hall and the Terrace where
                        he was arrested on January 4, 1932.
                      </p>

                      <p className="localAreaMPara">
                        Gandhiji was a dynamic person and he kept on evolving.
                        Even a change in his outward dress indicated an inner
                        change. On his return from South Africa, he flung away
                        the European style of dressing and took to the Indian
                        style. Then again his original Kathiawadi turban was
                        replaced by a Kashmiri cap which in its turn was
                        discarded in favour of a white-cap popularly known as
                        the Gandhi cap. The change ultimately culminated in a
                        bare loin cloth - a significant symbol representing the
                        Indian peasantry and its poverty. Perhaps Mani Bhavan is
                        the only place besides the Sabarmati Ashram, where he
                        donned all these dresses in their sequence.
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
                      <button className="gandhiAshramShare">
                        <ShareIcon className="gandhiAshramShareIcon" />
                      </button>
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
  );
};

export default LocalAreaM;
