"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieReviewModel = exports.MovieReview = void 0;
const BaseModel_1 = require("./BaseModel");
class MovieReview {
    constructor(id, movie_id, reviewer_id, file_type, video_path, ratting, text_review, description, audio_path, youtube_link) {
        this.id = id;
        this.movie_id = movie_id;
        this.reviewer_id = reviewer_id;
        this.file_type = file_type;
        this.video_path = video_path;
        this.ratting = ratting;
        this.text_review = text_review;
        this.description = description;
        this.audio_path = audio_path;
        this.youtube_link = youtube_link;
    }
}
exports.MovieReview = MovieReview;
class MovieReviewModel extends BaseModel_1.BaseModel {
    constructor() {
        super("movie_reviews");
    }
    MaptoRow(row) {
        return new MovieReview(row.id, row.movie_id, row.reviewer_id, row.file_type, row.video_path, row.ratting, row.text_review, row.description, row.audio_path, row.youtube_link);
    }
}
exports.MovieReviewModel = MovieReviewModel;
