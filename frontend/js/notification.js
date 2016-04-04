'use strict';
const TOP_OFFSET_FOR_NOTIFICATION = 10;
const RIGHT_OFFSET_FOR_NOTIFICATION = 10;

export default class Notification {
    constructor(options) {
        this._el = document.createElement('div');
        this._el.className = "notification";
        this._el.innerHTML = options.text;

        let parent = options.place || document.body;
        parent.appendChild(this._el);

        this.positionAt(options);
    }

    positionAt(options) {

            let box;
            let top;
            let left;

            if (options.anchor) {
                box = options.anchor.getBoundingClientRect();
            } else {
                box = this._el.parentNode.getBoundingClientRect();
            }

            if (options.position) {
                switch (options.position) {
                    case 'center': {
                        top = box.top + box.height / 2 - this._el.offsetHeight / 2;
                        left = box.left + box.width / 2 - this._el.offsetWidth / 2;
                        break;
                    }
                    case 'centerUp': {
                        top = box.top + box.height / 4 - this._el.offsetHeight / 2;
                        left = box.left + box.width / 2 - this._el.offsetWidth / 2;
                        break;
                    }
                }
            } else {
                top = box.top + TOP_OFFSET_FOR_NOTIFICATION;
                left = box.right - this._el.offsetWidth - RIGHT_OFFSET_FOR_NOTIFICATION;
            }

            this._el.style.top = top + 'px';
            this._el.style.left = left + 'px';
    }

    show() {
        this._el.classList.remove('js-hidden');
    }

    hide() {
        this._el.classList.add('js-hidden');
    }
}
