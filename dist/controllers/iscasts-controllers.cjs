"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// src/controllers/iscasts-controllers.ts
var iscasts_controllers_exports = {};
__export(iscasts_controllers_exports, {
  getListEpisodes: () => getListEpisodes
});
module.exports = __toCommonJS(iscasts_controllers_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getListEpisodes
});
