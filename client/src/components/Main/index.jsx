import styles from "./styles.module.css";
import Navbar from "../Navbar/Navbar";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};


	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>MoveMate</h1>
				<Navbar/>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
