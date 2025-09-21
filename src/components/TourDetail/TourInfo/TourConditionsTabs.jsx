import React, { useState, useEffect } from "react";

const TourConditionsTabs = ({ tour }) => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (tour.tourConditions?.length > 0 && !activeTab) {
      setActiveTab(tour.tourConditions[0].conditionId);
    }
  }, [tour, activeTab]);

  if (!tour.tourConditions || tour.tourConditions.length === 0) {
    return null;
  }

  return (
    <div className="tour-conditions">
      <div className="tab-header">
        {tour.tourConditions.map((cond) => (
          <button
            key={cond.conditionId}
            onClick={() => setActiveTab(cond.conditionId)}
            className={`tab-btn ${
              activeTab === cond.conditionId ? "active" : ""
            }`}
          >
            {cond.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tour.tourConditions.map(
          (cond) =>
            activeTab === cond.conditionId && (
              <div key={cond.conditionId} className="condition-content">
                <div dangerouslySetInnerHTML={{ __html: cond.content }} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TourConditionsTabs;
