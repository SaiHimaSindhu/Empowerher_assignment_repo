import os from "os";
import fs from "fs/promises";

/* =======================
   PART A — OS MODULE
======================= */

console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

/* =======================
   PART B — FS CRUD
======================= */

async function runFileOperations() {
  try {
    // 1. Create data.txt
    await fs.writeFile("data.txt", "Hello World");
    console.log("data.txt created");

    // 2. Create Readme.md
    await fs.writeFile("Readme.md", "## This is first line in Readme");
    console.log("Readme.md created");

    // 3. Read data.txt
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("Content of data.txt:", data);

    // 4. Append text to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");
    console.log("Text appended to data.txt");

    // 5. Delete Readme.md
    await fs.unlink("Readme.md");
    console.log("Readme.md deleted");

  } catch (error) {
    console.error("Error:", error.message);
  }
}

runFileOperations();
