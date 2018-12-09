import React from "react";
// import {CenteredText} from './../../CommonStyles';
import "./About.css";
//

export default () => (
  <div>
    <div style={{textAlign: 'center'}}>
      <h2>About us</h2>
      <br />
      <p>
        Shuddhi Fund is a volunteer-run non-profit organization based in India.
        We are committed to doing what is necessary with transparency,
        efficiency and inclusivity.
      </p>
    </div>
    <br />
    <br />
    <br />
    <hr />
    <h3>2030 Mandate</h3>
    <div>
      <ol className="mandate-list">
        <li>
          Lay the foundation for a sustainable model of <b>education</b> that
          fosters independent thinking and exploration, encourages discovery and
          nurtures constructive self-expression
        </li>
        <li>
          Consolidate safety and autonomy of <b>women</b> in the society and lay
          the foundation for a large-scale rise in female leadership
        </li>
        <li>
          Foster <b>citizen initiative</b> and promote active citizen
          participation in the making of our nation
        </li>
        <li>
          Promote availability and consumption of <b>food</b> that is wholesome,
          local, organic and environmentally friendly
        </li>
        <li>
          Establish the foundation for improved transparency and integrity of{" "}
          <b>information</b> that is consumed by the public
        </li>
      </ol>
    </div>
  </div>
);
