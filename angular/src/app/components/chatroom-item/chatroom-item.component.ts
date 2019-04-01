import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chatroom-item',
  templateUrl: './chatroom-item.component.html',
  styleUrls: ['./chatroom-item.component.scss']
})
export class ChatroomItemComponent implements OnInit {

  chatroom$: Observable<any>;
  newMessage: string;

  faReply = faReply;

  constructor(
    public chatService: ChatService,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit() {
    const chatroomId = this.route.snapshot.paramMap.get(`id`);
    const source = this.chatService.getChatroomById(chatroomId);
    this.chatroom$ = this.chatService.joinUsers(source);
  }

  submit(chatId) {
    if (!this.newMessage) {
      return alert('you need to enter something');
    }
    this.chatService.sendMessage(chatId, this.newMessage)
    .subscribe();
    this.newMessage = ``;
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
  }

  trackByCreated(message) {
    return message.createdAt;
  }

}
