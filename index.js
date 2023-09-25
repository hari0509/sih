const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb');
const uri = "mongodb+srv://hari:hari3@cluster49.chpmab5.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//let instead var
let alert = require('alert'); 
var express = require('express') //using express like http
var a=express() //sur name for express
a.use(express.static('public'))
a.use(express.json())
a.use(express.urlencoded({extended: false}))
a.get('/', function(req,res){ //request and response
      res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Certify genero</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
          <link rel="stylesheet" href="style.css">
      </head>
      <body>
         <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <nav class="navbar bg-body-tertiary">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                      <img src="/Pink Minimal Typography Logo .png" alt="Logo" width="40" height="24" class="d-inline-block align-text-top">
                      
                    </a>
                  </div>
                </nav>
                <a class="navbar-brand" href="#">Certify Genero</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Login
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/login">Admin Login</a></li>
                        <li><a class="dropdown-item" href="/slogin">Student Login</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/validate">Validate</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--<nav class="navbar bg-body-tertiary">
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button  style="padding: 1px; margin-top: 2px;"   class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                  </div>
                </nav>-->
            </nav>
            <h1 style="text-align: center;margin-top: 30px;">Certificate Validation using Blockchain</h1>
            <h6 style="margin-top: 30px; text-align:center;font-size: 20px;">Introducing the Blockchain Certificate Platform!</h6>
      
             <p style="text-align: center;margin-top: 20px;padding: 20px;font-size: 25px;padding-top: 15px;">A certificate validation powered by blockchain technology is a cutting-edge digital tool that revolutionizes the creation, management, and verification of certificates. It utilizes the security and transparency of blockchain to ensure the integrity of certificates throughout their lifecycle. This technology streamlines certificate issuance, eliminates the risk of tampering, and provides instant, foolproof verification, making it an essential tool for educational institutions, organizations, and businesses.</p>
             <section class="why-features section" id="why">
              <div class="why-main">
                  <div class="container">
                      <div class="signup">
                          <div class="form">
                              <h1>Why Certify Genero</h1>
                              <!-- <p>The Why</p> -->
                              <img class="img2" src="https://thumbs.dreamstime.com/b/isometric-signed-contract-stamp-document-signature-form-document-business-financial-agreement-165462973.jpg">
                          </div>
                          <div class="why-features">
                              <h3 >Problems Today</h3>
                              <ul>
                                  <li>Increased access to photoshop and digital tools have also increased the fake certificates and documents.</li>
                                  <li>A thorough background verification is both costly and time consuming.</li>
                                  <li>There's no credibility to one's resume/CV or even online LinkedIn profiles.</li>
                                  <li>The counterfeiting cases are on the rise on a month-on-month basis and there's no framework to know the authenticity of the document/certificate.</li>
                              </ul>
                          </div>
          
                          <div class="plan">
                              <img src="https://res.cloudinary.com/fazurrehman/image/upload/v1484818922/dailyui/send-msg.png" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          
          </section>
      
          <section class="features section" id="about">
            <div class="container">
                <div class="features-inner section-inner">
                    <div class="features-header text-center">
                        <div class="container-sm">
                            <h2 class="section-title mt-0">Meet Certify Genero</h2>
                            <p class="section-paragraph">The certificate generator using blockchain to store and process certificates which are more secure to store and issue as well as easier and cost-effective to audit and reconcile.</p>
                        </div>
                    </div>
                    <div class="features-wrap">
        
                        <div class="feature text-center is-revealing">
                            <div class="feature-inner">
                                <div class="feature-icon pulse-button pulse-button-1" style="background:#FFD2DA;">
                                    <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="nonzero">
                                            <path d="M43 47v7a13 13 0 0 0 13-13v-7c-7.18 0-13 5.82-13 13z" fill="#FF6381"/>
                                            <path d="M32 41v4a9 9 0 0 0 9 9v-4a9 9 0 0 0-9-9z" fill="#FF97AA"/>
                                        </g>
                                    </svg>
                                </div>
                                <h4 class="feature-title h3-mobile mb-8">Tamper Resistance</h4>
                                <p class="text-sm">Immutability is perhaps the most important benefit a blockchain provides. This tamper resistance is highly effective in preventing the counterfeiting of documents and document fraud.</p>
                            </div>
                        </div>
        
                        <div class="feature text-center is-revealing">
                            <div class="feature-inner">
                                <div class="feature-icon pulse-button pulse-button-2" style="background:#FFD8CD;">
                                    <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="nonzero">
                                            <path d="M54 56h-9a2 2 0 0 1-2-2V43a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zm-9-13v10h9V43h-9z" fill="#FCAC96"/>
                                            <path d="M41 50h-7V34h14v5h2v-5a2 2 0 0 0-2-2H34a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h7v-4z" fill="#FC8464"/>
                                        </g>
                                    </svg>
                                </div>
                                <h4 class="feature-title h3-mobile mb-8">Proof of Existence</h4>
                                <p class="text-sm">Verify without the need for any third party. Generate your own Proof-of-Existence, Proof-of-Authenticity &amp; Proof-of-Integrity of a file, record, document, certificate, degree on Blockchain.</p>
                            </div>
                        </div>
        
                        <div class="feature text-center is-revealing">
                            <div class="feature-inner">
                                <div class="feature-icon pulse-button pulse-button-3" style="background:#C6FDF3;">
                                    <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="nonzero">
                                            <circle fill="#1ADAB7" cx="38" cy="50" r="5"/>
                                            <path d="M53 42h2v-8a1 1 0 0 0-1-1h-8v2h5.586l-8.293 8.293a1 1 0 1 0 1.414 1.414L53 36.414V42z" fill="#1ADAB7"/>
                                            <path fill="#83F0DD" d="M34 41.414l3-3 3 3L41.414 40l-3-3 3-3L40 32.586l-3 3-3-3L32.586 34l3 3-3 3zM55.414 48L54 46.586l-3 3-3-3L46.586 48l3 3-3 3L48 55.414l3-3 3 3L55.414 54l-3-3z"/>
                                        </g>
                                    </svg>
                                </div>
                                <h4 class="feature-title h3-mobile mb-8">Trust</h4>
                                <p class="text-sm">Building towards a society of trust, Certificates on Blockchain is obviously just the first necessary step. A public decentralised network encourages trust to a whole new level.</p>
                            </div>
                        </div>
        
                        <div class="feature text-center is-revealing">
                            <div class="feature-inner">
                                <div class="feature-icon pulse-button pulse-button-4" style="background:#E0E1FE;">
                                    <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="none" fill-rule="nonzero">
                                            <path d="M41 42h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM41 55h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z" fill="#4950F6"/>
                                            <path fill="#8D92FA" d="M45 34h10v2H45zM45 39h10v2H45zM45 47h10v2H45zM45 52h10v2H45z"/>
                                        </g>
                                    </svg>
                                </div>
                                <h4 class="feature-title h3-mobile mb-8">Ease of Use</h4>
                                <p class="text-sm">Forget about the hassle and time taken to generate certificates now. Select from wide range of templates or design your own and issue certificates in bulk for your startup, institute or self-made courses.</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            </div>
        </section>
      
          <div class="footer">
              <div class="col-1">
                  <h3>LINKS</h3>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                  <a href="#">Service</a>
                  <a href="#">Features</a>
              </div>
              <div class="col-2">
                  <h3>NEWS LETTER</h3>
                  <form action="">
                      <input type="text" placeholder="Enter your E-mail Id">
                      <button class="br">Subsribe Now</button>
                  </form>
              </div>
              <div class="col-3">
                  <h3>CONTACT</h3>
                  <P>3/333C, Xyz STREET, Xyz DISTRICT, xyz STATE, BHARATH</P>
              </div>
          </div>
      
      </body>
      </html>`)      
    }) 
a.get('/login', function(req,res){ //request and response
      res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Login</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
          
          <style>
              *{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
      }
      .container{
          width: 100%;
          display: flex;
      }
      .container .div-form{
          height: 100vh;
          width: 40%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }
      .container .div-form h1{
          font-size: 50px;
          margin-bottom: 50px;
      }
      .container .div-form form{
          display: flex;
          flex-direction: column;
          width: 100%;
      }
      form .inp{
          width: 60%;
          margin: auto;
          height: 60px;
          margin-bottom: 30px;
          border-radius: 50px;
          box-shadow: 20px 20px 20px #8e1df720,
          -10px -10px 20px #8e1df720;
          position: relative;
          align-items: center;
      }
      form .inp input{
           width: 100%;
           height: 100%;
           border-radius: 50px;
           outline: none;
           border: none;
           padding: 20px 70px;
           font-size: 18px;
      }
      form .inp i{
          position: absolute;
          color: #050606;
          font-size: 30px;
          top: 50%;
          left: 20px;
          transform: translateY(-50%);
      }
      form .inp .fa-eye{
          left: 90%;
          font-size: 16px;
          cursor: pointer;
      }
      form .check{
          width: 60%;
          margin: 0 auto 40px;
          display: flex;
          align-items:center;
      }
      form .check input{
          margin: 0 5px 0 20px;
      }
      form .check span{
         margin-top: 3px;
         color: #555555;
         font-size: 13px;
      }
      form .btn{
          color: #fff;
          font-size: 20px;
          width: 250px;
          margin: auto;
          background: linear-gradient(170deg,#000000,#010101);
          padding: 15px;
          border-radius: 50px;
          cursor: pointer;
          border: none;
          margin-bottom: 20px;
      }
      form .spn-regs{
          text-align: center;
          font-size: 14px;
      }
      form .spn-regs a{
          color: #000000;
          text-decoration: none;
      }
      form .spn-reg:hover a{
          text-decoration: underline;
      }
      
      
      .container .div-text{
          height: 100vh;
          width: 60%;
          background: linear-gradient(170deg,#000,#010);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
      }
      .container .div-text h1{
          color: #fff;
          font-size: 40px;
          margin-bottom: 20px;
      
      }
      .container .div-text p{
          margin: 0 auto;
          width: 60%;
          color: #f0f0f0;
          font-size: 18px;
          line-height: 2;
      }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="div-form">
                  <h1>Hello!</h1>
                  <form action = "/verify" method="POST">
                      <div class="inp">
                          <i class="fa-regular fa-user" style="color: #000000;"></i>
                          <input type="text" name="name" placeholder="User Name">
                      </div>
                      <div class="inp">
                          <i class="fa-solid fa-lock" style="color: #000000;"></i>
                          <input type="password" name ="password" placeholder="password">
                          <i class="fa-solid fa-eye" style="color: #000000;"></i>
                      </div>
                      <div class="check">
                          <input type="checkbox">
                          <span>Remember Me</span>
                      </div>
                      <button class="btn">Sign In</button>
                      <span class="spn-regs">Not a Member?<a href="/regis"> Register Now</a></span>
          
                  </form>
                  
              </div>
              <div class="div-text">
                  <h1>Welcome Back!</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid a cupiditate eligendi possimus, tempore ab architecto suscipit expedita voluptatum blanditiis.
                  </p>
                  
              </div>
          </div>
          
      </body>
      </html>`)
    }) 
a.get('/validate', function(req,res){ //request and response
        res.send(`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="loader.css">
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <link href="aos.min.css" rel="stylesheet" />
            <script src="js/aos.js"></script>
            <script src="node_modules\web3\dist\web3.min.js"></script>
            <script src="js/verify.js"></script>
            <script src="js/App.js"></script>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
              integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
              crossorigin="anonymous"
              referrerpolicy="no-referrer"
            />
            <link rel="stylesheet" href="main.css" />
            <link rel="icon" href="assets/icon.png" />
            <title>Verfiy Document</title>
          </head>
          <body>
            <!-- loading Circular dots... -->
            <div class="loader-wraper">
              <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
        
            <!-- navigation bar -->
            <nav class="navbar navbar-expand-lg bg-light py-3 navbar-dark">
              <div class="container">
                <a class="navbar-brand" href="index.html">
                  <i class="fa-solid fa-dragon home_text"></i>
                  <span class="home_text">Orio</span>
                  Chain
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="upload.html">Upload</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" href="verify.html">Verify</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="delete.html">Delete</a>
                    </li>
        
                    <li class="nav-item">
                      <a class="nav-link" href="admin.html">Admin</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about.html">Team</a>
                    </li>
                  </ul>
                  <div class="d-flex">
                    <button
                      id="loginButton"
                      onclick="connect()"
                      class="btn main-button"
                    >
                      Login
                    </button>
                    <button
                      id="logoutButton"
                      onclick="disconnect()"
                      class="btn main-button"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <div class="container">
              <!-- upload form -->
              <div data-aos="zoom-in" class="col p-3 data-upload my-3 mx-md-2">
                <input onchange="get_Sha3()" id="doc-file" type="file" />
                <span id="note" class="text-danger"></span>
                <img id="loader" src="files/loader.svg" alt="loader" />
                <input
                  onclick="verify_Hash()"
                  class="btn mt-5 upload-button d-block main-button"
                  type="button"
                  value="Verify"
                  id="upload_file_button"
                />
              </div>
              <!-- Verification result -->
              <div class="box d-none my-3 row gx-0 mx-md-2 transaction-status col-lg">
                <div class="left col-lg-6 p-3 d-flex flex-column">
                  <span class="p-2 info text-center" id="doc-status"></span>
                  <span class="p-2 info" id="file-hash"></span>
                  <span class="p-2 info" id="contract-address"></span>
                  <span class="p-2 info" id="time-stamps"></span>
                  <span class="p-2 info" id="blockNumber"></span>
                  <span class="p-2 info" id="college-name"></span>
        
                  <span class="d-flex justify-content-center">
                    <a
                      title="View Cirtificate on IPFS"
                      href="#"
                      id="download-document"
                      class="download-link"
                      target="_blank"
                    >
                      View Cirtificate
                    </a>
                  </span>
                </div>
                <div
                  class="right col-lg-6 d-flex justify-content-center align-items-center"
                >
                  <!-- <object class="mt-4"  id="student-document" data="" alt="student-document"></object> -->
                  <img class="mt-4" id="student-document" alt="Student document" />
                </div>
              </div>
            </div>
            <footer class="footer-dark">
              <div class="container">
                <div class="row">
                  <div class="col-sm-6 col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                      <li><a href="#">Ethereum</a></li>
                      <li><a href="#">Blockchain Tech.</a></li>
                      <li><a href="#">Smart Contracts</a></li>
                    </ul>
                  </div>
                  <div class="col-sm-6 col-md-3 item">
                    <h3>About us</h3>
                    <ul>
                      <li><a href="#">Company</a></li>
                      <li><a href="#">Team</a></li>
                    </ul>
                  </div>
                  <div class="col-md-6 item text">
                    <h3>
                      <i class="fa-solid fa-dragon"></i>
                      OrioChain
                    </h3>
                    <!-- <a href="https://www.flaticon.com/free-icons/blockchain" title="blockchain icons">Blockchain icons created by photo3idea_studio - Flaticon</a> -->
                    <p>
                      Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
                      ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
                      lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
                    </p>
                  </div>
                  <div class="col-md text-center text-md-start">
                    <h3>Credits</h3>
                    <ul>
                      <li>
                        <a
                          href="https://undraw.co/illustrations"
                          title="Indraw illustrations"
                        >
                          Blockchain illustrations created by undraw
                        </a>
                      </li>
                      <li>
                        <a href="https://www.freepik.com/vectors/futuristic-background">
                          Futuristic background vector created by freepik -
                          www.freepik.com
                        </a>
                      </li>
                      <li>
                        <a href="https://www.freepik.com/vectors/tech-world">
                          Tech world vector created by liuzishan - www.freepik.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                          Photo by Shubham Dhage
                        </a>
                        on
                        <a
                          href="https://unsplash.com/s/photos/blockchain?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                          Unsplash
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.flaticon.com/free-icons/wings"
                          title="wings icons"
                        >
                          Wings icons created by Freepik - Flaticon
                        </a>
                      </li>
                      <li>
                        <a href="https://loading.io/icon/">
                          Icon Loading from loading.io
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="col item social">
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-github"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
                <p class="copyright">OrioChain © 2022</p>
              </div>
            </footer>
            <div>
              <a
                title="Send Email"
                href="mailtojayakumaru@gmail.com?subject=From jayakumar site"
              >
                <i class="mail-us fa-solid fa-headset"></i>
              </a>
            </div>
            <i onclick="topFunction()" id="scroll-btn" class="fa-solid fa-angle-up"></i>
            <script src="js/script.js"></script>
            <script
              src="https://code.jquery.com/jquery-3.6.0.js"
              crossorigin="anonymous"
            ></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
          </body>
        </html>
        `)
      }) 
a.get('/admin_home', function(req,res){ //request and response
        res.send(`<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <!-- SEO Meta Tags -->
            <meta name="description" content="Your description" />
            <meta name="author" content="Your name" />
            <!-- OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn -->
            <meta property="og:site_name" content="OrioChain" />
            <!-- website name -->
            <meta property="og:site" content="oriochain.com" />
            <!-- website link -->
            <meta property="og:title" content="Orio" />
            <!-- title shown in the actual shared post -->
            <meta property="og:description" content="OrioChain Is A Website For institutions To Verify The Authenticity
            Of Your Documents Online Easily And Safely. Let's Go.." />
            <!-- description shown in the actual shared post -->
            <meta property="og:image" content="https://blockhcain-project-ali.on.drv.tw/DevAli/assets/home5.jpg" />
            <!-- image link, make sure it's jpg -->
            <meta property="og:url" content="#ABOUT" />
            <!-- where do you want your post to link to -->
            <meta name="twitter:card" content="summary_large_image" />
            <!-- to have large image post format in Twitter -->
        
            <!-- Webpage Title -->
            <title>Admin</title>
            <link rel="stylesheet" href="loader.css">
            <link href="bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />    <link href="aos.min.css" rel="stylesheet" />
            <link href="main.css" rel="stylesheet" />
            <!-- Favicon -->
            <link rel="icon" href="Pink Minimal Typography Logo .png" />
          </head>
          <body>
            <div class="loader-wraper">
              <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          <!--NavBar Start-->
               <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 navbar-dark">
                <div class="container">
                  <a class="navbar-brand" href="index.html">
                    <i class="fa-solid fa-dragon home_text"></i>
                    <span class="home_text">Certify</span>Genero
                    </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                      <a class="nav-link " href="/detail">Upload </a>
                      </li>
                     
                      <li class="nav-item">
                      <a class="nav-link" href="delete.html">Delete </a>
                      </li>
        
                      <li class="nav-item">
                        <a class="nav-link" href="admin.html">Admin</a>
                        </li>            
                          <li class="nav-item">
                      <a class="nav-link " href="about.html">Team</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="verify.html">Validate </a>
                        </li>
                  </ul>
                  </div>
                </div>
                </nav>
        
            <!-- Home -->
            <section class="home py-5 d-flex align-items-center" id="header">
        <video autoplay muted loop id="myVideo">
          <source src="assets/earth.mp4" type="video/mp4">
        </video>
              <div class="container  text text-light py-5" data-aos="fade-right">
                <h1 class="headline text">
                  Build <span class="text-info">trust</span>  <br>
                  into your Organization
                </h1>
                <p class="para  py-3">
                  The OrioChain platform is a leading Document Verification platform <br> 
                  designed to bring efficiency and security to your operations.
                </p>
        
                <div class="my-3">
                  <a class="btn bg-danger text-white" href="verify.html">Go Verify</a>
                </div>
                
              </div>
            </section>
            <!-- end of home -->
            </footer>
        <!-- End Footer -->    
            <div >
              <i onclick="topFunction()" id="scroll-btn" class="fa-solid fa-angle-up"></i>
            </div>
            <div><a href="mailto:jayakumaru@gmail.com?subject=From certify genero"> 
              <i class="mail-us fa-solid fa-headset"></i>
            </a>
            <script
            src="https://code.jquery.com/jquery-3.6.0.js"
            integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
            crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>    <!-- Bootstrap framework -->
            <script src="js/purecounter.min.js"></script>
            <script src="js/aos.js"></script>
            <script src="js/script.js"></script>
            <!-- <script defer>changeBackground();</script> -->
            <!-- <div class="butterfly">
            </div> -->
        
            <script defer>
              // const butterfly = document.querySelector(".butter");
              //   setInterval(()=>{
              //   butterfly.style.left = window.innerWidth*Math.random() +"px";
              //   butterfly.style.top =  window.innerHeight*Math.random() + "px";
              //   },4000)
          $(".loader-wraper").fadeOut("slow");
            </script>
        
          </body>
        </html>
        `)
      }) 
a.get('/regis', function(req,res){ //request and response
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Register</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <style>
                *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .container{
            width: 100%;
            display: flex;
        }
        .container .div-form{
            height: 100vh;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .container .div-form h1{
            font-size: 50px;
            margin-bottom: 50px;
        }
        .container .div-form form{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        form .inp{
            width: 60%;
            margin: auto;
            height: 60px;
            margin-bottom: 30px;
            border-radius: 50px;
            box-shadow: 20px 20px 20px #8e1df720,
            -10px -10px 20px #8e1df720;
            position: relative;
            align-items: center;
        }
        form .inp input{
             width: 100%;
             height: 100%;
             border-radius: 50px;
             outline: none;
             border: none;
             padding: 20px 70px;
             font-size: 18px;
        }
        form .inp i{
            position: absolute;
            color: #050606;
            font-size: 30px;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
        }
        form .inp .fa-eye{
            left: 90%;
            font-size: 16px;
            cursor: pointer;
        }
        form .check{
            width: 60%;
            margin: 0 auto 40px;
            display: flex;
            align-items:center;
        }
        form .check input{
            margin: 0 5px 0 20px;
        }
        form .check span{
           margin-top: 3px;
           color: #555555;
           font-size: 13px;
        }
        form .btn{
            color: #fff;
            font-size: 20px;
            width: 250px;
            margin: auto;
            background: linear-gradient(170deg,#000000,#010101);
            padding: 15px;
            border-radius: 50px;
            cursor: pointer;
            border: none;
            margin-bottom: 20px;
        }
        form .spn-regs{
            text-align: center;
            font-size: 14px;
        }
        form .spn-regs a{
            color: #000000;
            text-decoration: none;
        }
        form .spn-reg:hover a{
            text-decoration: underline;
        }
        
        
        .container .div-text{
            height: 100vh;
            width: 60%;
            background: linear-gradient(170deg,#000,#010);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }
        .container .div-text h1{
            color: #fff;
            font-size: 40px;
            margin-bottom: 20px;
        
        }
        .container .div-text p{
            margin: 0 auto;
            width: 60%;
            color: #f0f0f0;
            font-size: 18px;
            line-height: 2;
        }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="div-form">
                    <h1>Hello!</h1>
                    <form action = "/database" method="POST">
                        <div class="inp">
                            <i class="fa-regular fa-user" style="color: #000000;"></i>
                            <input type="text" name= "name" placeholder="User Name">
                        </div>
                        <div class="inp">
                            <i class="fa-solid fa-lock" style="color: #000000;"></i>
                            <input type="password" name= "password"  placeholder="password">
                            <i class="fa-solid fa-eye" style="color: #000000;"></i>
                        </div>
                        <div class="inp">
                            <i class="fa-solid fa-lock" style="color: #000000;"></i>
                            <input type="password" name= "password1" placeholder=" confirm password">
                            <i class="fa-solid fa-eye" style="color: #000000;"></i>
                        </div>
                        <div class="check">
                            <input type="checkbox">
                            <span>Remember Me</span>
                        </div>
                        <button class="btn">Register</button>
            
                    </form>
                    
                </div>
                <div class="div-text">
                    <h1>Welcome Back!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid a cupiditate eligendi possimus, tempore ab architecto suscipit expedita voluptatum blanditiis.
                    </p>
                    
                </div>
            </div>
            
        </body>
        </html>`)
    }) 
a.get('/detail', function(req,res){ //request and response
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <style>
                *{
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    font-family: 'Quicksand',sans-serif;
                }
                body{
                    width: 100%;
                    height: 100vh;
                }
                .container{
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    padding: 20px 100px;
                }
                .container::after{
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #0b828d;
                    background-size: cover;
                    z-index: -1;
                    filter: blur(50px);
                }
                .contact-box{
                    max-width: 850px;
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    background-color: #ffffff;
                    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
                }
                
                .right{
                    padding: 100px;
                    margin-right: 40px;
                    margin-left: 30px;
                }
                h2{
                    position: relative;
                    padding-bottom: 10px;
                    margin-bottom: 10px;
                }
                h2:after{
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    height: 4px;
                    width: 50px;
                    border-radius: 2px;
                    background-color: #2ecc71;
                }
                .field{
                    width: 100%;
                    padding: 0.5rem 1rem;
                    outline: none;
                    border: 2px solid rgba(0, 0, 0, 0);
                    background-color: rgba(230, 230, 230, 0.6);
                    font-size: 1.1rem;
                    margin-bottom: 22px;
                    transition: .3s;
                }
                .field:hover{
                    background-color: rgba(0, 0, 0, 0.1);
                }
                .field:focus{
                    background-color: #29a8c7;
                    border: 2px solid rgba(30, 85, 250, 0.47);
                }
                .area{
                    min-height: 150px;
                }
                .btn{
                    width: 100%;
                    padding: 0.5rem 1rem;
                    font-size: 1.1rem;
                    background-color: #2ecc71;
                    cursor: pointer;
                    outline: none;
                    border: none;
                    color: #fff;
                    transition: .3s;
                }
                .btn:hover{
                    background-color: #27ae60;
                }
                @media screen and (max-width:850px){
                    .contact-box{
                        grid-template-columns: 1fr;
                    }
               }
            </style>
        </head>
        <body>
        <form action = "/detail_post" method="POST">
                <div class="contact-box">
                    <div class="right">
                        <h2>Registration</h2>
                        <input type="text" class="field" name="names"   placeholder="Your Name">
                        <input type="text" class="field" name="roll" placeholder="Roll No">
                        <input type="text" class="field" name="award" placeholder="Certified for">
                        <input type="text" class="field" name="position" placeholder="Place of Birth">
                        <input type="date" class="field" name="date" placeholder="date">
                        
                        <button class="btn">Submit</button>   
                    </div>
                </div>
            </div></form>
        </body>
        </html>`)
    }) 
a.get('/slogin', function(req,res){ //request and response
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <style>
                *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .container{
            width: 100%;
            display: flex;
        }
        .container .div-form{
            height: 100vh;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .container .div-form h1{
            font-size: 50px;
            margin-bottom: 50px;
        }
        .container .div-form form{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        form .inp{
            width: 60%;
            margin: auto;
            height: 60px;
            margin-bottom: 30px;
            border-radius: 50px;
            box-shadow: 20px 20px 20px #8e1df720,
            -10px -10px 20px #8e1df720;
            position: relative;
            align-items: center;
        }
        form .inp input{
             width: 100%;
             height: 100%;
             border-radius: 50px;
             outline: none;
             border: none;
             padding: 20px 70px;
             font-size: 18px;
        }
        form .inp i{
            position: absolute;
            color: #050606;
            font-size: 30px;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
        }
        form .inp .fa-eye{
            left: 90%;
            font-size: 16px;
            cursor: pointer;
        }
        form .check{
            width: 60%;
            margin: 0 auto 40px;
            display: flex;
            align-items:center;
        }
        form .check input{
            margin: 0 5px 0 20px;
        }
        form .check span{
           margin-top: 3px;
           color: #555555;
           font-size: 13px;
        }
        form .btn{
            color: #fff;
            font-size: 20px;
            width: 250px;
            margin: auto;
            background: linear-gradient(170deg,#561a97,#3c0133);
            padding: 15px;
            border-radius: 50px;
            cursor: pointer;
            border: none;
            margin-bottom: 20px;
        }
        form .spn-regs{
            text-align: center;
            font-size: 14px;
        }
        form .spn-regs a{
            color: #000000;
            text-decoration: none;
        }
        form .spn-reg:hover a{
            text-decoration: underline;
        }
        
        
        .container .div-text{
            height: 100vh;
            width: 60%;
            background: linear-gradient(170deg,#ad1096,rgb(35, 2, 37));
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }
        .container .div-text h1{
            color: #fff;
            font-size: 40px;
            margin-bottom: 20px;
        
        }
        .container .div-text p{
            margin: 0 auto;
            width: 60%;
            color: #f0f0f0;
            font-size: 18px;
            line-height: 2;
        }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="div-form">
                    <h1>Hello!</h1>
                    <form action = "/sverify" method="POST">
                        <div class="inp">
                            <i class="fa-regular fa-user" style="color: #000000;"></i>
                            <input type="text" name ="names" placeholder="User Name">
                        </div>
                        <div class="inp">
                            <i class="fa-solid fa-lock" style="color: #000000;"></i>
                            <input type="password" name = "password2" placeholder="password">
                            <i class="fa-solid fa-eye" style="color: #000000;"></i>
                        </div>
                        <div class="check">
                            <input type="checkbox">
                            <span>Remember Me</span>
                        </div>
                        <button class="btn">Sign In</button>
                        <span class="spn-regs">Not a Member?<a href="/sregis"> Register Now</a></span>
            
                    </form>
                    
                </div>
                <div class="div-text">
                    <h1>Welcome Back!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid a cupiditate eligendi possimus, tempore ab architecto suscipit expedita voluptatum blanditiis.
                    </p>
                    
                </div>
            </div>
            
        </body>
        </html>`)
    }) 
a.get('/sregis', function(req,res){ //request and response
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Register</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
            <style>
                *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .container{
            width: 100%;
            display: flex;
        }
        .container .div-form{
            height: 100vh;
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .container .div-form h1{
            font-size: 50px;
            margin-bottom: 50px;
        }
        .container .div-form form{
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        form .inp{
            width: 60%;
            margin: auto;
            height: 60px;
            margin-bottom: 30px;
            border-radius: 50px;
            box-shadow: 20px 20px 20px #8e1df720,
            -10px -10px 20px #8e1df720;
            position: relative;
            align-items: center;
        }
        form .inp input{
             width: 100%;
             height: 100%;
             border-radius: 50px;
             outline: none;
             border: none;
             padding: 20px 70px;
             font-size: 18px;
        }
        form .inp i{
            position: absolute;
            color: #050606;
            font-size: 30px;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
        }
        form .inp .fa-eye{
            left: 90%;
            font-size: 16px;
            cursor: pointer;
        }
        form .check{
            width: 60%;
            margin: 0 auto 40px;
            display: flex;
            align-items:center;
        }
        form .check input{
            margin: 0 5px 0 20px;
        }
        form .check span{
           margin-top: 3px;
           color: #555555;
           font-size: 13px;
        }
        form .btn{
            color: #fff;
            font-size: 20px;
            width: 250px;
            margin: auto;
            background: linear-gradient(170deg,#561a97,#3c0133);
            padding: 15px;
            border-radius: 50px;
            cursor: pointer;
            border: none;
            margin-bottom: 20px;
        }
        form .spn-regs{
            text-align: center;
            font-size: 14px;
        }
        form .spn-regs a{
            color: #000000;
            text-decoration: none;
        }
        form .spn-reg:hover a{
            text-decoration: underline;
        }
        
        
        .container .div-text{
            height: 100vh;
            width: 60%;
            background: linear-gradient(170deg,#ad1096,rgb(35, 2, 37));
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }
        .container .div-text h1{
            color: #fff;
            font-size: 40px;
            margin-bottom: 20px;
        
        }
        .container .div-text p{
            margin: 0 auto;
            width: 60%;
            color: #f0f0f0;
            font-size: 18px;
            line-height: 2;
        }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="div-form">
                    <h1>Hello!</h1>
                    <form action = "/sdatabase" method="POST">
                        <div class="inp">
                            <i class="fa-regular fa-user" style="color: #000000;"></i>
                            <input type="text" name="names" placeholder="User Name">
                        </div>
                        <div class="inp">
                        <input type="text" name="roll" placeholder="Roll No">
          
                    </div>
                        <div class="inp">
                            <i class="fa-solid fa-lock" style="color: #000000;"></i>
                            <input type="password" name="password2" placeholder="password">
                            <i class="fa-solid fa-eye" style="color: #000000;"></i>
                        </div>
                        <div class="inp">
                            <i class="fa-solid fa-lock" style="color: #000000;"></i>
                            <input type="password" name="password3"  placeholder=" confirm password">
                            <i class="fa-solid fa-eye" style="color: #000000;"></i>
                        </div>
                        <div class="check">
                            <input type="checkbox">
                            <span>Remember Me</span>
                        </div>
                        <button class="btn">Register</button>
            
                    </form>
                    
                </div>
                <div class="div-text">
                    <h1>Welcome Back!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid a cupiditate eligendi possimus, tempore ab architecto suscipit expedita voluptatum blanditiis.
                    </p>
                    
                </div>
            </div>
            
        </body>
        </html>`)
    })  
a.post('/database', function(req,res){
      client.connect(err => {
         if(req.body.password==req.body.password1){
            const collection = client.db("myapp").collection("item2");
            const matchCondition = {
                'mage': req.body.name,
                'pass': req.body.password
              };
              collection.find(matchCondition).toArray(function(err, documents) {
                if (err) {
                  console.error('Error executing find query:', err);
                  return;
                }   
if(documents.length==1){
alert("same user");res.redirect('/regis')}
             else{  
            collection.insertOne({mage:req.body.name,pass:req.body.password })
            res.redirect('/login')
         } });
        }else{
            alert("invalid password")
            res.redirect('/regis')
           }     
  })})
a.post('/sdatabase', function(req,res){
    client.connect(err => {
       if(req.body.password2==req.body.password3){
          const collection = client.db("myapp").collection("item4");
          const matchCondition = {
              'mage': req.body.names,
              'pass': req.body.password2
            };
            collection.find(matchCondition).toArray(function(err, documents) {
              if (err) {
                console.error('Error executing find query:', err);
                return;
              }   
if(documents.length==1){
alert("same user");res.redirect('/sregis')}
           else{
          collection.insertOne({mage:req.body.names,pass:req.body.password2,'roll': req.body.roll})
          res.redirect('/slogin')
       } });
      }else{
          alert("invalid password")
          res.redirect('/sregis')
         }     
})})
a.post('/verify', function(req,res){
    client.connect(err => {
          const collection = client.db("myapp").collection("item2");
          const matchCondition = {
              'mage': req.body.name,
              'pass': req.body.password
            };
            collection.find(matchCondition).toArray(function(err, documents) {
              if (err) {
                console.error('Error executing find query:', err);
                return;
              }           
if(documents.length==1){
res.redirect('/admin_home')}
           else{
            alert("login fails");
       } })})})
a.post('/sverify', function(req,res){
        client.connect(err => {
              const collection = client.db("myapp").collection("item4");
              const matchCondition = {
                  'mage': req.body.names,
                  'pass': req.body.password2
                };
                collection.find(matchCondition).toArray(function(err, documents) {
                  if (err) {
                    console.error('Error executing find query:', err);
                    return;
                  }           
    if(documents.length==1){
      var p=documents[0]['roll'];
        const collection = client.db("myapp").collection("item3");
        collection.find({'roll':p}).toArray(function(err,items){
      res.send(`<ol class="order">
      ${items.map(function(item){
        return `<li class="list1" id="listu">
        <div>
        <span>${item.mage}</span>
        <span>${item.award}</span>
        <span>${item.position}</span>
        <span>${item.date}</span>
        </div>
        </li>`
      }).join('')}
      </ol>`);})

    }
               else{
                alert("login fails");
           } })})})
a.post('/detail_post', function(req,res){
  client.connect(err => {
        const collection = client.db("myapp").collection("item3");
        collection.insertOne({mage:req.body.names,roll:req.body.roll,award:req.body.award,position:req.body.position,date:req.body.date});
        alert("register sucessful");
       })
       res.redirect('/detail');
      })
      
a.listen(3000)
