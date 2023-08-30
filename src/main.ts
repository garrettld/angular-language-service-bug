import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// comment out this component to avoid the bug
@Component({
  // it doesn't seem to matter whether this component is standalone
  standalone: true,
  selector: 'app-first',
  template: '',
})
export class FirstComponent {}

@Component({
  standalone: true,
  selector: 'app-second',
  // comment out the next line then uncomment it to see the bug
  imports: [NgIf],
  template: `
    <div *ngIf="true">hello</div>
  `,
})
export class SecondComponent {}

bootstrapApplication(SecondComponent);
