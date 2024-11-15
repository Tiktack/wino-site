import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { Button } from "~/components/core/Button/Button";
import { ContentDialog } from "~/components/core/ContentDialog/ContentDialog";
import { TextBlock } from "~/components/core/TextBlock/TextBlock";

export default function Buttons() {
	const [isOpen, setIsOpen] = createSignal(false);
	const [result, setResult] = createSignal("");

	const handleConfirm = () => {
		setIsOpen(false);
		setResult("Confirmed");
	};

	const handleClose = () => {
		setIsOpen(false);
		setResult("Closed");
	};

	return (
		<main>
			<Title>Content Dialog</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "column",
					gap: "1rem",
				}}
			>
				<Button style={{ width: "150px" }} onClick={() => setIsOpen(true)}>
					Open dialog
				</Button>
				<ContentDialog
					open={isOpen()}
					onClose={handleClose}
					size="standard"
					darken={false}
					title="Dialog Title"
					closable={false}
					footer={
						<div
							style={{
								width: "100%",
								display: "flex",
								"flex-direction": "row",
								gap: "0.5rem",
							}}
						>
							<Button
								style={{ flex: "1" }}
								variant={"accent"}
								onClick={handleConfirm}
							>
								Accept
							</Button>
							<Button style={{ flex: "1" }} onClick={handleClose}>
								Cancel
							</Button>
						</div>
					}
				>
					Dialog Backdrops The default behavior of a dialog is to open with a
					backdrop (“smoke”) layer which prevents user interaction and darkens
					the contents of the page behind the dialog. You can disable backdrop
					darkening by setting the darken property to false. You can configure
					the backdrop to close the dialog when it is clicked using the
					on:backdropclick and on:backdropmousedown events dispatched from the
					component.
				</ContentDialog>
				<TextBlock variant="body">Result: {result()}</TextBlock>
			</div>
		</main>
	);
}