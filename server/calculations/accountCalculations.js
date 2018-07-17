//unfinished logics

const getMaleBF = () =>{
  const {waist,neck,feet,inches,...idc} = body;
  const height = calcHeight(feet,inches)
  return (86.01 * Math.log10(parseFloat(waist) - parseFloat(neck))) - (70.041 * 
    Math.log10(height)) + 36.76 
}


const getFemaleBF = () =>{
  const {waist, hip, neck, feet, inches,...idc} = body;
  const height = calcHeight(feet,inches)
  return (163.205 * Math.log10(parseFloat(waist) + parseFloat(hip) - 
  parseFloat(neck)) - 97.684 * Math.log10(height) - 78.387);

}

const getBF = (gender, body) =>{
if (gender === male) return getMaleBF()
return getFemaleBF()
}


const mathLog =(value, scaler)=>{
  return  scaler * Math.log10(value) 

}


// }
// else{
//     data.bodyFat = (163.205 * Math.log10(parseFloat(data.waist) + parseFloat(data.hip) - parseFloat(data.neck)) - 97.684 * Math.log10(data.height) - 78.387);
// }



const calcHeight =(feet,inches)=>{
  return feet +12 * inches

}


const getDecimal = (value) => {
  return parseFloat(value).toFixed(2)
}


const calcFatMass = (weight, bodyFat) => {
  return getDecimal(weight * bodyFat / 100)
}

const calcBodyMass = (weight, bodyFat) => {
  return getDecimal(weight) -
    calcFatMass(weight, bodyFat)
}

const calculatedStats =(req,res,next)=>{
  
  const fatPct = req.body.bodyFat || getBF(gender,req.body)
  req.body.bodyFat = fatPct;
  req.body.fatMass = calcFatMass(req.body.weight,fatPct)
  req.body.bodyMass = calcBodyMass(req.body.weight,fatPct)
  req.body.height= calcHeight(feet,inches);
  next()
}

module.exports = {
  calculatedStats : calculatedStats
}