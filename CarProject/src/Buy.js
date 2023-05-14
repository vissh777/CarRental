import React from 'react';
import Alldata from './Alldata';
import Card from './Card';

const Buy = () => {

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                   Your Dream Car is Here...
                </h1>
            </div>

            <div style={{ width: "500px", display: "inline-block", marginBottom: "25px" }}>

                <Card
                    imgsrc={Alldata[0].imgsrc}
                    alt={Alldata[0].alt}
                    width={Alldata[0].width}
                    height={Alldata[0].height}
                    title={Alldata[0].title}
                    price={Alldata[0].price}
                    link={Alldata[0].link}
                />
            </div>

            <div style={{ width: "500px", display: "inline-block", marginBottom: "25px" }} >

                <Card
                    imgsrc={Alldata[1].imgsrc}
                    alt={Alldata[1].alt}
                    width={Alldata[1].width}
                    height={Alldata[1].height}
                    title={Alldata[1].title}
                    price={Alldata[1].price}
                    link={Alldata[1].link}

                />
            </div>


            <div style={{ width: "500px", display: "inline-block", marginBottom: "25px" }} >

                <Card
                    imgsrc={Alldata[2].imgsrc}
                    alt={Alldata[2].alt}
                    width={Alldata[2].width}
                    height={Alldata[2].height}
                    title={Alldata[2].title}
                    price={Alldata[2].price}
                    link={Alldata[2].link}
                />
            </div>






            <div style={{ width: "500px", display: "inline-block", marginBottom: "25px" }} >

                <Card
                    imgsrc={Alldata[3].imgsrc}
                    alt={Alldata[3].alt}
                    width={Alldata[3].width}
                    height={Alldata[3].height}
                    title={Alldata[3].title}
                    price={Alldata[3].price}
                    link={Alldata[3].link}
                />

            </div>





        </>
    );
}

export default Buy;