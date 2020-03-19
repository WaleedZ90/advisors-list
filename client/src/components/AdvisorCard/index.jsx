import React from "react";
import classNames from "classnames";
import "./styles.scss";

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
					<div class="coords">
						<span>Website</span>
						<span>{website}</span>
					</div>
					<div class="coords">
						<span>Email</span>
						<span>{email}</span>
					</div>
					<div class="coords">
						<span>Address</span>
						<span>{address}</span>
					</div>
				</section>
			</aside>
			<section className="general">
				<h2>{name}</h2>
				<p>{bio}</p>
				<span className="more">Mouse over the card for more info</span>
			</section>
		</article>
	);
};

// https://codepen.io/alvaromontoro/pen/ebPEWb?editors=1100

export default AdvisorCard;
