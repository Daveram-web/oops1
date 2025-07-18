import db from "../database/db";
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


async getReviewByIntrest(id: number): Promise<MovieReview[]> {
  try {
    const [[user]]: any = await db.query("SELECT gener_id, language_id FROM user WHERE id = ?", [id]);

    if (!user) return [];

    const genreIds = user.gener_id.split(",").map((v: string) => v.trim());
    const languageIds = user.language_id.split(",").map((v: string) => v.trim());

    const genreConditions = genreIds.map(() => `FIND_IN_SET(?, m.gener_id)`).join(" OR ");
    const languageConditions = languageIds.map(() => `FIND_IN_SET(?, m.language_id)`).join(" OR ");

    const sql = `
      SELECT mr.* 
      FROM movie_reviews mr
      JOIN movie m ON m.id = mr.movie_id
      WHERE (${genreConditions}) OR (${languageConditions})
    `;

    const values = [...genreIds, ...languageIds];

    const [rows]: any = await db.query(sql, values);
    return rows.map((row: any) => this.movieModel.MaptoRow(row));
  } catch (error) {
    throw error;
  }
}

  
}
