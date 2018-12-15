import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function User(props) {
	return (
		<div className="col-md-4">
			<div className="card">
				<h5 className="card-header">User {props.user.id}</h5>
				<div className="card-body">
					<div className="card-text">
						<img className="float-left img-fluid mr-3 rounded" src={props.user.avatar} alt=""/>
						<p>{props.user.firstName} {props.user.lastName}</p>
					</div>
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
			let users = result.data.map(user => Object.assign({
				id: user.id,
				avatar: user.avatar,
				firstName: user.first_name,
				lastName: user.last_name
			}));
			this.setState({users: users});
		});
	}

	render() {
		const cardsPerCol = 3;
		const users = this.state.users;
		const numRows = Math.ceil(users.length / cardsPerCol);
		let rows = [];
		for(let i = 0; i < numRows; i++) {
			let usersInRow = [];
			for(let j = cardsPerCol * i; j < (i + 1) * cardsPerCol; j++) {
				usersInRow.push(<User key={j} user={users[j]} />);
			}
			rows.push(<div className="mb-3 row">{usersInRow}</div>);
		}


		return (
			<main className="container">
				<h1>Hi React</h1>
				{rows}
			</main>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById("root")
);