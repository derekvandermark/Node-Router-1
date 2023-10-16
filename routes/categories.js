const router = require("../router");
const categoriesController = require("../controllers/categoriesController");
const wizardController = require("../controllers/wizardController");

// home
router.setRoute('GET', '/', categoriesController.category_home);

// wizards
router.setRoute('GET', '/wizards', wizardController.wizard_list);

module.exports = router;

