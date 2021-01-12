import { Injectable } from '@angular/core';
import { Subjective } from 'subjective';

// state = new Subjective(new CommentState, CommentStateFns);

@Injectable()
export class CommentService {

  // state = new Subjective(new CommentState, CommentStateFns);

  constructor() { }

  requst() {

    // commensts
    const items = [].map(i => {
        return {
          ...i,
          replies: i.replies.map(j => {
            return {
              ...j,
              uiState: {
                hasError: false,
                isLoading: false,
                editMode: false,
              }
            }
          }),
          uiState: {
            showReply: false,
            hasError: false,
            isLoading: false,
            editMode: false,
          }
        }
      })

      // TODO: update the state with the mapped payalod 
      // this.state.update(f = f.setItems, items);

  }

}