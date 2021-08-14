import React, { useState } from "react";
import "./styles.css";
var artistWork = {
  "Iron Man": [
    {
      art: "Iron Man",
      details:
        "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        rating: "9/10",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51OCRfitHdL._AC_.jpg"
    },
    {
      art: "Iron Man 2",
      details:
        "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
        rating: "7/10",
      imgUrl:
        "https://i.pinimg.com/originals/e6/57/e6/e657e6bc4a6a58e1397863850b876c9f.jpg"
    },
    {
      art: "Iron Man 3",
      details:
        "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        rating: "7/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg"
    }
  ],
  Hulk: [
    {
      art: "The incredible hulk",
      details:
        "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.",
        rating: "7/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg"
    }
  ],
  Thor: [
    {
      art: "Thor",
      details:
        "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
        rating: "9/10",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/511PQT86A0L._AC_.jpg"
    },
    {
      art: "Thor : The dark world",
      details:
        "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",
        rating: "7/10",
      imgUrl:
        "https://www.joblo.com/assets/images/oldsite/posters/images/full/thor_the_dark_world_ver9_xlg_thumb.jpg"
    },
    {
      art: "Thor : Ragnarok",
      details:
        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
        rating: "8/10",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/51OPhA78BEL.jpg"
    }
  ],
  "Captain America": [
    {
      art: "Captain America: The First Avenger ",
      details:
        'Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.',
        rating: "7/10",
      imgUrl:
        "https://i.pinimg.com/originals/9a/a1/76/9aa176940c24fc8ee727f24e130de075.jpg"
    },
    {
      art: "Captain America: The Winter Soldier ",
      details:
        "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
        rating: "8/10",
      imgUrl:
        "https://collider.com/wp-content/uploads/captain-america-the-winter-soldier-poster.jpg"
    },
    {
      art: "Captain America: Civil War",
      details:
        "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man.",
        rating: "8/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg"
    }
  ],
  Avengers: [
    {
      art: "The Avengers",
      details:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        rating: "7/10",
      imgUrl:
        "https://i.pinimg.com/originals/0f/03/e6/0f03e6733b0cf567cc92e8e20290462f.jpg"
    },
    {
      art: "Avengers: Age of Ultron",
      details:
        "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        rating: "8/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg"
    },
    {
      art: "Avengers: Infinity War",
      details:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        rating: "9/10",
      imgUrl:
        "https://terrigen-cdn-dev.marvel.com/content/qa/1x/5ae4ca-MLou_13x19_DolbyAtAMC_Handout_v4_online_lg.jpg"
    },
    {
      art: "Avengers: End Game",
      details:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thano's actions and restore balance to the universe.",
        rating: "9/10",
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg"
    }
  ],
  "Spider Man": [
    {
      art: "Spider Man",
      details:
        "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities.",
        rating: "9/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg"
    },
    {
      art: "Spider Man 2",
      details:
        "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Doctor Otto Octavius.",
        rating: "8/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR6,0,182,268_AL__QL50.jpg"
    },
    {
      art: "Spider Man 3",
      details:
        "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.",
        rating: "8/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
    },
    {
      art: "The Amazing Spider-Man",
      details:
        "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to save the city from the machinations of a mysterious reptilian foe.",
        rating: "8/10",
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/814Gmuc7gBL._AC_SL1302_.jpg"
    },
    {
      art: "The Amazing Spider-Man 2",
      details:
        "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
        rating: "8/10",
      imgUrl:
        "https://cdnb.artstation.com/p/assets/images/images/015/529/765/large/pedro-ospina-vasquez-ebfece60039169-5a3950659d20d.jpg?1548700987"
    },
    {
      art: "Spider-Man: Homecoming",
      details:
        "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
        rating: "9/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BOGQ5YTM3YzctOTVmMC00OGIyLWFkZTYtMWYwOWZhMjA2MWMwXkEyXkFqcGdeQXVyMjUyMTE5MA@@._V1_.jpg"
    },
    {
      art: "Spider-Man: Into the Spider-Verse",
      details:
        "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        rating: "9/10",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"
    },
    {
      art: "Spider-Man: Far From Home",
      details:
        "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.",
        rating: "9/10",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg"
    }
  ]
};
export default function App() {
  var [artists, setArtists] = useState("Iron Man");
  function clickHandler(event) {
    setArtists(event);
    // var meaning = artistWork[buttonClick];
    // console.log(meaning);
  }
  return (
    <div className="App">
      <ul className="heading">
        <div>
          <h2>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://sakshamak.netlify.app/"
            >
              Marvel Cinematic Universe
            </a>
          </h2>
        </div>
        {Object.keys(artistWork).map((event) => (
          <li onClick={() => clickHandler(event)}>{event}</li>
        ))}
      </ul>
      <div style={{ color: "white" }}>
        <ul
          style={{
            listStyleType: "none"
            // textAlign: "left"
          }}
        >
          {artistWork[artists].map((work) => (
            <li
              key={work.art}
              style={{
                color: "white"
              }}
            >
              <div
                style={{
                  width: "40%",
                  // border: "4px solid #f7f3f6",
                  padding: "20px",
                  margin: "40px",
                  float: "left"
                }}
              >
                <h2 className="booksHead">{work.art}</h2>
                <img src={work.imgUrl} />
                <div className="detailed">{work.details}</div>
                <h3 className="rating">Ratings: {work.rating}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
