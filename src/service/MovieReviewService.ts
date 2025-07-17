import { MovieReview, MovieReviewModel } from "../model/MovieReview";
import { BaseService } from "./BaseService";

export class MoviewReviewService extends BaseService<MovieReview> {
  private movieModel = new MovieReviewModel();

  getAll(): Promise<MovieReview[]> {
    return this.movieModel.getAll();
  }

  getById(id: number): Promise<MovieReview | null> {
    return this.movieModel.getById(id)
  }
  deletes(id: number): Promise<boolean | MovieReview> {
    return this.movieModel.deletes(id)
  }
  
}
