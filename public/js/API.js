import {post} from "jquery";
import ServerActions from "./actions/ServerActions";

let API = {
  fetchLinks() {
    console.log('1. in API..');
    post("/graphql",
    {
      query: `{
        links {
          _id,
          title,
          url
        }
      }`
    }
     ).done(resp =>  {
      ServerActions.receiveLinks(resp.data.links);
      console.log(resp);
    });
  }
};

export default API;
