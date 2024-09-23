function FeaturesPage() {
    return (
        <div className="min-h-[100vh] flex flex-col  justify-around overflow-hidden gap-4 bg-[#181618]">
                <div className="flex flex-col text-center text-white my-6 py-8 gap-6">
                    <h2 className="text-[#08BCA9] text-lg">Features</h2>
                    <h3 className="text-6xl font-bold">Dark Theme Design</h3>
                    <p>Enjoy a visually appealing dark theme that makes for a pleasant and comfortable reading experience.</p>
                    </div>
                <ul className="flex flex-row flex-wrap max-sm:flex-col text-white justify-center gap-4 mb-8 ">
                    <li className="max-w-[470px] px-4 flex flex-col text-center items-center my-4 gap-3" >
                        <div className="h-[80px] aspect-square flex justify-center items-center rounded-[80px] border-2 bg-[#CDF0EC]  border-white"><svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className=" text-[#007E71] lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg></div>
                        <h3>Extensive Library</h3>
                        <p>Access a vast collection of books from various genres and authors, all available for free.</p>
                    </li>
                    <li className="max-w-[470px] px-4 flex flex-col text-center items-center my-4 gap-3" >
                    <div className="h-[80px] aspect-square flex justify-center items-center rounded-[80px] border-2 bg-[#CDF0EC] border-white"><svg xmlns="http://www.w3.org/2000/svg" width="80%" height="75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className=" text-[#007E71] lucide lucide-battery-charging pl-1"><path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"/><path d="m11 7-3 5h4l-3 5"/><line x1="22" x2="22" y1="11" y2="13"/></svg></div>
                        <h3>User Friendly</h3>
                        <p>Our intuitive interface makes it easy to find and read your favorite books.</p>
                    </li>
                    <li className="max-w-[470px] px-4 flex flex-col text-center items-center my-4 gap-3" >
                    <div className="h-[80px] aspect-square flex justify-center items-center rounded-[80px] border-2 bg-[#CDF0EC]  border-white"><svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className=" text-[#007E71] lucide lucide-archive pt-1"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg></div>
                        <h3>Personalized Recommendations</h3>
                        <p>Get book suggestions based on your reading history and preferences.</p>
                    </li>
                    <li className="max-w-[470px] px-4 flex flex-col text-center items-center my-4 gap-3" >
                    <div className="h-[80px] aspect-square flex justify-center items-center rounded-[80px] border-2  bg-[#CDF0EC] border-white"><svg xmlns="http://www.w3.org/2000/svg" width="75%" height="70%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#007E71] bg-transparent lucide lucide-message-circle "><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg></div>
                        <h3>Offline Reading</h3>
                        <p>Download books to read offline, so you can enjoy them even without an internet connection.</p>
                    </li>
                    <li className="max-w-[470px] px-4 flex flex-col text-center items-center my-4 gap-3" >
                    <div className="h-[80px] aspect-square flex justify-center items-center rounded-[80px] border-2 bg-[#CDF0EC] border-white"><svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className=" text-[#007E71] lucide lucide-cloud-fog"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/></svg></div>
                        <h3>Community Features</h3>
                        <p>Join a community of readers, share reviews, and engage in discussions about your favorite books.</p>
                    </li>
                    <li className="max-w-[470px] px-4  flex flex-col text-center items-center my-4 gap-3" >
                    <div className="h-[80px] aspect-square flex justify-center items-center rounded-[80px] border-2 bg-[#CDF0EC] border-white"><svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className=" text-[#007E71] lucide lucide-check pr-1 pt-1"><path d="M20 6 9 17l-5-5"/></svg></div>
                        <h3>Secure And Private</h3>
                        <p>Your reading habits and personal data are kept secure and private at all times.</p>
                    </li>
                </ul>
        </div>
    )
}

export default FeaturesPage