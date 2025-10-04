import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-3 ' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-6 p-5 '>
                    <h1 className='fs-3 p-2'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do i activate F&O, why is my order getting rejected..' /> <br></br> 
                    <a href='' className='p-3'>Track account opening </a> 
                    <a href='' className='p-3'>Track segment activation </a> 
                    <a href='' className='p-3'>Intraday margins </a> <br></br>
                    <a href='' className='p-3'>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol className='p-2'>
                        <li className='p-2'><a href=''>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                        <li className='p-2'><a href=''>Revision in expiry day of Index and Stock derivatives contracts</a></li>
                    </ol>
                     
                     
                </div>
                 
            </div>
        </section>
     );
}

export default Hero;
 