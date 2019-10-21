import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() comments: Comment[];
  @Input() level: number = 0;

  addComment: any;
  deleteComment: any;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    if (!this.level) {
      this.comments = this.commentService.getComments();
    }

    this.addComment = (comment: Comment) => {
      this.comments = [...this.comments, comment];
    };

    this.deleteComment = (comment: Comment) => {
      if (confirm('Are you sure?')) {
        this.comments = this.comments.filter(x => x !== comment);
      }
    };
  }

  searchComments(query) {
    this.comments = query.length < 3
      ? this.comments.map(x => ({ ...x, ...{ isVisible: true } }))
      : this.comments.map(x => ({ ...x, ...{
        isVisible: x.text.indexOf(query) !== -1
      } }));
  }

}
