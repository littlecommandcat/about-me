export interface FriendSite {
  name: string;
  url: string;
  avatar_url: string;
  description?: string;
}

export const friendSites: FriendSite[] = [
  {
    name: "Nicko",
    url: "https://avianjay.sbs",
    avatar_url: "https://avianjay.sbs/favicon.ico",
    description: "尼摳會來摳你 muhehehehe\n就是一個神奇的高中牲"
  },
  {
    name: "CreeperDev",
    url: "https://creeperdev.me",
    avatar_url: "https://creeperdev.me/assets/img/avatar.png",
    description: "嗯 對，你好 我是 CreeperDEV 一個即將面臨會考的國中生 :/\n這個地方應該就是我無聊會講講話的小地方"
  },
  {
    name: "草薙明音",
    url: "https://cathome.shop/kusanagi-akane",
    avatar_url: "https://cathome.shop/favicon.ico",  // 等他修好ico
    description: "我是草薙明音，常被叫作貓貓。平常主要做網站、Discord 機器人和社群管理"
  },
  {
    name: "Taicoolah",
    url: "https://taicoolah.com",
    avatar_url: "https://taicoolah.com/icon.png",
    description: "創新軟體服務，為您打造極致體驗。"
  },
  {
    name: "雲端貓居",
    url: "https://nyanko.host",
    avatar_url: "https://nyanko.host/_astro/icon.Dnpdb9pn_2nszK9.webp",
    description: "讓你的機器人及網頁應用全天候在線。"
  }
  // {
  //   name: "Yuxuan",
  //   url: "https://github.com/yuxuan7125",
  //   avatar_url: "https://avatars.githubusercontent.com/u/254815346",
  // },
  // {
  //   name: "William",
  //   url: "https://github.com/william2177561",
  //   avatar_url: "https://avatars.githubusercontent.com/u/174944326",
  //   description: "哈哈屁眼"
  // }
];