// src/controller/MovieController.ts
import { RequestHandler } from "express";
import { MoviewReviewService } from "../service/MovieReviewService";

const movieService = new MoviewReviewService();

export class MovieController {

    getAllReviews: RequestHandler = async (req, res) => {
    // #swagger.tags = ['Movie Reviews']
    // #swagger.description = 'Get all movie reviews'
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



}
