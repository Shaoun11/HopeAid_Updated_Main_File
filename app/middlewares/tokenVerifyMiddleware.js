import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    let token = req.headers['token-key'];

    jwt.verify(token, "SecretKey123456789", function (err, decoded) {
        if (err) {
            res.status(401).json({ status: "Invalid Token", data: err });
        } else {
            res.status(200).json({ status: "Success token", data: decoded });
            next();
        }
    });
};

export default authenticateToken;