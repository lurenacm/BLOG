module.exports = {
  "title": "LinYY",
  "description": "林一一的博客",
  "base": "/blog/",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon1.ico"
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
        "items": [
          {
            "text": "theme-reco",
            "link": "/docs/theme-reco/"
          },{
            "text": "Typescript",
            "link": "/docs/Typescript/"
          },
          {
            "text": "Javascript",
            "link": "/docs/Javascript/"
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
          // "text": "vuepress-reco",
          "link": "/docs/"
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
      "/docs/Javascript/": [
        "",
        "theme",
        "plugin",
        "api",
        "介绍Typescript",
        "TS静态类型"
      ],
      "/docs/Typescript/": [
        "",
        "theme",
        "plugin",
        "api",
        "介绍Typescript",
        "TS静态类型"
      ],
      "/docs/others/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "subSidebar": "auto",
    "type": "blog",
    "blogConfig": {
      "Category": {
        "location": 2,
        "text": "目录索引"
      },
      "Tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "friendLink": [{
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo1.png",
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