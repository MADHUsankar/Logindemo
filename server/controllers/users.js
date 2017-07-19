const USERS = [
    {name:"Lola",_id:1,createdAt : new Date() , updatedAt: new Date()},
    {name:"Jerry",_id:2,createdAt : new Date() , updatedAt: new Date()},
    {name:"Madhu",_id:3,createdAt : new Date() , updatedAt: new Date()}
]
module.exports={
    login : (req,res) => {
       USERS.push({name:req.body.name ,_id : USERS[USERS.length-1]._id+1, createdAt : new Date() , updatedAt: new Date()})
        res.json(USERS)
    }
}