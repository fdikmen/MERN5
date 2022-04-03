const isAuth = (req,res,next)=>
{
    const isAuthorized = true;
    if (isAuthorized) {
        next();
    } else {
        res.send("You have no authority. Please Login!")
    }
}


module.exports = isAuth