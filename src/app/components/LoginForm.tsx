import { Input } from "./ui/input";
import { LoginButton } from "./LoginButton";

export const LoginForm = () => {
	return (
		<form action="">
			<div className="mb-6">
				<label htmlFor="username">Username</label>
				<Input id="username" name="username" placeholder="Username" />
				{/* {state?.errors.username && (
					<span className="text-sm text-red-400">{state.errors.username}</span>
				)} */}
			</div>
			<div className="mb-6">
				<label htmlFor="password">Password</label>
				<Input id="password" name="password" type="password" placeholder="Password" />
				{/* {state?.errors.password && (
					<span className="text-sm text-red-400">{state.errors.password}</span>
				)} */}
			</div>
			<LoginButton />
		</form>
	);
};
