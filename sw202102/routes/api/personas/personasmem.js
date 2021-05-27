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


/*
var fun = function(a){
  return a
}

var fun = (a) => {return a};

 */
module.exports.getStruct = ()=>{
  // ES6 esto se conoce como destructor de objetos
  return { ...personaStruct }; //clone
}

module.exports.addToList = ( persona ) =>{
  personasList.push(persona);
  return personasList.length -1;
}

module.exports.update = (id, nombre, telefono, correo, bio) => {
  if (id >= personasList.length);
  personasList[id] = {
    ...personasList[id], // old values
    ...{ nombre, telefono, correo, bio } // new values
  };
  return personasList[id];
  /*
  personasList[id] = Object.assign(
    {},
    personasList[id],
    {nombre, telefono, correo, bio}
  );
  */
}

module.exports.deletePersona = (id)=>{
  let newPersonasList = personasList.filter(
    (persona, index)=>{ 
      return index != id;
    }
  );
  personasList = newPersonasList;
  return true;
}
