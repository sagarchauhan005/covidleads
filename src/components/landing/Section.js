import React from 'react';
import {Link} from "react-router-dom";



const Section = () => {
    return (
        <div className="container">
        <section className="row">
            <div className="col-md-4 text-center top-buffer">
                <Link to = "leads" style={{ textDecoration: 'none' , color:'black'}}>
                <div className="card">
                    <div className="card-block mt-3">
                        <svg  className="mt-3 mb-4" id="Bold" enable-background="new 0 0 24 24"
                              height="70" viewBox="0 0 24 24" width="70"
                              xmlns="http://www.w3.org/2000/svg"><path d="m8.727 13.5c-.266 0-.522-.106-.71-.296l-2.727-2.75c-.389-.392-.386-1.025.006-1.414.392-.388 1.026-.386 1.414.006l1.968 1.985 4.066-4.686c.361-.418.994-.462 1.411-.1s.462.994.1 1.411l-4.773 5.5c-.182.21-.444.334-.722.344-.011 0-.022 0-.033 0z"/><path d="m23 24c-.256 0-.512-.098-.707-.293l-6.98-6.98c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l6.98 6.98c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z"/><path d="m9.75 19.5c-5.376 0-9.75-4.374-9.75-9.75s4.374-9.75 9.75-9.75 9.75 4.374 9.75 9.75-4.374 9.75-9.75 9.75zm0-17.5c-4.273 0-7.75 3.477-7.75 7.75s3.477 7.75 7.75 7.75 7.75-3.477 7.75-7.75-3.477-7.75-7.75-7.75z"/></svg>
                        <h3 className="card-title">Find Lead</h3>
                        <p className="text-gray-dark">Find availability of ICU Beds, Remedesvir,
                            RT-PCR test, Plasma Donor, Ventilator beds etc, please provide here </p>
                    </div>
                </div>
                </Link>
            </div>

            <div className="col-md-4 text-center top-buffer">
                <Link to = "submit" style={{ textDecoration: 'none', color:'black'}}>
                    <div className="card">
                        <div className="card-block">
                            <svg className="mt-3 mb-4" enable-background="new 0 0 510 510" height="65pt" viewBox="0 0 510 510" width="65pt" xmlns="http://www.w3.org/2000/svg"><g><path d="m196.507 30 18.002-30h-109.016l18 30z"/><path d="m500 390v-270h-490v270zm-195-210h60v30h-60zm0 60h90v30h-90zm-166.673 91.213-63.639-63.64 21.213-21.213 42.426 42.426 106.066-106.066 21.213 21.213zm166.673-31.213h135v30h-135z"/><path d="m310 53.209c0-29.339-23.869-53.209-53.209-53.209h-7.227l-1.773 2.836-34.298 57.164h-106.986l-34.619-57.715-1.27-2.285h-7.409c-29.339 0-53.209 23.87-53.209 53.209v36.791h300z"/><path d="m10 420v36.791c0 29.339 23.87 53.209 53.209 53.209h193.582c29.34 0 53.209-23.87 53.209-53.209v-36.791z"/></g></svg>
                            <h3 className="card-title" >Submit Lead</h3>
                            <p className="text-gray-dark">Submit leads about ICU Beds, Remedesvir,
                                RT-PCR test, Plasma Donor, Ventilator beds etc here. </p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="col-md-4 text-center top-buffer">
                <Link to = "sourced" style={{ textDecoration: 'none', color:'black'}}>
                    <div className="card">
                        <div className="card-block">
                            <svg className="mt-3 mb-4" enable-background="new 0 0 510 510" height="65pt" viewBox="0 0 512 512" width="65pt" xmlns="http://www.w3.org/2000/svg"><g id="solid"><path d="m65.294 218.874a45.27 45.27 0 1 1 45.269 45.27 45.321 45.321 0 0 1 -45.269-45.27zm82.941 92.547v72.579h-76.283v-45.27a8 8 0 0 0 -16 0v45.27h-23.952v-61.917a41.987 41.987 0 0 1 41.94-41.939h73.246a42.127 42.127 0 0 1 8.553.873 65.141 65.141 0 0 0 -7.504 30.404zm54.371-118.95a53.394 53.394 0 1 1 53.394 53.393 53.455 53.455 0 0 1 -53.394-53.393zm145.159 191.529h-30.045v-53.394a8 8 0 0 0 -16 0v53.394h-91.44v-53.394a8 8 0 0 0 -16 0v53.394h-30.045v-72.579a49.614 49.614 0 0 1 49.557-49.557h84.416a49.614 49.614 0 0 1 49.557 49.557zm8.4-165.126a45.27 45.27 0 1 1 45.27 45.27 45.321 45.321 0 0 1 -45.268-45.27zm123.835 165.126h-23.952v-45.27a8 8 0 0 0 -16 0v45.27h-76.283v-72.579a65.139 65.139 0 0 0 -7.5-30.4 42.138 42.138 0 0 1 8.55-.879h73.245a41.987 41.987 0 0 1 41.94 41.941z"/></g></svg>
                            <h3 className="card-title" >Crowd Sourced</h3>
                            <p className="text-gray-dark">Data gathered from various sources over the internet and managed by different people</p>
                        </div>
                    </div>
                </Link>
            </div>

        </section>
        </div>
    );
};



export default Section;
