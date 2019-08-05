import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
	<>
		<div>
			<Head>
				<link rel="stylesheet" href="/static/style.css" />
				<title>BitzPrice</title>
			</Head>
		</div>
		<Navbar />
		<div className="container">{props.children}</div>
	</>
);

export default Layout;
