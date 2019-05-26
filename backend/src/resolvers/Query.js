const { forwardTo } = require("prisma-binding");

const Query = {
  reservationsConnection: forwardTo("db"),
  me(parent, args, ctx, info) {
    // check if there's a current user
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async users(parent, args, ctx, info) {
    // check if they are logged in
    if (!ctx.request.userId) {
      throw new Error("You must be logged in");
    }
    // query all the user
    return ctx.db.query.users({}, info);
  },
  async reservation(parent, args, ctx, info) {
    // make sure they're logged in
    if (!ctx.request.userId) {
      throw new Error("You aren't logged in!");
    }
    // query the current reservation
    const order = await ctx.db.query.reservation(
      {
        where: { id: args.id }
      },
      info
    );
    return order;
  },
  async reservations(parent, args, ctx, info) {
    const { userId } = ctx.request;
    if (!userId) {
      throw new Error("you must be signed in!");
    }
    return ctx.db.query.reservations(
      {
        where: {
          user: { id: userId }
        }
      },
      info
    );
  }
};

module.exports = Query;
