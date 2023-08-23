import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import leftArrow from "../images/left-arr.png"
import rightArrow from "../images/right-arr.png"

export default function AllNews(props) {
  var [news, setNews] = useState([]);
  var [loading, setLoading] = useState(true);
  var [page, setPage] = useState(1);
  var [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getData() {
      var response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.news}&pageSize=12&page=${page}&apiKey=3834a362799b4358aa40ffd7ca3791b8`
      );
      var data = await response.json();
      console.log(data);
      setNews(data.articles);
      setTotalPages(data.totalResults/12);
      
      setLoading(false);
    }

    getData();
  }, [props.news, page]);

  function nextPage(){
    setLoading(true);
    setPage(++page); // Pre increment
  }

  function previousPage(){
    setLoading(true);
    setPage(--page);
  }
  return (
    <div>
      {loading === false ? (
        <>
          <div class="w3l-searchblock w3l-homeblock1 py-5">
            <div class="container py-lg-4 py-md-3">
              <div class="most-recent">
                <div class="title-align mb-4">
                  <h3 class="title-left">{props.news} Industry</h3>
                </div>
                <div class="row">
                  {news.map((item) => {
                    return (
                      <div class="col-lg-3 col-md-6 item">
                        <div class="card">
                          <div class="card-header p-0 position-relative">
                            <a href="#blog-single">
                              <img
                                class="card-img-bottom d-block radius-image"
                                src={item.urlToImage}
                                alt="Card cap"
                              />
                            </a>
                            <div class="post-pos">
                              <a href={item.url} target="_blank" class="receipe blue">
                                Learn More
                              </a>
                            </div>
                          </div>
                          <div class="card-body p-0 blog-details">
                            <a  href={item.url} target="_blank" class="blog-desc">
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

      <div className="paginationContainer">
        
        {page > 1?
        <>
          <img src={leftArrow} alt="left" onClick={previousPage}/>
        </>: null}

        <p>Page {page} of {Math.round(totalPages)}</p>
        
        {page !== totalPages?
        <>
          <img src={rightArrow} alt="right" onClick={nextPage}/>
        </>:null}

      </div>
    </div>
  );
}
