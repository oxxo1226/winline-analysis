document.getElementById('file-input').addEventListener('change', function () {
  const resultBox = document.getElementById('result-container');
  const top5Box = document.getElementById('top5-container');
  const status = document.getElementById('status');

  status.innerText = "📸 圖片已上傳，正在分析中…";

  setTimeout(() => {
    // 模擬分析邏輯
    const highest = "球隊 A";
    const winRate = "88%";
    const suggestBet = "A 讓分 –5.5（賠率 1.95）";

    status.innerHTML = `
      🏆 勝率最高：${highest}（${winRate}）<br>
      💰 建議投注：${suggestBet} <br>
      🔥 即時 Top5 賽事如下：
    `;

    const top5 = [
      { team: "勇士 vs 湖人", win: "82%", bet: "湖人 +4.5" },
      { team: "太陽 vs 國王", win: "79%", bet: "太陽 -2.5" },
      { team: "灰狼 vs 掘金", win: "76%", bet: "掘金 -3.5" },
      { team: "公鹿 vs 熱火", win: "74%", bet: "公鹿 -1.5" },
      { team: "老鷹 vs 公牛", win: "72%", bet: "老鷹 +2.5" },
    ];

    top5Box.innerHTML = top5.map(match =>
      `<p>✅ ${match.team}｜勝率 ${match.win}｜建議投注：${match.bet}</p>`
    ).join("");

  }, 1500);
});
