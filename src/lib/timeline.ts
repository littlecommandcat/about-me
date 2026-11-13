export interface TimelineEntry {
  date: string;
  title: string;
  description?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    date: "2023-08",
    title: "學習Python",
    description: "第一次接觸Python"
  },
  {
    date: "2023-08",
    title: "接觸Discord",
    description: '創建了一台"小喵喵機器人"'
  },
  {
    date: "2023-09",
    title: "接觸GitHub",
    description: "開始瀏覽一些開源項目"
  },
  {
    date: "2024-03",
    title: "意圖驗證",
    description: "小喵喵通過了訊息與成員意圖"
  },
  {
    date: "2024-06",
    title: "里程碑-機器人",
    description: "第一次透過串流的方式播放音樂"
  },
  {
    date: "2025-04",
    title: "狀態意圖",
    description: "無聊提交一次狀態意圖然後就通過了"
  },
  {
    date: "2025-06",
    title: "官方驗證",
    description: "時隔一年多成功讓機器人得到官方驗證"
  },
  {
    date: "2025-06",
    title: "認識很多大佬",  // 群甲?
    description: "如弦樂、洋蔥和411等人"
  },
  {
    date: "2025-07",
    title: "認識CreeperDev",  // 臭甲
    description: "突然認識了CreeperDev"
  },
  {
    date: "2025-07",
    title: "認識二氧化碳",  // 臭甲
    description: "從AntiRaidX認識了二氧化碳"
  },
  {
    date: "2025-08",
    title: "接觸雲端貓居",
    description: "將機器人架設至雲端貓居託管"
  },
  {
    date: "2025-09",
    title: "里程碑-網頁",
    description: "第一次寫了個公開的機器人網頁"
  },
  {
    date: "2025-10",
    title: "里程碑-機器人",
    description: "機器人達到500個伺服器"
  },
  {
    date: "2025-12",
    title: "認識Nicko",  // 臭甲
    description: "開源遇到了Nicko臭甲可以學習"
  },
  {
    date: "2025-12",
    title: "成為貓居決策會員",
    description: "為貓居盡一份心力"
  },
  {
    date: "2026-01",
    title: "里程碑-開源",
    description: "第一次正式使用git並學習開源了Discordpy-Music"
  },
  {
    date: "2026-01",
    title: "認識草薙明音",  // 臭甲
    description: "學習的過程中認識了草薙明音"
  },
  {
    date: "2026-06",
    title: "里程碑-被封",
    description: "Threads被年齡問題停權，後續申訴無效"
  },
  {
    date: "2026-07",
    title: "里程碑-機器人",
    description: "小喵喵達到2000個伺服器"
  },
  {
    date: "2026-07",
    title: "里程碑-機器人",
    description: "支援部分i18n顯示"
  },
  {
    date: "2026-08",
    title: "YTP競賽",
    description: "上台北比YTP"
  },
  {
    date: "2026-08",
    title: "里程碑-面板",
    description: "大鼠協作機器人功能面板"
  },
  {
    date: "2026-09",
    title: "學習Golang",
    description: "開始學習Golang基礎與後端開發",
  },
  {
    date: "2026-10",
    title: "精進Cpp",
    description: "開始深入學習Cpp"
  },
  {
    date: "2026-10",
    title: "學習Lua",
    description: "學習Lua的基礎語法"
  },
  {
    date: "2026-11",
    title: "學習Rust",
    description: "決定給自己一些挑戰"
  }
];

export function getSortedTimeline(): TimelineEntry[] {
  for (const entry of timelineEntries) {
    const date = new Date(`${entry.date}-01T00:00:00Z`);
    if (
      !/^\d{4}-\d{2}$/.test(entry.date) ||
      !Number.isFinite(date.getTime()) ||
      date.toISOString().slice(0, 7) !== entry.date
    ) {
      throw new Error(`Date error：${entry.date} (YYYY-MM)`);
    }
  }
  return [...timelineEntries].sort((b, a) => b.date.localeCompare(a.date));
}
