import { type FC } from "react";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

export const LoginButton: FC = () => {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" aria-disabled={pending}>
			{pending ? (
				<>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
				</>
			) : (
				"Login"
			)}
		</Button>
	);
};
