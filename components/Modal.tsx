"use client";

import { ReactNode, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
}

export default function Modal({
	open,
	onClose,
	children,
	title = "Modal Title",
}: ModalProps) {
	const [mounted, setMounted] = useState(false);
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	// Mount the portal root dynamically
	useEffect(() => {
		setMounted(true);
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape" && open) {
				onClose();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [open, onClose]);

	useEffect(() => {
		if (open) {
			dialogRef.current?.showModal();
		} else {
			dialogRef.current?.close();
		}
	}, [open]);

	if (!mounted) return null;

	return createPortal(
		<dialog
			ref={dialogRef}
			className="modal fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			onClick={(e) => e.target === dialogRef.current && onClose()}
		>
			<div className="bg-white rounded-lg shadow-lg max-w-md w-full">
				<header className="p-4 border-b flex justify-between items-center">
					<h2 className="text-lg font-semibold">{title}</h2>
					<button
						onClick={onClose}
						aria-label="Close Modal"
						className="text-gray-500 hover:text-gray-700"
					>
						&times;
					</button>
				</header>

				<main className="p-4">{children}</main>
				<footer className="p-4 border-t flex justify-end">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
					>
						Close
					</button>
				</footer>
			</div>
		</dialog>,
		document.getElementById("modal-root")!
	);
}
