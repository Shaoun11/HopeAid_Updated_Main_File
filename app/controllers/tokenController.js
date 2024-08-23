import jwt from 'jsonwebtoken';
exports.Tokenissue=(req,res)=>{
    let payload={
        exp:Math.floor(Date.now()/1000)+(60*60),
        data:{Name:"DevGenius",admin:true}
    }
    let authToken=jwt.sign(payload,"DevGenius34");
    res.send(authToken)
}