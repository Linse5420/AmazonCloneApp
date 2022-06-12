import React from "react";
import "./Home.css";
import Product from "./Product";
export const Home = () => {
  return (
    <div className="home">
      <img
        className="homeImage"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="homeImage"
      />
      {/**product information */}
      <div className="home_row">
        <Product
          id="178yiu67o087"
          title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoalr "
          price={65.99}
          rating={5}
          image="https://www.wordstream.com/wp-content/uploads/2021/07/amazon-seo-product-images.jpg.webp"
        />
        <Product
          id="1ey789097"
          title="Adiva Rugs Machine Washable Area Rug for Living Room, Bedroom, Bathroom, Kitchen."
          price={64.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/A1pg8kF-eoL._AC_SY879_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="189765hbjsd"
          title="SANSUI ES40V1FA, 40 inch Smart TV 1080p Android 11 TV with Google Assistant(Voice Control). "
          price={329.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71aiOe2eN8L._AC_SX425_.jpg"
        />
        <Product
          id="178yiu67o087"
          title="COSTWAY Portable Air Conditioner, 10000BTU(SACC:7000BTU/H) Air Cooler with Drying, Fan "
          price={469.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61064G+Z0ML._AC_SX679_.jpg"
        />
        <Product
          id="178jfftdfyftyd"
          title="PERLESMITH Universal TV Stand - Table Top TV Stand for 37-55 inch LCD LED TVs. "
          price={45.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/71Mh0scYMJL._AC_SX425_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="178yiu67lmsj7"
          title="Chemical Guys CWS_110 - Honeydew Snow Foam Car Wash Soap And Cleanser (1 Gal)"
          price={38.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/81gamf72VfL._AC_SX425_.jpg"
        />
        <Product
          id="bhjbuahbuahiuh"
          title="Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound."
          price={55.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81uxx+FIV+L._AC_SX425_.jpg"
        />

        <Product
          id="hbghgjs768677"
          title="Portable Bluetooth Speaker, Wireless Shower Speakers IPX7 Waterproof with 24 Hours of Playtime. "
          price={78.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/815H4pLlqHL._AC_SX425_.jpg"
        />

        <Product
          id="178yiu67o087"
          title="6 Pcs Upgraded D-Ring Locking Carabiner, 3.1 Inch D Shape Keychain Clips for Outdoor."
          price={6.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71ox-8uHUwL._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
};
