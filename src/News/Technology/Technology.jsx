import s from "./Technology.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import newsImg from './../../images/newsImg.png'



function Technology() {
  const [news, setNews] = useState([]);


  useEffect(() => {
    axios
      .get("https://saurav.tech/NewsAPI/top-headlines/category/technology/gb.json")
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <div className={s.newsContainer}>
        
      {Array.from(news).map((n) => {
        return (
          <div key={n.title} className={s.newsItem}>
            <h3 className={s.author}>{n.author}</h3>
            <h2 className={s.title}>{n.title}</h2>
            <p className={s.description}>{n.description}</p>
            <a href={n.url}>
              <img src={n.urlToImage != null ? n.urlToImage : newsImg} className={s.url}></img>
            </a>
            <p className={s.date}>{n.publishedAt}</p>
            <div className={s.content}>{n.content}</div>
            <a href={n.url} className={s.readMore}>Read more &#8594;</a>
          </div>
        );
      })}
    </div>
  );
}

export default Technology;
