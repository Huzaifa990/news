import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SportsNews() {
    var [news, setNews] = useState([]);

  useEffect(() => {
    async function getData() {
      var res = await fetch(
        "https://newsapi.org/v2/everything?q=Sports&apiKey=3834a362799b4358aa40ffd7ca3791b8"
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
      <div class="w3l-searchblock w3l-homeblock1 py-5">
        <div class="container py-lg-4 py-md-3">
          <div class="most-recent">
            <div class="title-align mb-4">
              <h3 class="title-left">Sports Industry</h3>
              <a href="#blog" class="more-posts">
                {" "}
                View more posts <span class="fas fa-arrow-right"></span>
              </a>
            </div>
            <div class="row">
              {news.map((item) => {
                return (
                  <div class="col-lg-3 col-md-6 item">
                    <div class="card">
                      <div class="card-header p-0 position-relative">
                        <a href={item.url}  target="_blank" rel="noreferrer">
                          <img
                            class="card-img-bottom d-block radius-image"
                            src={item.urlToImage}
                            alt="Card cap"
                          />
                        </a>
                        <div class="post-pos">
                          <a href={item.url}  target="_blank" rel="noreferrer" class="receipe blue">
                            Learn More
                          </a>
                        </div>
                      </div>
                      <div class="card-body p-0 blog-details">
                        <a href={item.url}  target="_blank" rel="noreferrer" class="blog-desc">
                          {item.title}
                        </a>
                        <p>{item.description}</p>
                        <span class="post-date">
                          <span class="fa fa-clock-o"></span> {item.publishedAt}
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
        <Link to="/sportsNews" className="btn btn-style btn-primary">View All Aricles</Link>
      </div>
    </div>
    
  )
}
