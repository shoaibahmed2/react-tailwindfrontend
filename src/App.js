import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Slider from "./components/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="bg-[#1F2022]" >
      <Header />
      <Body />
      {/* <Slider /> */}
    </div>
  );
}

export default App;
