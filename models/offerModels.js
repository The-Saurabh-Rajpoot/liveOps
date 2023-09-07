const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  offer_id: {
    type: String,
    unique: true,
    required: true,
  },
  offer_title: {
    type: String,
    required: true,
  },
  offer_description: {
    type: String,
    required: true,
  },
  offer_image: {
    type: String,
  },
  offer_sort_order: {
    type: Number,
    default: 0,
  },
  content: [
    {
      item_id: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  schedule: {
    days_of_week: {
      type: [Number],
      default: [],
    },
    dates_of_month: {
      type: [Number],
      default: [],
    },
    months_of_year: {
      type: [Number],
      default: [],
    },
  },
  target: {
    type: String,
    required: true,
  },
  pricing: [
    {
      currency: {
        type: String,
        required: true,
      },
      cost: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
