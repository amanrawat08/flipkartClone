

const register = async(req, res)=>{
    const {email,name} = req.body;

    if(!email || !name){
        return res.status(401).json({
            status:"fail",
            message:"Enter Full details"
        })
    }
}