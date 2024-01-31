import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton';

const VideoCardShimmer = () => {
    return (
        <div className="w-60 m-3 ">
            <Skeleton height={150} />
            <div className="mt-1 flex flex-row justify-start">
                <div>
                    <Skeleton circle={true} height={40} width={40} />
                </div>
                <div className="ml-3">
                    <b className="relative text-[12px] font-roboto text-white-color">
                        <Skeleton height={18} width={180} />
                    </b>
                    <p className="text-[12px] font-roboto text-gray-500">
                        <Skeleton height={12} width={180} />
                    </p>
                    <div className="flex flex-row items-start gap-2 justify-start mt-1 text-[12px] font-roboto text-gray-500">
                        <Skeleton height={12} width={60} />
                        <Skeleton height={12} width={60} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCardShimmer