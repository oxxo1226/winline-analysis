
document.getElementById('imageInput').addEventListener('change', function () {
    const resultDiv = document.getElementById('result');
    const file = this.files[0];
    if (!file) {
        resultDiv.innerHTML = "請選擇圖片。";
        return;
    }

    resultDiv.innerHTML = "🔍 分析中...";

    Tesseract.recognize(file, 'eng', {
        logger: m => console.log(m)
    }).then(({ data: { text } }) => {
        const lines = text.split('\n').map(l => l.trim()).filter(l => l);
        let top5 = lines.filter(l => /\d\.\d{2}/.test(l)).slice(0, 5);
        resultDiv.innerHTML = `
            ✅ 分析完成，以下為建議內容：<br>
            📊 原始文字：<pre>${lines.join("\n")}</pre><br>
            🔥 即時 Top5 賽事推薦：<br>
            <ul>${top5.map((v, i) => `<li>${i + 1}. ${v}</li>`).join('')}</ul>
        `;
    }).catch(err => {
        resultDiv.innerHTML = "❌ 分析失敗：" + err.message;
    });
});
