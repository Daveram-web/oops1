import { BaseModel } from "./BaseModel";

export interface ImovieReview {
  id: number | null;
  movie_id: number;
  reviewer_id: number;
  file_type?: string | null;
  video_path?: string | null;
  ratting?: number | null;
  text_review?: string | null;
  description?: string | null;
  audio_path?: string | null;
  youtube_link?: string | null;
}

export class MovieReview implements ImovieReview {
  constructor(
    public id: number | null,
    public movie_id: number,
    public reviewer_id: number,
    public file_type?: string | null,
    public video_path?: string | null,
    public ratting?: number | null,
    public text_review?: string | null,
    public description?: string | null,
    public audio_path?: string | null,
    public youtube_link?: string | null
  ) {}
}

export class MovieReviewModel extends BaseModel<MovieReview> {
  constructor() {
    super("movie_reviews");
  }
  MaptoRow(row: any): MovieReview {
    return new MovieReview(
      row.id,
      row.movie_id,
      row.reviewer_id,
      row.file_type,
      row.video_path,
      row.ratting,
      row.text_review,
      row.description,
      row.audio_path,
      row.youtube_link
    );
  }
}
