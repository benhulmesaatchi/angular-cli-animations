import { trigger, state, animate, transition, style, keyframes } from '@angular/animations';
export const slideFromRight = trigger('slideFromRight',[
  state('offScreen',style({
    opacity: 0
  })),
  state('onScreen',style({
    opacity: 1
  })),
  transition('offScreen => onScreen', animate('200ms ease-in',keyframes([
    style({opacity: 0, transform: 'translateX(75%)'}),
    style({opacity: 1, transform: 'translateX(0)'}),
  ]))),      
  transition('onScreen => offScreen', animate('300ms ease-in',keyframes([
    style({opacity: 1, transform: 'translateX(0)'}),
    style({opacity: 0, transform: 'translateX(75%)'}),
  ]))),
]);