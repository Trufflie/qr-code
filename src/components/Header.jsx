import React from "react";
import Logo from "../assets/logo_transparent.png";
const Header = () => {
	return (
		<div>
			<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-700  text-purple-500 ">
				<div>
					<img
						src={Logo}
						alt="logo"
						style={{ width: "110px" }}
					/>
				</div>

				<ul className="hidden md:flex">
					<li>
						<a href="https://portfolio.trufflie.com/">Home</a>
					</li>
				</ul>

				
			</div>
		</div>
	);
};

export default Header;
