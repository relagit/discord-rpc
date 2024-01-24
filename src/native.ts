import { type SetActivity, Client } from "@xhayper/discord-rpc";

const CLIENT_ID = "1199478493965205564";

const client = new Client({ clientId: CLIENT_ID });

console.log("Connecting to Discord...");

client.login();

client.on("connected", () => {
    console.log("Connected to Discord!");
});

client.on("disconnected", () => {
    console.log("Disconnected from Discord!");
});

client.on("ERROR", (error) => {
    console.error(error);
});

let activity: SetActivity | null = null;

client.on("ready", () => {
    console.log("Ready for  Discord!");

    activity = {
        details: "Browsing Repositories",
        state: "Idle",
        startTimestamp: Date.now(),
        largeImageKey: "rela-black",
        largeImageText: "RelaGit",
        instance: false,
    };

    client.user?.setActivity(activity);
});

export const updateActivity = async (newactivity: (prev: SetActivity | null) => SetActivity) => {
    console.log("Updating activity...");

    activity = newactivity(activity);

    client.user?.setActivity(activity);
};
