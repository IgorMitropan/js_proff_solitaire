'use strict';

export default class dragManager {
    constructor(options) {
        document.addEventListener('dragstart', dragManager._preventStartOfDefaultBrowserDnD);
        document.addEventListener('mousedown', this._onMouseDown.bind(this));
        document.addEventListener('mousemove', this._onMouseMove.bind(this));
        document.addEventListener('mouseup', this._onMouseUp.bind(this));
    }

    static _preventStartOfDefaultBrowserDnD(event) {
        event.preventDefault();
    }

    _onMouseDown(event) {
        event.preventDefault();

        if (event.which != 1) {
            return;
        }

        this._dragElement = dragManager._findDraggableElement(event);

        if (!this._dragElement) {
            return;
        }

        this._downX = event.pageX;
        this._downY = event.pageY;
    }

    _onMouseMove(event) {
        event.preventDefault();

        if (!this._dragElement) {
            return;
        }

        if (!this._avatar) {
            let moveX = event.pageX - this._downX;
            let moveY = event.pageY - this._downY;

            if ( Math.abs(moveX) < 3 && Math.abs(moveY) < 3 ) {
                return;
            }

            this._avatar = this._dragElement.onDragStart(this._downX, this._downY, event);

            if (!this._avatar) {
                this._cleanUp();
                return;
            }
        }

        this._avatar.onDragMove(event);

        this._dropTarget = this._findDropTarget(this._avatar.hoveredElement);
    }

    _onMouseUp(event) {
        event.preventDefault();

        if (event.which != 1) {
            return;
        }

        if (this._avatar) {

            if (this._dropTarget) {
                this._dropTarget.onDragEnd(this._avatar, event);
            } else {
                this._avatar.onDragCancel();
            }

        }

        this._cleanUp();
    }

    static _findDraggableElement(event) {
        let elem = event.target;

        while (elem != document && !elem.dragElement) {
            elem = elem.parentNode;
        }

        return elem.dragElement;
    }

    _findDropTarget(elem) {

        while (elem !== document && !elem.dropTarget) {
            elem = elem.parentNode;
        }

        if (!elem.dropTarget) {
            return null;
        }
        return elem.dropTarget;
    }

    _cleanUp() {
        this._dragElement = this._avatar = this._dropTarget = null;
    }
}