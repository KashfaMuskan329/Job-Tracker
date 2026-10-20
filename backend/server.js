const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const Job = mongoose.model(
  "Job",
  new mongoose.Schema(
    {
      company: { type: String, required: true },
      role: { type: String, required: true },
      status: {
        type: String,
        enum: ["Applied", "Interview", "Offer", "Rejected"],
        default: "Applied",
      },
    },
    { timestamps: true }
  )
);

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.get("/api/jobs", async (req, res) => {
  res.json(await Job.find().sort({ createdAt: -1 }));
});

app.post("/api/jobs", async (req, res) => {
  try {
    res.status(201).json(await Job.create(req.body));
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

app.patch("/api/jobs/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  job ? res.json(job) : res.status(404).json({ error: "Not found" });
});

app.delete("/api/jobs/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

const port = process.env.PORT || 5000;

if (require.main === module) {
  mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost:27017/jobtracker")
    .then(() => {
      console.log("MongoDB connected");
      app.listen(port, () => console.log(`API running on port ${port}`));
    })
    .catch((err) => {
      console.error("MongoDB connection failed:", err.message);
      process.exit(1);
    });
}

module.exports = app;
