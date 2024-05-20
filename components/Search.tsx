"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Search() {
	const router = useRouter();
	const pathName = usePathname();
	const params = new URLSearchParams(window.location.search);
	const handleSearch = (val: string) => {
		if (val) {
			params.set("q", val);
		} else {
			params.delete("q");
		}
		router.replace(`${pathName}/?q=${params.get("q")}`);
	};
	return (
		<div className="relative mt-5 max-w-md">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="rounded-md shadow-md">
				<div className="pointer-events-none absolute flex items-center inset-y-0 pl-3 left-0">
					<SearchIcon className="w-4 h-4 text-gray-500" />
				</div>
				<input
					type="search"
					name="search"
					id="search"
					autoComplete="off"
					className="h-10 rounded-md border-gray-200 focus:border-indigo-300 w-full pl-9 border"
					placeholder="Search user with username"
					onChange={(e) => handleSearch(e.target.value)}
				/>
			</div>
		</div>
	);
}
