//Modelo de Datos en Memory

var personasList = [];

let personaStruct = {
  nombre:"",
  telefono:"",
  correo:"",
  bio:""
}

module.exports.getAllPersonas = ()=>{
  return personasList;
}

module.exports.getById = (id)=>{
  try {
    return personasList[id];
  }catch(ex){
    return {};
  }
}

module.exports.getStruct = ()=>{
  // ES6 esto se conoce como destructor de objetos
  return { ...personaStruct }; //clone
}

module.exports.addToList = ( persona ) =>{
  personasList.push(persona);
  return personasList.length -1;
}
