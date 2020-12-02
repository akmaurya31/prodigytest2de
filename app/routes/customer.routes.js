module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
 
   
    app.post("/purchase_sip",customers.purchase_sip);//prodigy_final2
    app.get("/test",customers.test);
};
