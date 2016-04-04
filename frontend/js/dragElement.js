'use strict';
import Avatar from './avatar.js';

export default class DragElement {
    constructor(options) {
        this._el = document.createElement('div');
        this._el.dragElement = this;
    }

    _makeAvatar() {
        return new Avatar(this._el);
    }

    onDragStart(downX, downY, event) {
        let avatar = this._makeAvatar();

        if (!avatar.initFromEvent(downX, downY, event)) {
            return null;
        }

        return avatar;
    }
}

