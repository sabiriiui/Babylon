import React from 'react';
import { Link } from "react-router-dom";
import '../sass/footer.css';
import InstagramEmbed from 'react-instagram-embed';

export default class Footer extends React.Component {

    constructor() {
        super();
    }


    render() {

        return (<div><div className="custom-footer flexRow" style={{justifyContent: "space-around"}}>
            <div className="footer-sub-div">
                <h3 className="footer-div-heading">Contact</h3>
                <div style={{ color: "#ccc" }}>
                    <div className="flexRow mb10"><i class="fa fa-map-marker fa-fw"></i> Jalan bypass Ngurah rai no.77xx benoa</div>
                    <div className="flexRow mb10"><i class="fa fa-phone fa-fw"></i> +62287877976991 | +6287877976992  </div>
                    <div className="flexRow mb10"><i class="fa fa-envelope fa-fw"></i> info@babylonholidays.com</div>
                </div>
            </div>
            <div className="footer-sub-div ml50">
                <h3 className="footer-div-heading">Information</h3>
                <div className="footer-links-div">
                    <Link to=""><div className="flexRow footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Blogs</span></div></Link>
                    <Link to=""><div className="flexRow footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Privacy Policy</span></div></Link>
                    <Link to={"/contactus"}> <div className="flexRow footer-links noBorder"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Contact Us</span></div></Link>
                </div>
            </div>
            <div className="footer-sub-div ml50">
                <h3 className="footer-div-heading">Our Menu</h3>
                <div className="footer-links-div">
                    <Link to="/">
                      <div className="flexRow footer-links noTopPadding"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Home</span></div></Link>
                    <Link to="/"><div className="flexRow footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Tours</span></div></Link>
                    <Link to="#"><div className="flexRow footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Terms</span></div></Link>
                    <Link to="/services"><div className="flexRow footer-links"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Services</span></div></Link>
                    <Link to={"/contactus"}> <div className="flexRow footer-links noBorder"><i class="fa fa-chevron-right"></i><span className="footer-link-text">Contact</span></div></Link>
                </div>
            </div>
            <div className="footer-sub-div ml50" style={{overflowY:'scroll'}}>
                <InstagramEmbed
                    url='https://www.instagram.com/p/BhONENjF25W/?taken-by=babylonholidays'
                    maxWidth={210}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                />
            </div>


        </div>
            <div className="footer-copyright-div">
                <div className="footer_icons">
                    <a href="https://www.facebook.com/babylonholidays/"><span className="floatLeft fa fa-facebook"></span></a>
                    <a href="https://twitter.com/Babylonholidays"><span className=" floatLeft fa fa-twitter"></span></a>
                    <a href="https://www.instagram.com/babylonholidays"><span className="floatLeft fa fa-instagram"></span></a>
                </div>
                <div className="copyright"> Copyright © 2013-2018 Babylon holidays, All rights reserved</div>
            </div>
        </div >);

    }

}
