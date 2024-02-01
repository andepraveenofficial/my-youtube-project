
/* -----> Third Party Packages <----- */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* -----> Global Store Actions <----- */
import { cacheResults } from "../Store/searchSlice";

/* -----> Assets <----- */
import { RxHamburgerMenu } from "react-icons/rx";
import YoutubeLogo from './../Assets/Logos/Youtube-Logo.png';
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

/* -----> Hooks <----- */
import useGithubProfile from "../Hooks/useGithubProfile";
import { useEffect, useState } from "react";

/* -----> Services <----- */
import { YOUTUBE_SEARCH_SUGGESTIONS } from "../Services/SearchSuggestions";
import { toggleSidebar } from "../Store/sidebarToggleSlice";



/* -----> Hard Code <----- */
// import { suggestionsHardCode } from './../Utils/hardCode.js';


/* -----> Component <----- */
const Header = () => {
	console.log("Header Layout");

	// Local State
	const [searchQuery, setSearchQuery] = useState("")
	const [suggestions, setSuggestions] = useState([])
	// const [cacheResults, setCacheResults] = useState({}) // Redux implemented
	const [showSearchSuggestions, setShowSearchSuggestions] = useState(false)

	// Global Store
	const searchCache = useSelector((store) => store.search)
	const dispatch = useDispatch()

	// Hooks
	const profile = useGithubProfile();

	// Methods 
	const getSearchSuggestions = async () => {
		console.log("getSearchSuggestions API called")
		const response = await fetch(YOUTUBE_SEARCH_SUGGESTIONS + searchQuery);
		const data = await response.json();
		console.log(data[1])
		const suggestionsList = data[1];
		setSuggestions(suggestionsList);
		dispatch(cacheResults({ [searchQuery]: suggestionsList }))
	}

	useEffect(() => {
		// Debounce mechanism: Make an API call after every key press, but only if the difference between two consecutive API calls is less than 200ms.

		/*
		 * Example Flow:
		 * 
		 * 1. Key Press: 'i'
		 *    - Render the component.
		 *    - Inside useEffect().
		 *    - Start a timer to make an API call after 200ms.
		 * 
		 * 2. Key Press: 'ip'
		 *    - Destroy the component (useEffect cleanup).
		 *    - Re-render the component.
		 *    - Inside useEffect().
		 *    - Start a timer to make an API call after 200ms.
		 * 
		 * 3. setTimeout(200) - Trigger an API call.
		 *    - API call initiated due to the debounced timer.
		 * 
		 * Note: The debounce mechanism ensures that API calls are made only if the time gap between consecutive key presses is less than 200ms.
		 */

		const timerId = setTimeout(() => {
			/*
		searchCache = {
			"iphone":["iphone 11", "iphone 14"]
		  }

		  searchQuery = iphone
		*/
			if (searchCache[searchQuery]) {
				setSuggestions(searchCache[searchQuery])
			}
			else {
				getSearchSuggestions()
			}
		}, 200

		)

		return () => {
			clearTimeout(timerId)
		}

	}, [searchQuery])

	// Return JSX
	return (
		<div className="fixed w-full bg-[#212121] text-[#aaa] h-16 pr-5 pl-5 grid grid-cols-12">
			<div className="flex items-center gap-3 col-span-4">
				<RxHamburgerMenu className="w-6 h-6 cursor-pointer" onClick={() => dispatch(toggleSidebar())} />
				<Link to="/"><img src={YoutubeLogo} alt="Youtube-Logo.svg" className="cursor-pointer" /></Link>
			</div>

			<div className=" col-span-4 m-3">
				<div className="flex items-center">
					<input
						type="text"
						placeholder="Search"
						className="w-full bg-black outline-none p-2 h-10 rounded-tl-md rounded-bl-md"
						value={searchQuery}
						onChange={(event) => setSearchQuery(event.target.value)}
						onFocus={() => { setShowSearchSuggestions(true) }}
						onBlur={() => setShowSearchSuggestions(false)}
					/>
					<div className="bg-[#303030] h-10 w-12 flex items-center justify-center rounded-tr-md rounded-br-md">
						<AiOutlineSearch className="w-6 h-6  text-[#aaaaaa] cursor-pointer" />
					</div>
				</div>

				<div className="absolute flex flex-col items-center bg-pink-500 w-[31.3%] rounded-br-md rounded-bl-md">
					{showSearchSuggestions && suggestions.map((suggestion, index) => <h1 key={index}>{suggestion}</h1>)}
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