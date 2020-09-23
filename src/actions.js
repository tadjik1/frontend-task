export function fetchCampaigns(dispatch) {
  fetch('http://localhost:8080/api/campaigns')
    .then(res => res.json())
    .then(campaigns => {
      dispatch({ type: "CAMPAIGNS", campaigns });
    })
    .catch(err => {
      console.error(err);
    });
}
