const { Router } = require("express");
const router = Router();
const studentCtrl = require("../controller/user.controller");

router.get("/user", studentCtrl.getAlumno);
router.post("/user", studentCtrl.postAlumno);
router.put("/user", studentCtrl.putAlumno);
router.delete("/user", studentCtrl.deleteAlumno);
router.get("/media", studentCtrl.getMedia);
router.get("/apuntadas", studentCtrl.getAsigAlum);
router.get("/impartidas", studentCtrl.getAsigProf);



module.exports = router; 
