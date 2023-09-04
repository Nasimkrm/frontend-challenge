const StatsDisplay = ({ stats, half }) => {
  const categories = {
    possessionPercentage: "Possession",
    totalScoringAtt: "Shots",
    ontargetScoringAtt: "Shots on Target",
    wonCorners: "Corners",
  };

  return stats ? (
    <div>
      {stats.map((stat) => {
        return (
          <div key={stat.id}>
            <p>{categories[stat.type]}</p>
            <p>{stat[half]}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div>loading...</div>
  );
};

export default StatsDisplay;
