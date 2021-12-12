const today = new Date();

module.exports = {
  isCI: !!process.env.CI,
  year: today.getFullYear(),
};
