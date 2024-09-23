
function Footer() {
    return (
        <div className="bg-[#181618] p-4">
            <div className="flex flex-col justify-between bg-[#2a2629] text-white rounded-2xl m-2 py-4">
                <div className="flex flex-row flex-wrap max-sm:flex-col justify-between items-start py-6 mx-8 border-b-2 border-white "> 
                    <div className="flex flex-col mb-2 max-sm:text-xl">
                        <h4>The Book Store</h4>
                        <p>Read your Hearts Out !</p>
                        
                    </div>
                    <div className='max-sm:border-[1px] max-sm:border-white max-sm:w-full'></div>
                    <div className="flex flex-row max-sm:flex-col flex-wrap w-[50%] text-lg">
                        <ul className="lists max-sm:mx-0">
                            <li>Company</li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Newsroom</li>
                        </ul>
                        <ul className="lists max-sm:mx-0">
                            <li>Benefits</li>
                            <li>Fast Access</li>
                            <li>BookCards</li>
                            <li>Latest News</li>
                        </ul>
                        <ul className="lists max-sm:mx-0">
                            <li>Social</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Threads</li>
                        </ul>



                    </div>
                </div>
                <div className=" max-md:flex-col flex flex-row justify-between px-8 mt-4">
                    <p>All Rights Reserved 2024</p>
                    <ul className="flex flex-row gap-4">
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer