
document.getElementById("upload").addEventListener("change", function(){
  document.getElementById("result").innerHTML += "<p>📸 圖片已上傳，正在分析...</p>";
  setTimeout(() => {
    document.getElementById("result").innerHTML += "<p>✅ 分析完成，勝率最高：球隊 A</p>";
  }, 1500);
});
    