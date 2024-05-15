
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel w-full rounded-lg mt-10 h-[650px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-slate-300" style={{ backgroundImage: 'url(https://i.ibb.co/cChJDBz/beautiful-library-monastery-corias-78846-16.jpg)' }}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl text-white font-bold">Libraries Are Places To Acquire Knowledge</h1>
                                <p className="mb-5">Reading books increases knowledge. The more you read, the more you learn.</p>
                                <button className="btn btn-accent rounded-lg">Learn Book</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-gray-400">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-gray-400">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-slate-300" style={{ backgroundImage: 'url(https://i.ibb.co/svSrKTQ/1-Lu-Jt0eh-ROJw-Klg-Mh6u9-N8-A.webp)' }}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl text-white font-bold">Libraries Are Places To Acquire Knowledge</h1>
                                <p className="mb-5">Reading books increases knowledge. The more you read, the more you learn.</p>
                                <button className="btn btn-accent rounded-lg">Learn Book</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-gray-400">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-gray-400">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-slate-300" style={{ backgroundImage: 'url(https://i.ibb.co/M5SRfSw/3d-rendering-classic-interior-23-2150943454.jpg)' }}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl text-white font-bold">Libraries Are Places To Acquire Knowledge</h1>
                                <p className="mb-5">Reading books increases knowledge. The more you read, the more you learn.</p>
                                <button className="btn btn-accent rounded-lg">Learn Book</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-gray-400">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-gray-400">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero min-h-screen bg-slate-300" style={{ backgroundImage: 'url(https://i.ibb.co/hXSp9c6/man-watching-news-office-23-2149726070.jpg)' }}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl text-white font-bold">Libraries Are Places To Acquire Knowledge</h1>
                                <p className="mb-5">Reading books increases knowledge. The more you read, the more you learn.</p>
                                <button className="btn btn-accent rounded-lg">Learn Book</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-gray-400">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-gray-400">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;