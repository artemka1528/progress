class ProgressBar {
    constructor(progressElement, controlsElement) {
        this.progressElement = progressElement;
        this.controlsElement = controlsElement;

        this.circleElement = progressElement.querySelector('.progress-circle');
        this.fillElement = progressElement.querySelector('.progress-circle__foreground');

        this.radius = 50;
        this.circleLength = 2 * Math.PI * this.radius;

        this.fillElement.style.strokeDasharray = this.circleLength;

        this.controlsElement.addEventListener('input', (e) => this.onInputChange(e));
        this.controlsElement.addEventListener('change', (e) => this.onControlChange(e));

        this.setProgress(controlsElement.querySelector('.progress-input').value);
    }

    setProgress(progressValue) {
        const clampedValue = Math.max(0, Math.min(100, progressValue));
        const dashOffset = this.circleLength - (clampedValue / 100) * this.circleLength;
        this.fillElement.style.strokeDashoffset = dashOffset;
    }

    onInputChange(event) {
        if (event.target.classList.contains('progress-input')) {
            this.setProgress(event.target.value);
        }
    }

    toggleAnimation(isAnimated) {
        this.circleElement.classList.toggle('animated', isAnimated);
    }

    toggleVisibility(isHidden) {
        this.circleElement.classList.toggle('hidden', isHidden);
    }

    onControlChange(event) {
        if (event.target.classList.contains('animation-toggle')) {
            this.toggleAnimation(event.target.checked);
        } else if (event.target.classList.contains('visibility-toggle')) {
            this.toggleVisibility(event.target.checked);
        }
    }
}

document.querySelectorAll('.progress').forEach(container => {
    const containerId = container.id;
    const controls = document.querySelector(`.progress-controls[data-progress-id="${containerId}"]`);
    if (controls) {
        new ProgressBar(container, controls);
    }
});