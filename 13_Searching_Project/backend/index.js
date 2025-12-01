import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Load JSON file
const productsPath = path.join(__dirname, "products.json");
let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));


app.get("/api/products", (req, res) => {
  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.title.toLowerCase().includes(search) ||
        p.category.toLowerCase().includes(search)
    );
    return res.json(filtered);
  }
  setTimeout(() => {
    res.json(products);
  }, 700);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

