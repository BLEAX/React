import Menu from "./menu.js";
import Body1 from "./body1.js";
import Body2 from "./body2.js";
import Body3 from "./body3.js";
import Footer from "./footer.js";
import "./App.css";
import Register from "./register.js";

function App() {
  return (
    <div className='App'>
      <Menu name1='Home' name2='body1' name3='body2' name4='footer' />
      <Body1 />
      <Body2 />
      <Body3 initialCount={5} />
      <Footer />
    </div>
  );
}

export default App;
