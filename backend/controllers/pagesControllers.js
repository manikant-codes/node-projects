const Page = require("../models/Page");
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
    const { id } = req.params;
    const page = await Page.findById(id);
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
    // console.log("files", files);

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

    await Page.create({ name: body.name, carouselImages, categories });

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
    await Page.findByIdAndDelete(id);
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
