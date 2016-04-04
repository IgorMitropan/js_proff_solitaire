'use strict';

export default class Avatar {
    constructor(dragElem) {
        this._el = dragElem;

        this._old = {
            parent: this._el.parentNode,
            nextSibling: this._el.nextSibling,
            position: this._el.position || '',
            left: this._el.left || '',
            top: this._el.top || '',
            zIndex: this._el.zIndex || ''
        };

    }

    static getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

    static getElementUnderAvatarCenter(elem) {
        let box = elem.getBoundingClientRect();

        elem.classList.add('js-hidden');

        let target = document.elementFromPoint(box.left + box.width/2, box.top + box.height/2);

        elem.classList.remove('js-hidden');

        if (!target || target === document) {
            target = document.body;
        }

        return target;
    }

    get hoveredElement() {
        return this._currentHoveredElement;
    }

    onDragMove(event) {
        this._el.style.left = event.pageX - this._shiftX + 'px';
        this._el.style.top = event.pageY - this._shiftY + 'px';

        this._currentHoveredElement = Avatar.getElementUnderAvatarCenter(this._el);
    }

    onDragCancel() {
        this._old.parent.insertBefore(this._el, this._old.nextSibling);
        this._el.style.position = this._old.position;
        this._el.style.left = this._old.left;
        this._el.style.top = this._old.top;
        this._el.style.zIndex = this._old.zIndex;
    }

    onDragEnd() {
        //there could be some actions with avatar in case of success drop
    }

    initFromEvent(downX, downY, event) {
        if (!event.target.dataset.draggable) {
            return false;
        }

        let coords = Avatar.getCoords(this._el);
        this._shiftX = downX - coords.left;
        this._shiftY = downY - coords.top;

        document.body.appendChild(this._el);
        this._el.style.zIndex = 9999;
        this._el.style.position = 'absolute';

        return true;
    }

    getDragInfo() {
        // we can change this information according to the aim of our case
        return {
            elem: this._el,
            suit: this._el.dragElement.suit,
            cardNumber: this._el.dragElement.cardNumber,
            previousParent: this._old.parent
        };
    }
}
