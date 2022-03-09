import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="card text-dark text-center mb-4">
        <div className="card-body">
          <h3 className="mb-3">Brief history of tennis</h3>
          <p>
            The racket sport traditionally named lawn tennis, invented in Croydon, now commonly known simply as tennis, is the direct descendant of what is now denoted real tennis or royal tennis, which continues to be played today as a separate sport with more complex rules. Most rules of (lawn) tennis derive from this precursor and it is reasonable to see both sports as variations of the same game. Most historians believe that tennis was originated in the monastic cloisters in northern France in the 12th century, but the ball was then struck with the palm of the hand; hence, the name jeu de paume (&apos;game of the palm&apos;). It was not until the 16th century that rackets came into use, and the game began to be called tennis.
          </p>
          <p>
            Many original tennis courts remain, including courts at Oxford, Cambridge, Falkland Palace in Fife where Mary Queen of Scots regularly played, and Hampton Court Palace. Many of the French courts were decommissioned with the terror that accompanied the French Revolution. The Tennis Court Oath (Serment du Jeu de Paume) was a pivotal event during the first days of the French Revolution. The Oath was a pledge signed by 576 of the 577 members from the Third Estate who were locked out of a meeting of the Estates-General on 20 June 1789.
          </p>
          <p>
            The Davis Cup, an annual competition between men&apos;s national teams, dates to 1900. The analogous competition for women&apos;s national teams, the Fed Cup, was founded as the Federation Cup in 1963 to celebrate the 50th anniversary of the founding of the International Tennis Federation, also known as the ITF.
          </p>
          <p>
            In 1968, commercial pressures and rumors of some amateurs taking money under the table led to the abandonment of this distinction, inaugurating the Open Era, in which all players could compete in all tournaments, and top players were able to make their living from tennis. With the beginning of the Open Era, the establishment of an international professional tennis circuit, and revenues from the sale of television rights, tennis&apos;s popularity has spread worldwide, and the sport has shed its upper/middle-class English-speaking image (although it is acknowledged that this stereotype still exists).
          </p>
          <p>
            The word tennis came into use in English in the mid-14th century from Old French, via the Anglo-Norman term Tenez, which can be translated as &apos;hold!&apos;, &apos;receive!&apos; or &apos;take!&apos;, a call from the server to his opponent indicating that he is about to serve. The first known appearance of the word in English literature is by poet John Gower in his poem titled &apos;In Praise of Peace&apos; dedicated to King Henry IV and composed in 1400; &apos;Of the tenetz to winne or lese a chase, Mai no lif wite er that the bal be ronne&apos;. (Whether a chase is won or lost at tennis, Nobody can know until the ball is run).
          </p>
          <p className="mb-0">
            Enough history. <Link to="/shop" className="text-primary-light">Let&apos;s play</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
