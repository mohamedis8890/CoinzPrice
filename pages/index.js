import Fetch from "isomorphic-unfetch";
import NavBar from "../components/NavBar";
import Prices from "../components/Prices";
import "../static/style.css";

const Index = props => (
	<div>
		<NavBar />
		<div className="container">
			Welcome to BitzPrice
			<Prices bpi={props.bpi} />
		</div>
	</div>
);

Index.getInitialProps = async () => {
	const res = await Fetch("https://api.coindesk.com/v1/bpi/currentprice.json");

	const data = await res.json();

	return { bpi: data.bpi };
};

export default Index;
