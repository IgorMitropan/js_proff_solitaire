'use strict';
import Card from './card.js';

const NUMBER_OF_SUITS = 4;
const NUMBER_OF_CARDS_OF_ONE_SUIT = 13;

export default class Stock {
    constructor(options) {
        this._el = options.element;

        this._stock = this._el.querySelector('[data-selector="stock"]');
        this._cardPlace = this._el.querySelector('[data-selector="placeForOpenedCards"]');

        this._stock.addEventListener('click', this._openCard.bind(this));



    }

    createDeck() {
        this._newDeck = [[],[],[],[]];
        for (let i = 0; i < (NUMBER_OF_CARDS_OF_ONE_SUIT * NUMBER_OF_SUITS); i++) {
            let generatedCard = this.generateRandomCard();
            new Card({
                suit: generatedCard.suit,
                cardNumber: generatedCard.cardNumber,
                parent: this._stock
            });
        }
    }

    giveCard() {
        return this._stock.lastElementChild;
    }

    generateRandomCard() {
        let suit;
        let cardNumber;

        do {
            suit = Math.round( Math.random()*(NUMBER_OF_SUITS - 1) );
            cardNumber = Math.round( Math.random()*(NUMBER_OF_CARDS_OF_ONE_SUIT - 1) );
        } while (this._newDeck[suit][cardNumber]);

        this._newDeck[suit][cardNumber] = 'C';

        return {
            suit: suit,
            cardNumber: cardNumber
        };
    }

    _openCard() {
        let topCard = this._stock.lastElementChild;
        if (topCard) {
            topCard.draggElement.turnUp();
            this._cardPlace.appendChild(topCard);

        } else {
            this._returnCardsToStock();
        }
    }

    _returnCardsToStock() {
        let card;

        while (card = this._cardPlace.lastElementChild) {
            card.draggElement.turnDown();
            this._stock.appendChild(card);
        }
    }

}
