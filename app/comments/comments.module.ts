import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentReplyComponent } from './comment-reply/comment-reply.component';
import { CommentViewComponent } from './comment-view/comment-view.component';
import { CommentService } from './state/comment.service';

const COMPONENTS = [
  CommentsComponent,
  CommentCreateComponent,
  CommentItemComponent,
  CommentReplyComponent,
  CommentViewComponent
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    COMPONENTS,
  ],
  exports: [
    COMPONENTS
  ],
  providers: [CommentService]
})
export class CommentsModule { }