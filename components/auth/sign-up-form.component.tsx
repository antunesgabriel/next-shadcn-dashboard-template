'use client';

import { useCallback, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { ConfirmeRegisterAlertComponent } from './confirme-register-alert.component';

const formSchema = z
	.object({
		email: z.string().email('Email inválido'),
		name: z.string().min(3, 'Insira seu nome'),
		password: z.string().min(3, 'Senha inválida'),
		confirmePassword: z.string().min(3, 'Confirme sua senha'),
	})
	.superRefine(({ confirmePassword, password }, ctx) => {
		if (confirmePassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'As senhas não correspondem',
				path: ['confirmePassword'],
			});
		}
	});

type FormFields = z.infer<typeof formSchema>;

export default function SignUpFormComponent() {
	const [isLoading, setIsLoading] = useState(false);
	const [alertOpen, setAlertOpen] = useState(false);

	const router = useRouter();

	const form = useForm<FormFields>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmePassword: '',
		},
	});

	const onSubmit = (values: FormFields) => {
		console.log(values);
		form.reset();
		setAlertOpen(true);
	};

	const onClose = useCallback(() => {
		setAlertOpen(false);

		router.replace('/auth/signin');
	}, [router]);

	return (
		<Form {...form}>
			<ConfirmeRegisterAlertComponent open={alertOpen} onClose={onClose} />

			<form className="grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="grid gap-1 space-y-3 text-left">
					<section className="form__group">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor="name">Nome</FormLabel>
									<FormControl>
										<Input autoCorrect="off" placeholder="Seu nome" id="name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</section>

					<section className="form__group">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor="email">Email</FormLabel>
									<FormControl>
										<Input
											autoCapitalize="none"
											autoComplete="email"
											autoCorrect="off"
											placeholder="name@example.com"
											type="email"
											id="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</section>

					<section className="form__group">
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor="password">Senha</FormLabel>
									<FormControl>
										<Input placeholder="*****" type="password" id="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</section>

					<section className="form__group">
						<FormField
							control={form.control}
							name="confirmePassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel htmlFor="confirmePassword">Confirmar senha</FormLabel>
									<FormControl>
										<Input placeholder="*****" type="password" id="confirmePassword" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</section>
				</div>

				<Button type="submit">
					{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
					Entrar
				</Button>
			</form>
		</Form>
	);
}
