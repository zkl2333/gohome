import { useState } from "react";
import "./App.less";
import { Popup, Space, Button } from "antd-mobile";

import { renderTimeText } from "./utils";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <div className="App">
      <div
        className="settings"
        onClick={() => {
          setShowSettings(true);
        }}
      >
        🚀
      </div>
      <div className="App-container">
        <p>🏃‍还有 {renderTimeText()}</p>
      </div>
      <Button
        onClick={() => {
          setShowSettings(true);
        }}
      >
        展开弹出层1
      </Button>
      <Popup
        visible={showSettings}
        onMaskClick={() => {
          setShowSettings(false);
        }}
        bodyStyle={{ height: "40vh" }}
      >
        <div style={{ padding: "24px" }}>
          <Space direction="vertical">
            <div>这是弹出层1</div>
          </Space>
        </div>
      </Popup>
    </div>
  );
}

export default App;
