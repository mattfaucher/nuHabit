import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	const { logout } = useAuth0();
	return (
		<button
			className="btn btn-danger btn-block"
			onClick={() =>
				logout({
					returnTo: 'http://localhost:8000/home',
				})
			}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;