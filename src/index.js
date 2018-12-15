import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function User(props) {
	return(
		<div className="card">
			<h5 className="card-header">User {props.id}</h5>
			<div className="card-body">
				<div className="card-text">
					<img className="float-left img-fluid mr-3 rounded" src={props.avatar} alt="" />
					<p>{props.firstName} {props.lastName}</p>
				</div>
			</div>
		</div>
	);
}

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