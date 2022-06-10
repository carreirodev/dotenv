"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 10; i++) {
	seed.push({
		nome: faker.name.findName(),
		email: faker.internet.email(),
		apresentacao: faker.lorem.words(5),
		bairro: faker.random.numeric(8),
		createdAt: new Date(),
		updatedAt: new Date()
	});
}

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Psicologos", seed);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Psicologos", null, {});
	}
};
