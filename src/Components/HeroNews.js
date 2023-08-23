import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroNews() {
  var [news, setNews] = useState([]);

  useEffect(() => {
    async function getData() {
      var res = await fetch(
        "https://newsapi.org/v2/everything?q=Cars&apiKey=3834a362799b4358aa40ffd7ca3791b8"
      );
      var data = await res.json();
      console.log(data);
      var selectedNews = [];

      for(var i = 0; i < 4; i++){
        selectedNews.push(data.articles[i]);
      }

      setNews(selectedNews);
    }

    getData();
  }, []);

  return (
    <div>
      <div className="w3l-searchblock w3l-homeblock1 py-5">
        <div className="container py-lg-4 py-md-3">
          <div className="most-recent">
            <div className="title-align mb-4">
              <h3 className="title-left">Automobile Industry</h3>
              <a href="#blog" className="more-posts">
                {" "}
                View more posts <span className="fas fa-arrow-right"></span>
              </a>
            </div>
            <div className="row">
              {news.map((item) => {
                return (
                  <div className="col-lg-3 col-md-6 item">
                    <div className="card">
                      <div className="card-header p-0 position-relative">
                        <a href={item.url}  target="_blank" rel="noreferrer">
                          <img
                            className="card-img-bottom d-block radius-image"
                            src={item.urlToImage}
                            alt="Card cap"
                          />
                        </a>
                        <div className="post-pos">
                          <a href={item.url}  target="_blank" rel="noreferrer" className="receipe blue">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div className="card-body p-0 blog-details">
                        <a href={item.url}  target="_blank" rel="noreferrer" className="blog-desc">
                          {item.title}
                        </a>
                        <p>{item.description}</p>
                        <span className="post-date">
                          <span className="fa fa-clock-o"></span> {item.publishedAt}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="btn-container">
        <Link to="/automobileNews" className="btn btn-style btn-primary">View All Aricles</Link>
      </div>
    </div>
    
  );
}
