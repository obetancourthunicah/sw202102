// Incluir la libreria y crear una instancia de la clase Router
// la clase router me brinda metodos para registrar web end points.
var express = require("express"); //Libreria
var router = express.Router(); // Clase de enrutamiento

var  { getAllPersonas,
       getById,
       getStruct,
       addToList } = require("./personasmem");

// absolut endpoint : /api/personas/version
router.get(
  "/version", //el endpoint
  (req, res)=>{
    res.json({"mensaje":"Hola Mundo!!!!"});
  } // el handler o funcion que manejara la invocaion del end point.
);

router.get(
  "/",
  (req, res)=>{
    res.status(200).json(getAllPersonas());
  }
); // get /

router.get(
  "/byid/:personaid",
  (req, res)=>{
    //TODO
    res.status(404).json({"msg":"No Implemented"});
  }
);
/*
SQL      HTML
SELECT   GET
UPDATE   PUT
INSERT   POST
DELETE   DELETE

 */
router.post(
  "/new",
  (req, res)=>{
    const { nombre, telefono, correo, bio} = req.body;
    //validaciones

    //sanitización


    let newPersona = Object.assign(
                                    {},
                                    getStruct(),
                                    { nombre,
                                      telefono,
                                      correo,
                                      bio}
                                  );
    let index = addToList(newPersona);
    res.status(200).json({inserted:1, inserted_id:index});
  }
); // post new

/*
/api/peronas GET
/api/personas/byid/1234109340981  GET
/api/personas/new POST
/api/personas/upd/1234109340981 PUT
/api/personas/del/1234109340981 DELETE
*/

//Expone la instancia del router para que otro modulo lo pueda conseguir.
module.exports = router;
