import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.reactCapacitor",
  appName: "capacitor-test-app",
  webDir: "dist",
  server: {
    url: "https://014e-117-205-188-201.ngrok-free.app",
    cleartext: true,
  },
};

export default config;
