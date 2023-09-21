import { z } from "zod"

import { getImdbId } from "@server/api/getImdbId"
import { getTorrents } from "@server/api/getTorrents"
import { procedure } from "@server/trpc"

import { SortOptions } from "@schemas/SortOptions"

export const searchTorrentsRoute = procedure
	.input(z.object({ id: z.number(), sortOptions: SortOptions }))
	.query(async ({ input: { id, sortOptions } }) => {
		const info = await getImdbId(id)

		if (!info.imdb_id) {
			return []
		}

		return await getTorrents(info.imdb_id, info.original_title, sortOptions)
	})
