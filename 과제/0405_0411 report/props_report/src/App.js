import Button from "./Button.js";
import Main1 from "./Main1.js";
import Main2 from "./Main2.js";
import Main3 from "./Main3.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <h2>React Button</h2>
      <Button name1='R' name2='E' name3='A' name4='C' name5='T' />
      <br />
      <h2>person who learns React</h2>
      <Main1 name='Simon' age={24} />
      <Main1 name='Mike' age={25} />
      <Main1 name='Joe' age={22} />
      <br />
      <h2>Image Slider</h2>
      <Main2
        images={[
          "https://redwhaledc.com/thumbs/about/komodo-national-park/padar2-500x300.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyt18RxYq1ke4Qhl1ivk-ZQBa22ePv2NtmGJ03ZiTSA&s",
          "https://upload.wikimedia.org/wikipedia/commons/5/59/500_x_300_Ramosmania_rodriguesii_%28Rubiaceae%29.jpg",
          "https://i.guim.co.uk/img/media/18c7596e2cda2b1f2b943c938b977b59028c5f86/0_500_3915_2348/500.jpg?quality=85&auto=format&fit=max&s=71771279ad7833f8c05fd3cbc393ef79",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuUo4zwUCGKHXMwOQtwHKjWML9m4mLgdB-4J8xSUKtw&s",
          "https://www.zoomlite.com.au/cdn/shop/articles/unnamed_0f4d66f6-2064-4cf7-8544-dbbc04932c91.jpg?v=1585957644",
          "https://ftl-media.imgix.net/truck/long-haul/new-cascadia-natrual-gas-blue-500x300.jpg",
          "https://www.sbru.com.au/wp-content/uploads/2020/11/Sunnybank_Dining_Web-Tile-500x300-1.jpg",
        ]}
      />
      <br />
      <h2>organizations</h2>
      <Main3
        organization1='Kyungsung University'
        organization2='Kyungsangnam-do'
        organization3='Korea'
      />
      <br />
      <Footer email='rlawjdgns135@naver.com' />
    </div>
  );
}

export default App;
