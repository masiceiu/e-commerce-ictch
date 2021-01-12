

TODO: create 4 components (create, edit, reply, view):
======================================================

- create
    - dossier-comment-form (ControlValueAccessor)
        - cl-mentions-area
    - privacy select 
    - post button
- edit
    - dossier-comment-form (ControlValueAccessor)
    - save button
    - cancel button
- reply
    - dossier-comment-form (ControlValueAccessor)
    - post button
    - cancel button
- view
    - display text only



COMPONENT: cl-comments-dossier      
==========================
```html
    <cl-dossier-create></cl-dossier-create>
    <!-- dossier-comment-form -->
    <ul>
        <li *ngFor="let comment of comments">
            <app-comment-item [comment]="comment"></app-comment-item>
          <!-- <cl-comment-view></cl-comment-view> -->
          <!-- <cl-comment-edit></cl-comment-edit> -->
            <ul>
                <li *ngFor="let reply of comment.replies">
                    <app-comment-item [comment]="reply"></app-comment-item>
              <!-- <cl-comment-view></cl-comment-view> -->
              <!-- <cl-comment-edit></cl-comment-edit> -->
                </li>
            </ul>
            <app-comment-reply *ngIf="comment.uiState.showReply"></app-comment-reply>
        </li>
    </ul>
```

COMPONENT: cl-comment-create
==========================

    - handle comment creation
        - request: save comment
            - emit fetchComments (@Output)


COMPONENT: cl-comment-item
==========================

    - emit new comments up the tree

    <cl-comment-view *ngIf="mode === 'VIEW'" (replaceComments)="replaceComments.emit($event)"></cl-comment-view>
    <cl-comment-edit *ngIf="mode === 'EDIT'" (replaceComments)="replaceComments.emit($event); mode='VIEW'"></cl-comment-edit>

COMPONENT: cl-comment-edit
==========================

    - display only text
    - handle comment delete
        - request 1: delte comment
        - request 2: fetch all comments
            - emit new comments 
        - optimistic update    
            
    {{comment.text}}

    <popover>Delete</popover>

COMPONENT: cl-comment-edit
==========================

    - handle comment update
        - request 1: save edited comment 
        - request 2: fetch all comments 
            - emit new comments       
        - optimistic update    

    <cl-comment-form></cl-comment-form>
    <button>Save</button>
    <button>Cancel</button>

COMPONENT: cl-comment-reply
===========================

    - handle comment reply
        - request 1: save reply comment 
        - request 2: fetch all comments
            - emit new comments      
        - optimistic update 

    <cl-comment-form></cl-comment-form>
    <button>Post</button>
    <button>Cancel</button>