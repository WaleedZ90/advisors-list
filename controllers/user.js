const faker = require("faker");

// @desc    Get all Users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
	try {
		const users = new Array(50)
			.fill(null)
			.map(e => ({
				name: faker.name.findName(),
				email: faker.internet.email(),
				jobTitle: faker.name.jobTitle(),
				website: faker.internet.url(),
				address: `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.country()}`,
				bio: faker.lorem.sentences(2, 2),
				image: faker.image.avatar(),
				reviews: faker.random.number(400),
				language: faker.random.arrayElement([
					"English",
					"German",
					"Italian",
					"French"
				]),
				status: faker.random.arrayElement(["Online", "Offline"])
			}))
			.sort((a, b) => a.reviews - b.reviews);

		setTimeout(() => {
			return res.status(200).json({
				success: true,
				count: users.length,
				data: users
			});
		}, 1500);
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: "Server Error"
		});
	}
};
