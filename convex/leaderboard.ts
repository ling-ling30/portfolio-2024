import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    name: v.string(),
    time: v.string(),
    difficulty: v.string(),
  },
  handler: async (ctx, args) => {
    const document = await ctx.db.insert("Leaderboard", {
      name: args.name,
      time: args.time,
      difficulty: args.difficulty,
    });

    return document;
  },
});

export const getLeaderboard = query({
  handler: async (ctx) => {
    const leaderboard = await ctx.db
      .query("Leaderboard")
      .withIndex("by_time")
      .order("desc")
      .collect();
    console.log(leaderboard);
    return leaderboard;
  },
});
