const express   = require('express');
const router    = express.Router();

router.get('/', (req,res)=>{
    res.render('initial-page');
});

router.get('/pagina-1', (req,res)=>{
    res.render('pagina-1');
});

router.get('/pagina-2', (req,res)=>{
    res.render('pagina-2');
});

module.exports = router;