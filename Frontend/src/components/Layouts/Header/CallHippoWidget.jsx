import { useEffect } from "react";
import "./CallHippoWidget.css";

const CallHippoWidget = () => {
  useEffect(() => {

    // Prevent duplicate loading
    if (document.getElementById("callhippo-script")) return;

    // Create widget container
    const container = document.createElement("div");
    container.id = "callhippo-widget-container";

    document.body.appendChild(container);

    // Set credentials
    window.USERID = "69d516558ff05364212453c9";
    window.NUMBERID = "69d521a28ff053642125b1cc";

    // Load script
    const script = document.createElement("script");

    script.id = "callhippo-script";

    script.src =
      "https://d1x9dsge91xf6g.cloudfront.net/callhippo/files/ch-webcall.min.js";

    script.async = true;

    document.body.appendChild(script);

  }, []);

  return null;
};

export default CallHippoWidget;