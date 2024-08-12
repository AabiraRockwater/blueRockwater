# ROCKWATERWebsite


.section-6-linked-carousels {
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    background: linear-gradient(
      to right,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 50%,
      rgb(219, 255, 219) 40%,
      rgb(185, 185, 255) 100%
    );
    color: rgb(153, 163, 255);
    letter-spacing: 2px;
    z-index: 1;
  }

  .lc-left-div {
    margin: 10px;
    margin-top: 100px;
    float: left;
  }
  .lc-title {
    font-size: 70px;
    font-weight: 750;
    text-transform: uppercase;
    line-height: 1.5;
    margin-bottom: 10px;
    margin-left: 40px;
    padding-left: 40px;
    letter-spacing: 5px;
  }
  .carousel-nav {
    max-height: 200px;
    max-width: 500px;
    overflow: hidden;
    margin: 10px;
    padding-left: 10px;
    margin-top: 0px;
  }
  .carousel-cell-nav {
    align-items: center;
    min-width: 100%;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-self: start;
    height: 80px;
  }
  .lc-nav-text {
    font-size: 40px;
    margin: 50px;
    padding: 10px;
    text-transform: uppercase;
    color: rgb(153, 163, 255);
  }
  .section-6-linked-carousels .flickity-prev-next-button {
    color: rgb(153, 163, 255);
    background: transparent;
  }
  .section-6-linked-carousels .flickity-prev-next-button:hover {
    color: rgb(255, 255, 255);
    background: rgb(153, 163, 255);
  }
  .lc-right-div {
    float: right;
    min-width: 500px;
    margin: 10px;
    margin-top: 60px;
    /* margin-right: 60px; */
  }
  .lc-carousel-container {
    margin: 0px;
    margin-top: 20px;
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .carousel-main {
    margin: auto;
    border: 10px solid white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.482);
  }
  .carousel-cell-main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
  }
  .section-6-linked-carousels img {
    max-width: 400px;
    margin: 40px;
    margin-inline: 20px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.372);

  }


/* ---------------------------- Media Queries ---------------------------- */



@media screen and (1400px < width) {
  .lc-right-div {
      float: right;
      min-width: 550px;
      min-height: 550px;
      margin: 10px;
      margin-top: 60px;
  }

  .lc-carousel-container {
      margin: 0;
      padding: 10px;
      min-width: 550px;
      min-height: 550px;
      margin-left: 50px;
  }

  .carousel-cell-main {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 450px;
      margin: auto;
      margin: 0;
      padding: 0;
  }

  .section-6-linked-carousels img {
      max-width: 450px;
  }
}


@media screen and (1600px < width) {
  .lc-right-div {
      float: right;
      min-width: 600px;
      min-height: 600px;
      margin: 10px;
      margin-top: 60px;
  }

  .lc-carousel-container {
      margin: 0;
      padding: 10px;
      min-width: 600px;
      min-height: 600px;
      margin-left: 50px;
  }

  .carousel-cell-main {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 500px;
      margin: auto;
  }

  .section-6-linked-carousels img {
      max-width: 500px;
  }
}


@media screen and (1800px < width) {
  .lc-right-div {
      float: right;
      min-width: 650px;
      min-height: 650px;
      margin: 10px;
      margin-top: 60px;
  }

  .lc-carousel-container {
      min-width: 650px;
      min-height: 650px;
      margin-left: 50px;
  }

  .carousel-cell-main {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      min-height: 550px;
      margin: auto;
  }

  .section-6-linked-carousels img {
      max-width: 550px;
  }
}

