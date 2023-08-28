const router = require("express").Router();

router.get("/", (req, res)=>{
    res.send("This is version 1.");
});



module.exports = router;