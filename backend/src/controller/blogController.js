const removeFile = require("../middleware/removeImage");
const Blog = require("../model/blogModel");
const path = require("path");
const getImageUrl = require("../utils/getImageUrl");

const postBlog = async (req, res) => {
  try {
    const { title, date, details} = req.body;

    // Validate required fields
    if (!title || !date || !details) {
      return res.status(400).json({ message: "Title, date, and details are required." });
    }


    // Check if an image is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    // Validate file type
    const validMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validMimeTypes.includes(req.file.mimetype)) {
      return res.status(400).json({
        message: "Invalid file type. Only JPEG, PNG, and GIF are allowed.",
      });
    }

    // Process the uploaded file
    const imagePath = getImageUrl(req.file.filename); // Adjust the path based on your storage setup

    // Create a new blog entry
    const blog = new Blog({
      title,
      date,
      image: imagePath,
      details,
    });

    // Save the blog to the database
    await blog.save();

    res.status(201).json({ message: "Blog posted successfully", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to post the blog", error: error.message });
  }
};



const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()

  if(!blogs){
    res.status(404).json({message: "Blogs doesnot Found"})
  }

  res.status(200).json({message: "Blog retrieve successfully", data:blogs})

  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Failed to retrieve Blogs", error:error.message})
  }
}

const deleteBlog = async (req, res) => {
  
  try {
    const id = req.params.id;
    console.log("blog id", id)

  const checkBlog = await Blog.findById(id);

  if (!checkBlog) {
    res.status(404).json({ message: "Blog doesnot Found" });
  }

  if (checkBlog.image) {
    if (Array.isArray(checkBlog.image)) {
      checkBlog.image.forEach((image) => {
        removeFile(image);
      });
    } else {
      removeFile(checkBlog.image);
    }
  }

  // delete blog
  await Blog.findByIdAndDelete(id)
  res.status(200).json({message: "Blog deleted successfully"})

  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Failed to deleted BLog", error: error.message})
  }

};


// Get Single blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  console.log(id, "blog id")

  if (!id) {
    return res.status(400).json({ message: "Blog ID is missing" });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog retrieved successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    console.log("Received data:", req.body);  
    const id = req.params.id;
    console.log("Updating blog with ID:", id);
    const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    console.error("Error updating blog:", error);  
    res.status(500).json({ message: "Failed to update the blog", error: error.message });
  }
};



module.exports = {
  postBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog, 
};

