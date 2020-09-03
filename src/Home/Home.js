import React from "react";

import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />

      <div className='home__row'>
        <Product
          id='0001'
          title="Harry Potter and the Philosopher's Stone"
          price={10.49}
          rating={5}
          image='https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg'
        />
        <Product
          id='0002'
          title="Samsung LC49RG90SSUXEN 49' LED Gaming Monitor"
          price={9.89}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='0003'
          title='Color Club Halographic Hues Nail Polish, Halo, Graphic.05 Ounce'
          price={11.29}
          rating={4}
          image='https://m.media-amazon.com/images/I/71FPuDUhfML._AC_UL480_QL65_.jpg'
        />
        <Product
          id='0004'
          title='Hamilton Beach Breakfast Sandwich Maker, Silver (25475A) '
          price={24.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/41N8AxIJq4L._AC_SY200_.jpg'
        />
        <Product
          id='0005'
          title="Artist's Loft Acrylic Paint Value Pack 36 Piece"
          price={25.35}
          rating={5}
          image='https://m.media-amazon.com/images/I/61GEW-MekwL._AC_UL480_QL65_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='0006'
          title='FLY2SKY 28pcs Mochi Squishy Toys Mini Squishies Kawaii'
          price={8.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/61ZA1VRxLOL._AC_UL480_QL65_.jpg'
        />
        <Product
          id='0007'
          title='Oxford Spiral Notebooks, 1 Subject, College Ruled Paper, '
          price={9.89}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/41OJa46VMDL._AC_US327_QL65_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='0008'
          title="Samsung LC49RG90SSUXEN 49' LED Gaming Monitor"
          price={199.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
        <Product
          id='0009'
          title='Amazon Echo (3rd generation) - Smart speaker with Alexa, Charcoal Fabric'
          price={9.89}
          rating={5}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
        />
        <Product
          id='00010'
          title='Funny Costumes Dinosaur Inflatable Costumes'
          price={34.84}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/71J-YtSUd3L._AC_UX679_.jpg'
        />
      </div>
    </div>
  );
};

export default Home;
