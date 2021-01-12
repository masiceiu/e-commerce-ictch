import { Component, OnInit } from '@angular/core';


// it's comming from backend
export interface CommentPayload {
  id: number;
  content: string;
  // + many more
}

export interface CommentState {
  hasError: boolean;
  isLoading: boolean;
  editMode: boolean;
}

export interface CommentReply extends CommentPayload {
  uiState: CommentState;
}

export interface Comment extends CommentReply {
  replies: CommentReply[],
  uiState: { showReply: boolean } & CommentState;
}


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  // comments: Comment[] = [];

  // comments = this._service.state.select(s => s.items);

  ngOnInit() {
    
    // mapping request comming from backend for UI
    // this.comments.map(i => {
    //   return {
    //     ...i,
    //     replies: i.replies.map(j => {
    //       return {
    //         ...j,
    //         uiState: {
    //           hasError: false,
    //           isLoading: false,
    //           editMode: false,
    //         }
    //       }
    //     }),
    //     uiState: {
    //       showReply: false,
    //       hasError: false,
    //       isLoading: false,
    //       editMode: false,
    //     }
    //   }
    // })

  }

  editComment() {
    // state.update(f => f.editMode, true);
    // state.update(f => f.isLoading, true);
    // state.update(f => f.hasError, true);
  }

  deleteComment() {

  }



}