import Image from "next/image";
import SearchIcon from '../../../public/icons/search-icon.png';
import { Input } from "../../ui/input";

const SearchBar = () => {

    return (
        <form className="hidden md:relative">
            <Image
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 h-[39px] w-[39px]"
                src={SearchIcon}
                width={39}
                height={39}
                alt={'Dish picture'}
            />
            <Input
                type="text"
                className="h-[61px] rounded-[50px] font-[600] text-[24px] text-black pl-[59px] bg-white border-none"
                placeholder="Search...."
            />
        </form>
    );
};

export default SearchBar;