import { Trans } from "@lingui/solid/macro";

import { Dialog, DialogProps } from "@revolt/ui";

import { Modals } from "../types";

/**
 * Modal to warn users when changing permissions will lock them out of the channel
 */
export function ChannelLockoutWarningModal(
  props: DialogProps & Modals & { type: "channel_lockout_warning" },
) {
  return (
    <Dialog
      show={props.show}
      onClose={props.onClose}
      title={<Trans>You will lose access to this channel</Trans>}
      actions={[
        { text: <Trans>Cancel</Trans> },
        {
          text: <Trans>Save anyway</Trans>,
          onClick: () => props.onConfirm(),
        },
      ]}
    >
      <Trans>
        Denying "View Channel" on Everyone will remove your ability to view this
        channel because you do not have an active role override granting you
        access. If you proceed, this channel will disappear from your sidebar.
      </Trans>
    </Dialog>
  );
}
