module.exports={
    getBoots:(req, res)=>{
        const db = req.app.get('db')
        db.get_allBoots().then(boots =>{
            res.status(200).send(boots)
        })
    },
    addBoots:(req, res)=>{
        // console.log("REQ.BODY", req.body)
        const db = req.app.get('db')
        const { productName, price, image} = req.body
        db.add_boot([productName, price, image]).then(boots =>{
            res.status(200).send(boots)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    },
    deleteBoots:(req, res)=>{
        console.log("REQ.BODY and PARAMS", req.body, req.params)
        const db = req.app.get('db')
        const {id}= req.params
        db.delete_boot(id).then(boots=>{
            console.log("Boots", boots)
            res.send(boots)
        })
    }
}