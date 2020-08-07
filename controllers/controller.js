module.exports={
    getBoots:(req, res)=>{
        const db = req.app.get('db')
        db.get_allBoots().then(boots =>{
            res.status(200).send(boots)
        })
    },
    addBoots:(req, res)=>{
        const db = req.app.get('db')
        const { name, price, boot_image} = req.body
        db.add_boot([name, price, boot_image]).then(boots =>{
            res.status(200).send(boots)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    }
}