const registerAdmin = async(req,res)=>{
    
    try {
        let {email, password} = req.body;

        if(!email || !password){
            return res.status(404).json({
                message:"Enter Full data"
            })
        }

    } catch (error) {
        
    }

}