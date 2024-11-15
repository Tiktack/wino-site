import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { Button } from "~/components/core/Button/Button";
import { ContentDialog } from "~/components/core/ContentDialog/ContentDialog";

export default function Buttons() {
	const [isOpen, setIsOpen] = createSignal(false);

	return (
		<main>
			<Title>Text Block</Title>
			<div
				style={{
					display: "flex",
					"flex-direction": "column",
					gap: "1rem",
				}}
			>
				<Button style={{width: "150px"}} onClick={() => setIsOpen(true)}>Open dialog</Button>
        <ContentDialog
          open={isOpen()}
          onClose={() => setIsOpen(false)}
          size="standard"
          darken={true}
          title="Dialog Title"
          closable={false}
          footer={
            <div
              style={{
                width: "100%",
                display: "flex",
                "flex-direction": "row",
                gap: "0.5rem"
              }}
            >
              <Button style={{ flex: "1" }} variant={"accent"}>Accept</Button>
              <Button style={{ flex: "1" }}>Cancel</Button>
            </div>
          }
        >
          Dialog Backdrops
The default behavior of a dialog is to open with a backdrop (“smoke”) layer which prevents user interaction and darkens the contents of the page behind the dialog.

You can disable backdrop darkening by setting the darken property to false.
You can configure the backdrop to close the dialog when it is clicked using the on:backdropclick and on:backdropmousedown events dispatched from the component.
        </ContentDialog>
			</div>
		</main>
	);
}