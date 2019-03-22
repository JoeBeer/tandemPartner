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

  currentUser = this.authService.getCurrentUser();
  userChats$;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userChats$ = this.chatService.getAllChatrooms();
  }

  // TODO Do we need this? I think it's enough to be able to contact the user through matches.
  async createChatroom() {
    const { uid } = await this.authService.getCurrentUser(); // uid of the currentUser
    const userB = 'saddasdsdaasdassdssdsdssdsadas'; // TODO get the userB from the list of users with accepted matches
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
