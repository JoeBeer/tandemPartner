import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { faReply } from '@fortawesome/free-solid-svg-icons';

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
    public authService: AuthService,
    private translateService: TranslateService
  ) { }

  // initalize the chatroom with the messages and user information
  ngOnInit() {
    const chatroomId = this.route.snapshot.paramMap.get(`id`);
    const source = this.chatService.getChatroomById(chatroomId);
    this.chatroom$ = this.chatService.joinUsers(source);
  }

  // send written message to the backend
  submit(chatId) {
    if (!this.newMessage) {
      return this.translateService.stream('chatroomItem.emptyMessage').subscribe( (value: string) => {
        alert(value);
      });
    }
    this.chatService.sendMessage(chatId, this.newMessage)
      .subscribe();
    this.newMessage = ``;
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
  }

  // sort the messages by the time they are created
  trackByCreated(message) {
    return message.createdAt;
  }

}
