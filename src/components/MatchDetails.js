const MatchDetails = ({ match }) => {
  const competitionName = match.meta.competition.name;
  const contestantOne = match.contestant[0];
  const contestantTwo = match.contestant[1];
  const contestantOneScore = match.liveData.matchDetails.scores.ft.home;
  const contestantTwoScore = match.liveData.matchDetails.scores.ft.away;

  return (
    <div className="p-12 border-2 border-white">
      <div className="flex justify-between">
        <h4 className="text-gray-500 font-bold underline">{competitionName}</h4>
        <h4 className="font-bold">FT</h4>
      </div>
      <div className="flex justify-between">
        <div className="self-start space-y-3">
          {contestantOne && (
            <div className="flex w-10">
              <img src="./arsenal.png" alt="arsenal badge" />
              <h2 className="font-bold ml-2">{contestantOne.name}</h2>
            </div>
          )}
          {contestantTwo && (
            <div className="flex w-10">
              <img src="./fullham.png" alt="fullham badge" />
              <h2 className="font-bold ml-2">{contestantTwo.name}</h2>
            </div>
          )}
        </div>
        <div className="bg-white text-black font-bold px-2 rounded-md flex flex-col justify-around">
          {contestantOneScore && <h2>{contestantOneScore}</h2>}
          {contestantTwoScore && <h2>{contestantTwoScore}</h2>}
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;
