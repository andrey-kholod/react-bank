const Loader = () => {
    return (
        <>
            {/* <div className="top-0 z-10 relative spin">A</div> */}
            <div className="relative">
                <span className="absolute text-white font-bold rounded-full bg-red-600 text-lg w-12 h-12 flex flex-col justify-center items-center top-3 left-3 leading-5"><span>A</span><span className="bg-white w-4 h-0.5"></span></span>
                <div className="loader relative"></div>
            </div>
        </>
    )
}

export default Loader