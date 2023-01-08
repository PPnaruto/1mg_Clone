import React from 'react';
import style from "../../styles/SingleProduct.module.css"

const ContentDetails = () => {
  return (
    // <div class="style__authored-by-container___29x3w">
    //     <div class="style__header___2pu5B">Content Details</div>
    //     <div>
    //         </div>
    //         <div class="style__border-bottom___2ZMDB style__last-updated___1EMgB">
    //             <div>Last updated</div><div>05 Jan 2023 | 10:20 PM (IST)</div>
    //             </div>
    //             <div class="style__editorial-wrapper___2Q1rf style__border-bottom___2ZMDB">
    //                 <div class="style__editorial-container___27rvi">
    //                     <div class="style__image-container___2MBY_"><div class=""><img alt="editorial-image" src="https://onemg.gumlet.io/hpmev62q0ukad0pyv31g.png" class="style__image___Ny-Sa style__loaded___22epL"/></div>
    //                     </div><div class="style__content___2U9Z1">
    //                         <h3 class="style__editorialText___5PN4L">We provide you with authentic, trustworthy and revelant information</h3>
    //                         <a href="https://www.1mg.com/editorial-policy-processes" class="style__link___2veYP">Want to know more</a></div>
    //                         </div>
    //                         </div>
    //                         <div>
    //                             <div class="style__report-error-container___3AXn4"><div class="style__error-image-container___2LGy9"><img alt="report-error" src="https://onemg.gumlet.io/cross_with_tag_1_vsxphe.svg" class="style__error-image___fXCWc style__image___Ny-Sa style__loaded___22epL"/>
    //                             </div><div class="style__content___2WmLN"><h3 class="style__reportText___3zkcw">Have issue with the content?  </h3><a>Report Problem</a></div>
    //                             <div></div>
    //                             </div></div>
    //                             </div>
    <div className={style.content_box}>
        <p style={{fontSize:"16px"}}>Content Details</p>
        <div className={style.lastupdate}>
            <p>Last Updated</p>
            <p>9 Jan 2023 | 12:01 AM (IST)</p>
        </div>
        <hr />
        <div className={style.content_info}>
            <div>
                <img style={{width:"80px",height:"80px"}} src="https://onemg.gumlet.io/hpmev62q0ukad0pyv31g.png" alt="" />
            </div>
            <div style={{marginTop:"12px"}}>
            <h3 className={style.content_detail}>We provide you with authentic, trustworthy and revelant information</h3>
            <h3 style={{color:"#ff6f61",fontSize:"12px"}}>Want to know more</h3>
            </div>
        </div>
        <hr />
        <div className={style.content_report}>
            <img style={{width:"30px",height:"25px"}} src="https://onemg.gumlet.io/cross_with_tag_1_vsxphe.svg" alt="" />
            <p style={{fontSize:"12px"}}>Have issue with the content?</p>
            <h4 style={{color:"#ff6f61",fontSize:"12px"}}> Report issue</h4>
        </div>
    </div>
  )
}

export default ContentDetails;