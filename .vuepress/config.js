module.exports = {
  "title": "LinYY",
  "description": "LinYY杂记",
  // "base": "/blog/",
  "dest": "./public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [{
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "分类索引",
        "icon": "reco-category",
        "items": [{
            "text": "Typescript",
            "link": "/docs/theme-reco/"
          },
          {
            "text": "Javascript",
            "link": "/docs/javascript/"
          },
          {
            "text": "算法和数据结构",
            "link": "/docs/algorithm/"
          },
          {
            "text": "others",
            "link": "/docs/others/"
          }
        ]
      },
      {
        "text": "标签",
        "icon": "reco-tag",
        "items": [{
          "text": "vuepress-reco",
          "link": "/docs/theme-reco/"
        }]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [{
          "text": "GitHub",
          "link": "https://github.com/lurenacm",
          "icon": "reco-github"
        }]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/docs/algorithm/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/docs/javascript/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/docs/typescript/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
      "/docs/others/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "Category": {
        "location": 2,
        "text": "Category"
      },
      "Tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    // "friendLink": [{
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "LinYY",
    "authorAvatar": "/avatar1.png",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}