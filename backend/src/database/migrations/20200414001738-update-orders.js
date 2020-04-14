module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orders', 'has_problem', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  },
};
