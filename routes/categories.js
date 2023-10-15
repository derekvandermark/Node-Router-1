const router = require("../router");
const wizardController = require("../controllers/wizardController");

router.setRoute('GET', '/wizards', wizardController.wizard_list);

module.exports = router;

