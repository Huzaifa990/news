import React from 'react'
import automobile from "../images/auto-2.webp";
import tech from "../images/news1.jpg";
import sports from "../images/sports.webp";

export default function Categories() {
  return (
    <div>
        <section class="grids-1 py-5" id="trip">
    <div class="grids py-lg-5 py-md-4">
        <div class="container">
            <div class="row grids-gap">
                <div class="col-lg-4 align-self">
                    <div class="text-left">
                        <h3 class="title-left mb-3">Categories</h3>
                        <p class="text-para">Curabitur id gravida risus. Fusce eget ex, nisi ac sed,
                            lacinia est. Quisque ut lectus, eros et, commodo risus. 
                            Nullam sit amet laoreet elit. non magna a velit. </p>
                    </div>
                </div>
                <div class="col-lg-8 mt-lg-0 mt-md-5 mt-sm-4 mt-2">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6 mt-sm-0 mt-4">
                            <div class="column">
                                <a href="#single"><img src={automobile} alt="" class="img-fluid" /></a>
                                <div class="info">
                                    <h4><a href="#single">Automobile</a></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 mt-sm-0 mt-4">
                            <div class="column">
                                <a href="#single"><img src={tech} alt="" class="img-fluid" /></a>
                                <div class="info">
                                    <h4><a href="#single">Tech</a></h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6 mt-md-0 mt-4">
                            <div class="column">
                                <a href="#single"><img src={sports} alt="" class="img-fluid" /></a>
                                <div class="info">
                                    <h4><a href="#single">Sports</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
      
    </div>
  )
}
