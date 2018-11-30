const mongoose = require("mongoose");
// const fetchData = require("../seed");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  country: String,
  city: String,
  reason_for_recall: String,
  address_1: String,
  address_2: String,
  code_info: String,
  product_quantity: String,
  center_classification_data: String,
  distribution_pattern: String,
  state: String,
  product_description: String,
  report_date: String,
  classification: String,
  open_fda: Map,
  recall_number: String,
  recalling_firm: String,
  initial_firm_notification: String,
  event_id: String,
  product_type: String,
  more_code_info: String,
  recall_initiation_date: String,
  postal_code: String,
  voluntary_mandated: String,
  status: String
});

module.exports = mongoose.model("Recall", dataSchema);
