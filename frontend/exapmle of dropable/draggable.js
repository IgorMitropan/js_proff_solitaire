'use strict';

export default class Draggable {
    constructor(options) {
        this._el = options.element;
        this._el.addEventListener('dragstart', Draggable._preventStartOfBrowserDefaultDnD);
        this._el.addEventListener('mousedown', this._dragStart.bind(this));

        this._moveAt = this._moveAt.bind(this);
        this._dragFinish = this._dragFinish.bind(this);

        this._el.addEventListener('mouseup', this._dragFinish);
    }

    static getCoords(elem) {
            var box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };
    }

    static _preventStartOfBrowserDefaultDnD(event) {
        event.preventDefault();
    }

    _dragStart(event) {
        if (event.which != 1) {
            return;
        }

        let coords = Draggable.getCoords(this._el);

        this._shiftX = event.pageX - coords.left;
        this._shiftY = event.pageY - coords.top;

        this._el.style.position = 'absolute';
        document.body.appendChild(this._el);

        this._moveAt(event);

        this._el.style.zIndex = 1000;

        document.addEventListener('mousemove', this._moveAt);
    }

    _moveAt(event) {
        this._el.style.left = event.pageX - this._shiftX + 'px';
        this._el.style.top = event.pageY - this._shiftY + 'px';
    }

    _dragFinish() {
        document.removeEventListener('mousemove', this._moveAt);
    }
}