import posts from "./tuits.js";
let tuits = posts;

const defaults = {
  postedBy: {
    username: "NASA",
  },
  verified: false,
  handle: "@nasa",
  tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
  logoImage: "/tuiter/images/elon_musk.jpeg",
  avatarImage: "/tuiter/images/elon_musk.jpeg",
  tuits: "122K",
  stats: {
    comments: 123,
    retuits: 432,
    likes: 2345,
  },
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const createTuit = (req, res) => {
  const newTuit = {
    ...req.body,
    ...defaults,
    _id: new Date().getTime() + "",
    liked: false,
  };
  tuits.push(newTuit);
  res.json(newTuit);
};

const findTuits = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate);
  tuits[tuitIndex] = { ...tuits[tuitIndex], ...updates };
  res.sendStatus(200);
};

const deleteTuit = (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(200);
};

export default (app) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
