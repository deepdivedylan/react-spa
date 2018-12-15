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
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
		this.reloadUsers();
	}

	reloadUsers() {
		fetch("https://reqres.in/api/users/?per_page=12").then(reply => reply.json()).then(result => {
			let users = result.data.map(user => Object.assign({id: user.id, avatar: user.avatar, firstName: user.first_name, lastName: user.last_name}));
			this.setState({users: users});
		});
	}

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