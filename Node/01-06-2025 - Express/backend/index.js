const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// First Initialize Multer

const storage = multer.memoryStorage();

const upload = multer({
  limits: {
    fileSize: 3 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only Image is Required"), false);
    }
  },
  storage: storage,
});

// Configure Cloudinary

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//

const uploadImageInCloudinary = (buffer, fileName) => {
  return new Promise((res, rej) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: "image",
          public_id: `${Date.now()}_${fileName}`,
          folder: "users_upload",
        },
        (error, result) => {
          if (error) {
            rej(error);
          } else {
            res(result);
          }
        }
      )
      .end(buffer);
  });
};

const readDataFromFile = async () => {
  try {
    const data = await fs.readFile("data.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const writeDataToFile = async (data) => {
  try {
    await fs.writeFile("data.json", JSON.stringify(data, null, 2));
    console.log("Data insert into the file");
  } catch (error) {
    console.log("Something went wrong while writing Data");
    console.log(error);
  }
};

app.post("/api/user/create", upload.single("image"), async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.send({
      message: "Name and Image is Required",
      success: false,
    });
  }

  if (!req.file) {
    return res.send({ success: false,  message: "Image is required" });
  }

  const uploadImage = await uploadImageInCloudinary(
    req.file.buffer,
    req.file.originalname
  );

  const newUser = {
    name: name,
    email: email,
    image: uploadImage.secure_url,
    id: uploadImage.public_id,
  };

  const existingData = await readDataFromFile();

  console.log(existingData)

  existingData.push(newUser);

  await writeDataToFile(existingData);

  return res.send({ message: "User Created Succesfully", success: true, user: newUser });
});


app.get('/all-users' , async (req,res)=>{

    const allUsers = await readDataFromFile()
    res.send({
        users: allUsers
    })
})

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port ${process.env.PORT}`);
});
