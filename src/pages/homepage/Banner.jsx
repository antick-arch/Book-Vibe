import bannerImg from '../../assets/banner.png'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[60vh] container mx-auto rounded-2xl mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg"
                    />
                    <div>
                        <h1 className="text-5xl font-bold landing-5 mb-8">Books to freshen up <br />your bookshelf</h1>
                        <button className="btn btn-success text-white font-bold">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;