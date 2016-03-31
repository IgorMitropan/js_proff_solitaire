'use strict';

export default class DropTarget {
    constructor(options) {
        this._el = options.element;
        options.element.dropTarget = this;
    }

    onDragEnd(avatar, event) {
        let avatarInfo = avatar.getDragInfo(event);

        if (this._isAvatarPossible(avatarInfo)) {
            this._takeAvatar(avatarInfo);

            this._generateSuccessDrop(avatarInfo);
        } else {
            avatar.onDragCancel(avatarInfo);
        }
    }

    _isAvatarPossible(avatarInfo) { // method for override
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
                suit: avatarInfo.suit,
                cardNumber: avatarInfo.cardNumber,
                newParent: this._el,
                previousParent: avatarInfo.previousParent
            }
        });

        this._el.dispatchEvent(event);


    }
}