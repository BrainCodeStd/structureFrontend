/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card";


function UnAuthorized(props) {
  return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={6} mdOffset={3}>
              <Card
                title="UnAuthorized"
                ctAllIcons
                content={
                  <Row>
                    401 - Unauthorized: Access is denied due to invalid credentials.
                  </Row>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
  );

}

export default UnAuthorized;
