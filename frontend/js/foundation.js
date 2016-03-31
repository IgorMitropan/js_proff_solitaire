'use strict';

import DropTarget from './dropTarget.js';

 export default class Foundation  extends DropTarget {
    constructor(options) {
        super(options);
        this._possibleCards = {
            suit: [0, 1, 2, 3],
            cardNumber: [0]
        };
    }


    _isAvatarPossible(avatarInfo) {
        let suitMatches = (this._possibleCards.suit.indexOf(avatarInfo.suit) > -1);
        let cardMatches = (this._possibleCards.cardNumber.indexOf(avatarInfo.cardNumber) > -1);

        return (suitMatches && cardMatches);
    }

    _takeAvatar(avatarInfo) {
        super._takeAvatar(avatarInfo);
        avatarInfo.elem.style.zIndex = this._el.children.length;

        this.changePossibleCards();
    }

        changePossibleCards() {
            let lastElement = this._el.lastElementChild;

            if(lastElement) {
                this._possibleCards.suit = [lastElement.draggElement.suit];
                this._possibleCards.cardNumber = [lastElement.draggElement.cardNumber + 1];
            } else {
                this._possibleCards = {
                    suit: [0, 1, 2, 3],
                    cardNumber: [0]
                };
            }
        }
}
