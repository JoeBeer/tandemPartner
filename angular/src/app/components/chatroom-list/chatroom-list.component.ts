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
  userChatsAsUserA$: any[] = [];
  userChatsAsUserB$: any[] = [];
  userChatsAsUserALength: number;
  userChatsAsUserBLength: number;

  faTimes = faTimes;

  // for modal
  display = 'none';
  modalIsOpen = false;
  roomToBeDeleted: string;
  chatsArrayName: string;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private router: Router,
    private userStoreService: UserStoreService
  ) {
    this.chatService.getAllChatroomsAsUserA().subscribe(chatrooms => {
      this.userChatsAsUserALength = chatrooms.length;
      this.userChatsAsUserA$ = chatrooms;
    }, error => {
      console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
    });
    this.chatService.getAllChatroomsAsUserB().subscribe(chatrooms => {
      this.userChatsAsUserBLength = chatrooms.length;
      this.userChatsAsUserB$ = chatrooms;
    }, error => {
      console.log('Error in profile-page - TODO delete this console.log() before finishing WebProg!');
    });
  }

  ngOnInit() {
  }

  // deleteChatroom() {
  //   this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe(() => {
  //     if (this.userChatsAsUserALength === 1 || this.userChatsAsUserBLength === 1) {
  //       this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
  //         this.router.navigate(['/chats']));
  //     }
  //   });
  //   this.closeModal();
  // }

  // TODO doesn't work properly
  deleteChatroom() {
    let indexNumber: number;
    if (this.chatsArrayName === 'userChatsAsUserA$') {
      this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe(() => {
        for (let index = 0; index < this.userChatsAsUserA$.length; index++) {
          if (this.userChatsAsUserA$[index].id === this.roomToBeDeleted) {
            indexNumber = index;
          }
        }
        this.userChatsAsUserA$.splice(indexNumber, 1);
      });
    } else {
      this.chatService.deleteChatroom(this.roomToBeDeleted).subscribe(() => {
        for (let index = 0; index < this.userChatsAsUserB$.length; index++) {
          if (this.userChatsAsUserB$[index].id === this.roomToBeDeleted) {
            indexNumber = index;
          }
        }
        this.userChatsAsUserB$.splice(indexNumber, 1);
      });
    }
    this.closeModal();
  }

  openModal(chatroomId: string, chatsArrayName: string) {
    console.log('id: ' + chatroomId);
    this.modalIsOpen = true;
    this.display = 'block';
    this.roomToBeDeleted = chatroomId;
    this.chatsArrayName = chatsArrayName;
  }

  closeModal() {
    this.display = 'none';
    this.modalIsOpen = false;
  }

}
