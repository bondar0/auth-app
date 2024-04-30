import { BetweenHorizontalStart, Pencil, SquareLibrary } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./components/ui/card";

export default function Home() {
	return (
		<div className="min-height-[inherit] flex flex-col items-center justify-center py-6 text-center">
			<h1 className="text-4xl font-bold">Authorization Testing Application</h1>
			<p className="mt-8 text-2xl font-bold text-slate-500">Brief Instructions:</p>
			<div className="mb-4 mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle className="text-green-500">Step 1</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							Select the <span className="font-medium text-green-400">Login</span> button in the top
							menu
						</p>
					</CardContent>
					<CardFooter className="justify-center">
						<BetweenHorizontalStart size={48} className="text-green-500" />
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-green-500">Step 2</CardTitle>
					</CardHeader>
					<CardContent>
						<p>Enter the following login information:</p>
						<p>
							<span className="font-medium text-green-400">login: </span>asadads
						</p>
						<p>
							<span className="font-medium text-green-400">hasło: </span>asadads
						</p>
					</CardContent>
					<CardFooter className="justify-center">
						<Pencil size={48} className="text-green-500" />
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="text-green-500">Step 3</CardTitle>
					</CardHeader>
					<CardContent>
						<p>
							By logging in, we can now visit the Contact and About Us pages. We also have the
							option of logging out and logging back in again.
						</p>
					</CardContent>
					<CardFooter className="justify-center">
						<SquareLibrary size={48} className="text-green-500" />
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
