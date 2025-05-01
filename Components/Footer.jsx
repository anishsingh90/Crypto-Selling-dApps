import React from "react";

const Footer = () => {
  const footerList = ["Cryptocash", "How its work", "Token", "FAQ", "Contact"];

  return (
    <footer>
      <div
        className="top_footer bg_light_dark"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="footer_logo mb-3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" className="page-scroll">
                  <img
                    src="assets/images/footer_logo.png"
                    alt=""
                    className=""
                  />
                </a>
              </div>

              <div className="footer_desc">
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  unde sed error. Voluptatum, doloribus corporis provident rem
                  dolores qui quam odit quasi, doloremque officia tenetur odio
                  expedita ipsam totam distinctio.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 res_md_mt_30 res_sm_mt_20">
              <h4
                className="footer_title border_title animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Quick Links
              </h4>

              <ul className="footer_link">
                {footerList.map((list, i) => (
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay={`0.${i + 2}s`}
                  >
                    <a href="#">{list}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20">
              <div className="newsletter_from">
                <h4 className="footer_title border_title animation">
                  Newsletter
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minima dolorem iure voluptatem! Fugiat voluptates at quod,
                  voluptatibus magni aut ad ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
