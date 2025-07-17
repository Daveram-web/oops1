"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MovieReview_Controller_1 = require("../controller/MovieReview.Controller");
const movieReview = express_1.default.Router();
const movieController = new MovieReview_Controller_1.MovieController();
movieReview.get("/allReviews", movieController.getAllReviews);
exports.default = movieReview;
