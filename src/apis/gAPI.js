import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://phasescraper.s3.us-east-2.amazonaws.com/sample_data.json"
});
