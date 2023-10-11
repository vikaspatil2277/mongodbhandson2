const Model = require("./../Model/dbConnect")
;
exports.insertOperation = async(req,res)=>{
    console.log(req.body);
    try {
        const result = await Model.insertOne(req.body);
        console.log("result",result);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
    }
}

exports.findInDBOperation = async(req,res)=>{
    
    try {
        const result = await Model.findInDB();
        console.log("result",result);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
    }
}

exports.findgteInDBOperation = async(req,res)=>{
    const query = {salary:{$gte:"30000"}};
    console.log(query);
    try {
        const result = await Model.findInDB(query);
        console.log("result",result);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
    }
}

exports.findgteyearInDBOperation = async(req,res)=>{
    const query = {overallExp:{$gte:"2"}};
    console.log(query);
    try {
        const result = await Model.findInDB(query);
        console.log("result",result);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
    }
}

exports.findGteYearAndGradInDBOperation = async(req,res)=>{
    const query = {overallExp:{$gte:"2"},yearGrad:{$gte:"2015"}};
    console.log(query);
    try {
        const result = await Model.findInDB(query);
        console.log("result",result);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
    }
}

exports.UpdateSalary= async(req,res)=>{
    const condition = {salary:{$gte:"70000"}};
    const update = {"$set":{salary:"65000"}};
    // console.log(query);
    try {
        const result = await Model.updateInDB(condition,update);
        console.log("result",result);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
    }
}


exports.DeleteData= async(req,res)=>{
    const condition = {lastCompany:"Y"};
    try {
        const result = await Model.deleteInDB(condition);
        console.log("result",result);
        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error);
    }
}