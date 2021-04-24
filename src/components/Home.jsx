import React from "react";
import Nav from "./HomePageComponents/Nav";
import "../home.css";
import Product from "./HomePageComponents/Product";
function Home() {
  return (
    <div>
      <Nav />
      <div className="home">
        <img
          className="home-banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon-banner"
        />
        <div className="products">
          <Product
            key="1"
            id ={1}
            title="Book1"
            price={15}
            rating={4}
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <Product
            key="2"
            id = {2}
            title="Book2"
            price={15}
            rating={4}
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          </div>
          <div className="products">
           <Product
            key="3"
            id = {3}
            title="Book3"
            price={15}
            rating={4}
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
           <Product
            key="4"
            id = {4}
            title="Book4"
            price={15}
            rating={4}
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
          <Product
            key="5"
            id = {5}
            title="Book5"
            price={15}
            rating={4}
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
        </div>
        <div className="products">
          <Product
            key="6"
            id = {6}
            title="Book6"
            price={15}
            rating={4}
            image="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
