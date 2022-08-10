import { Link } from 'react-router-dom'
import React from 'react'
import "./Product.css";
import Chart from "../../Components/chart/Chart";
import {productData} from "../../DummyData"

export default function Product() {
  return (
    <div className='product'>
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
                    <img src="https://ae01.alicdn.com/kf/H40cb3d318275405096db2f7e1b774f9ar/Gaming-Earphone-In-Ear-earpiece-Wired-Headset-Noise-Cancelling-Stereo-Computer-Gamer-with-Mic-Earbuds-for.jpg_Q90.jpg_.webp" alt="" className="productInfoImg" />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <div className="productInfoKey">id:</div>
                        <div className="productInfoValue">123</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">sales:</div>
                        <div className="productInfoValue">6123</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">active:</div>
                        <div className="productInfoValue">yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">in stock:</div>
                        <div className="productInfoValue">no</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <lable>Product Name</lable>
                    <input type="text" placeholder='Apple Airpods' />
                    <lable>In Stock</lable>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <lable>Active</lable>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://ae01.alicdn.com/kf/H40cb3d318275405096db2f7e1b774f9ar/Gaming-Earphone-In-Ear-earpiece-Wired-Headset-Noise-Cancelling-Stereo-Computer-Gamer-with-Mic-Earbuds-for.jpg_Q90.jpg_.webp" alt="" className="productUploadImg" />
                        <lable for="file"></lable>
                        <input type="file" id="file" />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}
