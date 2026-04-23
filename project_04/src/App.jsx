import React from "react";
import { Bookmark } from "lucide-react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg?w=768"
            alt=""
          />
          <button>
            Save
            <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part-time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h4>$120/hr</h4>
              <p>kpk, Pakistan</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
