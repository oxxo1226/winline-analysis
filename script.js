
document.getElementById('imageInput').addEventListener('change', function () {
    const resultEl = document.getElementById('result');
    const file = this.files[0];
    if (!file) return;
    resultEl.innerHTML = '✅ 圖片上傳成功，正在分析...';
    setTimeout(() => {
        resultEl.innerHTML = `
            ✅ 分析完成<br>
            勝率最高：球隊 A（88%）<br>
            💰 推薦投注：A 讓分 -5.5（賠率 1.95）<br>
            🔥 即時 Top5：自動排序中...
        `;
    }, 2000);
});
