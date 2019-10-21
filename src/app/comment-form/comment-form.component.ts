import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentFormComponent implements OnInit {

  @Input() onSubmit: any;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  _onSubmit($event) {
    $event.preventDefault();

    const form = $event.target;
    const text = form.querySelector('textarea').value;

    if (!text) {
      return;
    }

    const comment = this.commentService.createComment(text);

    this.onSubmit(comment);

    form.reset();
  }

}
