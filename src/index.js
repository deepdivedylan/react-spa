import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
	render() {
		return(
			<main class="container">
				<h1>Hi React</h1>
			</main>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("root")
);