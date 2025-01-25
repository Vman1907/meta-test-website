import { Link } from "react-router-dom";

const Navbar = () => {
    return (
			<nav className={`bg-white text-black sticky top-0 right-0 left-0 z-10`}>
				<div className={`container mx-auto flex justify-between items-center p-4`}>
					<Link to='/'>
						<h1 className={`text-xl font-medium`}>Propmatch</h1>
					</Link>
				</div>
			</nav>
		);
}

export default Navbar;