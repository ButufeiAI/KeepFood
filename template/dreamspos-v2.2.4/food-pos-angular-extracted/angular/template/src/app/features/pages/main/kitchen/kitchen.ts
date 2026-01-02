import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  imports: [],
  templateUrl: './kitchen.html',
  styleUrl: './kitchen.scss',
})
export class Kitchen {
 seconds: number[] = [];            // ⬅ time for each card
running: boolean[] = [];           // ⬅ play/pause state of each card
intervalId: any[] = [];            // ⬅ unique interval for each card

constructor(
  private zone: NgZone,
  private cdr: ChangeDetectorRef
) {}

getTime(i: number): string {
  const sec = this.seconds[i] ?? 0;
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

toggleTimer(i: number) {
  if (!this.seconds[i] && this.seconds[i] !== 0) {
    this.seconds[i] = 0;        // initialize time for this card
  }

  if (this.running[i]) {
    // Pause this card's timer
    clearInterval(this.intervalId[i]);
    this.running[i] = false;
    this.cdr.detectChanges();
    return;
  }

  // Play - run inside Angular zone
  this.running[i] = true;

  this.zone.runOutsideAngular(() => {
    this.intervalId[i] = setInterval(() => {
      this.seconds[i]++;

      // Trigger Angular UI update
      this.zone.run(() => this.cdr.detectChanges());
    }, 1000);
  });
}

}
