import Search from "@/components/Search";
import UsersTable from "@/components/UsersTable";
import prisma from "@/lib/prisma";
import { Card, Text, Title } from "@tremor/react";

export default async function Home({
	searchParams,
}: {
	searchParams: { q?: string };
}) {
	const query = searchParams.q;
	const user = await prisma.user.findMany({
		where: {
			name: {
				contains: query,
			},
		},
	});
	return (
		<main className="p-4 md:p-10 mx-auto max-w-7xl">
			<Title>Users</Title>
			<Text>Users retrieve from database</Text>
			<Search />
			<Card className="mt-6">
				<UsersTable users={user} />
			</Card>
		</main>
	);
}
