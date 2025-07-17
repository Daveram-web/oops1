"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviewReviewService = void 0;
const MovieReview_1 = require("../model/MovieReview");
const BaseService_1 = require("./BaseService");
class MoviewReviewService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.movieModel = new MovieReview_1.MovieReviewModel();
    }
    getAll() {
        return this.movieModel.getAll();
    }
    getById(id) {
        return this.movieModel.getById(id);
    }
    deletes(id) {
        return this.movieModel.deletes(id);
    }
}
exports.MoviewReviewService = MoviewReviewService;
