require('dotenv').config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Retrieve token from cookies (HttpOnly cookie)
  const token = req.cookies.token; 

  if (!token) {
    return res.status(401).json({ message: "Access denied, no token found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
};

module.exports = verifyToken;
