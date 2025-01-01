require("dotenv").config();

function getImageUrl(fileName) {
 
  if (fileName.startsWith("http")) {
    return fileName; 
  }

  return `${process.env.BACKEND_URL}/public/${fileName}`;
}

module.exports = getImageUrl;
