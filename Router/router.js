const Router = require("express").Router();
const Controller  = require("./../controller/controller");

Router.route("/inserdata").post(Controller.insertOperation);
Router.route("/finddata").get(Controller.findInDBOperation);
Router.route("/findgtesalarydata").get(Controller.findgteInDBOperation);
Router.route("/find/gteyeardata").get(Controller.findgteyearInDBOperation);
Router.route("/find/gteyearxp/gteGradudata").get(Controller.findGteYearAndGradInDBOperation);
Router.route("/updateData").get(Controller.UpdateSalary);
Router.route("/deleteData").get(Controller.DeleteData);


module.exports = Router;