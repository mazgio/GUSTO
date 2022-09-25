import jwt from "jsonwebtoken";

//do something and move to the next
const auth = async (req, _res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; //to get the token from the frontend, it is in the first position of the array after we splitted 
        console.log("Token", token);
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET); //it gives the data from each specific token and we pass a secret

            req.userId = decodedData?.id; //to get the userId
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }
        next(); //we can pass to the next action for example if we want to like a post and we click a like button we pass through the auth middleware(confirm or denies the request) and next to the like controller
    } catch (error) {
        console.log(error);
    }
};

export default auth;