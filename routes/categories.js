const router = require("../router");
const categoriesController = require("../controllers/categoriesController");
const wizardController = require("../controllers/wizardController");

// home
router.get('/', categoriesController.category_home);

// wizards
router.get('/wizards', wizardController.wizard_list);

module.exports = router;

