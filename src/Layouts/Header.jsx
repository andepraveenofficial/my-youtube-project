
/* -----> Assets <----- */
import { RxHamburgerMenu } from "react-icons/rx";
import YoutubeLogo from './../Assets/Logos/Youtube-Logo.png';
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

/* -----> Hooks <----- */
import useGithubProfile from "../Hooks/useGithubProfile";

/* -----> Component <----- */
const Header = () => {
	console.log("Header Layout")

	const profile = useGithubProfile();

	// Return JSX
	return (
		<div className="fixed w-full bg-[#212121] text-[#aaa] h-16 pr-5 pl-5 grid grid-cols-12">
			<div className="flex items-center gap-3 col-span-4">
				<RxHamburgerMenu className="w-6 h-6 cursor-pointer" />
				<img src={YoutubeLogo} alt="Youtube-Logo.svg" className="cursor-pointer" />
			</div>

			<div className=" col-span-4 m-3">
				<div className="flex items-center">
					<input
						type="text"
						placeholder="Search"
						className="w-full bg-black outline-none p-2 h-10 rounded-tl-md rounded-bl-md"
					/>
					<div className="bg-[#303030] h-10 w-12 flex items-center justify-center rounded-tr-md rounded-br-md">
						<AiOutlineSearch className="w-6 h-6  text-[#aaaaaa] cursor-pointer" />
					</div>
				</div>

				<div className="absolute flex flex-col items-center bg-pink-500 w-[31.3%] rounded-br-md rounded-bl-md">
					<h1>Suggestion 1</h1>
					<h1>Suggestion 2</h1>
					<h1>Suggestion 3</h1>
					<h1>Suggestion 4</h1>
					<h1>Suggestion 5</h1>
					<h1>Suggestion 6</h1>
				</div>
			</div>

			<div className="flex justify-end items-center col-span-4">
				{profile ? <img src={profile} alt="github-profile" className="w-8 h-8 rounded-full" /> : <CgProfile className="w-8 h-8" />}
			</div>

		</div>

	);
};

/* -----> Export <----- */
export default Header;