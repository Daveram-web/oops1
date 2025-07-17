import express from 'express'
import { MovieController } from '../controller/MovieReview.Controller'

const movieReview = express.Router()
const movieController = new MovieController()

movieReview.get("allReviews",movieController.getAllReviews)


export default movieReview