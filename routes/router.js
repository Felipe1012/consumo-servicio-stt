const { Router } = require("express")
const stt = require("../utils/watsonNL");
const params = require("../params");
const router = Router();

router.post('/stt', async function (req,  res) {

    // res.send("hey world")
    const input = req.body.audio;
    console.log(input);
    try {
        if (!input) {
            res.send({
                status: false,
                message: "No file uploaded",
            })
        } else {
            let finalJson = [];
             stt(params, input).then((ans) => {
              console.log("iiiiiiiiiiiiii")
                finalJson.push(ans)
                res.send(ans)
            }
            );
        }
    } catch (err) {
        res.status(500).json({ message: "No se pudo analizar el archivo ingresado" });
    }
});



module.exports = router;    