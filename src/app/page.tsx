import type { Metadata } from "next"
import type { FC } from "react"

export const metadata: Metadata = {
	title: "Template",
	description: "Welcome to Next.js",
}

const Page: FC = () => (
	<>
		<span className="bg-red-600">Hello World</span>
	</>
)

export default Page
