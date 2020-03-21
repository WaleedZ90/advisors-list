import React from "react";
import classNames from "classnames";
import "./styles.scss";

const flags = {
	English: <span className="flag-icon flag-icon-gb-eng"></span>,
	German: <span className="flag-icon flag-icon-de"></span>,
	Italian: <span className="flag-icon flag-icon-it"></span>,
	French: <span className="flag-icon flag-icon-fr"></span>
};

const AdvisorCard = ({
	name,
	email,
	website,
	address,
	bio,
	image,
	reviews,
	language,
	status
}) => {
	return (
		<article className="advisor-card">
			<aside
				className={classNames(
					"additional",
					status === "Online" && "additional--green",
					status === "Offline" && "additional--red"
				)}
			>
				<figure>
					<span>{status}</span>
					<img src={image} alt="advisor image" />
					<figcaption>{reviews} REVIEWS</figcaption>
				</figure>
				<section className="more-info">
					<h2>{name}</h2>
					<div className="coords">
						<span>Website</span>
						<span>{website}</span>
					</div>
					<div className="coords">
						<span>Email</span>
						<span>{email}</span>
					</div>
					<div className="coords">
						<span>Address</span>
						<span>{address}</span>
					</div>
				</section>
			</aside>
			<section className="general">
				<h2>{name}</h2>
				{flags[language]}
				<p>{bio}</p>
				<span className="more">Mouse over the card for more info</span>
			</section>
		</article>
	);
};

export default AdvisorCard;
