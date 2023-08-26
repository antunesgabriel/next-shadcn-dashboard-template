'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

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

const formSchema = z
	.object({
		email: z.string().email('email inválido'),
		password: z.string().min(3, 'senha inválida'),
	})
	.required();

type FormFields = z.infer<typeof formSchema>;

export default function SignInFormComponent() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<FormFields>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (values: FormFields) => {
		console.log(values);
	};

	return (
		<Form {...form}>
			<form className="grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="grid gap-1 space-y-3 text-left">
					<section className="form__group">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
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
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input placeholder="*****" type="password" id="password" {...field} />
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
