const BASE_URL = "http://localhost:8000/";

const getInit = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const tryCatchFetch = async (url, init) => {
  try {
    let response = await fetch(url, init);
    if (response.ok) {
      if (response.status !== 204) {
        let data = response.json();
        return data;
      } else {
        return { success: true };
      }
    }
  } catch (error) {
    console.error(":ERR:", error);
    return null;
  }
};

const getMyPlayers = async () => {
  let url = `${BASE_URL}api/players/`;
  return await tryCatchFetch(url, getInit());
};

const getAPIList = async (playerId) => {
  let url = `${BASE_URL}api/players/${playerId}/list/`;
  return await tryCatchFetch(url, getInit());
};

const getAPIPlayerDetail = async (playerId) => {
  let url = `${BASE_URL}api/list/${playerId}/`;
  return await tryCatchFetch(url, getInit());
};

const getTeams = async () => {
  let url = `${BASE_URL}api/teams/`;
  return await tryCatchFetch(url, getInit());
};

const getTeamRoster = async (teamId) => {
  let url = `${BASE_URL}api/teams/${teamId}/`;
  return await tryCatchFetch(url, getInit());
};

const myExports = {
  getMyPlayers,
  getAPIList,
  getAPIPlayerDetail,
  getTeams,
  getTeamRoster,
};

export default myExports;
