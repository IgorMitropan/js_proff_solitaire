'use strict';

import DropTarget from './dropTarget.js';

 export default class Foundation  extends DropTarget {
    constructor(options) {
        super(options);
        this._allowableCards = {
            suit: [0, 1, 2, 3],
            cardNumber: [0]
        };
    }

    changeAllowableCards() {
        let lastElement = this._el.lastElementChild;

        if(lastElement) {
            this._allowableCards.suit = [lastElement.dragElement.suit];
            this._allowableCards.cardNumber = [lastElement.dragElement.cardNumber + 1];
        } else {
            this._allowableCards = {
                suit: [0, 1, 2, 3],
                cardNumber: [0]
            };
        }
    }

    isCardAllowable(cardInfo) {
        return this._isAvatarAllowable(cardInfo);
    }

    _isAvatarAllowable(avatarInfo) {
        let isCardSingle = !(avatarInfo.elem.firstElementChild);
        let suitMatches = (this._allowableCards.suit.indexOf(avatarInfo.suit) > -1);
        let cardMatches = (this._allowableCards.cardNumber.indexOf(avatarInfo.cardNumber) > -1);

        return (suitMatches && cardMatches && isCardSingle);
    }

    _takeAvatar(avatarInfo) {
        super._takeAvatar(avatarInfo);
        avatarInfo.elem.style.zIndex = this._el.children.length;

        this.changeAllowableCards();
    }
}
