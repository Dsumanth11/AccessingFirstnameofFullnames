const getFullNames=require("../country/state/city/index.js");
const getFirstNames=require("../utilities/utils/index.js");
let getPeopleInCity=(getFullNames)=>{
    return getFirstNames(getFullNames);
};
module.exports=getPeopleInCity;
console.log(getPeopleInCity(getFullNames));
