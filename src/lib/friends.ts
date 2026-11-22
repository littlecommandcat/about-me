export interface FriendSite {
  name: string;
  url: string;
  avatar_url: string;
  description?: string;
  banner_color?: string;
  banner_url?: string;
}

export const friendSites: FriendSite[] = [
  {
    name: "Nicko",
    url: "https://avianjay.sbs",
    avatar_url: "https://avianjay.sbs/favicon.ico",
    description: "尼摳會來摳你 muhehehehe\n就是一個神奇的高中牲",
    // banner_color: "blue",
  },
  {
    name: "CreeperDEV",
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
    name: "二氧化碳",
    url: "https://weiwei54321.github.io",
    avatar_url: "https://avatars.githubusercontent.com/u/152625085",
    description: "名字叫 co2，因為我覺得自己就像空氣裡的二氧化碳。"
  },
  {
    name: "lnstw",
    url: "https://willis.lnstw.xyz",
    avatar_url: "https://willis.lnstw.xyz/images/avatar.png",
    description: "嗨！我是LNSTW",
    banner_url: "https://willis.lnstw.xyz/images/bg.jpg",
  },
  {
    name: "Kevin",
    url: "https://kevin.com.tw",
    avatar_url: "https://kevin.com.tw/upload/kevin.png",
    description: "專注後端架構與軟硬體整合。取得新型專利、上架 App，並經營自己的雲端主機服務",
    banner_url: "https://kevin.com.tw/upload/decor2-c-cloud.png",
  },
  {
    name: "Tofu",
    url: "https://tofu1201.tw/",
    avatar_url: "https://1.gravatar.com/avatar/4b922be5ec13d4d88712c5d0ac023d9231181f0ec9a10088b993666c32f8e867?size=512",
    description: "一個喜歡寫程式、研究各種技術的學生開發者"
  },
  {
    name: "芒果凍布丁",
    url: "https://blog.ytmango.uk/",
    avatar_url: "https://avatars.githubusercontent.com/u/74277414",
    description: "我是芒果凍布丁 aka 芒果\n熱衷於程式設計，最擅長的語言是 Python"
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
    description: "讓你的機器人及網頁應用全天候在線。",
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