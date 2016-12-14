import bespoke from 'bespoke';

import backdrop from 'bespoke-backdrop';
import bullets from 'bespoke-bullets';
import classes from 'bespoke-classes';
import fullscreen from 'bespoke-fullscreen';
import hash from 'bespoke-hash';
import keys from 'bespoke-keys';
import notes from 'bespoke-notes';
import touch from 'bespoke-touch';

import styles from './styles/main.scss';

import slides from './slides';

let deck;
let slide = 0;

function init(slides) {
   const container = document.querySelector( '#talk' );
   const first = container.querySelector( 'section' );
   slides.forEach( element => container.insertBefore( element, first ) );

   deck = bespoke.from( container, [
      backdrop(),
      bullets('[data-bespoke-bullet]'),
      classes(),
      fullscreen(),
      hash(),
      keys(),
      notes({ visible: false }),
      touch()
   ] );

   deck.slide(slide);
}

slides('de', init);

if( module.hot ) {
   module.hot.accept('./slides', function() {
      const module = require('./slides');
      const slides = module.__esModule ? module.default : module;

      slide = deck.slide();

      window.deck = deck;

      const container = deck.parent;
      Array.from( container.childNodes ).forEach( element => container.removeChild( element ) );

      slides('de', init);
   });
}
