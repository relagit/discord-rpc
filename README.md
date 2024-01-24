# Discord RPC for RelaGit

[Download RelaGit](https://git.rela.dev)

This official workflow enables Discord Rich Presence for your RelaGit projects.

## Installation
```sh
pnpm install @relagit/discord-rpc -g
```

Then use `pnpm list -g` to find out where your global packages are installed, and add the workflow to your `~/.relagit/external.json`.

It should look something like this:
```json
// ~/.relagit/external.json
[
    "/Users/username/.pnpm-global/2/node_modules/@relagit/discord-rpc"
]
```

## Usage
Simply open RelaGit. If Discord is also open, you should see your Rich Presence status change to "Browsing Repositories". If Discord is not open, just launch it and restart RelaGit, then the presence should show up.

<img width="354" alt="Screenshot 2024-01-24 at 4 33 20 pm" src="https://github.com/relagit/discord-rpc/assets/87679354/93e53424-e21b-48c0-a236-ad459d4b33b1">
