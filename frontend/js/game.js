'use strict';
import dragManager from './dragManager.js';
import Stock from './stock.js';
import Foundation from './foundation.js';
import Pill from './pill.js';
import Card from './card.js';

export default class Game extends dragManager {
    constructor(options) {
        super(options);
        this._el = options.element;

        this._createFoundations();
        this._createPillPlaces();

        this._stock = new Stock({
            element: this._el.querySelector('[data-component="stock"]')
        });
        this._stock.createDeck();
        this._createPills();

        this._el.addEventListener('successDrop', this._changePossibleCard.bind(this));
}

    _createFoundations() {
        let foundations = this._el.querySelectorAll('[data-component="foundation"]');
        [].forEach.call(foundations,(elem)=>{
            new Foundation({
                element: elem
            });
        });
    }

    _createPillPlaces() {
        let pillPlaces = this._el.querySelectorAll('[data-component="pill"]');
        [].forEach.call(pillPlaces,(elem)=>{
            new Pill({
                element: elem
            });
        });
    }

    _createPills() {
        let pills = this._el.querySelectorAll('[data-component="pill"]');
        for (let i = 0; i < pills.length; i++ ) {
            for (let j = 0; j <= i; j++) {

                let parent = pills[i];
                while(parent.lastElementChild) {
                    parent = parent.lastElementChild;
                }

                let card = this._stock.giveCard();
                parent.appendChild(card);

                if (j === i) {
                    card.draggElement.turnUp();
                    pills[i].dropTarget.changePossibleCards();
                }
            }
        }
    }

    _changePossibleCard(event) {
        let previousParent = this._findDropTarget(event.detail.previousParent);

        if (previousParent) {
            previousParent.changePossibleCards();

            if (previousParent.turnUpCard) {
                previousParent.turnUpCard();
            }
        }

        this._doesPlayerWin();
    }

    _doesPlayerWin() {
        let foundations = this._el.querySelectorAll('[data-component="foundation"]');

        let AllFoundationAreFulfilled = [].every.call(foundations, elem => elem.children.length === 13);

        if (AllFoundationAreFulfilled) {
            alert('Victory!!!! \nI have very less time to congratulate you better :(( \nBut I promise to do that');
        }

    }

}