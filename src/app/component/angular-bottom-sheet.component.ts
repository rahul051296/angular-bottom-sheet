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
        isBottomSheetEnabled: false
    };
    @Input() options: AngularBottomSheetConfig;

    constructor(private changeDetector: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.flags.isCloseButtonEnabled = this.options.enableCloseButton ? true : false;
        this.options.closeButtonTitle = this.options.closeButtonTitle ? this.options.closeButtonTitle : "Close"
    }

    /**
     * Opens bottom sheet component
     */
    open() {
        this.flags.isBottomSheetEnabled = true;
        this.changeDetector.detectChanges();
    }

    /**
     * Closes bottom sheet component
     */
    close() {
        this.flags.isBottomSheetEnabled = false;
        this.changeDetector.detectChanges();
    }

    /**
     * Toggles bottom sheet component
     */
    toggle() {
        this.flags.isBottomSheetEnabled = !this.flags.isBottomSheetEnabled;
        this.changeDetector.detectChanges();
    }

    /**
     * Toggles close button
     */
    toggleCloseButton() {
        this.flags.isCloseButtonEnabled = !this.flags.isCloseButtonEnabled;
        this.changeDetector.detectChanges();
    }

    /**
     * Toggles dark theme
     */
    toggleDarkTheme() {
        this.options.darkTheme = !this.options.darkTheme;
        this.changeDetector.detectChanges();
    }
}