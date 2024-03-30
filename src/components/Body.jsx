import React, { useState } from "react";
import Generator from "./Generator";

const Body = () => {

	const [url, changeURL] = useState("");

	function handleChange(event) {
		const urlName = event.target.value;
		changeURL(urlName);
	}
	return (
		<div className="w-screen h-screen mx-auto grid  justify-center items-center bg-slate-400">
			<div className=" mx-auto grid md:grid-cols-2   bg-slate-400">
				<div className="  max-w-[1000px]">
					<div>
						<h1 className=" text-right text-4xl sm:text-7xl">
							QR Code Creator
						</h1>
					</div>
					<div className="flex flex-col">
						<p className="text-right text-xl sm:text-2xl">
						
							Enter Link to generate QR Code
						</p>
						<input
							className=" self-end mr-2"
							placeholder="portfolio.trufflie.com"
							onChange={handleChange}
							type="text"
						></input>
					</div>
				</div>
				<div>
					<Generator name={url} />

					<div className=" text-center"> {url} </div>
				</div>
			</div>
			<div>
				<p>This is a very basic implementation. </p>
				<p>Note: The backend functionality is thanks to Ross Khanas.</p>
			</div>
		</div>
	);
};

export default Body;
