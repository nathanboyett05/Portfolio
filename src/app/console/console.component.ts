import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
})
export class ConsoleComponent implements OnInit, OnDestroy {
  @ViewChild('consoleText') consoleText!: ElementRef<HTMLDivElement>;

  private intervalId1!: number;
  private intervalId2!: number;
  private isVisible = true;
  private words: string[] = ['Hello there.', 'I\'m Nathan Boyett', "I'm a Computer Science Major", 'Welcome to my portfolio', 'Feel free to look around', 'I hope you enjoy your stay', 'Thank you for visiting', 'Goodbye'];
  // private colors: string[] = ['tomato', 'tomato', 'tomato'];
  private letterCount = 0;
  private x = 1; // Use for direction: 1 for typing, -1 for deleting
  private waiting = false;
  private wordIndex = 0; // Track the current word

  constructor() {}
  ngAfterViewInit(): void {
    this.startTypingEffect(); // Now safe to access DOM
  }

ngOnInit(): void {
  
}  ngOnDestroy(): void {
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
  }

  private startTypingEffect(): void {
    const target = this.consoleText.nativeElement;
    // target.style.color = this.colors[0]; // Set initial color

    const updateText = (): void => {
      if (this.waiting) return;

      if (this.letterCount === this.words[this.wordIndex].length +1 && this.x === 1) {
        // End of word reached, start deleting after pause
        this.waiting = true;
        setTimeout(() => {
          this.x = -1; // Change direction to delete
          this.waiting = false;
        }, 1000);
      } else if (this.letterCount === -1 && this.x === -1) {
        // Word fully deleted, cycle to next word and start typing after pause
        this.waiting = true;
        setTimeout(() => {
          this.cycleWordsAndColors();
          this.x = 1; // Change direction to type
          this.waiting = false;
        }, 1000);
      } else {
        target.innerHTML = this.words[this.wordIndex].substring(0, this.letterCount);
        this.letterCount += this.x;
      }
    };

    this.intervalId1 = window.setInterval(updateText, 120);

    this.intervalId2 = window.setInterval(() => {
      this.isVisible = !this.isVisible;
      target.classList.toggle('hidden', !this.isVisible);
    }, 400);
  }

  private cycleWordsAndColors(): void {
    this.wordIndex = (this.wordIndex + 1) % this.words.length; // Move to the next word
    // this.colors.push(this.colors.shift()!); // Cycle colors
    // this.consoleText.nativeElement.style.color = this.colors[0]; // Update color
    this.letterCount = 0; // Reset letter count for the next word
  }
}