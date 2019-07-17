import React from "react"

const TableOfContents = () => (
  <div className="cmp-table-of-contents" id="table-of-contents">
    <h2 className="cmp-table-of-contents__title">Table of Contents</h2>
    <div className="cmp-table-of-contents__items">
      <ol className="cmp-table-of-contents__list">
        <li className="cmp-table-of-contents__item"><a href="#section-1" className="font-label cmp-table-of-contents__link">The Respondents</a></li>
        <li className="cmp-table-of-contents__item"><a href="#section-2" className="font-label cmp-table-of-contents__link">Design System Contents and Functionality</a></li>
        <li className="cmp-table-of-contents__item"><a href="#section-3" className="font-label cmp-table-of-contents__link">Values and Challenges of Design Systems</a></li>
      </ol>
      <ol className="cmp-table-of-contents__list cmp-table-of-contents__list--start4">
        <li className="cmp-table-of-contents__item"><a href="#section-4" className="font-label cmp-table-of-contents__link">Creating A Successful Design System</a></li>
        <li className="cmp-table-of-contents__item"><a href="#section-5" className="font-label cmp-table-of-contents__link">Learn More about Design Systems</a></li>
      </ol>
    </div>
  </div>
)

export default TableOfContents
