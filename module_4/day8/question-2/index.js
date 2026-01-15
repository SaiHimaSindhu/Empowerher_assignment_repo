const express = require("express");
const os = require("os");
const dns = require("dns");
const readData = require("./read");

const app = express();
const PORT = 3000;

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Read file route
app.get("/readfile", (req, res) => {
  try {
    const data = readData();
    res.send(data);
  } catch (error) {
    res.send("Error reading file");
  }
});

// System details route
app.get("/systemdetails", (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    totalMemory: Math.round(os.totalmem() / (1024 * 1024 * 1024)) + " GB",
    freeMemory: Math.round(os.freemem() / (1024 * 1024 * 1024)) + " GB",
    cpuModel: os.cpus()[0].model,
    cores: os.cpus().length   // Bonus
  };

  res.json(systemInfo);
});

// Get IP route
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", (err, address) => {
    if (err) {
      res.send("Error fetching IP");
    } else {
      res.json({
        hostname: "masaischool.com",
        ipAddress: address
      });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
