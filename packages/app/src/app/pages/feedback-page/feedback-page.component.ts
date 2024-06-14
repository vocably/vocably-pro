import { Component, OnInit } from '@angular/core';
import { sendUserFeedback } from '@vocably/api';
import { UserData } from '@vocably/model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.scss'],
})
export class FeedbackPageComponent implements OnInit {
  feedback = '';
  isSubmitting = false;
  success = false;
  error = false;

  userData$ = this.authService.fetchUserData$;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public async submitFeedback() {
    if (this.isSubmitting) {
      return;
    }

    this.success = false;
    this.error = false;
    this.isSubmitting = true;

    const res = await sendUserFeedback({
      feedback: this.feedback,
      metadata: {
        platform: 'web-app',
      },
    });

    this.isSubmitting = false;

    if (res.success) {
      this.success = true;
      this.feedback = '';
    } else {
      this.error = true;
    }
  }

  public getEmailAddress(userData: UserData) {
    if (userData.email.includes('privaterelay')) {
      return '.';
    }

    return `: ${userData.email}.`;
  }
}
