const express = require('express');
const router = express.Router();
const path = require('path');


// @route   GET files/
router.get('/:id', (req,res) =>{


    var options = {
        headers:{
            'name': req.params.id
        }
    }

    res.sendFile(path.join(__dirname+'/test.html'),options);
});


/*não é nada boa ideia fazer isto consegue ver outros ficheiros dentro
da mesma pasta
router.get('/:id', (req,res) =>{
    res.sendFile(path.join(__dirname+'/'+req.params.id));
});*/


module.exports =  router;