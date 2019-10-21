import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  id: number = 0;
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor() { }

  getComments(): Comment[] {
    return [
      this.getComment([
        this.getComment(),
        this.getComment([
          this.getComment()
        ])
      ])
    ];
  }

  getComment(children: Comment[] = []): Comment {
    return {
      id: ++this.id,
      text: this.text,
      children,
      showReplyForm: false,
      isVisible: true
    };
  }

  createComment(commentText: string): Comment {
    return {
      id: ++this.id,
      text: commentText,
      children: [],
      showReplyForm: false,
      isVisible: true
    };
  }
}
