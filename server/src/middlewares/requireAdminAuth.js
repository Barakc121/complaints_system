import jwt from "jsonwebtoken";

const requireAdminAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ error:"not have yoe can to sign in" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.admin = decoded;
        next(); 
    } catch (err) {
        res.status(403).json({ error: "isnt no token mekori" });
    }
};

export default requireAdminAuth;