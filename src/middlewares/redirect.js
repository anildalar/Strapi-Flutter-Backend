"use strict";

module.exports = (config, { strapi }) => {
  const redirects = ["/", "/index.html", "/admin/","/letmein/"].map((path) => ({
        method: "GET",
        path,
        handler: (ctx) => ctx.redirect("/admin/plugins/students"),
        config: { auth: false },
    }));

    strapi.server.routes(redirects);
};