// import SocialNetworks from "./social-networks.json";

export const api = async (url) => {
  switch (url) {
    case "/social-networks":
      return await fetch("data/social-networks.json")
        .then(async (res) => await res.json())
        .catch((err) => console.log(err));

    case "/schedules-status":
      return await fetch("data/schedules-status.json")
        .then(async (res) => await res.json())
        .catch((err) => console.log(err));

    case "/schedules":
      return await fetch("data/schedules.json")
        .then(async (res) => await res.json())
        .catch((err) => console.log(err));
    default:
      return null;
  }
};
