import { UserStoreService } from 'src/app/services/user-store.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {

  currentUser = this.authService.getUser();
  userChats$;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userChats$ = this.chatService.getAllChatrooms();
  }

  async createChatroom() {
    const { uid } = await this.authService.getUser(); // uid of the currentUser
    // const userA = 'asdaasasddasgege'; // TODO debug purpose
    const userB = 'ajqfqQmaasdasasdasdsdNasdas'; // TODO get the userB from the list of users with occured matches
    console.log(uid);

    this.chatService.create(uid, userB)
      .subscribe((response) => {
        if (response.result) {
          this.router.navigate([`chats/${response.chatroomId}`]);
        } else {
          console.error('Error - Chatroom couldn\'t be created!');
        }
      });
  }


}
