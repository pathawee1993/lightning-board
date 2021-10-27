import React,{ useState, useEffect } from 'react'
import SlideShow from '../../../components/SlideShow/SlideShow'

function HomeContent2Mobile(props) {
    return(
        <div>
            <div className='row content2 justify-center'>
                <div className='column text-center' style={{maxWidth: '80%', marginLeft:'auto', marginRight: 'auto', display:'block'}}>
                    <br/>
                    <br/>
                    <br/>
                    <h2>Increase Operational Success Across Your Entire Enterprise</h2>
                    <div style={{width: '80%', borderTop: '3px solid #F4A442',marginLeft:'auto', marginRight: 'auto', display:'block', margin: '50px'}}>

                    </div>
                    For almost 20 years, Lightningboards has been the authoritative source helping management increase operational performance enterprise-wide. Our umbrella platform allows you to manage and measure all of your technology and team members proactively in real time.
                </div>
            </div>
            <div className='row content2 justify-center'>
                <div className='column text-center' style={{width: '80%', display: 'block', marginTop: 'auto', marginBottom: 'auto', height: 'auto'}}>
                    <h4>More than a software. We are an Operational Performance Improvement Platform That Helps You Turn Data Into Actionable Success Decisions</h4>
                    <div style={{width: '80%', borderTop: '3px solid #F4A442',marginLeft:'auto', marginRight: 'auto', display:'block', margin: '50px'}}>
                    </div>
                </div>
            </div>
            <div className='row content2 justify-center'>
                <div className='column' style={{maxWidth: '80%'}}>
                    <div className='row'>
                        <div className='column' style={{width: '50px'}}>
                            <h2><i className="fa fa-project-diagram"></i></h2>
                        </div>
                        <div className='column' style={{maxWidth: '80%'}}>
                            <h2>Any Data</h2>
                            Ensure data quality: Connect, combine, and clean data from 160+ sources with our built-in ETL Tool, the Data Hub
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column' style={{width: '50px'}}>
                            <h2><i className="fa fa-desktop"></i></h2>
                        </div>
                        <div className='column' style={{maxWidth: '80%'}}>
                            <h2>Any Device</h2>
                            Ensure data quality: Connect, combine, and clean data from 160+ sources with our built-in ETL Tool, the Data Hub
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column' style={{width: '50px'}}>
                            <h2><i className="fa fa-clock"></i></h2>
                        </div>
                        <div className='column' style={{maxWidth: '80%'}}>
                            <h2>Any Time</h2>
                            Hundreds of chart options and fully customizable design to effectively uncover data insights and foster collaboration that operates in real time
                        </div>
                    </div>
                    <div className='row'>
                        <div className='column' style={{width: '50px'}}>
                            <h2><i className="fa fa-globe"></i></h2>
                        </div>
                        <div className='column' style={{maxWidth: '80%'}}>
                            <h2>Any Where</h2>
                            Via mobile or desktop, share dashboards internally or publicly, keeping back-end data secure. Role-based permissions and SSL, SSO, & LDAP integration also available
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContent2Mobile