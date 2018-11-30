const mongoose = require("mongoose");
const Recall = require("../models/Recall");
const db = require("../../config/keys").mongoURI;
const fetch = require("node-fetch");
const URLS = require("../../config/seedURLs");

let resultData, recalls;
let saveCounter = 0;

mongoose
  .connect(db)
  .then(() => console.log("mongodb connection success"))
  .catch(error => console.log(error));

URLS.map(async url => {
  // console.log("url", url);
  try {
    const response = await fetch(url);
    const json = await response.json();
    resultData = [...json.results];
    // console.log(resultData);
    for (let i = 0; i < resultData.length; i++) {
      recalls = new Recall({
        country: resultData[i].country,
        city: resultData[i].city,
        reason_for_recall: resultData[i].reason_for_recall,
        address_1: resultData[i].address_1,
        address_2: resultData[i].address_2,
        code_info: resultData[i].code_info,
        product_quantity: resultData[i].product_quantity,
        center_classification_data: resultData[i].center_classification_data,
        distribution_pattern: resultData[i].distribution_pattern,
        state: resultData[i].state,
        product_description: resultData[i].product_description,
        report_date: resultData[i].report_date,
        classification: resultData[i].classification,
        open_fda: resultData[i].open_fda,
        recall_number: resultData[i].recall_number,
        recalling_firm: resultData[i].recalling_firm,
        initial_firm_notification: resultData[i].initial_firm_notification,
        event_id: resultData[i].event_id,
        product_type: resultData[i].product_type,
        more_code_info: resultData[i].more_code_info,
        recall_initiation_date: resultData[i].recall_initiation_date,
        postal_code: resultData[i].postal_code,
        voluntary_mandated: resultData[i].voluntary_mandated,
        status: resultData[i].status
      });
      // console.log(temp);
      recalls.save(() => {
        saveCounter++;
        if (saveCounter === resultData.length) {
          mongoose
            .disconnect()
            .then(() => console.log("mongodb disconnected"))
            .catch(error => console.log(error));
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
});
