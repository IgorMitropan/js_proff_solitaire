'use strict';

export default class DropTarget {
    constructor(options) {
        this._el = options.element;
        options.element.dropTarget = this;
    }

    onDragEnd(avatar) {
        let avatarInfo = avatar.getDragInfo();

        if (this._isAvatarAllowable(avatarInfo)) {
            this._takeAvatar(avatarInfo);

            this._generateSuccessDrop(avatarInfo);
        } else {
            avatar.onDragCancel();
        }
    }

    _isAvatarAllowable(avatarInfo) { // method for override
        return true;
    }

    _takeAvatar(avatarInfo) { // method for possible override
        this._el.appendChild(avatarInfo.elem);
        avatarInfo.elem.style.position='absolute';
        avatarInfo.elem.style.top = 0;
        avatarInfo.elem.style.left = 0;
    }

    _generateSuccessDrop(avatarInfo) {
        let event = new CustomEvent('successDrop', {
            bubbles: true,
            cancelable: true,
            detail: {
                newParent: this._el,
                previousPlace: avatarInfo.previousParent
            }
        });

        this._el.dispatchEvent(event);


    }
}