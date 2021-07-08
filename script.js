document.getElementById("btn").onclick = function () {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  //カードの画像が切り替わる処理
  document.getElementById("c1").style.background = "url(image/card-4.jpeg) no-repeat center center/cover";

  document.getElementById("c2").style.background = "url(image/card-5.jpeg) no-repeat center center/cover";

  document.getElementById("c3").style.background = "url(image/card-6.jpeg) no-repeat center center/cover";

  //カード名が変わる処理
  document.getElementById("name2").innerText = "CaptainAmerica";
  document.getElementById("name1").innerText = "Avengers";
  document.getElementById("name3").innerText = "CIVIL WAR";

  // カテゴリー名を取り除く処理
  document.querySelector(".card-category").remove();
  document.querySelector(".card-category").remove();
  document.querySelector(".card-category").remove();
};
