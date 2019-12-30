const express = require("express");
const pool = require("../pool.js");

let router = express.Router();

router.get("/v1/login/:uname&:upwd", (req, res) => {
    var $uname = req.params.uname;
    var $upwd = req.params.upwd;
    pool.query("SELECT uid FROM gaga_user WHERE uname=? AND upwd=?", [$uname, $upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

module.exports = router;