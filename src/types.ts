export interface CommandHandler {
  command: string;
  callback(): void;
}
