"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const MovieReviewService_1 = require("../service/MovieReviewService");
const movieService = new MovieReviewService_1.MoviewReviewService();
class MovieController {
    constructor() {
        this.getAllReviews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // #swagger.tags = ['Movie Reviews']
            // #swagger.description = 'Get all movie reviews'
            try {
                const reviews = yield movieService.getAll();
                return res.status(200).json({
                    message: "The reviews fetched successfully",
                    data: reviews,
                    error: [],
                    status: 1,
                });
            }
            catch (error) {
                return res.status(400).json({
                    message: "Error",
                    error: error,
                    status: 0,
                    data: [],
                });
            }
        });
    }
}
exports.MovieController = MovieController;
