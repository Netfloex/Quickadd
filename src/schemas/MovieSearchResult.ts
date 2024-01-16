import { z } from "zod"

const movieRating = z
	.object({
		count: z.number(),
		value: z.number(),
	})
	.nullable()

const dateString = z
	.string()
	.transform((a) => new Date(a).getTime())
	.nullable()

export const MovieSearchResult = z.object({
	imdbId: z.string().optional(),
	overview: z.string(),
	title: z.string(),
	originalTitle: z.string(),
	runtime: z.number(),
	year: z.number(),
	tmdbId: z.number(),
	movieRatings: z.object({
		tmdb: movieRating,
		imdb: movieRating,
		rottenTomatoes: movieRating,
		metacritic: movieRating,
	}),
	genres: z.array(z.string()),
	posterUrl: z.string().optional(),
	physicalRelease: dateString,
	digitalRelease: dateString,
	inCinema: dateString,
})

export type MovieSearchResult = z.output<typeof MovieSearchResult>
