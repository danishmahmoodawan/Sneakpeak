
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <>
 <section className="top_section">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center top_image">
                        <div className="social_div">
                            <img src="assets/images/ICON_INSTA24.png" alt="ICON_INSTA24" className="desktop_image"/>
                            <img src="assets/images/ICON_MEDIUM25.png" alt="ICON_MEDIUM25" className="desktop_image"/>
                            <img src="assets/images/ICON_OS26.png" alt="ICON_OS26" className="desktop_image"/>
                            <img src="assets/images/ICON_TWITTER27.png" alt="ICON_TWITTER27" className="desktop_image"/>
                            <img src="assets/images/ICON_DISCORD28.png" alt="ICON_DISCORD28" className="desktop_image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="first_section"></section>
       
        <section className="second_section">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 left_sec_col img_col">
                        <div className="row">
                          <div className="col-md-7 col-12 right_inner_sec_col row_set_whi">
                                <div className="row">
                                    <div className="col-6 col_white">
                                        <p>MINT PRICE</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>0.39 SOL</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col_white">
                                        <p>SUPPLY</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>1111/5555</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col_white">
                                        <p>CONDITION</p>
                                    </div>
                                    <div className="col-6 col_black">
                                        <p>1 PER TX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-12 col-md-2 left_sec_col">
                        <div className="row"> / </div>
                    </div>
                    <div className="col-12 col-md-2 left_sec_col">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eros cursus, convallis ligula tristique, malesuada purus. Vestibulum consectetur mollis tristique. Nunc gravida efficitur odio ut luctus. Praesent viverra lorem eu erat hendrerit, eget lacinia elit sagittis. Pellentesque accumsan ac mi eget semper.
                        </p> 
                    </div>
                </div>
            </div>
        </section>
        
        <section className="third_section">
            <div className="container-fluid">
                <div className="row third_row">
                    <div className="col-md-6 col-12 left_third_col"></div>
                    <div className="col-md-6 col-12 right_third_col">
                        <div className="container">
                            <a className="button rarity">
                                RARITY
                            </a>
                            <div className="row">
                                <div className="col-6">
                                    <img src="assets/images/PREVIEW_Artboard.png" alt="PREVIEW_Artboard" className="desktop122_image" />
                                    <a className="button common">COMMON</a>
                                </div>
                                <div className="col-6">
                                    <img src="assets/images/PREVIEW_Artboard.png" alt="PREVIEW_Artboard" className="desktop122_image" />
                                    <a className="button uncommon">UNCOMMON</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <img src="assets/images/PREVIEW_Artboard.png" alt="PREVIEW_Artboard" className="desktop122_image" />
                                    <a className="button rare">RARE</a>
                                </div>
                                <div className="col-6">
                                    <img src="assets/images/PREVIEW_Artboard.png" alt="PREVIEW_Artboard" className="desktop122_image" />
                                    <a className="button epic">EPIC</a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
        <section className="forth_section">
            <div className="container-fluid faq_container">
                <h2>FREQUENTLY ASKED QUESTIONS</h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-12 forth_left_col">
                        <p>SOME QUESTION NEEDS SOME ANSWERS SOME QUESTIONS HERE SOME QUESTIONS?</p>
                        <p>SOME QUESTION NEEDS SOME ANSWERS SOME QUESTIONS</p>
                        <p>SOME QUESTION NEEDS SOME ANSWERS SOME QUESTIONS HERE SOME QUESTIONS?</p>
                        <p>SOME QUESTION NEEDS SOME ANSWERS SOME QUESTIONS</p>
                        <p>SOME QUESTION NEEDS SOME ANSWERS SOME QUESTIONS HERE SOME QUESTIONS?</p>
                        <p>SOME QUESTION NEEDS SOME ANSWERS SOME QUESTIONS</p>
                        <p>SOME QUESTION NEEDS SOME ANSWERS SOME QUESTIONS HERE SOME QUESTIONS?</p>
                    </div>
                    <div className="col-md-5 col-12 forth_right_col">
                        <img src="assets/images/PREVIEW_Artboard321293.png" alt="PREVIEW_Artboard321293" className="desktop122_image" />
                        <p>THE ANSWERS ARE ANSWERED BY THIS KONGZ OBVIOUSLY ANSWER IS ALL HERE!</p>
                    </div>
                </div>
            </div>
        </section>
     
        <section className="fifth_section">
            <div className="container fifth_container">
                <h2 className="road_map">ROAD MAP</h2>
                <div className="row">
                    <div className="col-md-4 col-12 fifth_left_col">
                        <h2>25%</h2>
                    </div>
                    <div className="col-md-8 col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eros cursus, convallis ligula tristique, malesuada purus. Vestibulum consectetur mollis tristique. Nunc gravida efficitur odio ut luctus. Praesent viverra lorem eu erat hendrerit, eget lacinia elit sagittis. Pellentesque accumsan ac mi eget semper.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-12 fifth_left_col">
                        <h2>50%</h2>
                    </div>
                    <div className="col-md-8 col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eros cursus, convallis ligula tristique, malesuada purus. Vestibulum consectetur mollis tristique. Nunc gravida efficitur odio ut luctus. Praesent viverra lorem eu erat hendrerit, eget lacinia elit sagittis. Pellentesque accumsan ac mi eget semper.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-12 fifth_left_col">
                        <h2>75%</h2>
                    </div>
                    <div className="col-md-8 col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eros cursus, convallis ligula tristique, malesuada purus. Vestibulum consectetur mollis tristique. Nunc gravida efficitur odio ut luctus. Praesent viverra lorem eu erat hendrerit, eget lacinia elit sagittis. Pellentesque accumsan ac mi eget semper.</p>
                    </div>
                </div>
                <div className="row fifth_last_row">
                    <div className="col-md-4 col-12 fifth_left_col">
                        <h2>100%</h2>
                    </div>
                    <div className="col-md-8 col-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non eros cursus, convallis ligula tristique, malesuada purus. Vestibulum consectetur mollis tristique. Nunc gravida efficitur odio ut luctus. Praesent viverra lorem eu erat hendrerit, eget lacinia elit sagittis. Pellentesque accumsan ac mi eget semper.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid logo_container">
                <div className="row text-center footer_row">
                    <div className="col-5 col_ew"></div>
                    <div className="col-2 empty_div">
                        <img src="assets/images/logo_n.png" alt="LOGO" className="desktop122_image" />
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </section>
	</>
  );
}

export default Home;
