import { Message } from './message';

export class Chatroom {
  constructor(
    public userA: string,
    public userB: string,
    public createdAt: number,
    public updated: number,
    public messages: Message[]
  ) {}
}
