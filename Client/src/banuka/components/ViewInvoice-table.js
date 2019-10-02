import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";



export default class ViewInvoice extends Component {
  render() {
    return (
      <div>
        <MDBTable className="container-fluid" bordered hover responsive>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Invoice No</th>
              <th>Vendor Name</th>
              <th>Invoice Date</th>
              <th>Expected Delivery</th>
              <th>Billing Address</th>
              <th>Contact Person</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </MDBTableBody>
        </MDBTable>

        <br />

        
      </div>
    );
  }
}
