import {
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class Control {
  label = input.required<string>();
  private el = inject(ElementRef);
  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(): void {
  //   console.log('Control clicked');
  // }

  onClick(): void {
    console.log('Control clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
