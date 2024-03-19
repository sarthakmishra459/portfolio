import React from 'react'
import { MaskContainer } from './ui/svg-mask-effect'
import About from './About'

function Landing() {
    return (
        <div className=' min-h-screen'>
            <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full z-0" controls={false} preload="none">
                <source src="https://scarlet-clinical-meadowlark-489.mypinata.cloud/ipfs/QmRvT8S8NmmzLAzXxsa3uZKHZVDccxtSjxXuNa4FnApvgR?pinataGatewayToken=1QzxJImJOBlxVEJXcKOqEJIpjQ9mJ7-mn-M2Ot0_AmI4oVqRg7OiTDwm30kfbYFC&_gl=1*1ktqv94*_ga*MjI3Njk4MjkyLjE2OTI3OTczMDc.*_ga_5RMPXG14TE*MTcwNDYyMTMwMy45LjEuMTcwNDYyMTM4Ny40OS4wLjA" type="video/mp4" />

                Your browser does not support the video tag.
            </video>

            <MaskContainer
                revealText={
                    <div className="max-w-4xl mx-auto text-center  md:tracking-widest tracking-normal md:leading-[8vw] leading-[8vh] md:text-[6vw] text-[6vh] font-bold text-[#B7AB98] ">
                        <span className="font-normal text-4xl">Sarthak Mishra</span> <br></br>UNSATISFIED<br></br><span className="text-green-400">&#123;CURIOSITY&#125;</span><br></br>FOR<br></br>CODING
                    </div>
                }
                className="min-h-screen items-center justify-between w-full overflow-hidden">

                <div

                    className="h-[40rem]  rounded-md"
                >

                    <p className="max-w-4xl mx-auto text-white text-center  md:text-[6vw] text-[8vh] tracking-widest md:leading-[8vw] leading-[8vh] font-bold">

                        <span className="font-normal text-4xl">Sarthak Mishra</span> <br></br>ALWAYS <br></br>&#123;LOOKING&#125;<br></br>FOR<br></br>MORE

                    </p>

                </div>


            </MaskContainer>
        </div>
    )
}

export default Landing