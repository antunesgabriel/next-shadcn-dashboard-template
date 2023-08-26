import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import SignInFormComponent from '@/components/auth/sign-in-form.component';
import GoogleIconComponent from '@/components/common/google-icon.component';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function SignInPage() {
	return (
		<>
			<Link
				href="/auth/signup"
				className={cn(
					buttonVariants({ variant: 'ghost' }),
					'absolute right-4 top-4 md:right-8 md:top-8'
				)}
			>
				Cadastre-se <ArrowRight className="ml-2 h-4 w-4" />
			</Link>

			<section className="flex flex-col space-y-6">
				<header>
					<h1 className="text-center mb-3 text-3xl font-semibold text-gray-700 dark:text-white">
						Bem vindo<span className="text-primary">!</span>
					</h1>
					<p className="text-sm text-muted-foreground text-center">
						Insira suas credenciais para acessar sua conta.
					</p>
				</header>

				<Button variant="outline" type="button">
					<GoogleIconComponent className="mr-2 h-4 w-4" /> Google
				</Button>

				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
					</div>
				</div>

				<SignInFormComponent />
			</section>
		</>
	);
}
