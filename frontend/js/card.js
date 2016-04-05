'use strict';

import DragElement from './dragElement.js';

const CSS_SPRITE = {
    cardWidth: 90,
    cardHeight: 132,
    offsetTop: 1,
    offsetLeft: 2,
    offsetBetweenCardsTop: 2,
    offsetBetweenCardsLeft: 2.2
};

export default class Card  extends DragElement{
    constructor(options) {
        super(options);

        this._suit = options.suit;
        this._cardNumber = options.cardNumber;

        this._applyStyleForNewCard();

        options.parent.appendChild(this._el);
    }

    static get DECK() {
        return [
            ['Ace of clubs','2 of clubs','3 of clubs','4 of clubs','5 of clubs','6 of clubs','7 of clubs','8 of clubs','9 of clubs','10 of clubs','Jack of clubs','Queen of clubs','King of clubs'],
            ['Ace of diamonds','2 of diamonds','3 of diamonds','4 of diamonds','5 of diamonds','6 of diamonds','7 of diamonds','8 of diamonds','9 of diamonds','10 of diamonds','Jack of diamonds','Queen of diamonds','King of diamonds'],
            ['Ace of hearts','2 of hearts','3 of hearts','4 of hearts','5 of hearts','6 of hearts','7 of hearts','8 of hearts','9 of hearts','10 of hearts','Jack of hearts','Queen of hearts','King of hearts'],
            ['Ace of spades','2 of spades','3 of spades','4 of spades','5 of spades','6 of spades','7 of spades','8 of spades','9 of spades','10 of spades','Jack of spades','Queen of spades','King of spades']
        ]
    }

    get card() {
        return Card.DECK[this._suit][this._cardNumber];
    }

    get suit() {
        return this._suit;
    }

    get cardNumber() {
        return this._cardNumber;
    }

    turnDown() {
        this._el.dataset.draggable = '';

        this._applyStyleForDownturnedCard();
    }

    turnUp() {
        this._el.dataset.draggable = true;
        this._applyStyleForUpturnedCard();
    }

//---------------------non-logical methods changing styles---------------------------

    _applyStyleForNewCard() {
        this._el.classList.add('card');
        this._el.classList.add('downturned');
    }

    _applyStyleForDownturnedCard() {
        this._el.style.backgroundPosition = '';
        this._el.classList.add('downturned');
    }

    _applyStyleForUpturnedCard() {
        this._el.classList.remove('downturned');
        this._setBackgroundPosition();
    }

    _setBackgroundPosition() {
        let PositionY = - CSS_SPRITE.offsetTop - (CSS_SPRITE.cardHeight + CSS_SPRITE.offsetBetweenCardsTop) * this._suit;
        let PositionX = - CSS_SPRITE.offsetLeft - (CSS_SPRITE.cardWidth + CSS_SPRITE.offsetBetweenCardsLeft) * this._cardNumber;

        this._el.style.backgroundPosition = PositionX + 'px ' + PositionY + 'px';
    }
}
