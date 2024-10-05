export const categorisePlayersByPosition = (
  players: any[],
  limits: { [key: string]: number }
) => {
  const gkArray: any[] = [];
  const defArray: any[] = [];
  const midArray: any[] = [];
  const fwdArray: any[] = [];

  players.forEach((player: any) => {
    switch (player.element_type) {
      case 1:
        gkArray.push(player);
        break;
      case 2:
        defArray.push(player);
        break;
      case 3:
        midArray.push(player);
        break;
      case 4:
        fwdArray.push(player);
        break;
      default:
        break;
    }
  });

  const sortedGK = gkArray
    .sort((a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists))
    .slice(0, limits.goalkeepers);

  const sortedDef = defArray
    .sort((a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists))
    .slice(0, limits.defenders);

  const sortedMid = midArray
    .sort((a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists))
    .slice(0, limits.midfielders);

  const sortedFor = fwdArray
    .sort((a, b) => b.goals_scored + b.assists - (a.goals_scored + a.assists))
    .slice(0, limits.forwards);

  return {
    goalkeepers: sortedGK,
    defenders: sortedDef,
    midfielders: sortedMid,
    forwards: sortedFor,
  };
};
