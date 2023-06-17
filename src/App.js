import "./App.css";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import ProcessorSection from "./sections/ProcessorSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyle />
			<Quote />
			<PhoneModel />
			<HeroSection />
			<DesignSection />
			<DisplaySection />
			<ProcessorSection />
			<BatterySection />
			<ColorSection />
		</>
	);
}

export default App;
