import express from "express";
import { MovieController } from "../controller/MovieReview.Controller";

const movieReview = express.Router();
const movieController = new MovieController();

movieReview.get(
  "/allReviews",
  // #swagger.tags = ['MovieReview']
  // #swagger.summary = 'Get all movie reviews'
  // #swagger.description = 'Returns all non-deleted movie reviews'
  movieController.getAllReviews
);

movieReview.get(
  "/getById",
  // #swagger.tags = ['MovieReview']
  // #swagger.description = 'Returns all non-deleted movie reviews'
   //  #swagger.parameters['id'] = { description: 'the user Id' }

  movieController.getReviewById
);

movieReview.post(
  "/getByIntrest",
  // #swagger.tags = ['MovieReview']
  //  #swagger.parameters['id'] = { description: 'the user Id' }
  movieController.getReviewByIntrest
);

export default movieReview;
