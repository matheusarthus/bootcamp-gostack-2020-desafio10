module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('recipients', 'deleted_at', {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('recipients');
  },
};
