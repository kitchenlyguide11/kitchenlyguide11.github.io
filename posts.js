const posts = [
  {
    title: "কলা ও মূলা রান্না: সহজ ঘরোয়া রেসিপি",
    date: "১৭ নভেম্বর ২০২৬",
    summary: "কাঁচকলা ও মূলা দিয়ে সহজ ও সুস্বাদু ঘরোয়া তরকারির রেসিপি। উপকরণ, পদ্ধতি ও টিপস।",
    url: "posts/kola-mula-ranna.html"
  },
  {
    title: "আমার প্রথম পোস্ট",
    date: "১৭ নভেম্বর ২০২৬",
    summary: "এখানে পোস্টের ছোট সারসংক্ষেপ লিখুন।",
    url: "posts/first-post.html"
  }
];

function renderPosts(containerId, limit) {
  const box = document.getElementById(containerId);
  const list = limit ? posts.slice(0, limit) : posts;
  list.forEach(function (p) {
    const card = document.createElement("div");
    card.className = "post-card";

    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    a.href = p.url;
    a.textContent = p.title;
    h2.appendChild(a);

    const date = document.createElement("div");
    date.className = "date";
    date.textContent = p.date;

    const sum = document.createElement("p");
    sum.textContent = p.summary;

    card.appendChild(h2);
    card.appendChild(date);
    card.appendChild(sum);
    box.appendChild(card);
  });
}
