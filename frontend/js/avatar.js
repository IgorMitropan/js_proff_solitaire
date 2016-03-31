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

    static getElementUnderClientXY(elem, clientX, clientY) {
        elem.classList.add('js-hidden');

        let target = document.elementFromPoint(clientX, clientY);

        elem.classList.remove('js-hidden');

        if (!target || target === document) {
            target = document.body;
        }

        return target;
    }

    get hoveredElement() {
        return this._currentHoveredElement;
    }

    initFromEvent(downX, downY, event) {
        if (!event.target.classList.contains('card')
            || event.target.classList.contains('downturned')) {
            return false;
        }

        let elem = this._el = event.target;
        //elem.className = 'avatar';

        let coords = Avatar.getCoords(this._el);
        this._shiftX = downX - coords.left;
        this._shiftY = downY - coords.top;

        document.body.appendChild(elem);
        elem.style.zIndex = 9999;
        elem.style.position = 'absolute';

        return true;
    }

    getDragInfo(event) {
        // тут может быть еще какая-то информация, необходимая для обработки конца или процесса переноса
        return {
            elem: this._el,
            suit: this._el.draggElement.suit,
            cardNumber: this._el.draggElement.cardNumber,
            previousParent: this._old.parent
        };
    }

    onDragMove(event) {
        this._el.style.left = event.pageX - this._shiftX + 'px';
        this._el.style.top = event.pageY - this._shiftY + 'px';

        this._currentHoveredElement = Avatar.getElementUnderClientXY(this._el, event.clientX, event.clientY);
    }

    onDragCancel() {
        this._old.parent.insertBefore(this._el, this._old.nextSibling);
        this._el.style.position = this._old.position;
        this._el.style.left = this._old.left;
        this._el.style.top = this._old.top;
        this._el.style.zIndex = this._old.zIndex;
    }

    onDragEnd() {

    }
}
