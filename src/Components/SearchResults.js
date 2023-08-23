import React from 'react'
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { useLocation } from 'react-router-dom';
//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

export default function SearchResults() {
    var [news, setNews] = useState([]);
    var [loading, setLoading] = useState(true);
    var location = useLocation();

    var item = location.state.item;

    useEffect(() => {
        async function getData() {
          var response = await fetch(
            `https://newsapi.org/v2/everything?q=${item}&language=en&apiKey=3834a362799b4358aa40ffd7ca3791b8`
          );
          var data = await response.json();
          console.log(data);
          var allNews = shuffle(data.articles);
          setNews(allNews);

          setLoading(false);
        }
    
        getData();
      }, [item]);

      function shuffle(arra1) {
        var ctr = arra1.length,
          temp,
          index;
        while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
        }
        return arra1;
      }
  
  return (
    <div>
      <div>
      {loading === false ? (
        <>
          <div class="w3l-searchblock w3l-homeblock1 py-5">
            <div class="container py-lg-4 py-md-3">
              <div class="most-recent">
                <div class="title-align mb-4">
                  <h3 class="title-left">Search Results: </h3>
                  
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
                              <span class="fa fa-clock-o"></span>{" "}
                              {item.publishedAt}
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
        </>
      ) : (
        <Loader />
      )}
    </div>

    </div>
  )
}
