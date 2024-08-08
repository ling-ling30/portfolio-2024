import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  Leaderboard: defineTable({
    name: v.string(),
    time: v.string(),
    difficulty: v.string(),
  })
    .index("by_time", ["time"])
    .index("by_difficulty", ["difficulty"]),
});
