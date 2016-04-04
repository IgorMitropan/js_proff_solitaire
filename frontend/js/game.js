'use strict';
import installCustomEvent from'./polyfills';
installCustomEvent(); //cross browser polyfill for 'custom events' (does not supported by IE)

import dragManager from './dragManager.js';
import Stock from './stock.js';
import Foundation from './foundation.js';
import Pill from './pill.js';
import Notification from './notification.js';

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

        this._el.addEventListener('successDrop', this._changeAllowableCard.bind(this));
}
//-------------------- event handler------------------
    _changeAllowableCard(event) {
        let previousPlace = this._findDropTarget(event.detail.previousPlace);

        if (previousPlace) {
            previousPlace.changeAllowableCards();

            if (previousPlace.turnUpCard) {
                previousPlace.turnUpCard();
            }
        }

        if ( this._allFoundationsAreFulfilled() ) {
           this._showVictoryNotification();
        }
    }

//--------------------- main private methods-----------------
    _createFoundations() {
        this._foundations = this._el.querySelectorAll('[data-component="foundation"]');

        [].forEach.call(this._foundations,(elem)=>{
            new Foundation({
                element: elem
            });
        });
    }

    _createPillPlaces() {
        this._pillPlaces = this._el.querySelectorAll('[data-component="pill"]');

        [].forEach.call(this._pillPlaces,(elem)=>{
            new Pill({
                element: elem
            });
        });
    }

    _createPills() {
        for (let i = 0; i < this._pillPlaces.length; i++ ) {
            for (let j = 0; j <= i; j++) {

                let parent = this._pillPlaces[i];
                while(parent.lastElementChild) {
                    parent = parent.lastElementChild;
                }

                let card = this._stock.giveCard();
                parent.appendChild(card);

                if (j === i) {
                    card.dragElement.turnUp();
                    this._pillPlaces[i].dropTarget.changeAllowableCards();
                }
            }
        }
    }

//------------------supported private methods
    _allFoundationsAreFulfilled() {

        return [].every.call(this._foundations, elem => elem.children.length === 13);
    }

    _showVictoryNotification() {
        [].forEach.call(this._foundations,(elem)=>{
            elem.lastElementChild.dragElement = null;
        });

        new Notification({
            place: this._el,
            position: 'centerUp',
            text: 'Congratulations! You win!'
        });
    }

}