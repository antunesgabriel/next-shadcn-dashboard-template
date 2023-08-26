import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export function ConfirmeRegisterAlertComponent({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	return (
		<AlertDialog open={open}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Conta criada!</AlertDialogTitle>
					<AlertDialogDescription>
						Enviamos um email de confirmação, acesse-o para poder confirmar seu registro.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogAction onClick={onClose}>Confirmado</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
