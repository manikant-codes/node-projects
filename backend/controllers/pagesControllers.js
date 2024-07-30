const Page = require("../models/Page");
const fs = require("fs");
const path = require("path");
const { uploadAndGetImageURLs } = require("../utils/fileUploadUtils");
const {
  sendErrorResponse,
  sendDataResponse,
  sendSuccessResponse,
} = require("../utils/serverUtils");

const getAllPages = async (req, res) => {
  try {
    const pages = await Page.find({});
    sendDataResponse(res, pages);
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const getSinglePage = async (req, res) => {
  try {
    const { slug } = req.params;
    const page = await Page.findOne({ slug: slug });
    sendDataResponse(res, page);
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const addPage = async (req, res) => {
  try {
    const body = req.body;
    const files = req.files;

    body.categories = JSON.parse(body.categories);

    let carouselImages = [];
    let categoryImages = [];

    for (const key in files) {
      if (key === "carouselImages") {
        carouselImages = await uploadAndGetImageURLs(files[key]);
      } else {
        const temp = await uploadAndGetImageURLs(files[key]);
        categoryImages.push({ category: key, image: temp[0] });
      }
    }

    const categories = body.categories.map((value) => {
      const img = categoryImages.find((v) => {
        return v.category === value.name;
      });
      return { ...value, image: img?.image };
    });

    await Page.create({
      name: body.name,
      carouselImages,
      categories,
      slug: body.slug,
    });

    sendSuccessResponse(res, "Page added successfully.");
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const updatePage = async (req, res) => {
  try {
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

const deletePage = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await Page.findById(id);

    const carouselImages = page.carouselImages;
    const categoryImages = page.categories.map((v) => {
      return v.image;
    });

    const carouselImagesFileNames = carouselImages.map((v) => {
      return path.parse(v).base;
    });
    const categoryImagesFileNames = categoryImages.map((v) => {
      return path.parse(v).base;
    });

    const deleteFilesList = carouselImagesFileNames.concat(
      categoryImagesFileNames
    );

    const uploadsFilesList = fs.readdirSync(path.join(__dirname, "../uploads"));

    for (const value of deleteFilesList) {
      if (uploadsFilesList.includes(value)) {
        fs.unlink();
      }
    }

    console.log(">>> uploadsFilesList: ", uploadsFilesList);

    // await Page.findByIdAndDelete(id);
    sendSuccessResponse(res, "Page deleted successfully.");
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
};

module.exports = {
  getAllPages,
  getSinglePage,
  addPage,
  updatePage,
  deletePage,
};
