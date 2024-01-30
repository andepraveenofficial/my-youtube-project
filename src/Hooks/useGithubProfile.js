/* -----> Third Party Packages <----- */
import { useEffect, useState } from "react";

/* -----> Services <----- */
import { GITHUB_USER } from "../Services/GITHUBAPIs";

/* -----> Component <----- */
const useGithubProfile = () => {
    console.log("   Github API called")

    // Local State
	const [profile, setProfile] = useState(null)

	// Methods 
	const getGitHubProfile = async () => {
		const response = await fetch(GITHUB_USER);
		const data = await response.json();
		console.log(data)
		setProfile(data.avatar_url)
	}

	// Effects
	useEffect(() => {
		getGitHubProfile()
	}, [])

    return profile

}

/* -----> Export <----- */
export default useGithubProfile