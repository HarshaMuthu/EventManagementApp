import React from "react";
import './service.css'

export const Services = (props) => {
  return (
    // <div id="services" className="text-center">
    //   <div className="container">
    //     <div className="section-title">
    //       <h2>Our Services</h2>
    //       <p>
    //       Transforming Your Occasions into Unforgettable Events, Where Every Detail Matters!
    //       </p>
    //     </div>
    //     <div className="row">
    //       {props.data
    //         ? props.data.map((d, i) => (
    //             <div key={`${d.name}-${i}`} className="col-md-4">
    //               {" "}
    //               <i className={d.icon}></i>
    //               <div className="service-desc">
    //                 <h3>{d.name}</h3>
    //                 <p>{d.text}</p>
    //               </div>
    //             </div>
    //           ))
    //         : "loading"}
    //     </div>
    //   </div>
    // </div>
    <section>
      <div id="services" className="text-center">
  <h3>Our Services</h3>
  <p class="section-lead">Types of Work we specialize in! End to End Planners</p>
  <div class="services-grid">
    <div class="service service1">
      <i class="ti-bar-chart"></i>
      <h4>Wedding </h4>
      <p>Your perfect day, meticulously planned and flawlessly executed.</p>
      {/* <a href="#" class="cta">Read More  */}
      {/* <span class="ti-angle-right"> */}
      {/* </a> */}
    </div>

    <div class="service service2">
      <i class="ti-light-bulb"></i>
      <h4>Private Party</h4>
      <p>Experience a private party like no other, where every detail is meticulously crafted.</p>
      {/* <a href="#" class="cta">Read More  */}
      {/* <span class="ti-angle-right"> */}

      {/* </a> */}
    </div>

    <div class="service service3">
      <i class="ti-money"></i>
      <h4>Corporate Event</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      {/* <a href="#" class="cta">Read more <span class="ti-angle-right"></span></a> */}
    </div>
  </div>
  </div>
</section>
  );
};
