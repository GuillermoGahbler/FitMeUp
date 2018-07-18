

const calcHeight = (feet,inches) => feet * 12 + inches; 

const maleBF = (waist,neck,height) => {
  return 86.010 * Math.log10( waist - neck ) - 70.041 * Math.log10(height) + 36.76;
}
 
const femaleBF = (waist,hip,neck,height) => {
  return 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
}


const calcBF = (body) => {
const {gender,waist,neck,height,hip} = body;
  if (gender === 'male') return maleBF(waist,neck,height)
return femaleBF(waist,hip,neck,height)
} 

const calcFatMass = (weight,bodyFat) => weight * bodyFat/100

const bodyMass = (weight,bodyFat) => weight - calcFatMass(weight,bodyFat);

const validateBF = (body) => {
  const {bodyFat,...idc} = body;
  if (bodyFat) return parseFloat(bodyFat).toFixed(2)
 return calcBF(body)
}


const sanitizeData = (body)=>{
  body.account_id = body.account_id;
  body.feet = parseInt(body.feet);
  body.inches = parseInt(body.inches);
  body.weight = parseFloat(body.weight).toFixed(2);
  body.neck = parseFloat(body.neck).toFixed(2);
  body.waist = parseFloat(body.waist).toFixed(2);
  body.hip= parseFloat(body.hip || 0).toFixed(2);
  // body.bodyFat= parseFloat(body.bodyFat || 0).toFixed(2);
   return (body)
}


const calculatedStats =(req,res,next)=>{
req.body = sanitizeData(req.body)
 
req.body.height = calcHeight(req.body.feet, req.body.inches);
req.body.bodyFat = validateBF(req.body);

req.body.bodyMass = bodyMass(req.body.weight, req.body.bodyFat);
req.body.fatMass = calcFatMass(req.body.weight, req.body.bodyFat);

  console.log(req.body)  
  // const fatPct = req.body.bodyFat || getBF(gender,req.body)
  // req.body.bodyFat = fatPct;
  // req.body.fatMass = calcFatMass(req.body.weight,fatPct)
  // req.body.bodyMass = calcBodyMass(req.body.weight,fatPct)
  // req.body.height= calcHeight(feet,inches);
  next()
}

module.exports = {
  calculatedStats : calculatedStats
}