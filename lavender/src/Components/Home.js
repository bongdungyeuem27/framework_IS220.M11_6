import React, { Component } from "react";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center justify-content-between">
            <h1 className="logo">
              <a href="index.html">Lavender</a>
            </h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#home">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#highlight">
                    Nổi bật
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Sản phẩm</span> <i className="bi bi-chevron-down" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Drop Down 1</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        <span>Deep Drop Down</span>{" "}
                        <i className="bi bi-chevron-right" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Drop Down 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Drop Down 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Drop Down 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#services">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#team">
                    Team
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#about">
                    Giới thiệu
                  </a>
                </li>
                <li>
                  <a className="getstarted scrollto" href="#">
                    Giỏ hàng
                  </a>
                </li>
                <li>
                  <a className="getstarted scrollto" href="#">
                    LMember
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
          </div>
        </header>
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="home" className="container">
          <div class="bd-example">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  class=""
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                  class=""
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                  class="active"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                    alt="First slide [800x400]"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c84ae5f12%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c84ae5f12%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22218.45%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    data-holder-rendered="true"
                  ></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    class="d-block w-100"
                    data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                    alt="Second slide [800x400]"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c84ae5f14%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c84ae5f14%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22218.45%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    data-holder-rendered="true"
                  ></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div class="carousel-item active">
                  <img
                    class="d-block w-100"
                    data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                    alt="Third slide [800x400]"
                    src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17c84ae5f15%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17c84ae5f15%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9921875%22%20y%3D%22218.45%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    data-holder-rendered="true"
                  ></img>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only"></span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only"></span>
              </a>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            {/* <div className="container" data-aos="fade-up">
                  <div className="section-title">
                    <h2>About Us</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. </p>
                  </div>
                  <div className="row content">
                    <div className="col-lg-6">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                        <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                        <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <a href="#" className="btn-learn-more">Learn More</a>
                    </div>
                  </div>
                </div> */}
          </section>
          {/* End About Section */}
          {/* ======= Counts Section ======= */}
          <section id="counts" className="counts section-bg">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={65}
                      data-purecounter-duration={2}
                      className="purecounter"
                    />
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={85}
                      data-purecounter-duration={2}
                      className="purecounter"
                    />
                    <p>Projects</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={30}
                      data-purecounter-duration={2}
                      className="purecounter"
                    />
                    <p>Years of experience</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    <span
                      data-purecounter-start={0}
                      data-purecounter-end={20}
                      data-purecounter-duration={2}
                      className="purecounter"
                    />
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Counts Section */}

          {/* ======= Clients Section ======= */}
          <section id="clients" className="clients section-bg">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  data-aos="zoom-in"
                >
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  data-aos="zoom-in"
                >
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  data-aos="zoom-in"
                >
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  data-aos="zoom-in"
                >
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  data-aos="zoom-in"
                >
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
                  data-aos="zoom-in"
                >
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* End Clients Section */}

          {/* ======= Services Section ======= */}
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Sevices</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div className="row">
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth={0}
                          fill="#f5f5f5"
                          d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                        />
                      </svg>
                      <i className="bx bxl-dribbble" />
                    </div>
                    <h4>
                      <a href>Lorem Ipsum</a>
                    </h4>
                    <p>
                      Voluptatum deleniti atque corrupti quos dolores et quas
                      molestias excepturi
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <div className="icon-box iconbox-orange ">
                    <div className="icon">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth={0}
                          fill="#f5f5f5"
                          d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                        />
                      </svg>
                      <i className="bx bx-file" />
                    </div>
                    <h4>
                      <a href>Sed Perspiciatis</a>
                    </h4>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                >
                  <div className="icon-box iconbox-pink">
                    <div className="icon">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth={0}
                          fill="#f5f5f5"
                          d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                        />
                      </svg>
                      <i className="bx bx-tachometer" />
                    </div>
                    <h4>
                      <a href>Magni Dolores</a>
                    </h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box iconbox-yellow">
                    <div className="icon">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth={0}
                          fill="#f5f5f5"
                          d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                        />
                      </svg>
                      <i className="bx bx-layer" />
                    </div>
                    <h4>
                      <a href>Nemo Enim</a>
                    </h4>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <div className="icon-box iconbox-red">
                    <div className="icon">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth={0}
                          fill="#f5f5f5"
                          d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                        />
                      </svg>
                      <i className="bx bx-slideshow" />
                    </div>
                    <h4>
                      <a href>Dele Cardo</a>
                    </h4>
                    <p>
                      Quis consequatur saepe eligendi voluptatem consequatur
                      dolor consequuntur
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                >
                  <div className="icon-box iconbox-teal">
                    <div className="icon">
                      <svg
                        width={100}
                        height={100}
                        viewBox="0 0 600 600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="none"
                          strokeWidth={0}
                          fill="#f5f5f5"
                          d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                        />
                      </svg>
                      <i className="bx bx-arch" />
                    </div>
                    <h4>
                      <a href>Divera Don</a>
                    </h4>
                    <p>
                      Modi nostrum vel laborum. Porro fugit error sit minus
                      sapiente sit aspernatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Sevices Section */}
          {/* ======= Cta Section ======= */}
          <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
              <div className="text-center">
                <h3>Call To Action</h3>
                <p>
                  {" "}
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a className="cta-btn" href="#">
                  Call To Action
                </a>
              </div>
            </div>
          </section>
          {/* End Cta Section */}

          {/* ======= Team Section ======= */}
          <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Team</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div className="row">
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href>
                          <i className="bi bi-twitter" />
                        </a>
                        <a href>
                          <i className="bi bi-facebook" />
                        </a>
                        <a href>
                          <i className="bi bi-instagram" />
                        </a>
                        <a href>
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-2.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href>
                          <i className="bi bi-twitter" />
                        </a>
                        <a href>
                          <i className="bi bi-facebook" />
                        </a>
                        <a href>
                          <i className="bi bi-instagram" />
                        </a>
                        <a href>
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href>
                          <i className="bi bi-twitter" />
                        </a>
                        <a href>
                          <i className="bi bi-facebook" />
                        </a>
                        <a href>
                          <i className="bi bi-instagram" />
                        </a>
                        <a href>
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="member">
                    <div className="member-img">
                      <img
                        src="assets/img/team/team-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <div className="social">
                        <a href>
                          <i className="bi bi-twitter" />
                        </a>
                        <a href>
                          <i className="bi bi-facebook" />
                        </a>
                        <a href>
                          <i className="bi bi-instagram" />
                        </a>
                        <a href>
                          <i className="bi bi-linkedin" />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Team Section */}

          {/* ======= Frequently Asked Questions Section ======= */}
          {/* <section id="faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>
              <div className="faq-list">
                <ul>
                  <li data-aos="fade-up">
                    <i className="bx bx-help-circle icon-help" />{" "}
                    <a
                      data-bs-toggle="collapse"
                      className="collapse"
                      data-bs-target="#faq-list-1"
                    >
                      Non consectetur a erat nam at lectus urna duis?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="faq-list-1"
                      className="collapse show"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={100}>
                    <i className="bx bx-help-circle icon-help" />{" "}
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-list-2"
                      className="collapsed"
                    >
                      Feugiat scelerisque varius morbi enim nunc?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="faq-list-2"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={200}>
                    <i className="bx bx-help-circle icon-help" />{" "}
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-list-3"
                      className="collapsed"
                    >
                      Dolor sit amet consectetur adipiscing elit?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="faq-list-3"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={300}>
                    <i className="bx bx-help-circle icon-help" />{" "}
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-list-4"
                      className="collapsed"
                    >
                      Tempus quam pellentesque nec nam aliquam sem et tortor
                      consequat? <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="faq-list-4"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={400}>
                    <i className="bx bx-help-circle icon-help" />{" "}
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-list-5"
                      className="collapsed"
                    >
                      Tortor vitae purus faucibus ornare. Varius vel pharetra
                      vel turpis nunc eget lorem dolor?{" "}
                      <i className="bx bx-chevron-down icon-show" />
                      <i className="bx bx-chevron-up icon-close" />
                    </a>
                    <div
                      id="faq-list-5"
                      className="collapse"
                      data-bs-parent=".faq-list"
                    >
                      <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo.
                        Mauris vitae ultricies leo integer malesuada nunc vel.
                        Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                        eget lorem dolor sed. Ut venenatis tellus in metus
                        vulputate eu scelerisque.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section> */}
          {/* End Frequently Asked Questions Section */}
        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>Lavender</h3>
                  <p>
                    Khu phố 6 <br />
                    Phường Linh Trung,
                    <br />
                    Thành phố Thủ Đức <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Trang chủ</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Giới thiệu</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Dịch vụ</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Terms of service</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Product Management</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Marketing</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Join Our Newsletter</h4>
                  <p>
                    Tamen quem nulla quae legam multos aute sint culpa legam
                    noster magna
                  </p>
                  <form action method="post">
                    <input type="email" name="email" />
                    <input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-md-flex py-4">
            <div className="me-md-auto text-center text-md-start">
              <div className="copyright">
                © Copyright{" "}
                <strong>
                  <span>K^2*V*P</span>
                </strong>
                . All Rights Reserved
              </div>
              <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: https://bootstrapmade.com/license/ */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/onepage-multipurpose-bootstrap-template/ */}
                Designed by{" "}
                <a href="https://bootstrapmade.com/">
                  4 Anh em nhà Khờ, Vờ, Phờ
                </a>
              </div>
            </div>
            <div className="social-links text-center text-md-right pt-3 pt-md-0">
              <a href="#" className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href="#" className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#" className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href="#" className="google-plus">
                <i className="bx bxl-skype" />
              </a>
              <a href="#" className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
        </footer>
        {/* End Footer */}
      </div>
    );
  }
}