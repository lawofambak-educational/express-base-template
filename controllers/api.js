export const apiHome = (req, res) => {
  res.send("Hello API!");
};

export const apiNew = (req, res) => {
  res.send("Hello new API!");
};

export const apiId = (req, res) => {
  res.send(`Hello API ${req.params.id}!`);
};
