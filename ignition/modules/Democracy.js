const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const Nomocary = buildModule("Nomocary", (m) => {
  const democracy = m.contract("Democracy");

  return { democracy };
});

module.exports = Nomocary;
