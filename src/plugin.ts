import { Workflow } from "relagit:actions";

export default new Workflow({
    name: "Discord RPC",
    description: "Broadcast your RelaGit activity to Discord.",
    hooks: {
        navigate: (_, repo, file) => {
            native.updateActivity((prev) => ({
                ...(prev || {}),
                details: repo ? `In ${repo.name}` : "Browsing Repositories",
                state: file ? `Viewing ${file.path}/${file.name}` : "Browsing Repository",
                buttons: repo
                    ? [
                          {
                              label: "View Repository",
                              url: repo.remote,
                          },
                      ]
                    : [],
            }));
        },
    },
});
