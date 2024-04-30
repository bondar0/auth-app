"use client";

import { LoginForm } from "../components/LoginForm";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

const SignIn = () => {
	return (
		<div className="flex min-h-[inherit] flex-col items-center justify-center">
			<Card className="mx-auto w-full max-w-md">
				<CardHeader>
					<CardTitle>Login</CardTitle>
				</CardHeader>
				<CardContent>
					<LoginForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default SignIn;
