import React from "react";
import { useState, useEffect } from "react";

export default function TopHeadlines() {
  var [news, setNews] = useState([]);
  var [titles, setTitles] = useState([]);

  useEffect(() => {
    async function getData() {
      var res = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3834a362799b4358aa40ffd7ca3791b8"
      );
      var data = await res.json();
      console.log(data);
      var selectedHeadlines = [];
      var selectedTitles = [];

      for (var i = 0; i < 4; i++) {
        selectedHeadlines.push(data.articles[i]);
      }

      for (var j = 4; j < 8; j++) {
        selectedTitles.push(data.articles[j]);
      }

      setNews(selectedHeadlines);
      setTitles(selectedTitles);
    }

    getData();
  }, []);

  return (
    <div>
      <div class="w3l-searchblock w3l-homeblock1 py-5">
        <div class="container py-lg-4 py-md-3">
          <div class="row">
            <div class="col-lg-8 most-recent pr-lg-4">
              <h3 class="title-left mb-3">Top Headlines</h3>
              <div class="row">
                {news.map((item) => {
                  return (
                    <div class="col-lg-6 col-md-6 item">
                      <div class="card">
                        <div class="card-header p-0 position-relative">
                          <a href={item.url} target="_blank" rel="noreferrer">
                            <img
                              class="card-img-bottom d-block radius-image"
                              src={item.urlToImage}
                              alt="Card cap"
                            />
                          </a>
                          <div class="post-pos">
                            <a href={item.url}  target="_blank" rel="noreferrer" class="receipe green">
                              Trending
                            </a>
                            <span class="meta-info meta-info-custom">
                              <span class="fa fa-clock-o mr-2"></span>{item.publishedAt}
                            </span>
                          </div>
                        </div>
                        <div class="card-body p-0 blog-details">
                          <a href={item.url}  target="_blank" rel="noreferrer" class="blog-desc">
                            {item.title}
                          </a>
                          <p>
                            {item.description}
                          </p>
                          <div class="p-footer mt-3">
                            <div class="p-meta-info">
                              
                              <a href="#url">{item.author}</a>
                            </div>
                            <a href={item.url}  target="_blank" rel="noreferrer" class="read">
                              Read more <span class="fas fa-arrow-right"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="col-lg-4 trending mt-lg-0 mt-5 mb-lg-5 pl-lg-4">
              <div class="pos-sticky">
                <div class="side-post-banner text-center">
                  <h3 class="title-left">Get Your Articles Published!</h3>
                  <p class="mt-3">
                  Unlock the Secrets to Successful Article Publications with Expert Guidance and Tips
                  </p>
                  <a href="#read" class="btn-style btn btn-primary mt-4">
                    {" "}
                    Publish Now{" "}
                  </a>
                </div>
                <div class="tweets mt-5">
                  <h3 class="title-left mb-sm-3">Latest News</h3>
                  <ul class="blog-cat twitter-feed">
                    {titles.map((item)=>{
                        return(
                            <li>
                                <a href={item.url}  target="_blank" rel="noreferrer">
                                    {" "}
                                    {item.title}
                                    <br />
                                    <em class="twitter-date">{item.publishedAt}</em>
                                </a>
                            </li>
                        )
                    })}
                    
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
