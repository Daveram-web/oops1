// src/controller/MovieController.ts
import { RequestHandler } from "express";
import { MoviewReviewService } from "../service/MovieReviewService";
import { response } from "../helper/Helper";

const movieService = new MoviewReviewService();

export class MovieController {
  getAllReviews: RequestHandler = async (req, res) => {
    try {
      const reviews = await movieService.getAll();
      return res.status(200).json({
        message: "The reviews fetched successfully",
        data: reviews,
        error: [],
        status: 1,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error",
        error: error,
        status: 0,
        data: [],
      });
    }
  };

  getReviewById: RequestHandler = async (req, res) => {
    try {
      const id  = parseInt(req.query.id as string);
      const byId = await movieService.getById(id);
      return res.status(200).json(response(1, "The review Obtained", "", byId));
    } catch (error) {
      return res.status(200).json(response(0, "error", error, ""));
    }
  };

  getReviewByIntrest:RequestHandler= async(req,res) => {
    try {
        const id = parseInt(req.query.id as string)
        const reviews  = await movieService.getReviewByIntrest(id);
        return res.status(200).json(response(1,"List Obtaines",[],reviews)) 
    } catch (error) {
        return res.status(400).json(response(0,"Error in fetching",error,error))
    }
  }

  
}
