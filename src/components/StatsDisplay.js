const StatsDisplay = ({ data, half }) => {
  const categories = {
    possessionPercentage: "Possession",
    totalScoringAtt: "Shots",
    ontargetScoringAtt: "Shots on Target",
    wonCorners: "Corners",
    totalYellowCard: "Yellow Cards",
    totalRedCard: "Red Cards",
  };

  const statFinder = ({ team, category }) => {
    let item = data[team].stats.find((item) => item.type === category);
    return item ?? { fh: "0", sh: "0", type: category, value: "0" };
  };

  return (
    <div className="flex flex-col">
      {Object.keys(categories).map((category) => {
        const homeStat = statFinder({ team: "home", category })[half];
        const awayStat = statFinder({ team: "away", category })[half];

        return (
          <div key={category} className="flex flex-col items-center">
            <p className="font-bold text-xl">{categories[category]}</p>
            <div className="flex justify-around w-full">
              <p
                className={`font-bold
                  ${homeStat > awayStat ? "text-yellow-300" : "text-green-400"}
                  `}
              >
                {homeStat}
              </p>
              <p
                className={`font-bold
                ${homeStat < awayStat ? "text-yellow-400" : "text-green-400"}
                `}
              >
                {awayStat}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsDisplay;
