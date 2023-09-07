const express = require("express");
const router = express.Router();
const offersController = require("../controllers/offersController");

router.get("/", offersController.getAllOffers);
router.post("/", offersController.createOrUpdateOffer);
router.delete("/:offerId", offersController.deleteOffer);

module.exports = router;
