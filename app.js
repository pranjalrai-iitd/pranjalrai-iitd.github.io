* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Barlow Condensed', sans-serif;
    justify-content: center;
}

body {
    background-image: linear-gradient(to bottom, rgb(30, 30, 97), black, black, black, rgb(30, 30, 97));
}

.scene,
canvas {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url('assets/space.jpg');
    background-size: 100% 100%;
    z-index: -2;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    width: 100%;
    max-height: 40vh;
    z-index: 2;
    text-shadow: 2px 2px 5px black;
}

.logo {
    float: left;
    width: 40%;
    height: 100%;
    margin-left: 50px;
    padding-bottom: 15px;
}

.logo .name {
    float: left;
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    color: whitesmoke;
    text-transform: uppercase;
    font-size: 20px;
    border: solid 2px whitesmoke;
    border-radius: 25px;
    text-shadow: 2px 2px black;
}

.links {
    float: right;
    width: 50%;
    height: 100%;
    margin-right: 20px;
    margin-top: 20px;
    padding-bottom: 15px;
}

.links .nav-links {
    float: right;
    list-style-type: none;
}

.links .nav-links li {
    float: left;
    display: inline;
    margin-top: 10px;
    padding-right: 30px;
}

.links .nav-links li a {
    transition-duration: 30ms;
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 20px;
    text-decoration: none;
    color: whitesmoke;
    border: solid 2px transparent;
    border-radius: 25px;
    text-shadow: 2px 2px black;
}

.links .nav-links .active a {
    transition-duration: 30ms;
    margin-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 20px;
    text-decoration: none;
    color: whitesmoke;
    border: solid 2px whitesmoke;
    border-radius: 25px;
    text-shadow: 2px 2px black;
}

.links .nav-links li a:hover {
    border-color: whitesmoke;
}

.active a:hover {
    border-color: whitesmoke;
}

.welcome {
    width: 100%;
    position: absolute;
    top: 35vh;
    opacity: 0.8;
    text-shadow: 5px 5px 10px black;
    letter-spacing: 20px;
    justify-content: center;
    text-align: center;
}

.welcome h1 {
    color: whitesmoke;
    font-size: 140px;
    text-align: center;
    font-weight: bolder;
    letter-spacing: 30px;
}

.welcome h2 {
    color: whitesmoke;
    font-size: 50px;
    text-align: center;
    font-weight: bolder;
}

.welcome h3 {
    color: whitesmoke;
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
}

.home {
    position: relative;
    width: 100%;
    padding-bottom: 50px;
    padding-top: 50px;
    overflow: auto;
}

.home .content {
    margin-top: 30px;
    position: relative;
    max-width: 50%;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    float: left;
}

.home .content h1 {
    color: whitesmoke;
}

.home .content h2 {
    color: whitesmoke;
    font-size: 20px;
    font-weight: 40;
    word-spacing: 5px;
    letter-spacing: 2px;
}

.home .content h2 a {
    color: rgb(174, 235, 255);
    text-decoration: none;
}

.home .content h2 a:hover {
    text-decoration: underline;
}

.home .home-divider {
    width: 50%;
    height: 100%;
    padding-top: 50px;
    background-color: transparent;
    padding-left: 20px;
    padding-right: 5px;
    float: right;
}

.home .home-divider a img {
    padding-left: 50px;
    float: right;
    width: 100%;
    height: auto;
}

.home-sep {
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: 100px;
    background-color: transparent;
}

.home-sep p {
    color: white;
    text-shadow: 5px 5px 10px rgb(114, 217, 252);
    font-size: 80px;
    text-align: center;
    letter-spacing: 20px;
}

.bio {
    position: relative;
    padding-top: 50px;
    width: 100%;
    padding-bottom: 100px;
    height: inherit;
    overflow: auto;
}

.bio-content {
    position: relative;
    max-width: 50%;
    padding-top: 10vh;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    float: right;
}

.bio-content h1 {
    color: whitesmoke;
}

.bio-content h2 {
    color: whitesmoke;
    font-size: 20px;
    font-weight: 40;
    word-spacing: 5px;
    letter-spacing: 2px;
}

.bio-content h2 a {
    color: rgb(174, 235, 255);
    text-decoration: none;
}

.bio-content h2 a:hover {
    text-decoration: underline;
}

.bio-divider {
    width: 50%;
    height: auto;
    float: right;
    padding-top: 100px;
    background-color: transparent;
}

.bio-divider a img {
    height: auto;
    width: 80%;
    padding-right: 20px;
    padding-left: 10px;
}

.bio-sep {
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: 100px;
    background-color: transparent;
}

.bio-sep p {
    color: white;
    text-shadow: 5px 5px 10px rgb(114, 217, 252);
    font-size: 80px;
    text-align: center;
    letter-spacing: 20px;
}

.projects {
    position: relative;
    width: 100%;
    padding-top: 50px;
    overflow: auto;
    padding-bottom: 50px;
}

.projects h1 {
    color: whitesmoke;
}

.projects .projects-content {
    position: relative;
    width: 100%;
    padding-top: 100px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
}

.projects .projects-content .col1 {
    max-width: 50%;
    height: auto;
    float: left;
    padding-left: 5px;
    padding-right: 30px;
}

.projects .projects-content .col2 {
    max-width: 50%;
    height: auto;
    float: right;
    padding-left: 30px;
    padding-right: 5px;
}

.col1 h1,
.col2 h1 {
    color: whitesmoke;
}

.col1 h2,
.col2 h2 {
    color: whitesmoke;
    font-size: 20px;
    font-weight: 40;
    word-spacing: 5px;
    letter-spacing: 2px;
}

.col1 h2 a,
.col2 h2 a {
    color: rgb(174, 235, 255);
    text-decoration: none;
}

.col1 h2 a:hover,
.col2 h2 a:hover {
    text-decoration: underline;
}

.projects-sep {
    position: relative;
    padding-top: 100px;
    padding-bottom: 100px;
    width: 100%;
    height: 100px;
    background-color: transparent;
}

.projects-sep p {
    color: white;
    text-shadow: 5px 5px 10px rgb(114, 217, 252);
    font-size: 80px;
    text-align: center;
    letter-spacing: 20px;
}

.cv {
    position: relative;
    width: 100%;
    padding-top: 50px;
    overflow: auto;
    padding-top: 100px;
}

.cv-content {
    width: 100%;
    padding-top: 4vh;
    padding-bottom: 150px;
    padding-left: 20px;
    padding-right: 20px;
}

.cv-content h2 {
    color: whitesmoke;
    font-size: 20px;
    font-weight: 40;
    word-spacing: 5px;
    letter-spacing: 2px;
    text-align: center;
}

.cv-content h2 a {
    color: rgb(174, 235, 255);
    text-decoration: none;
}

.cv-content h2 a:hover {
    text-decoration: underline;
}

footer {
    width: 100%;
    height: 50vh;
    background-color: black;
}

footer h1 {
    padding-top: 2vh;
    font-size: 30px;
    color: whitesmoke;
    text-align: center;
    font-weight: lighter;
    text-shadow: 2px 2px 5px rgb(114, 217, 252);
}

footer h3 {
    padding-bottom: 2vh;
    font-size: 15px;
    color: whitesmoke;
    text-align: center;
    font-weight: lighter;
    word-spacing: 5px;
}

footer h3 a {
    padding-bottom: 2vh;
    font-size: 15px;
    color: whitesmoke;
    text-align: center;
    font-weight: lighter;
    word-spacing: 5px;
}

footer h3 a:hover {
    filter: brightness(40%);
}

.contact-list {
    width: 100%;
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 20vh;
    list-style-type: none;
    display: flex;
    justify-content: center;
}

.contact-list li {
    padding-top: 5vh;
    display: inline;
    align-items: center;
}

.contact-list li a {
    font-size: 30px;
    padding-right: 20px;
    padding-left: 20px;
}

.contact-list li a:hover {
    filter: brightness(40%);
}

.mail a {
    color: rgb(240, 237, 54);
}

.github a {
    color: white;
}

.linkedin a {
    color: rgb(40, 103, 178)
}

#nav-transition .burger {
    width: 100%;
    position: absolute;
    overflow: auto;
    font-size: 5px;
    padding-right: 5%;
    padding-top: 2.5%;
    display: none;
}

#nav-transition .burger .line1 {
    height: 2px;
    width: 30px;
    background-color: white;
    border: solid 2px white;
    border-radius: 25px;
    float: right;
}

#nav-transition .burger .line2 {
    height: 2px;
    width: 30px;
    background-color: white;
    border: solid 2px white;
    border-radius: 25px;
    float: right;
}

#nav-transition .burger .line3 {
    height: 2px;
    width: 30px;
    background-color: white;
    border: solid 2px white;
    border-radius: 25px;
    float: right;
}

@media only screen and (max-width:1000px) {
    .welcome h1 {
        font-size: 120px;
    }
    .bio-content h2 {
        font-size: 16px;
    }
    .home .content h2 {
        font-size: 16px;
    }
    .projects-content .col1 h2 {
        font-size: 16px;
    }
    .projects-content .col2 h2 {
        font-size: 16px;
    }
    .cv-content h2 {
        font-size: 16px;
    }
    .home-sep p {
        font-size: 60px;
    }
    .bio-sep p {
        font-size: 60px;
    }
    .projects-sep p {
        font-size: 60px;
    }
    .links .nav-links li a {
        font-size: 16px;
    }
    .links .nav-links li .active a {
        font-size: 16px;
    }
}

@media only screen and (max-width:900px) {
    .scene,
    canvas {
        height: 80vh;
    }
    .welcome h1 {
        font-size: 100px;
    }
    .welcome h2 {
        font-size: 40px;
    }
    .welcome h3 {
        font-size: 20px;
    }
    #nav-transition .burger .line1 {
        width: 26px;
    }
    #nav-transition .burger .line2 {
        width: 26px;
    }
    #nav-transition .burger .line3 {
        width: 26px;
    }
}

@media only screen and (max-width:800px) {
    .scene,
    canvas {
        height: 60vh;
    }
    .welcome {
        top: 22vh;
    }
    .home {
        overflow: hidden;
        width: 100%;
        justify-content: center;
    }
    .home .content {
        max-width: 100%;
        text-align: center;
    }
    .home .home-divider {
        width: 100%;
        justify-content: center;
    }
    .bio {
        overflow: hidden;
        width: 100%;
        justify-content: center;
    }
    .bio .bio-content {
        max-width: 100%;
        text-align: center;
    }
    .bio .bio-divider {
        width: 100%;
        justify-content: center;
        padding-left: 10%;
    }
    .projects .projects-content .col1 {
        max-width: 100%;
        padding: 0;
        text-align: center;
    }
    .projects .projects-content .col2 {
        max-width: 100%;
        padding: 0;
        text-align: center;
    }
    .logo {
        display: none;
    }
    .links {
        width: 100%;
        height: 0vh;
        margin-right: 0px;
        margin-top: 0px;
        padding-bottom: 0px;
        margin-bottom: 0px;
        z-index: -99999;
    }
    .links .nav-links {
        width: 100%;
        height: 100vh;
        background-color: black;
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        text-align: center;
        clip-path: circle(100px at 90% -30%);
        -webkit-clip-path: circle(100px at 90% -30%);
        transition: all 1s ease-out;
        pointer-events: none;
    }
    .links .nav-links.open {
        clip-path: circle(1500px at 90% -30%);
        -webkit-clip-path: circle(1500px at 90% -30%);
        pointer-events: all;
    }
    .links .nav-links li {
        padding-top: 10vh;
        padding-bottom: 10vh;
    }
    .links .nav-links li a {
        font-size: 20px;
    }
    #nav-transition .burger {
        display: inherit;
        z-index: 4;
    }
    #nav-transition .burger .line1 {
        cursor: pointer;
    }
    #nav-transition .burger .line2 {
        cursor: pointer;
    }
    #nav-transition .burger .line3 {
        cursor: pointer;
    }
}

@media only screen and (max-width:750px) {
    .welcome h1 {
        font-size: 80px;
    }
    .home-sep p {
        font-size: 40px;
    }
    .projects-sep p {
        font-size: 40px;
    }
    .bio-sep p {
        font-size: 40px;
    }
}

@media only screen and (max-width:600px) {
    .scene,
    canvas {
        height: 50vh;
    }
    .welcome h1 {
        font-size: 60px;
    }
    .welcome h2 {
        font-size: 40px;
    }
    .welcome h3 {
        font-size: 25px;
    }
    .home-sep p {
        font-size: 40px;
    }
    .projects-sep p {
        font-size: 40px;
    }
    .bio-sep p {
        font-size: 40px;
    }
    footer {
        height: 40vh;
    }
    .bio-content h2 {
        font-size: 14px;
    }
    .home .content h2 {
        font-size: 14px;
    }
    .projects-content .col1 h2 {
        font-size: 14px;
    }
    .projects-content .col2 h2 {
        font-size: 14px;
    }
    .cv-content h2 {
        font-size: 14px;
    }
    footer h3 {
        font-size: 11px;
    }
    #nav-transition .burger .line1 {
        width: 22px;
    }
    #nav-transition .burger .line2 {
        width: 22px;
    }
    #nav-transition .burger .line3 {
        width: 22px;
    }
}

@media only screen and (max-width:540px) {
    .welcome {
        top: 20vh;
        padding-left: 5%;
    }
    .welcome h1 {
        font-size: 46px;
    }
    .welcome h2 {
        font-size: 28px;
    }
    .welcome h3 {
        font-size: 22px;
    }
    .home-sep p {
        font-size: 40px;
    }
    .projects-sep p {
        font-size: 40px;
    }
    .bio-sep p {
        font-size: 40px;
    }
    #nav-transition .burger .line1 {
        width: 20px;
    }
    #nav-transition .burger .line2 {
        width: 20px;
    }
    #nav-transition .burger .line3 {
        width: 20px;
    }
}

@media only screen and (max-width:450px) {
    .scene,
    canvas {
        height: 40vh;
    }
    .welcome h1 {
        font-size: 36px;
    }
    .welcome h2 {
        font-size: 25px;
    }
    .welcome h3 {
        font-size: 18px;
    }
    .home-sep p {
        font-size: 34px;
    }
    .projects-sep p {
        font-size: 34px;
    }
    .bio-sep p {
        font-size: 34px;
    }
}

@media only screen and (max-width:420px) {
    .scene,
    canvas {
        height: 40vh;
    }
    .welcome {
        height: 12vh;
    }
    .welcome h1 {
        font-size: 28px;
        letter-spacing: 20px;
    }
    .welcome h2 {
        font-size: 16px;
        letter-spacing: 10px;
    }
    .welcome h3 {
        font-size: 14px;
        letter-spacing: 8px;
    }
    .home-sep p {
        font-size: 22px;
    }
    .projects-sep p {
        font-size: 22px;
    }
    .bio-sep p {
        font-size: 22px;
    }
    .bio-content h2 {
        font-size: 11px;
    }
    .home .content h2 {
        font-size: 11px;
    }
    .projects-content .col1 h2 {
        font-size: 11px;
    }
    .projects-content .col2 h2 {
        font-size: 11px;
    }
    .cv-content h2 {
        font-size: 11px;
    }
    #nav-transition .burger .line1 {
        width: 18px;
    }
    #nav-transition .burger .line2 {
        width: 18px;
    }
    #nav-transition .burger .line3 {
        width: 18px;
    }
}

@media only screen and (max-width:320px) {
    .scene,
    canvas {
        height: 40vh;
    }
    .welcome h1 {
        font-size: 30px;
    }
    .welcome h2 {
        font-size: 20px;
    }
    .welcome h3 {
        font-size: 14px;
    }
    .home-sep p {
        font-size: 28px;
    }
    .projects-sep p {
        font-size: 28px;
    }
    .bio-sep p {
        font-size: 28px;
    }
}
