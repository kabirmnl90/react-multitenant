import { useEffect, useState } from "react";
import { getConfig } from "../services/config.service";

function App() {
  const [config, setConfig] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getConfigAsync() {
      const tenantHost = window.location.hostname.split(".")[0];
      console.log(tenantHost);
      const response = await getConfig();
      setConfig(response.data);
      setIsLoading(false);
    }

    getConfigAsync();
  }, []);

  return (
    <div>
      <header>
        <p>
          {isLoading && "Getting config from server..."}
          {!isLoading && !config.success && "Error getting config from server"}
          {!isLoading &&
            config.success &&
            `The client is: ${config.clientConfig.name}`}
        </p>
      </header>
    </div>
  );
}

export default App;
