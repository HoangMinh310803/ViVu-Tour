import React from "react";

const TestimonialSection = ({ testimonials, customerCategories }) => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Tiêu đề */}
        <div className="mb-5 text-center text-md-start">
          <h2 className="h3 fw-bold text-dark mb-3">
            Đánh giá từ những người đã trải nghiệm
          </h2>
          <p className="text-muted fs-6">
            Khách hàng chia sẻ về những kỷ niệm tuyệt vời trên chuyến du lịch
            với chúng tôi.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="bg-light rounded-4 p-5 shadow-sm">
          <div className="mx-auto" style={{ maxWidth: "800px" }}>
            <div
              className="display-4 text-center mb-4"
              style={{ color: "#99f6e4" }}
            >
              "
            </div>

            <div className="mb-4">
              <h3 className="h5 fw-bold text-dark mb-3">
                {testimonials[0].cruise}
              </h3>

              <p className="text-secondary lh-lg mb-3">
                {testimonials[0].content}
              </p>

              <p className="text-secondary lh-lg">{testimonials[0].details}</p>
            </div>

            <div className="border-top pt-3">
              <p className="fw-semibold text-dark">
                {testimonials[0].author} -
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-5 d-flex flex-wrap justify-content-center gap-2">
          {customerCategories.map((customer, index) => (
            <button
              key={index}
              className="btn btn-outline-secondary rounded-pill px-4 py-2 border-0"
              style={{
                backgroundColor: "#f8f9fa",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#ccfbf1";
                e.target.style.color = "#0d9488";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#f8f9fa";
                e.target.style.color = "#6c757d";
              }}
            >
              {customer}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
