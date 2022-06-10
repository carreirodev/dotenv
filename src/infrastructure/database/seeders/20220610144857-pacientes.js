"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 10; i++) {
	seed.push({
		nome: faker.name.findName(),
		email: faker.internet.email(),
		idade: faker.date.birthdate(),
		createdAt: new Date(),
		updatedAt: new Date()
	});
}

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Pacientes", seed);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Pacientes", null, {});
	}
};
