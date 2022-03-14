import { Command, Flags } from "@oclif/core";

export default class Session extends Command {
    static description = "prefix or a namespace for the session-related commands";

    static examples = [`$ cli-demo session --help`];

    static flags = {
        help: Flags.string({ char: 'h', description: 'display help menu' })
    };

    static args = [];
    
    async run(): Promise<void> {
        const { flags } = await this.parse(Session);

    }
}