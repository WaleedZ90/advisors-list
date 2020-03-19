import React from "react";
import "./styles.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getAdvisors } from "../../services/advisors.service";
import AdvisorCard from "../AdvisorCard";

const AdvisorsList = () => {
	const [advisors, setAdvisors] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(async () => {
		const fetchAdvisors = async () => {
			try {
				setLoading(true);
				const advisors = await getAdvisors();
				setAdvisors(advisors.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchAdvisors();
	}, []);

	if (loading) {
		return <h3>Loading...</h3>;
	}

	if (advisors.length == 0) {
		return <h3>no advisors found</h3>;
	}

	return (
		<section className="advisors-list grid">
			{advisors.map(advisor => {
				return <AdvisorCard {...advisor} />;
			})}
		</section>
	);
};

export default AdvisorsList;
