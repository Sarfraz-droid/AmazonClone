import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://shopsellers.in/wp-content/uploads/2020/08/prime-banner.png"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean Startup"
            price={29.99}
            image="https://i0.wp.com/bestlifeonline.com/wp-content/uploads/2020/10/The-Hobbit-book-cover.jpg?resize=775%2C1200&ssl=1"
            rating={5}
          />
          <Product
            title="PlayStation 5"
            price={2.10}
            image="https://rukminim1.flixcart.com/image/416/416/kj7gwi80/gamingconsole/t/v/v/cfi-1008a01r-825-sony-no-original-imafytxe7twjskbx.jpeg?q=70"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Iphone 12"
            price={1.03}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000"
            rating={5}

  />
          <Product
            title="Samsung Galaxy Note 20 Ultra"
            price={2.43}
            image="https://www.notebookcheck.net/uploads/tx_nbc2/4_3_Teaser_Samsung_Galaxy_Note20_Ultra_5G_SM-N986B_MysticWhite.jpg"
            rating={5}

   />
          <Product
            title="Iphone 12"
            price={1.34}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000"
            rating={5}

 />
        </div>
        <div className="home__row">
          <Product
            title="Iphone 12"
            price={1.32}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021660000"
            rating={5}

  />
        </div>
      </div>
    </div>
  );
}

export default Home;
