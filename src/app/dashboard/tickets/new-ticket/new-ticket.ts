import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  enteredTitle = signal<string>('');
  enteredText = signal<string>('');
  add = output<{ title: string; text: string }>();

  onSubmit(): void {
    this.add.emit({ title: this.enteredTitle(), text: this.enteredText() });
    this.enteredTitle.set('');
    this.enteredText.set('');
  }

  ngOnInit(): void {
    console.log('OnInit');
    console.log(this.form()?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.form().nativeElement);
  }
}
