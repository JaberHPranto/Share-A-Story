import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const isCustomAuth = token.length < 500 // google's token has length more than 500

        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.SECRET)
            req.userId = decodedData?.id
        } else {
            // for google authentication
            decodedData = jwt.decode(token)
            req.userId = decodedData?.sub   // sub use by google for authenticate a particular user
        }

        next()
    } catch (error) {
        console.log(error);
    }
    
}

export default auth