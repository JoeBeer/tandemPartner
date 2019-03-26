import { UserStoreService } from './../../services/user-store.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.scss']
})
export class ChatroomListComponent implements OnInit {

  currentUser = this.authService.getCurrentUser();
  userChats$;

  faTimes = faTimes;

  // for modal
  display = 'none';
  modalIsOpen = false;
  roomToBeDeleted: string;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private userStoreService: UserStoreService
  ) { }

  ngOnInit() {
    this.userChats$ = this.chatService.getAllChatrooms();
    this.getPartnerName();
    console.log('Aufruf - Chatroom-List');
  }

  getPartnerName() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userChats$.length; i++) {
      let partnerID = this.userChats$[i].userB;
      if (partnerID === this.authService.currentUserID) {
        partnerID = this.userChats$[i].userA;
        this.userStoreService.getUserById(partnerID).subscribe(user => {
          this.userChats$[i].userA = user.firstname;
        });
      } else {
        this.userStoreService.getUserById(partnerID).subscribe(user => {
          this.userChats$[i].userB = user.firstname;
        });
      }
    }
  }

  deleteChatroom() {
    this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe();
  }

  openModal(chatroomId: string) {
    console.log('id: ' + chatroomId);
    this.modalIsOpen = true;
    this.display = 'block';
    this.roomToBeDeleted = chatroomId;

  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }

}
