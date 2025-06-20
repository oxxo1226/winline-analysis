
document.addEventListener("DOMContentLoaded", () => {
  // 模擬資料 - 真實應由圖片解析或 API 提供
  const matches = [
    { teamA: "勇士", teamB: "湖人", bestPick: "勇士", winRate: 88, odds: 1.95 },
    { teamA: "塞爾提克", teamB: "熱火", bestPick: "塞爾提克", winRate: 85, odds: 1.90 },
    { teamA: "太陽", teamB: "公鹿", bestPick: "太陽", winRate: 82, odds: 1.88 },
    { teamA: "快艇", teamB: "拓荒者", bestPick: "快艇", winRate: 80, odds: 2.00 },
    { teamA: "國王", teamB: "灰熊", bestPick: "國王", winRate: 78, odds: 1.92 },
    { teamA: "火箭", teamB: "雷霆", bestPick: "雷霆", winRate: 75, odds: 2.05 }
  ];

  renderTop5(matches);
});

function renderTop5(matches) {
  const topMatches = matches
    .sort((a, b) => b.winRate - a.winRate)
    .slice(0, 5);

  let html = "<ol>";
  topMatches.forEach(match => {
    html += `<li>${match.teamA} vs ${match.teamB} - 勝率最高：${match.bestPick} (${match.winRate}%)，賠率 ${match.odds}</li>`;
  });
  html += "</ol>";

  document.getElementById("top5-container").innerHTML = html;
}
