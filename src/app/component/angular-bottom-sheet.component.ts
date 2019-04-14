import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, ElementRef } from '@angular/core';
import { SlideUpToggleAnimation } from '../utility/angular-bottom-sheet.animation';
import { AngularBottomSheetConfig } from '../utility/angular-bottom-sheet.interface';

/**
 * Component
 */
@Component({
    selector: 'angular-bottom-sheet',
    templateUrl: './angular-bottom-sheet.component.html',
    styleUrls: ['./angular-bottom-sheet.component.css'],
    animations: [SlideUpToggleAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class AngularBottomSheetComponent {

    flags: any = {
        isWidgetSelectedEnabled: false
    };

    @Input() options: AngularBottomSheetConfig;
    
    constructor(private changeDetector: ChangeDetectorRef) {
    }

    /**
     * Opens bottom sheet component
     */
    open() {
        this.flags.isWidgetSelectedEnabled = true;
        this.changeDetector.detectChanges();
    }

    /**
     * Closes bottom sheet component
     */
    close() {
        this.flags.isWidgetSelectedEnabled = false;
        this.changeDetector.detectChanges();
    }

    /**
     * Toggles bottom sheet component
     */
    toggle() {
        this.flags.isWidgetSelectedEnabled = !this.flags.isWidgetSelectedEnabled;
        this.changeDetector.detectChanges();
    }
}