export default (criteria: Array<string>, timeline: any) => {
  // TODO also filter by 'from' date
  // TODO this is one liner
  return timeline.filter((checkpoint: any) =>
    criteria.includes(checkpoint.type)
  );
};
