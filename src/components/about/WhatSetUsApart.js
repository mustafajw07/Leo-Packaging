import Wrapper from "../../asserts/styles/about/WWS"
import f from "./asserts/discount.png"
import q from "./asserts/quality.png"


function WhatSetUsApart() {
    return <Wrapper>
        <h3>What sets us apart?</h3>
        <div class="card_wrapper">
            <div class="card">
                <div className="info">
                    <img src={f} alt="50%" />
                    <h2> Faster</h2>
                    <p>While the market delivers
                        products with a turnaround
                        time of 4-5 business days,
                        we deliver within 2-3
                        working days</p>
                </div>
            </div>
            <div class="card">
                <div className="info">
                    <img src={q} alt="50%" />
                    <h2>Quality Assurance</h2>
                    <p>A series of 7 tests including a
                        GSM Consistency Examination
                        and Bifocal Strength Testing is
                        conducted to ensure
                        consistent quality</p>
                </div>
            </div>
            <div class="card">
                <div className="info">
                    <img src={f} alt="50%" />
                    <h2>Cheaper</h2>
                    <p>Our products are priced
                        25 fills cheaper (per kg)
                        than the market value of
                        similar products sold by
                        competitors</p>
                </div>
            </div>

        </div>
    </Wrapper>;
}

export default WhatSetUsApart;
