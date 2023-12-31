import { ToggleThemeComponent } from '@/components/common/toggle-theme.component';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Brand - Authentication',
	description: 'Brand description',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="container h-screen grid grid-cols-1 lg:max-w-none md:grid-cols-2 lg:px-0">
			<aside className="hidden md:flex flex-col relative h-full inset-0 p-9 auth-bg">
				<div className="absolute top-5 right-5">
					<ToggleThemeComponent />
				</div>
				<div className="relative z-20 flex items-center text-lg font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-2 h-6 w-6"
					>
						<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
					</svg>
					Brand Name
				</div>

				<div className="flex-1" />

				<footer className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							&ldquo;This library has saved me countless hours of work and helped me deliver
							stunning designs to my clients faster than ever before.&rdquo;
						</p>
						<footer className="text-sm">Sofia Davis</footer>
					</blockquote>
				</footer>
			</aside>

			<main className="h-full relative p-6 md:p-9 flex justify-center items-center">
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
						{children}
						<p className="px-8 text-center text-sm text-muted-foreground">
							Ao clicar em continuar, você concorda com nossos{' '}
							<Link href="/terms" className="underline underline-offset-4 hover:text-primary">
								Termos de serviço
							</Link>{' '}
							and{' '}
							<Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
								Política de Privacidade.
							</Link>
							.
						</p>
					</div>
				</div>
			</main>
		</section>
	);
}
