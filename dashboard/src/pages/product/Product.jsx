import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="data:image/png;base64,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" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}