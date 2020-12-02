module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
 
    // By Ashish Ji 
    app.post("/addBankDetail", customers.addBankDetail);
    app.post("/bankDetails", customers.showDetails);   //customers ->contrller, showDetails->method
    app.post("/productApi", customers.findAllProducts);
    app.post("/bankverify",customers.bankverify);
    app.post("/bankverify2",customers.bankverify2);
    app.get("/users/:emailId", customers.findOne1users);
    app.get("/getNSEBank", customers.getnsebank);
    app.post("/readFatca1",customers.readFatca1_nov);
     app.post("/changePbank",customers.changePbank);
    app.post("/deletebank",customers.deletebank);
  app.post("/mandate",customers.mandate);//prodigy_final2
    app.get("/getUserDetails",customers.getUserDetails);//prodigy_final2
  app.post("/regularSIP",customers.SIP);//prodigy_final2
  app.post("/purchase_sip",customers.purchase_sip);//prodigy_final2
};
