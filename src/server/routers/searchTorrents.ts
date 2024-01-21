import { z } from "zod"

import { getTorrents } from "@server/api/getTorrents"
import { procedure } from "@server/trpc"

import { MovieFilterProperties } from "@schemas/MovieFilterProperties"
import { SortOptions } from "@schemas/SortOptions"

export const searchTorrentsRoute = procedure
	.input(
		z.object({
			imdb: z.string(),
			sortOptions: SortOptions,
			movieFilterProps: MovieFilterProperties,
		}),
	)
	.query(async ({ input: { imdb, sortOptions, movieFilterProps } }) => {
		return await getTorrents(imdb, sortOptions, movieFilterProps)
	})
