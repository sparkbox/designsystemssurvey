import React from "react"

const PlotPoint = ( percent ) => {
  return ((400 - (400 * (percent * 2))))
}

const ComparisonChartSVG = () => {
  return (
    <svg viewBox="-2 0 904 422" className="cmp-comparison-chart__svg"  xmlns="http://www.w3.org/2000/svg">
      <path d="M1,0 1,420
               M100,0 100,420
               M200,0 200,420
               M300,0 300,420
               M400,0 400,420
               M500,0 500,420
               M600,0 600,420
               M700,0 700,420
               M800,0 800,420
               M900,0 900,420"
            stroke="var(--color-gray-30)"
            stroke-width="1"
            vector-effect="non-scaling-stroke" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.41)}cx="1" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.34)}cx="1" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="1" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.34)}cx="100" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.36)}cx="100" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="100" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.33)}cx="200" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.37)}cx="200" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="200" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.31)}cx="300" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.43)}cx="300" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="300" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.21)}cx="400" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.32)}cx="400" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="400" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.16)}cx="500" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.33)}cx="500" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="500" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.13)}cx="600" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.35)}cx="600" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="600" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.12)}cx="700" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.23)}cx="700" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="700" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.12)}cx="800" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.16)}cx="800" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="800" vector-effect="non-scaling-size" />
    
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.08)} cx="900" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray)" cy={PlotPoint(0.1)}cx="900" vector-effect="non-scaling-size" />
      <circle r="2" fill="var(--color-gray-30)" cy="420" cx="900" vector-effect="non-scaling-size" />

      <path d={`M
              1, ${PlotPoint(0.41)}
              100, ${PlotPoint(0.34)}
              200, ${PlotPoint(0.33)}
              300, ${PlotPoint(0.31)}
              400, ${PlotPoint(0.21)}
              500, ${PlotPoint(0.16)}
              600, ${PlotPoint(0.13)}
              700, ${PlotPoint(0.12)}
              800, ${PlotPoint(0.12)}
              900, ${PlotPoint(0.08)}
            `}
            fill="none"
            stroke="var(--color-gray)"
            stroke-width="1" vector-effect="non-scaling-stroke" />
      <path d={`M
              1, ${PlotPoint(0.34)}
              100, ${PlotPoint(0.36)}
              200, ${PlotPoint(0.37)}
              300, ${PlotPoint(0.43)}
              400, ${PlotPoint(0.32)}
              500, ${PlotPoint(0.33)}
              600, ${PlotPoint(0.35)}
              700, ${PlotPoint(0.23)}
              800, ${PlotPoint(0.16)}
              900, ${PlotPoint(0.1)}
            `}
            fill="none"
            stroke="var(--color-gray)"
            stroke-width="1"
            stroke-dasharray="2 3" vector-effect="non-scaling-stroke" />
      <path d="M1,400 900,400" stroke="var(--color-white)" stroke-width="1" />
    </svg>
  )
}

const ComparisonChart = () => {
  return (
    <>
      <div className="cmp-comparison-key" aria-hidden={true}>
        <div className="cmp-comparison-key__item">
          <svg height="16" width="20">
            <path d="M0,8 20,8" stroke="currentColor" stroke-width="1" />
          </svg>
          <div className="cmp-comparison-key__title">Top Priorities</div>
        </div>
        <div className="cmp-comparison-key__item">
          <svg height="16" width="20">
            <path d="M0,8 20,8" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3" />
          </svg>
          <div className="cmp-comparison-key__title">Top Challenges</div>
        </div>
      </div>
      <div className="cmp-comparison-chart" aria-hidden={true}>
        <div>
          <div className="cmp-comparison-chart__wrapper">
            <div className="cmp-comparison-chart__y-axis">
              <div className="cmp-comparison-chart__y-axis-label">Responses</div>
              <div className="cmp-comparison-chart__y-axis-item">50%</div>
              <div className="cmp-comparison-chart__y-axis-item">40%</div>
              <div className="cmp-comparison-chart__y-axis-item">30%</div>
              <div className="cmp-comparison-chart__y-axis-item">20%</div>
              <div className="cmp-comparison-chart__y-axis-item">10%</div>
              <div className="cmp-comparison-chart__y-axis-item">0%</div>
            </div>
            <div className="cmp-comparison-chart__container">
              <ComparisonChartSVG />
            </div>
            <div className="cmp-comparison-chart__x-axis">
              <div className="cmp-comparison-chart__x-axis-item">Expanding the design system</div>
              <div className="cmp-comparison-chart__x-axis-item">Adoption</div>
              <div className="cmp-comparison-chart__x-axis-item">Parity between design & code</div>
              <div className="cmp-comparison-chart__x-axis-item">Overcoming technical/<wbr />creative debt</div>
              <div className="cmp-comparison-chart__x-axis-item">Internal education</div>
              <div className="cmp-comparison-chart__x-axis-item">Governance</div>
              <div className="cmp-comparison-chart__x-axis-item">Staffing</div>
              <div className="cmp-comparison-chart__x-axis-item">Contribution</div>
              <div className="cmp-comparison-chart__x-axis-item">Leadership buy&#8209;in</div>
              <div className="cmp-comparison-chart__x-axis-item">Transparency about changes</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ComparisonChart
