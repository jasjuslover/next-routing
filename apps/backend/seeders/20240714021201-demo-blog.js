"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Blogs",
      [
        {
          title: "First Post",
          content: "This is the first post.",
          metaTitle: "First Post",
          metaDescription: "Description of the first post",
          slug: "first-post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Second Post",
          content: "This is the second post.",
          metaTitle: "Second Post",
          metaDescription: "Description of the second post",
          slug: "second-post",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Blogs", null, {});
  },
};
