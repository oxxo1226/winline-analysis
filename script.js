
document.getElementById("fileInput").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        document.getElementById("result").innerText = "📸 圖片已上傳，正在分析...";
        const reader = new FileReader();
        reader.onload = function() {
            Tesseract.recognize(reader.result, 'eng').then(({ data: { text } }) => {
                document.getElementById("result").innerText = "✅ 分析完成，辨識內容如下：\n" + text;
            });
        };
        reader.readAsDataURL(file);
    }
});
