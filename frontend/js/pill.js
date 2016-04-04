'use strict';

import DropTarget from './dropTarget.js';

export default class Pill extends DropTarget {
    constructor(options) {
        super(options);

        this._allowableCards = {
            suit: [0, 1, 2, 3],
            cardNumber: [13]
        };
    }

    changeAllowableCards() {
        let lastElement = this._findLastElement();

        if(lastElement !== this._el) {
            switch (lastElement.dragElement.suit) {
                case 0:
                case 3: {
                this._allowableCards.suit = [1,2];
                break;
                }

                case 1:
                case 2: {
                    this._allowableCards.suit = [0,3];
                    break;
                }
            }

            this._allowableCards.cardNumber = [lastElement.dragElement.cardNumber - 1];

        } else {
            this._allowableCards = {
                suit: [0, 1, 2, 3],
                cardNumber: [12]
            };
        }
    }

    turnUpCard() {
        let lastElement = this._findLastElement();
        if (lastElement.classList.contains('downturned')) {
            lastElement.dragElement.turnUp();
        }
    }

    _isAvatarAllowable(avatarInfo) {
        let suitMatches = (this._allowableCards.suit.indexOf(avatarInfo.suit) > -1);
        let cardMatches = (this._allowableCards.cardNumber.indexOf(avatarInfo.cardNumber) > -1);

        return (suitMatches && cardMatches);
    }

    _takeAvatar(avatarInfo) {
        let parent = this._findLastElement();

        parent.appendChild(avatarInfo.elem);
        avatarInfo.elem.style.position='absolute';
        avatarInfo.elem.style.top = 0;
        avatarInfo.elem.style.left = 0;
        avatarInfo.elem.style.zIndex = this._el.children.length;

        this.changeAllowableCards();
    }

    _findLastElement() {
        let lastElement = this._el;
        while(lastElement.lastElementChild) {
            lastElement = lastElement.lastElementChild;
        }

        return lastElement;
    }


}
