const Player = require("../models/playerData");
const PlayerStat = require("../models/playerStats");

exports.AddOrEditPlayerStat = (req, res) => {
   if(req.body.playerName){
    Player.findOne({
      where: {
        name:req.body.playerName
      },
    })
      .then((playerdata) => {
          res.render("playerStatForm",{
            playerdata:playerdata
          })
      })
      .catch((err) => console.log(err));
   }else{
    res.render("playerStatForm",{
      playerdata:null
    });
   }
   
  
};



exports.SearchPlayer = (req, res) => {
  const playerName = req.body.playerName;
  Player.findOne({
    where: {
      name: playerName,
    },
  })
    .then((playerdata) => {
      res.render("showPlayerStats", {
        playerdata: playerdata,
      });
    })
    .catch((err) => console.log(err));
};

exports.SubmitPlayerData = (req, res) => {
  const name = req.body.playerName;
  const dob = req.body.playerDOB;
  const photoURL = req.body.playerPhoto;
  const birthPlace = req.body.playerBirthPlace;
  const career = req.body.playerCareer;
  const totalMatches = req.body.playerTotalMatches;
  const highestScore = req.body.playerHighestScore;
  const halfCenturies = req.body.playerHalfCenturies;
  const centuries = req.body.playerCenturies;
  const wickets = req.body.playerWickets;
  const average = req.body.playerAverage;

  Player.findOne({
    where: {
      name: playerName,
    },
  })
    .then((playerdata) => {
      res.render("showPlayerStats", {
        playerdata: playerdata,
      });
    })
    .catch((err) => console.log(err));
}

  
  Player.create({
    name: name,
    DOB: dob,
    photoURL: photoURL,
    birthPlace: birthPlace,
    career: career,
    noOfMatches: totalMatches,
    highestScore: highestScore,
    halfCenturies: halfCenturies,
    centuries: centuries,
    wickets: wickets,
    average: average,
  });
};
