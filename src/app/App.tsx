import React, { useEffect } from "react";
import {
  MainContainer,
  Logo,
  NutritionListContainer,
  NutritionFactTitle,
  LineStyle,
  ProcessTitle,
  ProcessContainer,
  NameCard,
  FarmarCard,
  Prev,
  Next,
  CarouselContainer,
  Carousel,
  InfoContainer,
  InfoCard,
  SubContainer,
} from "./style";
import HeroCard from "../cards/hero-card";
import ListCard from "../cards/list-card";
import Mango from "../assets/images/Mango.jpg";
import Images from "../assets/images/images.jpeg";
import prev from "../assets/images/prev.svg";
import next from "../assets/images/next.svg";
import Avatar from "../assets/images/img_avatar.png";
function App() {
  var slideIndex = 1;
  useEffect(() => {
    showSlides(slideIndex);
  }, []);
  function plusSlides(n: any) {
    showSlides((slideIndex += n));
  }
  function currentSlide(n: any) {
    showSlides((slideIndex = n));
  }
  function showSlides(n: any) {
    var i;

    var slides = document.getElementsByClassName("client-content");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      // @ts-ignore
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    // @ts-ignore
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
  }
  return (
    <MainContainer>
      <Logo>
        <span />
        <span></span>
        <span>Healthy Fruits</span>
      </Logo>
      <HeroCard
        bgColor={"#fab730"}
        headFontColor={"#aa613d"}
        paraFontColor={"#f4c840"}
        textAlign="left"
        flexDirection="row"
      />
      <HeroCard
        bgColor={"#fff"}
        headFontColor={"#77bd4b"}
        paraFontColor={"#d6d7cf"}
        textAlign="right"
        flexDirection="row-reverse"
      />
      <HeroCard
        bgColor={"#74bd47"}
        headFontColor={"#fdef5c"}
        paraFontColor={"#8dd06c"}
        textAlign="left"
        flexDirection="row"
      />
      <NutritionListContainer>
        <NutritionFactTitle fontSize="25px">Nutrition fact</NutritionFactTitle>

        <ListCard nutrition="Serving size" size="100 g" />
        <LineStyle />
        <ListCard nutrition="Amount per serving" />
        <NutritionFactTitle fontSize="40px">Calories</NutritionFactTitle>
        <LineStyle />
        <h4 style={{ textAlign: "right" }}>% Daily value</h4>
        <ListCard nutrition="Total fat 0.3g" size="0%" borderTop={true} />
        <ListCard
          nutrition="Saturated fat 0.1g"
          size="0%"
          borderTop={true}
          light={true}
        />
        <ListCard nutrition="Sodium 1mg" size="0%" borderTop={true} />
        <ListCard
          nutrition="Total carbohydrate 23g"
          size="8%"
          borderTop={true}
        />
        <ListCard
          nutrition="Dietary fiber 2.6g"
          size="9%"
          borderTop={true}
          light={true}
        />
        <ListCard nutrition="Sugar 12g" borderTop={true} light={true} />
        <ListCard nutrition="Protein 1.1g" size="2%" borderTop={true} />
        <LineStyle />
        <ListCard
          nutrition="Vitamin D 0.00mg"
          size="0%"
          borderTop={true}
          light={true}
        />
        <ListCard
          nutrition="Calcium 5.00mg"
          size="0%"
          borderTop={true}
          light={true}
        />
        <ListCard
          nutrition="Iron 0.26g"
          size="1%"
          borderTop={true}
          light={true}
        />
        <ListCard
          nutrition="Potassium 358mg"
          size="8%"
          borderTop={true}
          light={true}
        />
        <LineStyle />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          nesciunt, tempora natus ad minima quo beatae eveniet ipsam quidem
          officia unde voluptatibus impedit libero exercitationem.
        </p>
      </NutritionListContainer>
      <SubContainer>
        <ProcessContainer>
          <ProcessTitle>
            Harvest stage
            {/* <span />
        <span>Harvest stage</span> */}
          </ProcessTitle>
          <NameCard>
            <h4>Product name</h4>
            <p>Papaya</p>
          </NameCard>
          <NameCard>
            <h4>Product name</h4>
            <p>Papaya</p>
          </NameCard>
          <h3 style={{ marginTop: "40px" }}>Farmar details</h3>
          <FarmarCard>
            <div />
            <div>
              <h4>Ajay Kumar</h4>
              <p>Ghaziabad,Utter Pradesh</p>
            </div>
          </FarmarCard>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="400"
            title="map"
          />
        </ProcessContainer>
        <ProcessContainer>
          <ProcessTitle>
            At collection centre
            {/* <span />
        <span>Harvest stage</span> */}
          </ProcessTitle>
          <NameCard>
            <h4>Centre name</h4>
            <p>Lal Khan</p>
          </NameCard>
          <NameCard>
            <h4>FSSAI license</h4>
            <p>B01252220025</p>
          </NameCard>
          <h3 style={{ marginTop: "40px" }}>Location</h3>
          {/* <FarmarCard>
          <div />
          <div>
            <h4>Ajay Kumar</h4>
            <p>Ghaziabad,Utter Pradesh</p>
          </div>
        </FarmarCard> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%"
            height="400"
            title="map"
          />
        </ProcessContainer>
        <CarouselContainer>
          <Carousel className="client-content">
            <div>
              <img src={Mango} alt="" />

              <img src={Mango} alt=""/>

              <img src={Mango} alt=""/>
            </div>
          </Carousel>
          <Carousel className="client-content">
            <div>
              <img src={Images} alt=""/>
              <img src={Images} alt=""/>
              <img src={Images} alt=""/>
            </div>
          </Carousel>
          <Prev onClick={() => plusSlides(-1)}>
            <img src={prev} alt="prev" />
          </Prev>
          <Next onClick={() => plusSlides(1)}>
            <img src={next} alt="prev" />
          </Next>
        </CarouselContainer>
        <InfoContainer>
          <h3>
            Secret behid your
            <br />
            fruit's goodness
          </h3>
          <InfoCard>
            <div>
              <img src={Avatar} />
              <p>Direct from form</p>
            </div>
            <div>
              <img src={Avatar} />
              <p>Fully traceble</p>
            </div>
            <div>
              <img src={Avatar} />
              <p>Export quality</p>
            </div>
          </InfoCard>
        </InfoContainer>
        <ProcessTitle style={{ color: "#9dd5d9", marginTop: "70px" }}>
          Delivering with love and care for you to relish
          {/* <span />
        <span>Harvest stage</span> */}
        </ProcessTitle>
      </SubContainer>
      <LineStyle />
      <h4>About Demo Group</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet
        voluptas excepturi quos quasi assumenda nisi voluptate unde cupiditate
        tempora qui animi quidem, eius dolores culpa nulla quisquam alias modi
        omnis possimus officiis itaque dicta, veritatis incidunt. Vitae laborum
        saepe deserunt, odit odio repellat tenetur, rem quisquam cum, harum
        assumenda.
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <LineStyle />
    </MainContainer>
  );
}

export default App;
