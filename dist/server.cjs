"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/server.ts
var http = __toESM(require("http"), 1);

// src/controllers/iscasts-controllers.ts
var getListEpisodes = (req, res) => __async(void 0, null, function* () {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(
    [
      {
        podcastName: "mano deyvin",
        episode: "BANHEIR\xC3O DO QUARTO ANDAR // EP5",
        videoId: "ngMcY9Dw3fo",
        cover: "https://i.ytimg.com/vi/ngMcY9Dw3fo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_I2X2Xn5w3yEoFl2p26MiTcKR-Q",
        link: "https://www.youtube.com/watch?v=ngMcY9Dw3fo&list=PLz4TzGQ0MmlKB2-8q2LT2xND3potFmuy5",
        categories: ["Humor", "Tecnologia"]
      },
      {
        podcastName: "mano deyvin",
        episode: "The Evil Aliance pela fome (feat Akita, Montano)",
        videoId: "w40zLImdZqM",
        cover: "https://i.ytimg.com/vi/ngMcY9Dw3fo/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_I2X2Xn5w3yEoFl2p26MiTcKR-Q",
        link: "https://www.youtube.com/watch?v=w40zLImdZqM",
        categories: ["Humor", "Tecnologia", "Conhecimento"]
      }
    ]
  ));
});

// src/server.ts
var server = http.createServer((req, res) => __async(void 0, null, function* () {
  if (req.method === "GET") {
    yield getListEpisodes(req, res);
  }
  res.writeHead(404);
  res.end();
}));
var port = process.env.PORT;
server.listen(port, () => {
  console.log(`\u{1F7E2} Server On: http://localhost:${port}`);
});
