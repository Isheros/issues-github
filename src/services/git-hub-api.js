import axios from "axios";

const service = axios.create({
  baseURL: "https://api.github.com"
});

const GIT_HUB_SERVICE = {
  GET_ALL: async (owner, repo, label) => {
    return await service.get(`/repos/${owner}/${repo}/issues?labels=${label}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  },
  GET_LABELS: async (owner, repo) => {
    return await service.get(`/repos/${owner}/${repo}/labels`, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
  },
};

export default GIT_HUB_SERVICE;
