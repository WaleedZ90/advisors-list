import React from "react";
import "./styles.scss";
import { useState } from "react";
import { useEffect } from "react";
import { getAdvisors } from "../../services/advisors.service";
import AdvisorCard from "../AdvisorCard";
import TextBox from "../TextBox";
import Dropdown from "../Dropdown";
import Button from "../Button";

const statuses = [
	{ id: 0, label: "Status" },
	{ id: 1, label: "Online" },
	{ id: 2, label: "Offline" }
];

const languages = [
	{ id: 0, label: "Language" },
	{ id: 1, label: "English" },
	{ id: 2, label: "German" },
	{ id: 3, label: "Italian" },
	{ id: 4, label: "French" }
];

const AdvisorsList = () => {
	const [advisors, setAdvisors] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filters, setFilters] = useState({
		reviews: "",
		status: { id: 0, label: "Status" },
		language: { id: 0, label: "Language" }
	});

	useEffect(() => {
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

	const handleReviewsChange = e => {
		e.persist();
		setFilters(previousFilters => {
			return { ...previousFilters, reviews: e.target.value };
		});
	};

	const handleStatusChange = e => {
		setFilters(previousFilters => {
			return { ...previousFilters, status: e };
		});
	};

	const handleLanguageChange = e => {
		setFilters(previousFilters => {
			return { ...previousFilters, language: e };
		});
	};

	const renderAdvisorsList = () => {
		let advisorsToRender = advisors;

		if (filters.reviews != "" || filters.reviews != 0) {
			advisorsToRender = advisorsToRender.filter(
				advisor => advisor.reviews <= filters.reviews
			);
		}

		if (filters.status.id != 0) {
			advisorsToRender = advisorsToRender.filter(
				advisor => advisor.status == filters.status.label
			);
		}

		if (filters.language.id != 0) {
			advisorsToRender = advisorsToRender.filter(
				advisor => advisor.language == filters.language.label
			);
		}

		return (
			<section className="advisors-list__grid grid">
				{advisorsToRender.map((advisor, index) => {
					return <AdvisorCard key={index} {...advisor} />;
				})}
			</section>
		);
	};

	return (
		<article className="advisors-list">
			<section className="advisors-list__filters grid">
				<TextBox
					name="reviews"
					placeholder="Reviews"
					type="number"
					value={filters.reviews}
					onChange={handleReviewsChange}
				/>
				<Dropdown
					name="status"
					placeholder="Status"
					items={statuses}
					value={filters.status}
					onChange={handleStatusChange}
				/>
				<Dropdown
					name="language"
					placeholder="Language"
					items={languages}
					value={filters.language}
					onChange={handleLanguageChange}
				/>
				<Button
					onClick={() =>
						setFilters({
							reviews: "",
							status: { id: 0, label: "Status" },
							language: { id: 0, label: "Language" }
						})
					}
				>
					Clear filters
				</Button>
			</section>
			{renderAdvisorsList()}
		</article>
	);
};

export default AdvisorsList;
