import { User } from "@prisma/client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

interface Props {
	users: User[];
}
export default function UsersTable({ users }: Props) {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableHeaderCell>Name</TableHeaderCell>
					<TableHeaderCell>Email</TableHeaderCell>
					<TableHeaderCell>Created At</TableHeaderCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{users.map((user) => (
					<TableRow key={user.id}>
						<TableCell>{user.name}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>
							{user.createdAt.toLocaleDateString("en-us", {
								dateStyle: "full",
							})}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
